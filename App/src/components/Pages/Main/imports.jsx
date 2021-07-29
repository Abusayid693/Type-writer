import "../../index.css";
import "../../code-block/code.css";
import { formatEquation } from "../../Format-equation/Format-Equations.js";
import { unordered, ordered } from "../../modules/lists.js";
import { heading } from "../../modules/header.js";
import { hR } from "../../modules/horizontal-ruller.js";
import { deleteNode } from "../../modules/nodeDelete.js";
import { italicANDbold } from "../../modules/text_format.js";
import { imageCapture } from "../../image-capture/ClipboardAPI.js";
import { initialize } from "../../code-block/code.jsx";
import Cpanel from "../../Sidebar/c-panel-routes.jsx"

function H1() {
  return document.createElement("h1");
}
function H2() {
  return document.createElement("h2");
}
function H3() {
  return document.createElement("h3");
}
function H4() {
  return document.createElement("h4");
}

export {
  formatEquation,
  unordered,
  ordered,
  heading,
  hR,
  deleteNode,
  italicANDbold,
  imageCapture,
  initialize,
  H1,
  H2,
  H3,
  H4,
  Cpanel
};
