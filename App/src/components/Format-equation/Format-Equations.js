import React from "react";
import ReactDOM from "react-dom";
import { Equation, defaultErrorHandler } from "react-equation";
var i = 0;

function AppendEquation(props) {
  return (
    <div>
      <Equation value={props.text} errorHandler={defaultErrorHandler} />
    </div>
  );
}

function renderEquation(elem, text) {
  ReactDOM.render(
    <AppendEquation text={text} />,
    document.querySelector("." + elem)
  );
}

function formatEqn(elem) {
  var div = document.createElement("div"),
    parent = elem.parentNode,
    text = "";

  div.contentEditable = "true";
  div.classList.add("equation" + i);
  div.classList.add("main");

  for (var j = 1; j < elem.textContent.length; j++) text += elem.textContent[j];

  parent.replaceChild(div, elem);
  renderEquation("equation" + i, text);
  i++;
}

export { formatEqn };
