import Reference from "./reference";

const layouts = {
  default: Reference,
};

export default layouts;

export function layoutFor(type) {
  return layouts[type] || layouts.default;
}
