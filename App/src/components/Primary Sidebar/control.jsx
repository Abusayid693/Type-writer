import React, { useContext } from "react";
import {
  Select,
  DownloadPDF,
  Link,
  options,
  customStyles,
  PageSizer,
  Checkboxes,
  ColorPicker,
} from "./imports.jsx";

// CONTEXT API FOR HOLDING VALUE OF FONTS

const FontsContext = React.createContext({
  font: "none",
  setFont: () => {},
});



function Fonts() {

  const [state, setState] = React.useState({
    selectedOption: null,
  });

 
  const { font, setFont } = useContext(FontsContext);


  const handleChange = (selectedOption) => {
    var a = selectedOption;
    setFont(a.value)
    document.querySelector("body").style.fontFamily = a.value;
  };

  return (
    <Select
      styles={customStyles}
      className="drop"
      value={state.selectedOption}
      onChange={handleChange}
      options={options}
      placeholder="Select fonts"
    />
  );
}

class Container extends React.Component {
  state = {
    selectedOption: null,
  };
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.initialize();
  }

  initialize() {}

  render() {
    const { selectedOption } = this.state;

    return (
      <div className="panel">
        <div className="cheader">
          <p>C-Panel</p>
          <Link to="/main/saved-files">
            <button>control</button>
          </Link>
        </div>
        <Fonts />
        <DownloadPDF />
        <PageSizer />
        <Checkboxes />
        <ColorPicker />
      </div>
    );
  }
}

export {Container,FontsContext};
