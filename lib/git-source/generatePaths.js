const cadence = require("./content/cadence.json");
const goSDK = require("./content/flow-go-sdk.json");
const { CADENCE_ROOT } = require("./constants");

const cadenceLanguagePages = cadence.language.map((p) => {
  return {
    params: { markdown: p.path.split("/") },
  };
});

const cadenceDocs = cadence.docs.map((p) => {
  return {
    params: { markdown: [p.path] },
  };
});

const goSDKPages = goSDK.docs.map((p) => {
  return {
    params: { markdown: [p.path] },
  };
});

export default function generatePaths() {
  return [...cadenceLanguagePages, ...cadenceDocs, ...goSDKPages];
}
