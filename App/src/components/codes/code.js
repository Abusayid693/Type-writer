import React, { useState } from "react";
import ReactDOM from "react-dom";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

function CodeView(props) {
  return (
    <div className="codes">
      <SyntaxHighlighter
        contentEditable="false"
        language="javascript"
        style={docco}
      >
        {props.text}
      </SyntaxHighlighter>
    </div>
  );
}


var numberOfCodeBlocks=0;

function code(elem) {
  let newElement = document.createElement("div"),
    parent = elem.parentNode,
    classIdentification="code-view"+numberOfCodeBlocks;
  
  newElement.classList.add("code-view",classIdentification);
  // newElement.classList.add();

  newElement.contentEditable = "true";

  // newElement.innerHTML ="<SyntaxHighlighter contentEditable = 'true' language='javascript' style={docco}> function hello(){} </SyntaxHighlighter>"

  newElement.innerHTML =
    "<div class='codes' ><i id='codeCopy' contentEditable='false' class='far copy fa-clipboard'></i><p contentEditable='true' class='code'>function () {}</p></div>";

  parent.replaceChild(newElement, elem);
  // ReactDOM.render(
  //   <CodeView text="function()" />
  // ,
  // document.querySelector(".code-view")
  // );
  newElement.focus();
  // copyCode();
  numberOfCodeBlocks++;
}

function codesyn(text, elem) {
  ReactDOM.render(
    <CodeView text={text} />,
    document.querySelector(".code-view")
  );
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
      codesyn(elem.textContent, "."+elem.classList);
      alert(elem.classList)
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
