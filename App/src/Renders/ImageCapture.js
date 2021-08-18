import ReactDOM from 'react-dom';
import MyResizable from '../components/Resizable/resizable';

/*------------------------- Randering captured image ------------------------ */
function renderImage(src, s) {
  ReactDOM.render(<MyResizable src={src} />, document.querySelector('#' + s));
}

/**
 ** Note : renderImage function is called from HandleClipboardAPI and image src
 ** is passed as props
 */
export { renderImage };
