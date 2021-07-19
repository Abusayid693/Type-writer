import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import  imageCapture from './components/ClipboardAPI.js';
import ControlPanel from "./components/c-panel/control.jsx"
import Container from "./components/c-panel/control.jsx"


ReactDOM.render(
  <React.StrictMode>
   <Container />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);









imageCapture();
