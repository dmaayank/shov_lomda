import React, { useState, useEffect } from "react";
import { X } from "lucide-react";
import "../css/roadmapModal.css";
import paramedicsImg from "../assets/images/paramedics.png";

const W = 310;
const H = 812;
const OFFSET_X = 18;
const IMAGE_FACES_RIGHT = true;

// scales the fixed 310x812 canvas down to fit small screens (never above 100%)
const useFitScale = () => {
    const calc = () =>
        Math.min(1, (window.innerWidth - 32) / W, (window.innerHeight - 32) / H);
    const [scale, setScale] = useState(calc);

    useEffect(() => {
        const onResize = () => setScale(calc());
        window.addEventListener("resize", onResize);
        return () => window.removeEventListener("resize", onResize);
    }, []);

    return scale;
};

// Ordered top to bottom (index 0 = first step)
const STEPS = [
    { id: "intro", label: "מבוא + הקדמה", x: 77, y: 66, dx: -14 },
    { id: "first-contact", label: "התחברות ראשונית והגדרת צוות", x: 262, y: 213 },
    { id: "new-form", label: "טופס חדש", x: 48, y: 333 },
    { id: "bleeding", label: "טבלת שליטה", x: 262, y: 452 },
    { id: "open-events", label: "אירועים פתוחים", x: 48, y: 567 },
    { id: "casualty", label: "קליטת פצוע", x: 257, y: 716 },
];

const STEP_GROUPS = [
    [[230, 780], [258, 761]],
    [[244, 685], [211, 666], [178, 647], [146, 628], [113, 609]],
    [[106, 562], [139, 543], [172, 524], [204, 505], [237, 486]],
    [[244, 439], [211, 420], [178, 401], [146, 382], [113, 363]],
    [[106, 316], [138, 297], [172, 278], [205, 259], [237, 240]],
    [[255, 178], [224, 144], [190, 126], [162, 100], [133, 80]],
];

const footsteps = STEP_GROUPS.flatMap((group, g) =>
    group.map(([x, y], i) => {
        const last = i === group.length - 1;
        const [nx, ny] = group[Math.min(i + 1, group.length - 1)];
        const [px, py] = group[Math.max(i - 1, 0)];
        const tx = last ? x - px : nx - x;
        const ty = last ? y - py : ny - y;
        return {
            key: `${g}-${i}`,
            group: g,
            x: x - OFFSET_X,
            y,
            angle: (Math.atan2(tx, -ty) * 180) / Math.PI + 180,
        };
    })
).map((f, i, arr) => ({ ...f, order: arr.length - 1 - i })); // 0 = top footprint

// footprints sorted top to bottom
const pathOrder = [...footsteps].sort((a, b) => a.order - b.order);

const Footstep = ({ x, y, angle, done }) => (
    <g
        className={done ? "rm-step rm-step--done" : "rm-step"}
        transform={`translate(${x} ${y}) rotate(${angle})`}
    >
        <ellipse cx="0" cy="-4" rx="4.5" ry="7" />
        <ellipse cx="0" cy="7" rx="3.2" ry="3.6" />
    </g>
);

const PlusIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
        <path
            className="rm-plus"
            d="M9 2h6a2 2 0 0 1 2 2v3h3a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-3v3a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2v-3H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h3V4a2 2 0 0 1 2-2z"
        />
    </svg>
);

const Soldiers = () => (
    <img src={paramedicsImg} alt="Soldiers carrying stretcher" className="rm-soldiers" />
);

const Clinic = () => (
    <svg className="rm-clinic" width="116" height="52" viewBox="0 0 116 52" aria-hidden="true">
        <rect x="6" y="16" width="62" height="34" fill="#e9dcc3" />
        <rect x="6" y="12" width="62" height="6" fill="#c9b99a" />
        <rect x="30" y="2" width="30" height="16" fill="#efe6d2" />
        <circle cx="45" cy="10" r="4" fill="#d9483b" />
        <rect x="64" y="24" width="30" height="26" fill="#d7cdb6" />
        <rect x="10" y="22" width="8" height="8" fill="#7fa6cf" />
        <rect x="22" y="22" width="8" height="8" fill="#7fa6cf" />
        <rect x="34" y="36" width="10" height="14" fill="#8d8d8d" />
        <rect x="48" y="36" width="10" height="14" fill="#8d8d8d" />
        <rect x="96" y="40" width="14" height="8" rx="2" fill="#fff" />
        <circle cx="100" cy="49" r="2.5" fill="#333" />
        <circle cx="108" cy="49" r="2.5" fill="#333" />
        <circle cx="88" cy="38" r="8" fill="#6aa84f" />
        <rect x="86.5" y="42" width="3" height="8" fill="#6b4a2b" />
        <rect x="0" y="49" width="116" height="3" fill="#a8b79a" />
    </svg>
);

const RoadmapModal = ({
    isOpen,
    onClose,
    currentStepIndex = 0,
    completedFootsteps = 0,
    totalPages = 22,
}) => {
    const scale = useFitScale(); // hooks must run before any early return

    if (!isOpen) return null;

    // pages finished -> number of footprints to whiten (whole path fills by the last page)
    const whiteCount = Math.round((completedFootsteps / totalPages) * footsteps.length);

    // paramedics stand on the last white footprint (or the first one at the start)
    const lead = pathOrder[Math.min(Math.max(whiteCount - 1, 0), pathOrder.length - 1)];
    const walkingRight = lead.group % 2 === 1;
    const flipped = walkingRight !== IMAGE_FACES_RIGHT;

    return (
        <div className="rm-overlay" onClick={onClose}>
            {/* sizing box = the scaled size, so layout and centering are correct */}
            <div
                className="rm-fit"
                style={{ width: W * scale, height: H * scale }}
                onClick={(e) => e.stopPropagation()}
            >
                <div
                    className="rm"
                    dir="rtl"
                    role="dialog"
                    aria-modal="true"
                    aria-label="מפת דרכים"
                    style={{ transform: `scale(${scale})` }}
                >
                    <button type="button" className="rm-close" onClick={onClose} aria-label="סגור">
                        <X size={24} />
                    </button>

                    <svg className="rm-steps" width={W} height={H} viewBox={`0 0 ${W} ${H}`} aria-hidden="true">
                        {footsteps.map(({ key, order, group, ...p }) => (
                            <Footstep key={key} {...p} done={order < whiteCount} />
                        ))}
                    </svg>

                    {/* walking paramedics */}
                    <div
                        className="rm-walker"
                        style={{ transform: `translate(${lead.x}px, ${lead.y}px)` }}
                    >
                        <div className={flipped ? "rm-walker__anchor rm-walker__anchor--flip" : "rm-walker__anchor"}>
                            <Soldiers />
                        </div>
                    </div>

                    <Clinic />

                    {STEPS.map((s, i) => {
                        const state =
                            i < currentStepIndex ? "done" : i === currentStepIndex ? "current" : "upcoming";
                        return (
                            <div
                                key={s.id}
                                className={`rm-station rm-station--${state}`}
                                style={{ left: s.x + (s.dx || 0), top: s.y - 12 }}
                                aria-current={state === "current" ? "step" : undefined}
                            >
                                <PlusIcon />
                                <span className="rm-label">{s.label}</span>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default RoadmapModal;