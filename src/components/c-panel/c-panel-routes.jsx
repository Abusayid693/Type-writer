import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Container from "./General/control.jsx";
import SavedFiles from "./Saved-files/saved-files.jsx";


export default function Cpanel() {
  return (
    <Router>
      <div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/saved-files">
            <SavedFiles />
          </Route>
          <Route path="/">
            <Container />
            {/* <SavedFiles /> */}

          </Route>
        </Switch>
      </div>
    </Router>
  );
}