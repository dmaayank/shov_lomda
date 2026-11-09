import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./components/homePage.jsx";
import IntroPage from "./components/introPage.jsx"; // 1. Import your IntroPage
import "./css/App.css";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/intro" element={<IntroPage />} /> {/* 2. Add the route */}
    </Routes>
  );
};

export default App;