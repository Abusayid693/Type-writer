import React, { useContext } from "react";
import { Button } from "../imports.jsx";

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

export { File };
