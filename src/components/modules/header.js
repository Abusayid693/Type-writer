function heading(elem, e) {
  let parent = elem.parentNode,
    newElement = e;

  elem.classList.add("main");
  newElement.classList.add("main");

  newElement.contentEditable = "true";
  newElement.id = elem.id;
  parent.replaceChild(newElement, elem);
  newElement.focus();
}

export { heading };
