import { Machine, assign } from "xstate";

// Events
const SELECT_CATEGORY = "";
const SELECT_TOPIC = "";
const SELECT_CONTENT_HEADING = "";
const SELECT_REFERENCE = "";
const SELECT_GUIDE = "";
const SELECT_RESOURCE = "";

const ENTER_CATEGORIES = "";
const ENTER_TOPICS = "";
const ENTER_REFERENCES = "";
const ENTER_GUIDES = "";
const ENTER_RESOURCES = "";

const contentMenu = Machine({
  context: {
    pageContext: "home",
    selectedSection: undefined,
  },
});

const categoryMenu = Machine({
  context: {
    pageContext: undefined,
    currentCategory: undefined,
  },
});

const topicMenu = Machine({
  context: {
    pageContext: undefined,
    currentCategory: undefined,
  },
});

const mainMenu = Machine({
  context: {
    pageContext: undefined,
    selectedItem: undefined,
  },
});
