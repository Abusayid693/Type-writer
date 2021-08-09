import React, { useState } from "react";
import {
  Cpanel,
  OutlineContext,
  FormatContext,
  PaddingContext,
  FontsContext,
  cx,
} from "./imports.jsx";
import Typewriter from "./Typewriter";

function Main() {
  // Handaling React Context API

  const [outline, setOutline] = useState("none");
  const [format, setFormat] = useState("none");
  const [padding, setPadding] = useState("5px 10px 30px 10px;");
  const [font, setFont] = useState("'Roboto', sans-serif");

  const OutlineContextValue = { outline, setOutline };
  const FormatContextValue = { format, setFormat };
  const PaddingContextValue = { padding, setPadding };
  const FontsContextValue = { font, setFont };

  return (
    <OutlineContext.Provider value={OutlineContextValue}>
      <FormatContext.Provider value={FormatContextValue}>
        <PaddingContext.Provider value={PaddingContextValue}>
          <FontsContext.Provider value={FontsContextValue}>
            <div>
              <Cpanel />
              <div
                className={cx("Whole", {
                  outline: outline === "outline",
                  paper: format === "paper",
                })}
                id="content-22"
                style={{ padding: padding, fontFamily: font }}
              >
                <Typewriter />
              </div>
            </div>
          </FontsContext.Provider>
        </PaddingContext.Provider>
      </FormatContext.Provider>
    </OutlineContext.Provider>
  );
}

export default Main;

/** ---------------------------- SUMMARY ----------------------------------
 *
 *  Main page uses CONTEXT API to get updated states for fonts, padding etc
 *  and reflects them in the main page
 */
