import React from "react";
import "./index.css";
import "./codes/code.css";

import imageCapture from "./ClipboardAPI.js";
import { code } from "./codes/code.js";

class App extends React.Component {
  state = {
    selectedOption: null,
  };
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    imageCapture();
    this.initialize();
  }

  initialize() {
    document.addEventListener("keypress", fkey);

    function fkey(event) {
      var elem = document.activeElement;
      if (event.ctrlKey && elem.classList == "codes") {
        elem.classList.add("main"); 
      } else {
        console.log("Active element is not code block")
      }
    }

    document.addEventListener("keypress", codeBlock);
    function codeBlock(e) {
      if (e.keyCode == 32) {
        var elem = document.activeElement,
          text = elem.textContent;
        if (text == "'''") code(document.activeElement);
      }
    }
  }

  render() {
    const { selectedOption } = this.state;

    return (
      <div className="pad">
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



export default App;
