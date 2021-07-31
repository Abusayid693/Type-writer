
// -------- Method to set italics and bold text -----------

// This method uses vanilla JavaScript version and does not depend on react,
// it creates a new element of present active element (active-element.nodeName) with 
// italics or bold text type and append itelf next to the active element.



var i = 0,
  b = 0,
  code;

function italicANDbold(e) {

  //   Returning to normal from italics or bold 
  if ((e.keyCode == 96 || e.keyCode == 42) && i | b) {
    cursive(e, "normal");
    i = 0;
    b = 0;
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
  } else if (elem.classList.contains(code)) return;  //------ Return if its a code block----
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
