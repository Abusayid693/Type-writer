import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';
import  imageCapture from './components/ClipboardAPI.js';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);









imageCapture();
