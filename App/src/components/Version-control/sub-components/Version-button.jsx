import React, { useContext } from "react";
import {
    Button,
  }  from "../imports.jsx"



  // const CurrentVersion = React.createContext({
  //   version:<h1>Hello everyone i am fuked up</h1>,
  //   setVersion: () => {},
  // });






 function File(props) {


  // const { version, setVersion } = useContext(CurrentVersion);


    function showVersion() {
      document.querySelector(".Whole").innerHTML = props.data.body;
      // setVersion(props.data.body);
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

  export {File}