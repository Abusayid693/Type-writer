import React from "react";
import HomePage from "./Pages/Home-page/home";
import Main from "./Pages/Main/Main.jsx";
import UserLogin from "./components/user/login"
import UserRegistration from "./components/user/register"
import {MAIN_PAGE,USER,REGISTER,HOME_PAGE} from "./constants/Router"

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import {Provider} from "react-redux"
import store from "./store"


class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
      <Router>
        <div>
          <Switch>
            <Route path={MAIN_PAGE}>
              <Main />
            </Route>
            <Route path={USER}>
              <UserLogin />
            </Route>
            <Route path={REGISTER}>
              <UserRegistration />
            </Route>
            <Route path={HOME_PAGE}>
              <HomePage />
            </Route>
          </Switch>
        </div>
      </Router>
      </Provider>
    );
  }
}

export default App;
