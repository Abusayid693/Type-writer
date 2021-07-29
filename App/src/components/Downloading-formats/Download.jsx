import Select from "react-select";
import React from "react";
import { jsPDF } from "jspdf";
import { saveAs } from "file-saver";
import Button from "@material-ui/core/Button";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";

const theme = createTheme({
  overrides: {
    // Style sheet name ⚛️
    MuiButton: {
      // Name of the rule
      text: {
        // Some CSS
        background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
        borderRadius: 3,
        border: 0,
        color: "white",
        height: 48,
        padding: "0 30px",
        boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
        width: "100%",
        margin: " 30px 0",
      },
    },
  },
});

const options = [
  { value: "Pdf", label: "Pdf Format" },
  { value: "Text", label: "Text Format" },
  { value: "Code", label: "Code block" },
];

const customStyles = {
  option: (provided, state) => ({
    ...provided,
    color: "black",
    backgroundColor: "white",
    padding: 10,
    width: 120,
  }),
};

class DownloadPDF extends React.Component {
  state = {
    selectedOption: null,
    disabled: true,
    fileType: null,
  };
  constructor(props) {
    super(props);
  }

  /* ------- Downloading text file format ------------*/

  textFile = () => {
    var content = document.getElementById("content-22"),
      content = content.textContent;
    var filename = "hello.txt";

    var blob = new Blob([content], {
      type: "text/plain;charset=utf-8",
    });

    saveAs(blob, filename);
  };

  /* --------- Downloading code blocks ----------------*/

  DownloadCodes = () => {
    var content = document.querySelectorAll(".code-view");
    var list = [].slice.call(content);
    var innertext = list
      .map(function (e) {
        return e.textContent;
      })
      .join("\n");
 /*--- javascript files ----*/
    var filename = "hello.js";  

    var blob = new Blob([innertext], {
      type: "text/plain;charset=utf-8",
    });
    saveAs(blob, filename);
  };

  /* ----------- Downloading pdf format----------------*/

  pdfFile = () => {
    var doc = new jsPDF("l", "pt");
    var content = document.getElementById("content-22");
    doc.html(content, {
      callback: function (doc) {
        doc.save();
      },
    });
  };

  /*-- Handling the click event to select downloadable formats --*/

  handleClick = (selectedOption) => {
    this.setState({ selectedOption }, function () {
      var fileType = this.state.selectedOption.value;
      this.setState({ disabled: false });
      this.setState({ fileType: fileType });
    });
  };

  /* ------------ Downloading selected file format -------*/

  downloadFile = () => {
    const fileType = this.state.fileType;
    switch (fileType) {
      case "Pdf":
        return this.pdfFile();
      case "Text":
        return this.textFile();
      case "Code":
        return this.DownloadCodes();
    }
  };

  render() {
    const { selectedOption } = this.state;
    return (
      <div>
        <Select
          styles={customStyles}
          className="drop"
          value={selectedOption}
          onChange={this.handleClick}
          options={options}
          placeholder="Select Format"
        />
        <ThemeProvider theme={theme}>
          <Button onClick={this.downloadFile} disabled={this.state.disabled}>
            Download
          </Button>
        </ThemeProvider>
      </div>
    );
  }
}

export default DownloadPDF;
