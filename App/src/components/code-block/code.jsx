import React, { useState } from "react";
import ReactDOM from "react-dom";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
/** CodeView block is replaced with current div adding syntax highlighter to the current code   */
function CodeView(props) {
  return (
    <div className="codes" contentEditable="false">
      <SyntaxHighlighter
        contentEditable="true"
        language="javascript"
        style={docco}
        wrapLines={false}
        showLineNumbers={false}
      >
        {props.text}
      </SyntaxHighlighter>
    </div>
  );
}

function codesyn(text, elem) {
  ReactDOM.render(<CodeView text={text} />, document.querySelector(elem));
}

// Variable to keep a track record of number of code-blocks
var numberOfCodeBlocks = 0;

function code(elem) {
  let newElement = document.createElement("div"),
    parent = elem.parentNode,
    classIdentification = "code-view" + numberOfCodeBlocks;

  newElement.classList.add("code-view", classIdentification);
  newElement.contentEditable = "true";
  newElement.focus();
  newElement.innerHTML =
    "<div class='codes' contentEditable='true' ><i id='codeCopy' contentEditable='false' class='far copy fa-clipboard'></i><p contentEditable='true' class='code'>.</p></div>";

  parent.replaceChild(newElement, elem);
  numberOfCodeBlocks++;
}

function copyCode() {
  var btn = document.querySelector("#codeCopy"),
    codes;

  btn.addEventListener("click", () => {
    codes = btn.parentElement.textContent;
    btn.classList = "fas copy fa-check";
  });
}

function initialize() {
  document.addEventListener("keypress", (event) => {
    var elem = document.activeElement;
    if (event.ctrlKey && elem.classList.contains("code-view")) {
      codesyn(elem.textContent, "." + elem.classList[1]);
      elem.classList.add("main");
    } else {
      console.log("Active element is not code block");
    }
  });

  document.addEventListener("keypress", codeBlock);
  function codeBlock(e) {
    if (e.keyCode == 32) {
      var elem = document.activeElement,
        text = elem.textContent;
      if (text == "'''") code(document.activeElement);
    }
  }
}

export { initialize };
