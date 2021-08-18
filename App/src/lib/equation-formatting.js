import renderEquation from "../Renders/Format-Equations"

// Note : This function is called form main page when ever user uses prefix "$"
// to format equations.
let i = 0;
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