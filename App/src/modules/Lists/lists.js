//-------- Creating unordered list elements ---------------
function unordered(elem) {
  var parent = elem.parentNode,
    active = document.activeElement,
    ul = document.createElement("ul"),
    li = document.createElement("li");

  if (active.nodeName == "LI") return;

  ul.appendChild(li);
  ul.classList.add("main");
  li.classList.add("main");
  li.contentEditable = "true";
  parent.replaceChild(ul, elem);
  li.focus();
}

//---------- Creating ordered list elements -----------------
function ordered(elem, start) {
  var parent = elem.parentNode,
    active = document.activeElement,
    ol = document.createElement("ol"),
    li = document.createElement("li");
  if (active.nodeName == "LI") return;

  ol.appendChild(li);
  ol.start = start;
  ol.classList.add("main");
  li.classList.add("main");
  li.contentEditable = "true";
  parent.replaceChild(ol, elem);
  li.focus();
}

export { unordered, ordered };
