const NOT_CLICKABLE = [1, 3, 11, 15, 17, 18, 19, 21]; // screen numbers
import { TOOLTIP_ICONS } from '../components/tooltipIcons.jsx';

console.log('shock icon:', TOOLTIP_ICONS.shock);



const imgUrl = (name) =>
    new URL(`../assets/images/${name}.png`, import.meta.url).href;

export const SECTIONS = (() => {
    let imgCounter = 0; // עולה רק בעמודים רגילים

    return Array.from({ length: 74 }, (_, index) => {
        const pageNum = index + 1;

        if (pageNum === 43) {
            return {
                id: pageNum,
                roadmapStation: 3,
                headerTitle: "טבלת שליטה",
                headerSubtitle: "הזנת אירוע חדש",
                type: "flow-steps",
                screenImage: null,
                stepsList: [
                    "מגיעים לאר״ן\nפתיחת אירוע בטבלת השליטה",
                    "טריאז'\n7 שאלות אר״ן",
                    "הוספת נתונים\nכניסה לטופסי והמשך הזנה 101"
                ],
                tooltips: [],
                clickEffect: null,
                showButtons: true,
                showBackArrow: true,
                phoneClickable: false,

            };
        }

        if (pageNum === 57) {
            return {
                id: pageNum,
                roadmapStation: 4,
                headerTitle: "מערכת שו״ב פצועים",
                headerSubtitle: "מה רואים באתר בחמ״לים?",
                type: "web-screen",
                screenImage: imgUrl("imgWeb57"), // תמונה משלה, לא מהרצף
                tooltips: [],
                clickEffect: null,
                showButtons: true,
                showBackArrow: true,
                phoneClickable: false,
            };
        }

        imgCounter += 1;

        return {
            id: pageNum,
            roadmapStation: pageNum,
            headerTitle: 'מדריך למערכת שו"ב פצועים',
            screenImage: imgUrl(`img${imgCounter}`),
            tooltips: [],
            clickEffect: null,
            showButtons: true,
            showBackArrow: false,
            phoneClickable: !NOT_CLICKABLE.includes(pageNum),
        };
    });
})();

export default SECTIONS;

// ==========================================
// CUSTOMIZE SPECIFIC PAGES (Examples)
// ==========================================

// Page 1: Single tooltip and a click hotspot
SECTIONS[0] = {
    ...SECTIONS[0],
    headerTitle: "הגדרת צוות",
    tooltips: [
        {
            text: "זה העמוד שיופיע בהתחברות הראשונה לאפליקציה. לא תצטרכו להגדיר מחדש בהתחברות בהמשך",
            top: "30%",
            left: "3%",
        }
    ],
};

// Page 2: Home screen with a click effect
SECTIONS[1] = {
    ...SECTIONS[1],
    headerTitle: "הגדרת צוות",
    tooltips: [
        {
            text: "עליכם לבחור את המסגרת והיחידה",
            top: "34%",
            left: "6%",
        },
        {
            text: "לאחר מכן בחרו מציאות מבצעית/תרגילית ולאחר מכן לחצו “הבא”",
            top: "67%",
            left: "52%",
        }
    ],
    clickEffect: {
        top: "82%",
        left: "50%",
    },
    showButtons: false
};

SECTIONS[2] = {
    ...SECTIONS[2],
    headerTitle: "הגדרת צוות",
    tooltips: [
        {
            text: "פה ממלאים את פרטי המטפל הבכיר",
            top: "35%",
            left: "3%",
        }
    ],
};

SECTIONS[3] = {
    ...SECTIONS[3],
    headerTitle: "הגדרת צוות",
    tooltips: [
    ],
};



// Page 5: MULTIPLE tooltips pointing to different parts of the screen simultaneously
SECTIONS[4] = {
    ...SECTIONS[4],
    headerTitle: "הגדרת צוות",
    tooltips: [
        {
            text: "במידה ותרצו להוסיף מטפל נוסף, יש ללחוץ על ה+, למלא את הפרטים וללחוץ “הבא”",
            top: "52%",
            left: "50%",
        },
        {
            text: "יש להוסיף את כלל אנשי הצוות",
            top: "65%",
            left: "6%",
        },
    ],
};

SECTIONS[5] = {
    ...SECTIONS[5],
    headerTitle: "מסך הבית- שימוש באפליקציה",
    tooltips: [
    ],
    clickEffect: {
        top: "28%",
        left: "30%",
    },
};

SECTIONS[6] = {
    ...SECTIONS[6],
    headerTitle: "מסך הבית - שימוש באפליקציה ",
    tooltips: [

    ],
    popup: {
        text: "במידה ותרצו, קיימת אפשרות להעביר ממצב בהיר למצב כהה",
        buttonText: "הבנתי"
    },
    showButtons: false,

};

SECTIONS[7] = {
    ...SECTIONS[7],
    headerTitle: "מסך הבית - שימוש באפליקציה ",
    tooltips: [
        {
            text: "לחצו על סמל האוגדה ממסך הבית",
            top: "35%",
            left: "6%",
        }
    ],
    clickEffect: {
        top: "27%",
        left: "33%",
    },
    showButtons: false,
};

SECTIONS[8] = {
    ...SECTIONS[8],
    headerTitle: "מסך הבית - שימוש באפליקציה ",
    tooltips: [
        {
            text: "כאשר לוחצים על סמל האוגדה, ניתן לשנות שיוך מסגרת",
            top: "60%",
            left: "28%",
        }
    ],
    clickEffect: {
        top: "87%",
        left: "50%",
    },
    showButtons: false,
};

SECTIONS[9] = {
    ...SECTIONS[9],
    headerTitle: "טופס 101 ",
    tooltips: [
        {
            text: "לחצו על טופס חדש",
            top: "60%",
            left: "63%",
        }
    ],
    clickEffect: {
        top: "66%",
        left: "50%",
    },
    showButtons: false,
};

SECTIONS[10] = {
    ...SECTIONS[10],
    headerTitle: "טופס 101 ",
    tooltips: [
        {
            text: "מלאו את הטופס",
            top: "40%",
            left: "63%",
        }
    ],
};

SECTIONS[11] = {
    ...SECTIONS[11],
    headerTitle: "טופס 101 ",
    tooltips: [
        {
            text: "לחצו על אזור הפגיעה",
            top: "40%",
            left: "63%",
        }
    ],
    clickEffect: {
        top: "53%",
        left: "33%",
    },
    showButtons: false,

};

SECTIONS[12] = {
    ...SECTIONS[12],
    headerTitle: "טופס 101 ",
    tooltips: [
        {
            text: "בחרו סוג טיפול/פציעה",
            top: "47%",
            left: "18%",
        }
    ],
    clickEffect: {
        top: "60.5%",
        left: "25%",
    },
    showButtons: false,

};

SECTIONS[13] = {
    ...SECTIONS[13],
    headerTitle: "טופס 101 ",
    tooltips: [
    ],
    clickEffect: {
        top: "72%",
        left: "60%",
    },
    showButtons: false,

};

SECTIONS[15] = {
    ...SECTIONS[15],
    headerTitle: "טופס 101 ",
    tooltips: [
        {
            text: "דוגמא:",
            top: "32%",
            left: "77%",
        }
    ],
};

SECTIONS[16] = {
    ...SECTIONS[16],
    headerTitle: "טופס 101 ",
    tooltips: [
        {
            text: "סמנו את המחולל ואת מנגנון הפציעה",
            top: "40%",
            left: "55%",
        }
    ],
};

SECTIONS[18] = {
    ...SECTIONS[18],
    headerTitle: "טופס 101 ",
    tooltips: [
        {
            text: "כאן ניתן למלא מדדים",
            top: "29%",
            left: "55%",
        },
        {
            text: "ניתן לסמן הלם עמוק/רדיאלי לא נימוש כמו שמופיע בשלב ה-A",
            top: "46%",
            left: "8%",
        }
    ],
};

SECTIONS[19] = {
    ...SECTIONS[19],
    headerTitle: "טופס 101 ",
    tooltips: [
        {
            text: "בחרו את סוג הטיפול",
            top: "38%",
            left: "60%",
        },
        {
            text: "לאחר הבחירה יש ללחוץ על כפתור ההוספה",
            top: "74%",
            left: "5%",
        }
    ],
    showButtons: false,

};


SECTIONS[21] = {
    ...SECTIONS[21],
    headerTitle: "טופס 101 ",
    tooltips: [
        {
            text: "בחרו את מצב ההכרה המתאים של הפצוע וסמנו במידה ויש פגיעה בנציב אוויר",
            top: "35%",
            left: "1%",
        }
    ],
};

SECTIONS[22] = {
    ...SECTIONS[22],
    headerTitle: "טופס 101 ",
    tooltips: [
        {
            text: "מלא במידה וביצעת פעולה",
            top: "38%",
            left: "1%",
        }
    ],
    clickEffect: {
        top: "58%",
        left: "73%",
    },
    showButtons: false,

};

SECTIONS[23] = {
    ...SECTIONS[23],
    headerTitle: "טופס 101 ",
    tooltips: [
    ],
    clickEffect: {
        top: "75%",
        left: "32%",
    },
    showButtons: false,

};

SECTIONS[25] = {
    ...SECTIONS[25],
    headerTitle: "טופס 101 ",
    tooltips: [
        {
            text: "ניתן למחוק פעולה/טיפול שעשינו ע”י לחיצה על הפעולה ואז מחיקה",
            top: "42%",
            left: "53%",
        },
        {
            text: "כמו כן, ניתן לערוך את שעת הטיפול",
            top: "64%",
            left: "5%",
        }
    ],
    clickEffect: {
        top: "63%",
        left: "75%",
    },
    showButtons: false,

};

SECTIONS[27] = {
    ...SECTIONS[27],
    headerTitle: "טופס 101 ",
    tooltips: [
        {
            text: "מלאו במידה והוענק טיפול תרופתי",
            top: "42%",
            left: "53%",
        },
        {
            text: "מינונים מקובלים יפתחו באופן אוטומטי",
            top: "74%",
            left: "54%",
        }
    ],

};

SECTIONS[28] = {
    ...SECTIONS[28],
    headerTitle: "טופס 101 ",
    tooltips: [
        {
            text: "בחרו בסיווג פצוע, סיווג פינוי וסוג פינוי המתאימים",
            top: "27%",
            left: "3%",
        },
    ],

};

SECTIONS[29] = {
    ...SECTIONS[29],
    headerTitle: "טופס 101 ",
    tooltips: [
        {
            text: 'מילוי יעד הפינוי רק ע"י גורם מפנה סופי (פלמ"ר, טנ"צ, 669)',
            top: "64%",
            left: "53%",
        },
    ],

};

SECTIONS[30] = {
    ...SECTIONS[30],
    headerTitle: "טופס 101 ",
    tooltips: [
        {
            text: "לחצו על “סיכום פצוע” כדי לראות את הפרטים שמולאו",
            top: "70%",
            left: "28%",
        },
    ],

};

SECTIONS[31] = {
    ...SECTIONS[31],
    headerTitle: "טופס 101 ",
    tooltips: [

    ],
    clickEffect: {
        top: "77%",
        left: "50%",
    }

};

SECTIONS[32] = {
    ...SECTIONS[32],
    headerTitle: "טופס 101 ",
    tooltips: [
        {
            text: "בלחיצה על  “קישור לטבלת אר”ן” תוכל לקשר את הפצוע החדש לאירוע",
            top: "27%",
            left: "53%",
        },
        {
            text: "לחץ על כפתור זה כאשר הפצוע מוכן לפינוי",
            top: "27%",
            left: "3%",
        }
    ],

};

SECTIONS[33] = {
    ...SECTIONS[33],
    headerTitle: "טופס 101 ",
    tooltips: [
    ],

};

SECTIONS[34] = {
    ...SECTIONS[34],
    headerTitle: "העברת פצוע ",
    tooltips: [
        {
            text: "על מנת להעביר פצוע יש ללחוץ על העבר פצוע",
            top: "37%",
            left: "7%",
        }
    ],
    clickEffect: {
        top: "34%",
        left: "32%",
    }

};

SECTIONS[35] = {
    ...SECTIONS[35],
    headerTitle: "העברת פצוע ",
    tooltips: [
        {
            text: "כעת שהפצוע מסומן יש ללחוץ על אישור ",
            top: "50%",
            left: "5%",
        }
    ],
    clickEffect: {
        top: "34%",
        left: "40%",
    }

};

SECTIONS[36] = {
    ...SECTIONS[36],
    headerTitle: "העברת פצוע ",
    tooltips: [
    ],
    clickEffect: {
        top: "61.5%",
        left: "63%",
    }

};

SECTIONS[37] = {
    ...SECTIONS[37],
    headerTitle: "העברת פצוע ",
    tooltips: [
    ],
    clickEffect: {
        top: "63%",
        left: "75%",
    },
    popup: {
        text: "שימו לב!\nיש לבצע העברת פצוע רק אם הינך לפני חלוף וסיום את הטיפול בפצוע!\nלאחר מכן לא תוכל להמשיך לטפל בו",
        buttonText: "הבנתי"
    }

};

SECTIONS[38] = {
    ...SECTIONS[38],
    headerTitle: "העברת פצוע בעזרת ",
    tooltips: [
        {
            text: "רק במידה ואין רשת! לחצו על יצירת QR כדי להעלות את הברקוד",
            top: "67%",
            left: "5%",
        }
    ],
    clickEffect: {
        top: "85%",
        left: "25%",
    }
};


SECTIONS[39] = {
    ...SECTIONS[39],
    headerTitle: "העברת פצוע ",
    tooltips: [

    ],
    clickEffect: {
        top: "70%",
        left: "51%",
    }
};

SECTIONS[40] = {
    ...SECTIONS[40],
    headerTitle: "העברת פצוע ",
    tooltips: [
        {
            text: "על מנת לסרוק את הברקוד יש לפתוח את המצלמה מעמוד הבית",
            top: "37%",
            left: "3%",
        }
    ],
    clickEffect: {
        top: "29%",
        left: "82.5%",
    }
};

SECTIONS[40] = {
    ...SECTIONS[40],
    headerTitle: "העברת פצוע ",
    tooltips: [
        {
            text: "על מנת לסרוק את הברקוד יש לפתוח את המצלמה מעמוד הבית",
            top: "37%",
            left: "3%",
        }
    ],
    clickEffect: {
        top: "29%",
        left: "82.5%",
    }
};

SECTIONS[43] = {
    ...SECTIONS[43],
    headerTitle: "העברת פצוע ",
    tooltips: [
        {
            text: "לחצו על טבלת שליטה",
            top: "50%",
            left: "58%",
        }
    ],
    clickEffect: {
        top: "50%",
        left: "50%",
    }
};

SECTIONS[44] = {
    ...SECTIONS[44],
    headerTitle: "העברת פצוע ",
    tooltips: [
        {
            text: "לחצו על פצוע נוסף",
            top: "35%",
            left: "62%",
        }
    ],
    clickEffect: {
        top: "32.5%",
        left: "83%",
    }
};


SECTIONS[45] = {
    ...SECTIONS[45],
    headerTitle: "העברת פצוע ",
    tooltips: [
        {
            text: "כתבו את פרטי הפצוע:",
            subtext: "שם פצוע",
            icon: TOOLTIP_ICONS.name,
            arrows: {
                backward: false, // יציג חץ שמאלה/אחורה
                forward: true   // יציג חץ ימינה/קדימה
            }, top: "22%",
            left: "3%",
        }
    ],

};

SECTIONS[46] = {
    ...SECTIONS[46],
    headerTitle: "העברת פצוע ",
    tooltips: [
        {
            text: "כתבו את פרטי הפצוע:",
            subtext: "דחיפות פינוי",
            icon: TOOLTIP_ICONS.evacUrgency,
            arrows: {
                backward: true, // יציג חץ שמאלה/אחורה
                forward: true   // יציג חץ ימינה/קדימה
            }, top: "28%",
            left: "10%",
        }
    ],
    showButtons: false,

};

SECTIONS[47] = {
    ...SECTIONS[47],
    headerTitle: "העברת פצוע ",
    tooltips: [
        {
            text: "כתבו את פרטי הפצוע:",
            subtext: "מנח",
            icon: TOOLTIP_ICONS.position,
            arrows: {
                backward: true, // יציג חץ שמאלה/אחורה
                forward: true   // יציג חץ ימינה/קדימה
            }, top: "28%",
            left: "10%",
        }
    ],
    showButtons: false,

};

SECTIONS[48] = {
    ...SECTIONS[48],
    headerTitle: "העברת פצוע ",
    tooltips: [
        {
            text: "כתבו את פרטי הפצוע:",
            subtext: "פינוי מוסק",
            icon: TOOLTIP_ICONS.heliEvac,
            arrows: {
                backward: true, // יציג חץ שמאלה/אחורה
                forward: true   // יציג חץ ימינה/קדימה
            }, top: "28%",
            left: "10%",
        }
    ],
    showButtons: false,

};

SECTIONS[49] = {
    ...SECTIONS[49],
    headerTitle: "העברת פצוע ",
    tooltips: [
        {
            text: "כתבו את פרטי הפצוע:",
            subtext: "מצב הכרה",
            icon: TOOLTIP_ICONS.consciousness,
            arrows: {
                backward: true, // יציג חץ שמאלה/אחורה
                forward: true   // יציג חץ ימינה/קדימה
            }, top: "28%",
            left: "10%",
        }
    ],
    showButtons: false,
};


SECTIONS[50] = {
    ...SECTIONS[50],

    headerTitle: "העברת פצוע ",
    tooltips: [
        {
            text: "כתבו את פרטי הפצוע:",
            subtext: "הלם",
            icon: TOOLTIP_ICONS.shock,
            arrows: {
                backward: true, // יציג חץ שמאלה/אחורה
                forward: true   // יציג חץ ימינה/קדימה
            }, top: "28%",
            left: "10%",
        }
    ],

    showButtons: false,

};



SECTIONS[51] = {
    ...SECTIONS[51],

    headerTitle: "העברת פצוע ",
    tooltips: [
    ],

    showButtons: false,

    popup: {
        text: "שימו לב!\ \n לא חובה למלא את כל השאלות, מספיק שאלה אחת",
        buttonText: "הבנתי"
    }

};

SECTIONS[52] = {
    ...SECTIONS[52],

    headerTitle: "העברת פצוע ",
    tooltips: [
        {

            text: "לחצו על “הוספת פציעות”",
            top: "55%",
            left: "5%",
        }
    ],
    showButtons: false,
    clickEffect: {
        top: "54%",
        left: "63%",
    },
};

SECTIONS[53] = {
    ...SECTIONS[53],

    headerTitle: "העברת פצוע ",
    showButtons: false,
    bannerCard: {
        text: "פה תוכלו להרחיב על פציעות מדויקות, לדוגמה: אש - כוויה, כוויה - חודרת...",
        buttonText: "הבנתי, תודה", // או כל טקסט אחר שתרצה על הכפתור
        top: "12%", // מיקום מלמעלה בתוך מסגרת הטלפון
    }
};


































