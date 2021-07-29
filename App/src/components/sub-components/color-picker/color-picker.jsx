import React from "react";
import { ChromePicker } from "react-color";

class ColorPicker extends React.Component {
  state = {
    background: "#fff",
    selectedElem: null,
    main: true,
  };

  componentDidMount() {

    // Checking whether text selected or not
    const getSelectedText = () => {
      var text = "";
      if (typeof window.getSelection != "undefined") {
        text = window.getSelection().toString();
      } else if (
        typeof(document.selection) != "undefined" &&
        document.selection.type == "Text"
      ) {
        text = document.selection.createRange().text;
      }
      return text;
    };

    // Changing the position of color picker next to content text selected
    const doSomethingWithSelectedText = () => {
      const selectedText = getSelectedText(),
            elem = document.activeElement,
            colorPicker=document.querySelector(".color-picker");
      if  (colorPicker==null) return;     
      if (selectedText && elem.classList.contains("main") ) {
           const  rect = document.activeElement.getBoundingClientRect(),
             left = rect.left + window.scrollX,
             top = rect.top + window.scrollY;
             colorPicker.style.top = top + "px";
             colorPicker.style.left = 200 + "px";
        this.setState({ selectedElem: elem });
        this.setState({ main: false });
      }
    };

    // Event to trigger changing of colors
    document.onmouseup = doSomethingWithSelectedText;
    document.onkeyup = doSomethingWithSelectedText;
  }

//   Changing the color of selected text

  handleChangeComplete = (color) => {
    this.setState({ background: color.hex });

    if (this.state.main)
      document.querySelector(".Whole").style.background = color.hex;
    else if (this.state.selectedElem!==null)
      this.state.selectedElem.style.color = color.hex;
  };

  render() {
    return (
      <div className="color-picker">
        <ChromePicker
          color={this.state.background}
          onChangeComplete={this.handleChangeComplete}
        />
      </div>
    );
  }
}

export default ColorPicker;


/** ColorPicker is used to pick different colours by slecting the text content,
 * the position of the color picker is fixed which means it can align itself near
 * the text content selected
 */