import React from "react";
import "./index.css";
import "./codes/code.css";

import imageCapture from "./ClipboardAPI.js";
import { code } from "./codes/code.js"



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

function fkey(event){
    if (event.shiftKey) {
      code(document.activeElement)
    } else {

  
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
        <div className="codes" contentEditable="true">
          <p contentEditable="true" className="code">
            code here
            
          </p>
        </div>
      </div>
    );
  }
}

export default App;
