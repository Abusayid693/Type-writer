var i = 0,
    b = 0,
    code;

function italicANDbold(e) {
  if (e.keyCode == 96 && !i && b) {
    cursive(e, "both");
    i = 1;
  }
  if (e.keyCode == 42 && i && !b) {
    cursive(e, "both");
    b = 1;
  }
  //   Returning to normal from italics
  if ((e.keyCode == 96 || e.keyCode == 42) && i | b) {
    cursive(e, "normal");
    (i = 0);
     (b = 0);
  }

  //   Normal to italics
  else if (e.keyCode == 96 && !i && !b) {
    cursive(e, "italic");
    i = 1;
  }
  //   Normal to bold
  else if (e.keyCode == 42 && !b && !i) {
    cursive(e, "bold");
    b = 1;
  }
}

function cursive(e, type) {
  var elem = document.activeElement,
      newElement;

  e.preventDefault();
  if (elem.nodeName == "LI") {
    assign(elem, type);
    return;
  }
  else if (elem.classList.contains(code)) return;
  else {
    newElement = document.createElement(elem.nodeName);
    newElement.classList.add("main");
  }

  assign(newElement, type);
  newElement.contentEditable = "true";
  newElement.style.display = "inline";
  elem.style.display = "inline";
  elem.parentNode.insertBefore(newElement, elem.nextSibling);
  newElement.focus();
}

/******** Function for assigning bold and italics contents *********/

function assign(elem, type) {
  if (type == "both") {
    elem.style.fontWeight = "bold";
    elem.style.fontStyle = "italic";
  } else if (type == "normal") {
    elem.style.fontWeight = "normal";
    elem.style.fontStyle = "normal";
    // return;
  } else {
    let a =
      type == "bold"
        ? (elem.style.fontWeight = type)
        : (elem.style.fontStyle = type);
  }
}

export { italicANDbold };
