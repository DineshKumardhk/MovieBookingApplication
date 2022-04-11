import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './screens/home/Home.js';
// import Checkbox from './screens/home/DropdownList.js'


ReactDOM.render(
  <React.StrictMode>
    <Home />
    {/* <Checkbox /> */}
    {/* <Singlelinegrid /> */}
  </React.StrictMode>,
  document.getElementById('root')
);