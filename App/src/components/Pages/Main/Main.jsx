import React, { useState } from "react";
import {
  formatEquation,
  unordered,
  ordered,
  heading,
  horizontalRuller,
  deleteNode,
  italicANDbold,
  imageCapture,
  initialize,
  H1,
  H2,
  H3,
  H4,
  Cpanel,
  OutlineContext,
  FormatContext,
  PaddingContext,
  FontsContext,
  cx,
} from "./imports.jsx";



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

    /** EVENT Append : When user presses `Enter` it creates a new `p`
        element and append it to main child body, only to replace the child element according to users entry **/

    document.addEventListener("keypress", append);

    function append(e) {
      if (e.which === 13 && document.activeElement.classList.contains("main")) {
        let elem,
          parent,
          tempElement = document.createElement("hr"),
          appendingElem = document.createElement("p");
        appendingElem.classList.add("main");

        // ERROR HANDLING
        if (!initial_release) elem = document.querySelector(".pad");
        else elem = document.activeElement;

        parent = elem.parentNode;
        appendingElem.contentEditable = "true";
        initial_release = 1;

        // EXCEPTION HANDLING : for Li elements
        if (elem.nodeName == "LI") {
          elem = elem.parentNode;
          parent = elem.parentNode;
          elem.parentNode.insertBefore(appendingElem, elem.nextSibling);
        } else {
          tempElement.style.opacity = 0;
          elem.parentNode.insertBefore(tempElement, elem.nextSibling);
          tempElement.parentNode.insertBefore(
            appendingElem,
            tempElement.nextSibling
          );
        }

        // EVENT HANDLING : Formatting equations
        if (document.activeElement.textContent[0] == "$")
          formatEquation(document.activeElement);

        appendingElem.focus();
        e.preventDefault();
        i = 0;
        b = 0;
        return 1;
      }
    }

    // EVENT REPLACE = The primary function for replacing elements as per user prefix entries [ eg : prefix "#" for h1  ] **/

    document.addEventListener("keypress", replace);
    function replace(e) {
      if (e.keyCode == 32) {
        var elem = document.activeElement,
          text = elem.textContent;

        // EVENT HANDLING : for ordered lists
        if (!isNaN(text) && text !== "") ordered(elem, text);
        

        // MAIN EVENT HANDALING
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
            horizontalRuller(elem);
            break;
        }
      }
    }

    // EVENT HANDLING : for itilics and bold text [ few bugs needed to be fixed ]
    document.addEventListener("keypress", italicANDbold);

    // EVENT HANDLING : Delecting the nodes if empty
    document.addEventListener("keydown", deleteNode);
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

function Main() {

  // Handaling React Context API

  const [outline, setOutline] = useState("none");
  const [format, setFormat] = useState("none");
  const [padding, setPadding] = useState("5px 10px 30px 10px;");
  const [font, setFont] = useState("'Roboto', sans-serif");

  const OutlineContextValue = { outline, setOutline };
  const FormatContextValue = { format, setFormat };
  const PaddingContextValue = { padding, setPadding };
  const FontsContextValue = { font, setFont };

  return (
    <OutlineContext.Provider value={OutlineContextValue}>
      <FormatContext.Provider value={FormatContextValue}>
        <PaddingContext.Provider value={PaddingContextValue}>
          <FontsContext.Provider value={FontsContextValue}>
            <div>
              <Cpanel />
              <div
                className={cx("Whole", {
                  outline: outline === "outline",
                  paper: format === "paper",
                })}
                id="content-22"
                style={{ padding: padding, fontFamily: font }}
              >
                <Typewriter />
              </div>
            </div>
          </FontsContext.Provider>
        </PaddingContext.Provider>
      </FormatContext.Provider>
    </OutlineContext.Provider>
  );
}

export default Main;


/** ---------------------------- SUMMARY ----------------------------------
 * 
 *  Main page uses context api to get updated states for fonts, padding etc
 *  and reflects them in the main page
 */