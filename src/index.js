import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './screens/home/Home.js';
// import Singlelinegrid from './screens/home/Grid.js';


ReactDOM.render(
  <React.StrictMode>
    <Home />
    {/* <Singlelinegrid /> */}
  </React.StrictMode>,
  document.getElementById('root')
);