function code(elem) {
  let newElement = document.createElement("div"),
    p = document.createElement("p"),
    i = document.createElement("i"),

    parent = elem.parentNode;
  i.classList.add("far","fa-clipboard");
  newElement.classList.add("codes");
  p.classList.add("code");
  p.contentEditable = "true";
  newElement.contentEditable = "true";
  
  // newElement.append(i);
  newElement.appendChild(p);


  parent.replaceChild(newElement, elem);

  p.focus();
}

export { code };

// document.addEventListener("keypress",fkey)

// function fkey(event){
//     if (event.shiftKey) {
//      document.addEventListener("keypress", append);
//     } else {

//     }
//   }
