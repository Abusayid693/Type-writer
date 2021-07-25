import React, { Component } from "react";
import axios from "axios";
import { render } from "react-equation";
// import "./version.css"

class VersionControl extends React.Component {
  state = {
    type: "Start version control",
  };

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    axios
      .get("/data")
      .then((response) => {
        const data = response.data;
        console.log("Data received", data);
      })
      .catch(() => {
        console.log("Data receiving error error");
      });
  };

  // Sending data to the server
  handleClick = () => {
    const payload = {
      title: "Payload data",
      body: "<h1>Fuck</h1>",
    };

    axios({
      //using proxy
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

    this.setState({
      type: "Save",
    });
  };

  render() {
    console.log("State: ", this.state);

    return (
      <div className="version_control">
        <button onClick={this.handleClick}>{this.state.type}</button>
      </div>
    );
  }
}

export default VersionControl;
