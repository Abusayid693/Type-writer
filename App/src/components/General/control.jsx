import React from "react";
import {
  Select,
  DownloadPDF,
  Link,
  options,
  customStyles,
  PageSizer,
  Checkboxes
} from "./imports.jsx"

class Fonts extends React.Component {
  state = {
    selectedOption: null,
  };
  constructor(props) {
    super(props);
  }
  handleChange = (selectedOption) => {
    this.setState({ selectedOption }, function () {
      var a = this.state.selectedOption;
      document.querySelector("body").style.fontFamily = a.value;
    });
  };
  render() {
    const { selectedOption } = this.state;
    return (
      <Select
        styles={customStyles}
        className="drop"
        value={selectedOption}
        onChange={this.handleChange}
        options={options}
        placeholder="Select fonts"
      />
    );
  }
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
          <Link to="/saved-files">
            <button>control</button>
          </Link>
        </div>
        <Fonts />
        <DownloadPDF />
        <PageSizer/>
        <Checkboxes/>
      </div>
    );
  }
}

export default Container;
