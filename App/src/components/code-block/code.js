import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./code.css";
import CodeView from "./syntaxhighlighter.jsx";

let numberOfCodeBlocks = 0,
  appendCodeBlock = false,
  elem,
  text;

// Note => If `appendCodeBlock` is true the user will continue to get new coding blcoks

// RENDERING : Newly added coding blocks with syntaxhighlighter
function renderCodeBlock(text, elem) {
  ReactDOM.render(
    <CodeView text={text} plass={elem} />,
    document.querySelector("." + elem)
  );
}

// EVENT InsertCodeBlocks : New coding blocks without syntaxhighlighter

const InsertCodeBlocks = (elem) => {
  //Note => appendCodeBlock : true = Initializing the loop
  appendCodeBlock = true;
  let newElement = document.createElement("div"),
    parent = elem.parentNode,
    classIdentification = "code-view" + numberOfCodeBlocks;

  newElement.classList.add("code-view", classIdentification);
  newElement.contentEditable = "true";
  newElement.innerHTML =
    "<div class='codes' contentEditable='true' ><p contentEditable='true' class='code'>- </p></div>";
  parent.replaceChild(newElement, elem);
  numberOfCodeBlocks++;
  newElement.focus();
};

// EVENT ContinueWithCodeBlocks = Continuation of Code blocks is necessary to provide user with new coding
//  with new coding  blocks after they press `enter` since user are only allowed to type single line of code
//  snippet per block. if they dont want to continue they can press any key holding `control` to initialize
// `endCodingBlocks`

const continueWithCodingBlocks = () => {
  document.addEventListener("keypress", ContinueWithCodeBlocks);

  function ContinueWithCodeBlocks(e) {
    var elem = document.activeElement;
    if (
      e.which === 13 &&
      // Note => Only if `appendCodeBlock` is true
      appendCodeBlock &&
      elem.classList.contains("code-view")
    ) {
      var newElem = document.createElement("p");
      newElem.contentEditable = "true";
      elem.parentNode.insertBefore(newElem, elem.nextSibling);
      newElem.focus();
      // Inserting new non syntax highlighting coding block
      InsertCodeBlocks(newElem);
      // NOTE => elem.textContent : Passing text content as props
      renderCodeBlock(elem.textContent, elem.classList[1]);
      e.preventDefault();
    }
  }
};

// EVENT endCodingBlocks = To end loop for getting continuous coding blocks user need to press any key
//  holding `control` this will render the current coding block and end the loop.
const endCodingBlocks = () => {
  document.addEventListener("keypress", (event) => {
    elem = document.activeElement;
    if (
      event.ctrlKey &&
      elem.classList.contains("code-view") &&
      appendCodeBlock
    ) {
      // Note => appendCodeBlock : true = Ending the loop
      appendCodeBlock = false;
      // Note => elem.textContent : Passing text content as props to render with syntax-highlighting
      renderCodeBlock(elem.textContent, elem.classList[1]);
      elem.classList.add("main");
    } else {
      console.log("Active element is not code block"); //Error handling
    }
  });
};

export { endCodingBlocks, InsertCodeBlocks, continueWithCodingBlocks };

/**---------------- SUMMARY ----------------
 * InsertCodeBlocks : It inserts a coding block for user to type their code.
 *                  [ Note : it does not contain syntaxhighlighting ]
 *
 * renderCodeBlock : It takes the text content as props and render a syntaxhighlighting coding block.
 * continueWithCodingBlocks : Passes text content as props from current non-syntax highlighting coding block to `renderCodeBlock` and insert a new non-syntax highlighting coding block to continue with loop.
 * endCodingBlocks : Passes text content as props from current non-syntax highlighting coding block to `renderCodeBlock` and end the loop
 */
