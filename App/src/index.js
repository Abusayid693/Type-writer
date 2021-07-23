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



function imageResize(){
  var temp=document.querySelector("canvas");
  if(temp==null) return;
  else {
alert("jhg")
    temp.addEventListener("click",()=>{
      alert('fjj')
    })
    // temp.style.width = '60%'

}
// alert("jhg")
}

imageResize();
