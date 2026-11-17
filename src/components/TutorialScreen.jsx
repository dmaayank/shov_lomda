import React, { useState } from "react";
import "../css/TutorialScreen.css";
import Header from "../components/Header.jsx";
import Button from "../components/Button.jsx";
import RoadmapModal from "../components/RoadMapModel.jsx";

const TutorialScreen = ({ screenData, currentIndex, totalScreens, onNext, onPrev, pageOffset = 0 }) => {
    const totalSteps = totalScreens;
    const isFirstStep = currentIndex === 0;
    const isLastStep = currentIndex === totalSteps - 1;

    const [isMapOpen, setIsMapOpen] = useState(false);
    const [isEnlarged, setIsEnlarged] = useState(false);

    // global completed pages across the app flow
    const completedPages = pageOffset + currentIndex + 1;

    return (
        <div className="tutorial-wrapper" dir="rtl">
            <Header onMapClick={() => setIsMapOpen(true)} />

            <RoadmapModal
                isOpen={isMapOpen}
                onClose={() => setIsMapOpen(false)}
                completedFootsteps={completedPages}
            />

            <header className="top-banner">
                <div className="titles">
                    <h1>{screenData.headerTitle}</h1>
                    <p>{screenData.headerSubtitle}</p>
                </div>
            </header>

            {screenData.type === "flow-steps" ? (
                <div className="flow-stage">
                    {screenData.stepsList.map((step, idx) => {
                        const [title, ...rest] = step.split("\n");
                        return (
                            <React.Fragment key={idx}>
                                <div className="flow-step">
                                    <div className={`flow-step-number step-${idx + 1}`}>{idx + 1}</div>                                    <div>
                                        <div className="flow-step-title">{title}</div>
                                        <div className="flow-step-text">{rest.join("\n")}</div>
                                    </div>
                                </div>
                                {idx < screenData.stepsList.length - 1 && (
                                    <div className="flow-arrow">↓</div>
                                )}
                            </React.Fragment>
                        );
                    })}
                </div>
            ) : screenData.type === "web-screen" ? (
                <div className="web-stage">
                    <div className="monitor" onClick={() => setIsEnlarged(true)}>
                        <div className="monitor-screen">
                            <img
                                src={screenData.screenImage}
                                alt={screenData.headerSubtitle || screenData.headerTitle}
                                className="web-image"
                            />
                            <button
                                className="enlarge-btn"
                                aria-label="הגדלה"
                                onClick={(e) => { e.stopPropagation(); setIsEnlarged(true); }}
                            >
                                ⛶
                            </button>
                        </div>
                        <div className="monitor-neck" />
                        <div className="monitor-stand" />
                    </div>
                </div>
            ) : (
                <div className="phone-stage">
                    {/* ... כל התוכן הקיים של phone-stage בדיוק כמו שהוא ... */}
                    {/* Phone Mockup Frame (Image only) */}
                    <div
                        className={`phone-frame ${screenData.phoneClickable === false ? "no-click" : ""}`}
                        onClick={screenData.phoneClickable === false ? undefined : onNext}
                    >                    <img
                            src={screenData.screenImage}
                            alt={screenData.headerTitle}
                            className="screen-image"
                        />

                        {/* 🌟 POPUP OVERLAY */}
                        {screenData.popup && (
                            <div className="phone-popup-overlay" onClick={(e) => e.stopPropagation()}>
                                <div className="phone-popup-card">
                                    <p className="popup-text">{screenData.popup.text}</p>


                                    <Button
                                        label="הבנתי"
                                        onClick={screenData.popup.onButtonClick || onNext}
                                        className="btn-secondary"
                                    />
                                </div>
                            </div>
                        )}
                    </div>

                    {/* 🌟 MOVED HERE: Tooltips are now children of phone-stage so they won't get cut off */}
                    {screenData.tooltips && screenData.tooltips.map((tip, index) => (
                        <div
                            key={`${currentIndex}-${index}`}
                            className="blue-tooltip-card"
                            style={{
                                top: tip.top,
                                left: tip.left,
                            }}
                        >
                            {/* שורה ראשונה */}
                            <span className="tooltip-text">{tip.text}</span>

                            {/* שורה שניה הכוללת חץ שמאלי, אייקון, טקסט משני וחץ ימני */}
                            {(tip.subtext || tip.icon || tip.arrows) && (
                                <div className="tooltip-line-between">
                                    {/* חץ אחורה (בצד שמאל) */}
                                    {tip.arrows?.forward && (
                                        <span
                                            className="tooltip-arrow"
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                if (typeof onNext === 'function') onNext();
                                            }}
                                        >
                                            →
                                        </span>
                                    )}

                                    {/* מרכז: אייקון וטקסט משני */}
                                    <div className="tooltip-center-content">
                                        {tip.icon && <span className="tooltip-icon">{tip.icon}</span>}
                                        {tip.subtext && <span className="tooltip-subtext">{tip.subtext}</span>}
                                    </div>

                                    {/* חץ קדימה (בצד ימין של השורה התחתונה) */}
                                    {tip.arrows?.backward && (
                                        <span
                                            className="tooltip-arrow"
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                if (typeof onPrev === 'function') onPrev();
                                            }}
                                        >
                                            ←
                                        </span>
                                    )}
                                </div>
                            )}
                        </div>
                    ))}

                    {screenData.bannerCard && (
                        <div
                            className="tutorial-banner-card"
                            style={{
                                top: screenData.bannerCard.top || "15%",
                                left: screenData.bannerCard.left || "50%",
                                transform: "translateX(-50%)" // ממורכז אופקית בדיוק כמו בתמונה
                            }}
                        >
                            <p className="banner-text">
                                {screenData.bannerCard.text}
                            </p>

                            {screenData.bannerCard.buttonText && (
                                <Button
                                    label={screenData.bannerCard.buttonText}
                                    onClick={(e) => {
                                        // מוודאים שאם צריך לעצור התפשטות אירוע או להפעיל פונקציה מותאמת
                                        if (screenData.bannerCard.onButtonClick) {
                                            screenData.bannerCard.onButtonClick();
                                        } else {
                                            onNext();
                                        }
                                    }}
                                    className="banner-action-btn" // או className="btn-secondary" תԱם מה שתרצה
                                />
                            )}
                        </div>
                    )}

                    {/* 🌟 MOVED HERE: Click Hotspot */}
                    {screenData.clickEffect && (
                        <div
                            className="click-hotspot"
                            style={{
                                top: screenData.clickEffect.top,
                                left: screenData.clickEffect.left
                            }}
                            onClick={(e) => {
                                e.stopPropagation();
                                onNext();
                            }}
                        >
                            <span className="pulse-ring" />
                            <span className="tap-hand">👆</span>
                        </div>
                    )}
                </div>
            )}

            {/* Your Custom Button Group Overlapping the Bottom Frame */}
            <div className={`button-group ${screenData.showButtons === false ? "hidden" : ""}`}>
                <Button
                    label={isLastStep ? "סיום" : "< המשך"}
                    onClick={onNext}
                    className="btn-primary"
                />

                {!isFirstStep && (
                    <Button
                        label="חזור >"
                        onClick={onPrev}
                        className="btn-secondary"
                    />
                )}
            </div>

            {isEnlarged && (
                <div className="enlarged-overlay" onClick={() => setIsEnlarged(false)}>
                    <button
                        className="enlarged-close"
                        aria-label="סגור"
                        onClick={() => setIsEnlarged(false)}
                    >
                        ✕
                    </button>
                    <div className="enlarged-rotator">
                        <img src={screenData.screenImage} alt={screenData.headerSubtitle} />
                    </div>
                </div>
            )}
        </div>);
}

export default TutorialScreen;