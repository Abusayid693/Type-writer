import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { PrimarySidebar } from "../Primary Sidebar/primarySidebar.jsx";
import VersionControl from "../Version-control/version-control.jsx";

const ALL_VERSIONS = "/main/saved-files";
const MAIN_PAGE = "/main";

export default function Cpanel() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path={ALL_VERSIONS}>
            <VersionControl />
          </Route>
          <Route path={MAIN_PAGE}>
            <PrimarySidebar />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
