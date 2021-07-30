import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Container from "../Primary Sidebar/control.jsx";
import SavedFiles from "../Version-control/version-control.jsx";

export default function Cpanel() {
  return (
    <Router>
       <div>
        <Switch>
          <Route path="/main/saved-files">
            <SavedFiles />
          </Route>
          <Route path="/main">
            <Container />
          </Route>
        </Switch>
      </div> 
    </Router>
  );
}

