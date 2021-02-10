const gits = [
  {
    remote: "https://github.com/onflow/cadence.git",
    branch: "master",
    patterns: "docs/language/**/*.{md,mdx}",
  },
  {
    branch: `master`,
    remote: "https://github.com/onflow/flow-go-sdk.git",
    patterns: ["docs/**/*.{md,mdx}", "examples/**/*.{md,mdx}"],
  },
  {
    branch: `master`,
    remote: "https://github.com/onflow/flow-js-sdk.git",
    patterns: [
      "docs/**/*.{md, mdx}",
      "packages/fcl/**/*.{md,mdx}",
      "packages/types/**/*.{md,mdx}",
      "packages/fcl-react/**/*.{md,mdx}",
    ],
  },
];

export default gits;
