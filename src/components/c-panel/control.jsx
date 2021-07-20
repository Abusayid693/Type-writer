import React from "react";
import "./control.css";
import Select from "react-select";

const options = [
  { value: "Montserrat, sans-serif", label: "Montserrat" },
  { value: "Roboto, sans-serif", label: "Roboto" },
  { value: "Tajawal, sans-serif", label: "Tajawal" },
  { value: "Cairo, sans-serif", label: "Cairo" },
  { value: "Open Sans, sans-serif", label: "Open Sans" },
  { value: "Poppins, sans-serif", label: "Poppins" },
];

const customStyles = {
  option: (provided, state) => ({
    ...provided,
    color: "black",
    backgroundColor: "white",
    padding: 10,
  }),
};

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
        <Fonts />
      </div>
    );
  }
}

export default Container;
