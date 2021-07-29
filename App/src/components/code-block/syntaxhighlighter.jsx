import React, { useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import "./code.css";
import courser from "../Assets/code.svg";

export default function CodeView(props) {
  const style = {
    margin: "0px 0 0 40px",
    backgroundColor: "rgb(241, 237, 237);",
    borderRadius: "5px",
    fontSize: "1.2rem",
    width: "500px",
    cursor:"url("+courser+"), auto"
  };
  return (
    <div className={("code-syntax", props.plass)} contentEditable="true">
      <SyntaxHighlighter
        customStyle={style}
        contentEditable="true"
        language="javascript"
        style={docco}
        wrapLines={false}
        showLineNumbers={false}
      >
        {props.text}
      </SyntaxHighlighter>
    </div>
  );
}


