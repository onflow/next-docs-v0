import { Machine, send } from "xstate";

import zipObject from "lodash/zipObject";
// Events
// const SELECT_CATEGORY = "";
// const SELECT_TOPIC = "";
// const SELECT_CONTENT_HEADING = "";
// const SELECT_REFERENCE = "";
// const SELECT_GUIDE = "";
// const SELECT_RESOURCE = "";

const navigationStates = [
  "VIEWING_TOPICS",
  "VIEWING_REFERENCES",
  "VIEWING_GUIDES",
  "VIEWING_RESOURCES",
  "VIEWING_OVERVIEW",
];

const on = navigationStates.reduce((acc, curr) => {
  acc[curr] = {
    target: ["loadingContent.sideMenu", "loadingContent.categoryMenu"],
  };
  return acc;
}, {});

const navMachine = Machine(
  {
    initial: "loadingLastLocation",
    states: {
      loadingLastLocation: {
        entry: "loadLastLocation",
        on: {
          DONE: "loadingContent",
        },
      },
      loadingContent: {
        type: "parallel",
        states: {
          sideMenu: {
            entry: "getSideMenuContent",
          },
          categoryMenu: {
            entry: "getCategoryMenuContent",
          },
        },
        onDone: "contentReady",
      },
      contentReady: {},
    },
    on: on,
  },
  {
    actions: {
      loadLastLocation: (ctx, evt) => {
        console.log("load last location");
        send("DONE");
      },
      getSideMenuContent: (ctx, evt) => {
        console.log("get side menu content!");
      },
      getCategoryMenuContent: (ctx, evt) => {
        console.log("get getCategoryMenuContent");
      },
    },
  }
);

export default navMachine;

// const contentMenu = Machine({
//   context: {
//     pageContext: "home",
//     selectedSection: undefined,
//   },
// });

// const categoryMenu = Machine({
//   context: {
//     pageContext: undefined,
//     currentCategory: undefined,
//   },
// });

// const topicMenu = Machine({
//   context: {
//     pageContext: undefined,
//     currentCategory: undefined,
//   },
// });

// const mainMenu = Machine({
//   context: {
//     pageContext: undefined,
//     selectedItem: undefined,
//   },
// });
