import React,{ useContext }  from "react";
import { ChromePicker } from "react-color";



const backgroundColor= {
  Color: {
    background: "#ffdef"
  },
}

// CONTEXT API FOR HANDALING BACKGROUND COLOR
const BackGroundColorContext = React.createContext("null");
/* React Hook that gives you access
 * to the fonts type user selected in 
 * Main page to update 
 */




class ColorPicker extends React.Component {

  static contextType = BackGroundColorContext;

  // State handaling color picker position

  state = {
    background: "#fff",     
    main: true,
    top: "76vh",        /* -- This state gets changed with new postions of color palatte */
    left: "2vh",        /* -- This state gets changed with new postions of color palatte */
    selectedElem: null,
  };


  componentDidMount() {

    // Checking whether text selected or not
    const getSelectedText = () => {
      var text = "";
      if (typeof window.getSelection != "undefined") {
        text = window.getSelection().toString();
      } else if (
        typeof document.selection != "undefined" &&
        document.selection.type == "Text"
      ) {
        text = document.selection.createRange().text;
      }
      return text;
    };

    // Changing the position of color picker next to content text selected

    const doSomethingWithSelectedText = () => {

      const selectedText = getSelectedText(),
        elem = document.activeElement;

      if (selectedText && elem.classList.contains("main")) {

        const rect = document.activeElement.getBoundingClientRect(),
          left = rect.left + window.scrollX,
          top = rect.top + window.scrollY;
 
        this.setState({
          selectedElem: elem,
          top: top + "px",
          left: 200 + "px",
          main: false,
        });
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
    else if (this.state.selectedElem !== null)
      this.state.selectedElem.style.color = color.hex;
  };


  render() {

    const Color_picker = {
      position: "fixed",
      top: this.state.top,
      left: this.state.left,
      zIndex: "4",
    };

    return (

      <div className="color-picker" style={Color_picker}>
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
