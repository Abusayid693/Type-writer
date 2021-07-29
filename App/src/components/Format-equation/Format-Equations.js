import React from "react";
import ReactDOM from "react-dom";
import { Equation, defaultErrorHandler } from "react-equation";
let i = 0;


function AppendEquation(props) {
  return (
    <div>
      <Equation value={props.text} errorHandler={defaultErrorHandler} />
    </div>
  );
}

// RENDERING : The formatted equations

function renderEquation(elem, text) {
  ReactDOM.render(
    <AppendEquation text={text} />,
    document.querySelector("." + elem)
  );
}

function formatEquation(elem) {
  var div = document.createElement("div"),
    parent = elem.parentNode,
    text = "";

  div.contentEditable = "true";
  div.classList.add("equation" + i);
  div.classList.add("main");

  // Getting the text content for formatting equations
  for (var j = 1; j < elem.textContent.length; j++) text += elem.textContent[j];
  parent.replaceChild(div, elem);
  renderEquation("equation" + i, text);
  i++;
}

export { formatEquation };

/* SUMMARY : Normal equtions inserted by user are properly formatted with <sup> and  <sub> 
             scripts.

Please refer : https://kgram.github.io/react-equation/master/storybook/ documentation.                
*/
