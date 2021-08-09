import React from "react";
import Typed from "react-typed";
// import "./typing.css"

export default function MytypedComponent() {
  return (
    <div className="typing-div">
      <h2>
        <Typed
          strings={["Copy paste images", "Choose customised colours"]}
          typeSpeed={80}
          loop
        />
      </h2>
    </div>
  );
}
