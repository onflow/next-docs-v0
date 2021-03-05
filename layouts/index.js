import Reference from "./reference";
import Default from './default';

const layouts = {
  default: Default,
  REF: Reference,
  
};

export default layouts;

export function layoutFor(type) {
  return layouts[type] || layouts.default;
}
