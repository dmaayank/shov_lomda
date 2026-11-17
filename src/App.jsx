<<<<<<< HEAD
import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./components/homePage.jsx"; 
import IntroPage from "./components/introPage.jsx";
import TutorialScreen from "./components/TutorialScreen.jsx"; // Imported your tutorial screen
import "./css/App.css";
import { SECTIONS } from "./data/sections";
import { OFFSETS } from "./constants";

const ORDER = [
    { type: "start" },
    { type: "intro" },
    ...SECTIONS.map((section, i) => ({ type: "section", section, offset: OFFSETS[i + 1] })),
];

const App = () => {
    const [i, setI] = useState(0);
    const screen = ORDER[i];

    const next = () => setI((n) => Math.min(n + 1, ORDER.length - 1));
    const prev = () => setI((n) => Math.max(n - 1, 0));

    if (screen.type === "start") {
        return <HomePage onClick={next} />;
    }
    
    if (screen.type === "intro") {
        return <IntroPage pageOffset={0} onClick={next} />;
    }

    // Handles all 72 screens using your single TutorialScreen template component
    if (screen.type === "section") {
        return (
            <TutorialScreen 
                screenData={screen.section} 
                currentIndex={i + 1} 
                totalScreens={ORDER.length} 
                onNext={next} 
                onPrev={prev} 
            />
        );
    }

    return null;
=======
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
>>>>>>> 84d32e05897533f269634b07f56285b320436f12
};

export default App;