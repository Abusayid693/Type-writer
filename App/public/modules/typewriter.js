/********* Variables and functions used through out the blocks ***********/
import { formatEqn } from "./Format-Equations.js";
import { unordered, ordered } from "./lists.js";
import { heading } from "./header.js";
import { hR } from "./horizontal-ruller.js";
import { deleteNode } from "./nodeDelete.js";
import { italicANDbold } from "./text_format.js";

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
var i = 0, //variable used for italics
  b = 0, //variable used for bold texts
  initial_release = 0;
var initial_v = 0;

/** Event Append = When user presses `Enter` it creates a new `p`
 element and append it to main child body, only to replace the child element according to users entry **/


  

document.addEventListener("keypress", append);

function append(e) {
  if (e.which === 13 && document.activeElement.classList.contains("main")) {
    var elem,
      parent,
      newH = document.createElement("hr"),
      btn = document.createElement("p");
    btn.classList.add("main");

    //  only first time case
    if (!initial_release) elem = document.querySelector(".pad");
    else elem = document.activeElement;

    parent = elem.parentNode;
    btn.contentEditable = "true";
    initial_release = 1;

    //   Handling exception for LI elements
    if (elem.nodeName == "LI") {
      elem = elem.parentNode;
      parent = elem.parentNode;
      elem.parentNode.insertBefore(btn, elem.nextSibling);
    } else {
      newH.style.opacity = 0;
      elem.parentNode.insertBefore(newH, elem.nextSibling);
      newH.parentNode.insertBefore(btn, newH.nextSibling);
    }
    btn.focus();
    e.preventDefault();
    (i = 0), (b = 0);
  }
}

/** Event Replace = The primary function for replacing elements as per user entry **/

document.addEventListener("keypress", replace);
function replace(e) {
  if (e.keyCode == 32) {
    var elem = document.activeElement,
      text = elem.textContent;

    // alert(text);

    //     Handling ordered list items
    if (!isNaN(text) && text !== "") ordered(elem, text);
    //      Handling format equations
    else if (text[0] == "$") formatEqn(elem);

    //   else if i required
    //     Handling different user entries
    switch (text) {
      case "#":
        heading(elem, H1());
        break;
      case "##":
        heading(elem, H2());
        break;
      case "###":
        heading(elem, H3());
        break;
      case "####":
        heading(elem, H4());
        break;
      case "-":
        unordered(elem);
        break;
      case "---":
        hR(elem);
        break;
      case "abcd":
        formatEqn(elem);
        break;
    }
  }
}

document.addEventListener("keypress", italicANDbold);
/************ Deleacting node and moving courser functions ********/
document.addEventListener("keydown", deleteNode);
