/************ Event for horizontal ruller ****************/

function horizontalRuller(elem) {
  let parent = elem.parentNode,
    newElement = document.createElement("hr"),
    temp = document.createElement("p");
  temp.classList.add("main");
  temp.contentEditable = "true";
  parent.replaceChild(newElement, elem);
  newElement.parentNode.insertBefore(temp, newElement.nextSibling);
  temp.focus();
}

export { horizontalRuller };
