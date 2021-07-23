import React, { useState } from "react";
import ReactDOM from "react-dom";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import "./code.css"



function CodeView(props) {

  const style ={
    margin : "0px 0 0 40px",
    backgroundColor:"white",
    borderRadius:"5px",
    fontSize:"1.2rem",
    width:"500px"
  }
  return (
    <div className={"code-syntax",props.plass} contentEditable="true">
      <SyntaxHighlighter
       customStyle={style}
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
  ReactDOM.render(<CodeView text={text} plass={elem} />, document.querySelector("." +elem));
}

// Variable to keep a track record of number of code-blocks
var numberOfCodeBlocks = 0;

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


function initialize() {
  var appendCodeBlock=false;

  document.addEventListener("keypress", (event) => {
    var elem = document.activeElement;
    if (event.ctrlKey && elem.classList.contains("code-view") && appendCodeBlock) {
      appendCodeBlock=false;
      codesyn(elem.textContent,elem.classList[1]);
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
      if (text == "'''") {
        appendCodeBlock=true;
        code(document.activeElement)};
    }
  }




  document.addEventListener("keypress", ContinueC);

  function ContinueC(e) {
    var elem=document.activeElement;
    if (e.which === 13 && appendCodeBlock && elem.classList.contains("code-view")) {
       var newElem=document.createElement("p");
           newElem.contentEditable = "true";
           elem.parentNode.insertBefore(newElem, elem.nextSibling);
           newElem.focus();
           code(newElem)
           codesyn(elem.textContent, elem.classList[1]);
    }
}
}

export { initialize };
