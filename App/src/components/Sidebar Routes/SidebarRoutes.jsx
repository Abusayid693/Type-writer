import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { PrimarySidebar } from "../Primary Sidebar/primarySidebar.jsx";
import VersionControl from "../Version-control/version-control.jsx";
import {ALL_VERSIONS,PRIMARY_SIDEBAR} from "../../constants/Router"


export default function Cpanel() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path={ALL_VERSIONS}>
            <VersionControl />
          </Route>
          <Route path={PRIMARY_SIDEBAR}>
            <PrimarySidebar />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
