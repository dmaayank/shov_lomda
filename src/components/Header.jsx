import React from "react";
import bahad10 from "../assets/images/bahad10.png";
import medical_corps from "../assets/images/medical_corps.png";
import "../css/header.css";

const Header = ({ onMapClick }) => {
    return (
        <div className="top-banner">
            {/* Clickable section to open map modal */}
            <div 
                className="header-right-section" 
                onClick={onMapClick} 
                style={{ cursor: "pointer" }}
            >
                <div className="header-titles">
                    <div className="title-with-icon">
                        <div className="map-icon-wrapper">
                            <svg 
                                width="32" 
                                height="32" 
                                viewBox="0 0 24 24" 
                                fill="none" 
                                stroke="currentColor" 
                                strokeWidth="2" 
                                strokeLinecap="round" 
                                strokeLinejoin="round"
                            >
                                <polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21" />
                                <line x1="9" y1="3" x2="9" y2="18" />
                                <line x1="15" y1="6" x2="15" y2="21" />
                            </svg>
                        </div>
                        <span className="system-title">מערכת שו”ב פצועים</span>
                    </div>
                    
                    <div className="subtitle-container">
                        {/* <svg className="header-footprint-icon" width="18" height="18" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                            <path d="M 12 30 A 18 18 0 0 1 30 48 L 30 30 Z" fill="#102a43" />
                            <path d="M 12 30 L 30 30 L 30 70 L 12 70 A 18 18 0 0 1 12 30 Z" fill="#102a43" />
                            <path d="M 42 28 Q 60 26 80 32 Q 98 38 100 50 Q 98 62 80 68 Q 60 74 42 72 Z" fill="#102a43" />
                        </svg> */}
                        <span className="system-subtitle">לחץ להתקדמות</span>
                    </div>
                </div>
            </div>

            {/* Logos */}
            <div className="header-logos">
                <img src={medical_corps} alt="Medical Corps Logo" className="top-logo corps" />
                <img src={bahad10} alt="Bahad 10 Logo" className="top-logo bahad10" />
            </div>
        </div>
    );
};

export default Header;