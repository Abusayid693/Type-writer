import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {Container} from "../Primary Sidebar/control.jsx";
import SavedFiles from "../Version-control/version-control.jsx";


const ALL_VERSIONS="/main/saved-files"
const MAIN_PAGE="/main"

export default function Cpanel() {
  return (
    <Router>
       <div>
        <Switch>
          <Route path={ALL_VERSIONS}>
            <SavedFiles />
          </Route>
          <Route path={MAIN_PAGE}>
            <Container />
          </Route>
        </Switch>
      </div> 
    </Router>
  );
}

