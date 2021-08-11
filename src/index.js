import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Pipe from './pipe/pipe'
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Pipe/>
  </React.StrictMode>,
  document.getElementById('pipe')
);

reportWebVitals();
