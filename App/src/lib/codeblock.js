import renderCodeBlock from '../Renders/code';

let numberOfCodeBlocks = 0,
  appendCodeBlock = false,
  elem;

/****
 ** Note => If `appendCodeBlock` is true the user will continue to get new coding blcoks
 ** RENDERING : Newly added coding blocks with syntaxhighlighter
 */

// EVENT InsertCodeBlocks : New coding blocks without syntaxhighlighter

const InsertCodeBlocks = (elem) => {
  //Note => appendCodeBlock : true = Initializing the loop
  appendCodeBlock = true;
  let newElement = document.createElement('div'),
    parent = elem.parentNode,
    classIdentification = 'code-view' + numberOfCodeBlocks;
  newElement.classList.add('code-view', classIdentification);
  newElement.contentEditable = 'true';
  newElement.innerHTML =
    "<div class='codes' contentEditable='true' ><p contentEditable='true' class='code'> </p></div>";
  parent.replaceChild(newElement, elem);
  numberOfCodeBlocks++;
  newElement.focus();
};

/****
 ** EVENT ContinueWithCodeBlocks = Continuation of Code blocks is necessary to provide user with new coding
 **  with new coding  blocks after they press `enter` since user are only allowed to type single line of code
 ** snippet per block. if they dont want to continue they can press any key holding `control` to initialize
 ** `endCodingBlocks`
 */

const continueWithCodingBlocks = () => {
  document.addEventListener('keypress', ContinueWithCodeBlocks);
  function ContinueWithCodeBlocks(e) {
    var elem = document.activeElement;
    if (
      e.which === 13 &&
      // Note => Only if `appendCodeBlock` is true
      appendCodeBlock &&
      elem.classList.contains('code-view')
    ) {
      var newElem = document.createElement('p');
      newElem.contentEditable = 'true';
      elem.parentNode.insertBefore(newElem, elem.nextSibling);
      newElem.focus();
      // Inserting new non syntax highlighting coding block
      InsertCodeBlocks(newElem);
      // NOTE => elem.textContent : Passing text content as props
      renderCodeBlock(elem.textContent, elem.classList[1]);
      e.preventDefault();
    }
  }
};

/****
 ** EVENT endCodingBlocks = To end loop for getting continuous coding blocks user need to press any key
 **  holding `control` this will render the current coding block and end the loop.
 */

const endCodingBlocks = () => {
  document.addEventListener('keypress', (event) => {
    elem = document.activeElement;
    if (event.ctrlKey && elem.classList.contains('code-view') && appendCodeBlock) {
      // Note => appendCodeBlock : true = Ending the loop
      appendCodeBlock = false;
      // Note => elem.textContent : Passing text content as props to render with syntax-highlighting
      renderCodeBlock(elem.textContent, elem.classList[1]);
      elem.classList.add('main');
    } else {
      console.log('Active element is not code block'); //Error handling
    }
  });
};

function initializeCodingBlocks() {
  endCodingBlocks();
  continueWithCodingBlocks();
}

export { initializeCodingBlocks, InsertCodeBlocks };
