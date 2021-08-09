import { pTag } from "../paragraph/paragraph";

// NOTE : We delete active node only if it has no text content and transfer
//        focus to its previous sibling

function deleteNode(event) {
  const key = event.key;

  if (key === "Backspace" || key === "Delete") {
    let elem = document.activeElement,
      previousElem,
      p_previousElem,
      parent,
      p_parent;
    if (elem.id == "pad_parent") return;
    // Only is the active element is empty (i.e : without any text content)
    else if (elem.textContent == "") {
      // Handling exception : Replacing LI tag with a paragraph tag instead of deleting it.
      if (elem.nodeName == "LI") {
        parent = elem.parentElement;
        pTag(parent);
      }
      // Handling exception : If active element does not contain any previous sibling
      // then it is simply removed from the body without transferring focus.
      else if (elem.previousSibling == null) {
        elem.remove();
        return;
      }
      // If the active element has a previous sibling in that case the active element is
      // removed and focus is transferrred to its previous siblings.
      else {
        previousElem = elem.previousSibling;
        elem.remove();
        // Handling exception : If the previous sibling of an active element is horizontal
        // ruller then it is also removed along with the active element and focus is transferred
        // to its previous sibling (i.e : horizontal ruller previous sibling)
        if (previousElem.nodeName == "HR") {
          p_previousElem = previousElem.previousSibling;
          previousElem.remove();
          p_previousElem.previousSibling.focus();
        }
        // General case : Active element is removed and focus is transferred to its previous sibling
        if (previousElem !== "undefined") {
          previousElem.focus();
        }
      }
    }
  }
}

export { deleteNode };

/** ---------- SUMMARY -------------
 *
 * The function deletes active node element if it has no content,
 * while handaling lots of exeption cases.
 */
