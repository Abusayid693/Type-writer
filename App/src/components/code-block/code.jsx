import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./code.css";
import CodeView from "./syntaxhighlighter.jsx";

var numberOfCodeBlocks = 0,
  elem,
  text;

function renderCodeBlock(text, elem) {
  ReactDOM.render(
    <CodeView text={text} plass={elem} />,
    document.querySelector("." + elem)
  );
}

function code(elem) {
  let newElement = document.createElement("div"),
    parent = elem.parentNode,
    classIdentification = "code-view" + numberOfCodeBlocks;

  newElement.classList.add("code-view", classIdentification);
  newElement.contentEditable = "true";
  newElement.innerHTML =
    "<div class='codes' contentEditable='true' ><p contentEditable='true' class='code'>- </p></div>";

  parent.replaceChild(newElement, elem);
  numberOfCodeBlocks++;
}

/*************************************************************************************************/
/****************                                                                 ****************/
/****************                                                                 ****************/
/****************                                                                 ****************/
/*************************************************************************************************/

function initialize() {
  var appendCodeBlock = false;
  document.addEventListener("keypress", (event) => {
    elem = document.activeElement;
    if (
      event.ctrlKey &&
      elem.classList.contains("code-view") &&
      appendCodeBlock
    ) {
      appendCodeBlock = false;
      renderCodeBlock(elem.textContent, elem.classList[1]);
      elem.classList.add("main");
    } else {
      console.log("Active element is not code block");
    }
  });

  document.addEventListener("keypress", codeBlock);
  function codeBlock(e) {
    if (e.keyCode == 32) {
      elem = document.activeElement;
      text = elem.textContent;
      if (text == "'''") {
        appendCodeBlock = true;
        code(document.activeElement);
      }
    }
  }

  document.addEventListener("keypress", ContinueC);
  function ContinueC(e) {
    elem = document.activeElement;
    if (
      e.which === 13 &&
      appendCodeBlock &&
      elem.classList.contains("code-view")
    ) {
      var newElem = document.createElement("p");
      newElem.contentEditable = "true";
      elem.parentNode.insertBefore(newElem, elem.nextSibling);
      newElem.focus();
      code(newElem);
      renderCodeBlock(elem.textContent, elem.classList[1]);
    }
  }
}

export { initialize };
