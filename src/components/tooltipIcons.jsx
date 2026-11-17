import { IconHelicopter } from '@tabler/icons-react';
import { User, BellRing, BedSingle } from 'lucide-react';

const S = 18;

// מצב הכרה: ראש עם גלים משני הצדדים
const ConsciousnessIcon = () => (
  <svg width={S} height={S} viewBox="0 0 24 24" fill="none"
       stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="7" r="3" fill="currentColor" />
    <path d="M7 21v-5a5 5 0 0 1 10 0v5" fill="currentColor" />
    <path d="M4.5 5.5a8 8 0 0 0 0 5" />
    <path d="M19.5 5.5a8 8 0 0 1 0 5" />
    <path d="M2 4a11 11 0 0 0 0 8" />
    <path d="M22 4a11 11 0 0 1 0 8" />
  </svg>
);

// הלם: לב מלא עם ברק
const ShockIcon = () => (
  <svg width={S} height={S} viewBox="0 0 24 24" fill="none"
       stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 21s-8-5.2-8-11a4.5 4.5 0 0 1 8-2.8A4.5 4.5 0 0 1 20 10c0 5.800-8 11-8 11z"
          fill="currentColor" />
    <path d="M13 6l-4 6h4l-1 5 4-6h-4z" stroke="#3b4f7a" fill="#3b4f7a" />
  </svg>
);

// מנח: אדם שוכב על קו
const PositionIcon = () => (
  <svg width={S} height={S} viewBox="0 0 24 24" fill="none"
       stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="6" cy="7" r="2.5" />
    <path d="M9 9l5 4 3-1 4 3" />
    <path d="M2 19h20" />
  </svg>
);

export const TOOLTIP_ICONS = {
  name: <User size={S} />,
  evacUrgency: <BellRing size={S} />,
  position: <PositionIcon />,
  heliEvac: <IconHelicopter size={S} stroke={2} />,
  consciousness: <ConsciousnessIcon />,
  shock: <ShockIcon />,
};