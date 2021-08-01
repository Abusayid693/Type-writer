/*********** Handling Image capture ******************/
import React from "react";
import ReactDOM from "react-dom";
import { Resizable } from "react-resizable";
import "react-resizable/css/styles.css";
import "./imageCapture.css";

var numImages = 0;  /*-----Tracking no of images captured---------*/

class Test extends React.Component {
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
  ReactDOM.render(<Test src={src} />, document.querySelector("#" + s));
}

/* ------------------------ HANDALING CLIPBOARD API-------------------------- */
function imageCapture() {
  window.addEventListener("paste", function (e) {
    var elem = document.activeElement,
      imgs = e.clipboardData.items,
      parent = elem.parentNode,
      c = document.createElement("div");

    c.classList.add("captured", "main");
    c.id = "img" + numImages;
// NOTE => [ e.clipboardData.files.length ] : Checks if clipboard item is an IMAGE FILE, if not IMAGE then skip
//  Note : Not sure if this is an perfect approach but it seems to work fine handling all cases
    if (e.clipboardData.files.length > 0 && elem.classList.contains("main")) {

      parent.replaceChild(c, elem);
      if (imgs == undefined) return false; 
      for (var i = 0; i < imgs.length; i++) {
        if (imgs[i].type.indexOf("image") == -1) continue;
        var imgObj = imgs[i].getAsFile();
        var url = window.URL || window.webkitURL;
        var src = url.createObjectURL(imgObj);
        loadImage(src);
      }
      e.preventDefault();
    } else {
      return;
    }
  });
  function loadImage(src) {
    renderImage(src, "img" + numImages);
    numImages++;
  }
}

export { imageCapture };
