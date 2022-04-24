import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App.js';
// import Details from './screens/details/Details';
// import Home from './screens/home/Home.js';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>


    {/* <Home /> */}



    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  // document.getElementById('root')
);