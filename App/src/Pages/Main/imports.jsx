import "../../components/index.css";
import "../../components/code-block/code.css";
import { formatEquation } from "../../components/Format-equation/Format-Equations.js";
import { unordered, ordered } from "../../modules/Lists/lists.js";
import { heading } from "../../modules/Header/header.js";
import { horizontalRuller } from "../../modules/Horizontal line/HorizontalRuller.js";
import { deleteNode } from "../../modules/Delete Node/DeleteEmptyNode";
import { italicANDbold } from "../../modules/Text format/FormatTexts.js";
import { imageCapture } from "../../components/image-capture/HandleClipboardAPI";
import {
  endCodingBlocks,
  InsertCodeBlocks,
  continueWithCodingBlocks,
} from "../../components/code-block/code";
import Cpanel from "../../components/Sidebar Routes/SidebarRoutes.jsx";
import {
  OutlineContext,
  FormatContext,
} from "../../components/sub-components/check-boxes/check-boxes";
import { PaddingContext } from "../../components/sub-components/Page-padding/pagePadding";
import { FontsContext } from "../../components/sub-components/Switch-fonts/switch-fonts";
import cx from "classnames";

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
  horizontalRuller,
  deleteNode,
  italicANDbold,
  imageCapture,
  endCodingBlocks,
  continueWithCodingBlocks,
  H1,
  H2,
  H3,
  H4,
  Cpanel,
  OutlineContext,
  FormatContext,
  PaddingContext,
  FontsContext,
  InsertCodeBlocks,
  cx,
};
