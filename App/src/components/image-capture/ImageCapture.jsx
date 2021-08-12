/*********** Handling Image capture ******************/
import React from "react";
import ReactDOM from "react-dom";
import { Resizable } from "react-resizable";
import "react-resizable/css/styles.css";
import "./imageCapture.css";

class MyResizable extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {
    width: 200,
    height: 200,
    backgroundColor: "black",
    color: "red",
  };
  onResize = (event, { element, size, handle }) => {
    this.setState({ width: size.width, height: size.height });
  };

  render() {
    return (
      <Resizable
        className="main"
        height={this.state.height}
        width={this.state.width}
        onResize={this.onResize}
        maxConstraints={[900, 600]}
      >
        <div
          contentEditable="true"
          className="box"
          className="main"
          style={{
            width: this.state.width + "px",
            height: this.state.height + "px",
          }}
        >
          <img
            contentEditable="false"
            className="main"
            alt="test img"
            className="box"
            style={{
              width: this.state.width + "px",
              height: this.state.height + "px",
            }}
            src={this.props.src}
          />
        </div>
      </Resizable>
    );
  }
}

/*------------------------- Randering captured image ------------------------ */
function renderImage(src, s) {
  ReactDOM.render(<MyResizable src={src} />, document.querySelector("#" + s));
}

/** 
** Note : renderImage function is called from HandleClipboardAPI and image src
** is passed as props
*/
export { renderImage };
