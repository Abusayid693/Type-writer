import React from "react";
import "./saved-files.css";
import { Link } from "react-router-dom";
import axios from "axios";
import Button from "@material-ui/core/Button";

function File(props) {

  function showVersion() {
    document.querySelector(".Whole").innerHTML=props.data.body;
  }

  return (
    <div className="">
      <Button variant="contained" color="secondary" onClick={showVersion}>
        Secondary
      </Button>
    </div>
  );
}

class SavedFiles extends React.Component {
  state = {
    Data: [],
    type: "Start version control",
  };
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.getData(false);
  }

  getData = (isSaved) => {
    axios
      .get("/data")
      .then((response) => {
        const data = response.data;
        this.setState({ Data: data.reverse() });
        if(data.length)
         (isSaved)?this.setState({ type:"version saved"}):this.setState({ type:"Save current version"})
        console.log("Data received", data);
      })
      .catch(() => {
        console.log("Data receiving error error");
      });
  };

  handleClick = () => {
    const payload = {
      title: "Payload data",
      body: document.querySelector(".Whole").innerHTML
    };

    axios({
      url: "/",
      method: "POST",
      data: payload,
    })
      .then(() => {
        console.log("Data sent to the server");
        this.getData(true);
      })
      .catch(() => {
        console.log("Data sending error");
      });
  };

  displayVersions = (data) => {
    if (!data.length) return null;
    return data.map((data) => <File data={data} />);
  };

  render() {
    return (
      <div className="saved-files panel">
        <div className="cheader">
          <p>saved files</p>
          <Link to="/">
            <button>control</button>
          </Link>
        </div>
        <button onClick={this.handleClick}>{this.state.type}</button>
        {this.displayVersions(this.state.Data)}
      </div>
    );
  }
}

export default SavedFiles;
