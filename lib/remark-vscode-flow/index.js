const path = require("path");
const visit = require("unist-util-visit");
const { Highlighter } = require("./highlighter");
const toHtml = require("hast-util-to-html");

let highlighter;

const grammarPaths = [
  "./lib/remark-vscode-flow/cadence.tmGrammar.json",
  "./lib/remark-vscode-flow/powershell.tmLanguage.json",
  "./lib/remark-vscode-flow/ts.tmLanguage.json",
  "./lib/remark-vscode-flow/go.tmLanguage.json",
  "./lib/remark-vscode-flow/shell-unix-bash.tmLanguage.json",
  "./lib/remark-vscode-flow/json.tmLanguage.json",
  "./lib/remark-vscode-flow/proto3.tmLanguage.json",
];

const pluginOptions = {
  languageScopes: {
    cadence: "source.cadence",
    powershell: "source.powershell",
    javascript: "source.ts",
    typescript: "source.ts",
    js: "source.ts",
    ts: "source.ts",
    shell: "source.shell",
    sh: "source.shell",
    go: "source.go",
    json: "source.json",
    protobuf: "source.proto",
    proto: "source.proto",
  },
  grammarPaths,
  themePath: "./lib/remark-vscode-flow/light_vs.json",
};

module.exports = () => {
  // @ts-ignore
  return async function transformer(markdownAST) {
    const codeNodes = [];

    // @ts-ignore
    visit(markdownAST, "code", (node) => {
      if (node.lang) {
        codeNodes.push(node);
      } else {
        // @ts-ignore
        const path = page.markdownNode.fields.slug;
        const { line } = node.position.start;
        console.warn(`Missing language tag in ${path} at line ${line}`);
      }
      return node;
    });

    // @ts-ignore
    visit(markdownAST, "inlineCode", (node) => {
      // @ts-ignore
      const match = node.value.match(/^(\w+)•(.*)$/);
      if (match) {
        node.lang = match[1];
        node.value = match[2];
        codeNodes.push(node);
      }
      return node;
    });

    // @ts-ignore
    await Promise.all(
      codeNodes.map(async (node) => {
        if (!highlighter) {
          highlighter = await Highlighter.fromOptions(pluginOptions);
        }

        const grammar = await highlighter.getLanguageGrammar(node.lang);
        if (!grammar) {
          console.warn(`Failed to load grammar for language: ${node.lang}`);
          return node;
        }

        const highlighted = highlighter.highlight(node.value, grammar);

        const isInline = node.type === "inlineCode";

        const classes = [`language-${node.lang}`];
        if (isInline) {
          classes.push("inline");
        }

        node.type = "html";
        node.value = toHtml({
          type: "element",
          tagName: "pre",
          properties: {
            className: classes,
          },
          children: highlighted,
        });

        return node;
      })
    );
  };
};
