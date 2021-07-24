import React from "react";
import "./saved-files.css";
import { Link } from "react-router-dom";

const file1 = {
  title: "About Machine learning",
  date: "2nd oct 2021",
};

function File() {
  return (
    <div className="file">
      <div className="top">
        <p>{file1.title}</p>
      </div>
      <div className="bottom">
        <a>
          {" "}
          <i class="fas fa-chevron-right"></i>
        </a>
      </div>
    </div>
  );
}

class SavedFiles extends React.Component {
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
      <div className="saved-files panel">
        <div className="cheader">
          <p>saved files</p>
          <Link to="/">
            <button>control</button>
          </Link>
        </div>
        <File />
        <File />
        <File />
      </div>
    );
  }
}

export default SavedFiles;
