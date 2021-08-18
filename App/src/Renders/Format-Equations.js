import React from 'react';
import ReactDOM from 'react-dom';
import { Equation, defaultErrorHandler } from 'react-equation';

function AppendEquation(props) {
  return (
    <div>
      <Equation value={props.text} errorHandler={defaultErrorHandler} />
    </div>
  );
}

// RENDERING : The formatted equations
export default function renderEquation(elem, text) {
  ReactDOM.render(<AppendEquation text={text} />, document.querySelector('.' + elem));
}

/* SUMMARY : Normal equtions inserted by user are properly formatted with <sup> and  <sub>
 *           scripts.
 * Please refer : https://kgram.github.io/react-equation/master/storybook/ documentation.
 */
