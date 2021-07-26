import React from "react";
import "./version-control.css";
import { Link } from "react-router-dom";
import axios from "axios";
import Button from "@material-ui/core/Button";

function File(props) {
  function showVersion() {
    document.querySelector(".Whole").innerHTML = props.data.body;
  }

  return (
    <div className="versions">
      <Button variant="outlined" onClick={showVersion}>
        <p>
          Date : {props.data.date}
          <br />
          Time : {props.data.time}
        </p>
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
        if (data.length)
          isSaved
            ? this.setState({ type: "version saved" })
            : this.setState({ type: "Save current version" });
        console.log("Data received");
      })
      .catch(() => {
        console.log("Data receiving error error");
      });
  };

  handleClick = () => {
    const today = new Date();
    const lastSaved = this.state.Data[0].body;
    console.log("Last saved data : ", lastSaved);

    const payload = {
      title: "Payload data",
      body: document.querySelector(".Whole").innerHTML,
      date:
        today.getFullYear() +
        "-" +
        (today.getMonth() + 1) +
        "-" +
        today.getDate(),
      time:
        today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds(),
    };
    if (lastSaved == payload.body) {
      alert("Already upto date")
      return;
    }
    this.getData(true);
    axios({
      url: "/",
      method: "POST",
      data: payload,
    })
      .then(() => {
        console.log("Data sent to the server");
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
        <div className="saved-versions">
          <button onClick={this.handleClick}>{this.state.type}</button>
          {this.displayVersions(this.state.Data)}
        </div>
      </div>
    );
  }
}

export default SavedFiles;
