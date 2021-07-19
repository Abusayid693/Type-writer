
function pTag(elem){
    let parent=elem.parentNode,
        newElement=document.createElement("p");
    elem.classList.add("main");
    newElement.contentEditable="true";
    newElement.id=elem.id;
    parent.replaceChild(newElement,elem);
    newElement.focus();
}

export {pTag}
