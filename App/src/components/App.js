import React from "react";
import HomePage from "./Pages/Home-page/home"
import Main from "./Pages/Main/Main.jsx"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
 Redirect
} from "react-router-dom";


class App extends React.Component {
  render(){
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/main">
            <Main />
          </Route>
          <Route path="/users">
            <Main />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
  }
}











// function Main(){
//     return (
//       <div>
//       <Cpanel/>
//       <div className="Whole" id="content-22">
//         <Typewriter />
//       </div>
//       </div>
//     );
//   }

export default App;
