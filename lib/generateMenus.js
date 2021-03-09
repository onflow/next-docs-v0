import fromMarkdown from "mdast-util-from-markdown";

import TOC from "mdast-util-toc";

import get from "lodash/get";

// NOTE: gets the relavent information we need to build the
// table of contents from the mdast.
export const generateTOC = (mdContent) => {
  const toc = TOC(fromMarkdown(mdContent));
  return get(toc, "map.children").map((el) => ({
    title: get(el, "children[0].children[0].children[0].value"),
    url: get(el, "children[0].children[0].url"),
  }));
};

export const generateReferencesMenu = () => {};
export const generateGuidesMenu = () => {};
export const generateTutoriaslMenu = () => {};
export const generateResourcesMenu = () => {};
