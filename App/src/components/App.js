import React from "react";
import HomePage from "./Pages/Home-page/home";
import Main from "./Pages/Main/Main.jsx";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";

const MAIN_PAGE ="/main"
const HOME_PAGE ="/"

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route path={MAIN_PAGE}>
              <Main />
            </Route>
            <Route path={HOME_PAGE}>
              <HomePage />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
