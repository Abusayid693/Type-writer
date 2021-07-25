import React, { useState } from "react";
import axios from "axios";
// import "./version.css"

function VersionControl() {
  let VersionControlStarted = false;

  const state = {
    start: "Start version control",
    save: "Save current",
  };

  const [type, setState] = useState(state.start);

// Getting data from the server

function getData(){

  
}



  // Sending data to the server
  function handleClick() {
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

    if (VersionControlStarted) {
      console.log("version control started");
    } else {
      setState(state.save);
      VersionControlStarted = true;
    }
  }

  return (
    <div className="version_control">
      <button onClick={handleClick}>{type}</button>
    </div>
  );
}

export default VersionControl;
