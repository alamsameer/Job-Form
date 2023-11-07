// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './component/Home';
import ContactUs from './component/ContactUs';
import ApplyPage from './component/ApplyPage';
import RespondPage from './component/RespondPage';

import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/apply" element={<ApplyPage />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/respond" element={<RespondPage />} />
      </Routes>
    </>
  );
};

export default App;
