import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
// import Container from "./components/c-panel/control.jsx"
import Cpanel from "./components/c-panel/c-panel-routes.jsx"

ReactDOM.render(
  <React.StrictMode>
   <Cpanel />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

function hyu(){
  alert("kjbejb");
}



