import { pTag } from "./paragraph.js";

function deleteNode(event) {
  const key = event.key; 

  if (key === "Backspace" || key === "Delete") {
    let elem = document.activeElement,
      previousElem,
      p_previousElem,
      parent,
      p_parent;
    if (elem.id == "pad_parent") return;
    else if (elem.textContent == "") {
      if (elem.nodeName == "LI") {
        parent = elem.parentElement;
        pTag(parent);
      } else if (elem.previousSibling == null) {
        elem.remove();
        return;
      } else {
        previousElem = elem.previousSibling;
        elem.remove();
        //     Removing HR from the thread
        if (previousElem.nodeName == "HR") {
          p_previousElem = previousElem.previousSibling;
          previousElem.remove();
          p_previousElem.focus();
        }
        if (previousElem !== "undefined") {
          previousElem.focus();
        }
      }
    }
  }
}

export { deleteNode };
