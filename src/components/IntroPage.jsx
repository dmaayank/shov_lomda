import React, { useState } from "react";
import "../css/introPage.css";
import Header from "../components/Header.jsx";
import Button from "../components/Button.jsx";
import appIcon from "../assets/images/app_icon.png";
import RoadmapModal from "../components/RoadMapModel.jsx";

const IntroPage = ({ label, onClick, disabled = false }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isMapOpen, setIsMapOpen] = useState(false);
    const [completedPages, setCompletedPages] = useState(0);
    const [flip, setFlip] = useState(null); // { from: stepIndex, dir: "next" | "prev", id }
    const TOTAL_APP_PAGES = 22; // pages across the whole flow

    const steps = [
        {
            title: "תיעוד ורישום בקצרה",
            subtitle: " ",
            cardTitle: "מה זה תיעוד?",
            content: `תיעוד רפואי הוא רישום שיטתי, מדויק ובזמן אמת של המידע הקליני על הפצוע. התיעוד מהווה מרכיב חשוב וחיוני במתן טיפול מיטבי לפצוע והינו חובה חוקית של המטפל. את התיעוד הרפואי בפצועים נבצע בטופס 101.`,
            type: "notebook",
            roadmapStation: 0,
        },
        {
            title: "טופס 101",
            subtitle: " ",
            cardTitle: "- טופס 101 -",
            content: `טופס התיעוד הצה"לי לפצועים. מילוי טופס 101 עוזר לשמור על רציפות הטיפול במעבר הפצוע בין דרגי טיפול ופינוי. בנוסף, הטופס מאפשר איסוף נתונים לגבי הטיפול הרפואי בפצועים בשטח לצורך למידה והשתנות. עד מלחמת "חרבות ברזל" הטופס היה טופס מנייר, בתחילת הלחימה הטופס הפך להיות דיגיטלי וכיום עבר למערכת שו"ב פצועים.`,
            type: "notebook",
            roadmapStation: 0,
        },
        {
            title: "אולר רשתי",
            subtitle: "",
            cardTitle: "מהו אולר רשתי?",
            content: `מכשיר סמסונג המריץ מערכת אנדרויד. טלפון סלולרי ואג”מי הנמצא אצל כלל בעלי תפקידים ומשמש את צוותי הרפואה במערכת שו”ב פצועים. המכשיר מאפשר הנגשת יישומית לפעילות בגזרות שונות ובמתארי הפעולות השונים, בשגרה, באימונים, ובבט”ש ובתמרון.`,
            type: "notebook",
            roadmapStation: 0,
        },
        {
            title: 'מערכת שו"ב פצועים',
            subtitle: "",
            cardTitle: "מהי מערכת שו”ב פצועים?",
            content: `אפליקציה שבנויה לשמש את כוחות הרפואה ולסייע בהעברת מידע אודות הפצועים בשטח.`,
            type: "icon-card",
            iconImage: appIcon,
            roadmapStation: 0,
        },
        {
            title: 'מערכת שו"ב פצועים',
            subtitle: "התחברות ראשונית",
            type: "flow-steps",
            stepsList: [
                "1. פותחים את האולר ומקישים קוד פתיחה",
                "2. לוחצים על האפליקציה Capsule VPN ואז על Connect",
                '3. לוחצים על האייקון "שו"ב רפואה"',
            ],
            roadmapStation: 1,
        },
    ];

    const totalSteps = steps.length;
    const isFirstStep = currentIndex === 0;
    const isLastStep = currentIndex === totalSteps - 1;
    const currentStep = steps[currentIndex];

    // every move (buttons and dots) goes through here so the page flips
    const goTo = (newIndex) => {
        if (newIndex === currentIndex || newIndex < 0 || newIndex >= totalSteps) return;
        setFlip({
            from: currentIndex,
            dir: newIndex > currentIndex ? "next" : "prev",
            id: Date.now(),
        });
        setCurrentIndex(newIndex);
        setCompletedPages(newIndex);
    };

    const handleNext = () => {
        if (isLastStep) {
            setCompletedPages(totalSteps);
            onClick?.();
        } else {
            goTo(currentIndex + 1);
        }
    };

    const handlePrev = () => goTo(currentIndex - 1);

    // renders one page; used for both the visible page and the page that flips away
    const renderStep = (step) => {
        if (step.type === "flow-steps") {
            return (
                <div className="flow-container">
                    {step.stepsList.map((stepText, idx) => (
                        <React.Fragment key={idx}>
                            <div className="flow-box">
                                <p>{stepText}</p>
                            </div>
                            {idx < step.stepsList.length - 1 && (
                                <div className="flow-arrow">⬇</div>
                            )}
                        </React.Fragment>
                    ))}
                </div>
            );
        }

        if (step.type === "icon-card") {
            return (
                <div className="notebook-card notebook-card--with-icon">
                    <h3>{step.cardTitle}</h3>
                    <p>{step.content}</p>
                    <div className="app-icon-badge">
                        <img src={step.iconImage} alt="101 App Icon" />
                    </div>
                </div>
            );
        }

        return (
            <div className="notebook-card">
                <h3>{step.cardTitle}</h3>
                <p style={{ whiteSpace: "pre-line" }}>{step.content}</p>
            </div>
        );
    };

    return (
        <div dir="rtl" className="carousel-container">
            <Header onMapClick={() => setIsMapOpen(true)} />

            <RoadmapModal
                isOpen={isMapOpen}
                onClose={() => setIsMapOpen(false)}
                currentStepIndex={currentStep.roadmapStation}
                completedFootsteps={completedPages}
                totalPages={TOTAL_APP_PAGES}
            />

            <main className="content-area">
                <div className="step-heading">
                    <h1 className="step-title">{currentStep.title}</h1>
                    {currentStep.subtitle?.trim() && (
                        <h2 className="step-subtitle">{currentStep.subtitle}</h2>
                    )}
                </div>

                <div className="page-stack">
                    {flip ? (
                        <>
                            {/* page underneath */}
                            <div className="page-layer">
                                {renderStep(flip.dir === "next" ? currentStep : steps[flip.from])}
                            </div>

                            {/* page that flips on top */}
                            <div
                                key={flip.id}
                                className={`page-layer page-layer--over page-layer--${flip.dir === "next" ? "up" : "down"
                                    }`}
                                onAnimationEnd={() => setFlip(null)}
                            >
                                {renderStep(flip.dir === "next" ? steps[flip.from] : currentStep)}
                            </div>
                        </>
                    ) : (
                        <div className="page-layer">{renderStep(currentStep)}</div>
                    )}
                </div>
            </main>

            <footer className="footer-controls">
                <div className="dots-container">
                    {steps.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goTo(index)}
                            className={`dot ${index === currentIndex ? "active" : ""}`}
                            aria-label={`שלב ${index + 1}`}
                        />
                    ))}
                </div>

                <div className="button-group">
                    <Button
                        label={isLastStep ? "סיום" : "< המשך"}
                        onClick={handleNext}
                        className="btn-primary"
                    />

                    {!isFirstStep && (
                        <Button
                            label="חזור >"
                            onClick={handlePrev}
                            className="btn-secondary"
                        />
                    )}
                </div>
            </footer>
        </div>
    );
};

export default IntroPage;