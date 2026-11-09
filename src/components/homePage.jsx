import React from "react";
import { useNavigate } from "react-router-dom"; // 1. Import useNavigate
import bahad10 from "../assets/images/bahad10.png";
import medical_corps from "../assets/images/medical_corps.png";
import slogan from "../assets/images/bahad10_slogan.png";
import Button from "../components/Button.jsx";

import "../css/homePage.css";

const HomePage = () => {
    const navigate = useNavigate(); // 2. Initialize the navigate function

    const handleStart = () => {
        navigate("/intro"); // 3. Navigate to your intro page route
    };

    return (
        <div className="page">
            <div className="logo-row">
                <img src={bahad10} alt="Bahad 10 Logo" className="logo bahad10" />
                <img src={medical_corps} alt="Medical Corps Logo" className="logo corps" />
            </div>
            <div className="title">לומדת מערכת שו”ב פצועים</div>
            <div className="button">
                <Button label="התחל" onClick={handleStart}></Button>
            </div>
            <div>
                <img src={slogan} alt="Bahad 10 Slogan" className="bahad10_slogan" />
            </div>
        </div>
    );
};

export default HomePage;