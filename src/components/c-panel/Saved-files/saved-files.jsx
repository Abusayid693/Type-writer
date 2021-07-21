import React from "react";
import "./saved-files.css";
import { Link } from "react-router-dom";






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
          <button>control</button></Link>
          </div>
        </div>
      );
    }
  }

export default SavedFiles;
