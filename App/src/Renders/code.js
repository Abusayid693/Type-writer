import React from 'react';
import ReactDOM from 'react-dom';
import CodeView from '../components/code-block/syntaxhighlighter.jsx';

export default function renderCodeBlock(text, elem) {
  ReactDOM.render(<CodeView text={text} plass={elem} />, document.querySelector('.' + elem));
}
