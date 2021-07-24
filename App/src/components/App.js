import React from "react";
import "./index.css";
import "./code-block/code.css";
import { formatEqn } from "./Format-equation/Format-Equations.js";
import { unordered, ordered } from "./modules/lists.js";
import { heading } from "./modules/header.js";
import { hR } from "./modules/horizontal-ruller.js";
import { deleteNode } from "./modules/nodeDelete.js";
import { italicANDbold } from "./modules/text_format.js";
import { imageCapture } from "./image-capture/ClipboardAPI.js";
import { initialize, CodeBloackData } from "./code-block/code.jsx";

function H1() {
  return document.createElement("h1");
}
function H2() {
  return document.createElement("h2");
}
function H3() {
  return document.createElement("h3");
}
function H4() {
  return document.createElement("h4");
}

class Typewriter extends React.Component {
  state = {
    selectedOption: null,
  };
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    imageCapture();
    initialize();
    this.typewriter();
  }

  typewriter() {
    var i = 0,
      b = 0,
      initial_release = 0;

    /** Event Append = When user presses `Enter` it creates a new `p`
   element and append it to main child body, only to replace the child element according to users entry **/

    document.addEventListener("keypress", append);

    function append(e) {
      if (e.which === 13 && document.activeElement.classList.contains("main")) {
        var elem,
          parent,
          newH = document.createElement("hr"),
          btn = document.createElement("p");
        btn.classList.add("main");

        //  only first time case
        if (!initial_release) elem = document.querySelector(".pad");
        else elem = document.activeElement;

        parent = elem.parentNode;
        btn.contentEditable = "true";
        initial_release = 1;

        //   Handling exception for LI elements
        if (elem.nodeName == "LI") {
          elem = elem.parentNode;
          parent = elem.parentNode;
          elem.parentNode.insertBefore(btn, elem.nextSibling);
        } else {
          newH.style.opacity = 0;
          elem.parentNode.insertBefore(newH, elem.nextSibling);
          newH.parentNode.insertBefore(btn, newH.nextSibling);
        }

        btn.focus();
        e.preventDefault();
        i = 0;
        b = 0;
        return 1;
      }
    }

    /** Event Replace = The primary function for replacing elements as per user entry **/

    document.addEventListener("keypress", replace);
    function replace(e) {
      if (e.keyCode == 32) {
        var elem = document.activeElement,
          text = elem.textContent;

        //     Handling ordered list items
        if (!isNaN(text) && text !== "") ordered(elem, text);
        //      Handling format equations
        else if (text[0] == "$") formatEqn(elem);

        //   else if i required
        //     Handling different user entries
        switch (text) {
          case "#":
            heading(elem, H1());
            break;
          case "##":
            heading(elem, H2());
            break;
          case "###":
            heading(elem, H3());
            break;
          case "####":
            heading(elem, H4());
            break;
          case "-":
            unordered(elem);
            break;
          case "---":
            hR(elem);
            break;
        }
      }
    }

    document.addEventListener("keypress", italicANDbold);
    document.addEventListener("keydown", deleteNode);
  }

  pop(){
    alert("hello")
  }

  render() {
    const { selectedOption } = this.state;

    return (
      <div className="pad"
       onChange={this.pop}
      >
        <h1 id="heading">TYPE - WRITER PAD </h1>
        <input
          id="pad_parent"
          size="35"
          className="main"
          autoFocus
          placeholder="Start here"
        />
      </div>

    );
  }
}




class App extends React.Component{


  pop(){
    alert("hello")
  }
  render(){
  return(
    <div className="Whole"
    onChange={this.pop}
    >
    <Typewriter />
    </div>
  );
  }
}


export default App;
