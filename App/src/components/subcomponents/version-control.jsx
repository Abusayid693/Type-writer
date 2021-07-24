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

  function handleClick() {
   
    const payload = {
        title: "Payload data",
        body: "<h1>Fuck</h1>",
      };

    axios({
      url : '',
      method : 'POST',
      data : payload
    })
    .then(()=>{
        console.log("Data sent to the server")
    })
    .catch(()=>{
        console.log("Data sending error")

    });


    if (VersionControlStarted) {
      alert("file-saved");
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
