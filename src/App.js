import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './screens/home/Home.js';
import Details from './screens/details/Details.js';

const App = () => {
  return (
    <Routes>
        <Route path="/" element={<Home />} ></Route>
        <Route path="/details" element={<Details />} >Details</Route>
    </Routes>
  )
}

export default App;