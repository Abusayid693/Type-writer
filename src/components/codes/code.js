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

export { code };
