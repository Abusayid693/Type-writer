/*** CODE SUMMARY
 * code(elem) : Changes the current element with a code block editing div
 *
 * copyCode() : copy the code content into clip board
 *
 */

function code(elem) {
  let newElement = document.createElement("div"),
    parent = elem.parentNode;

  newElement.classList.add("codes");

  newElement.contentEditable = "true";

  newElement.innerHTML =
    "<div className='codes' ><i id='codeCopy' contentEditable='false'class='far copy fa-clipboard'></i><p contentEditable='true' className='code'>code here</p></div>";

  parent.replaceChild(newElement, elem);

  newElement.focus();
  copyCode();
}

function copyCode() {
  var btn = document.querySelector("#codeCopy"),
    codes;

  btn.addEventListener("click", () => {
    codes = btn.parentElement.textContent;
    btn.classList = "fas copy fa-check";
  });
}




function initialize() {
  document.addEventListener("keypress",(event) =>
 {
    var elem = document.activeElement;
    if (event.ctrlKey && elem.classList == "codes") {
      elem.classList.add("main"); 
    } else {
      console.log("Active element is not code block")
    }
  });

  document.addEventListener("keypress",codeBlock)
  function codeBlock(e) {
    if (e.keyCode == 32) {
      var elem = document.activeElement,
        text = elem.textContent;
      if (text == "'''") code(document.activeElement);
    }
  };
}






export { initialize };
