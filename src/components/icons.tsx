import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  viewBox: "0 0 24 24",
  "aria-hidden": true,
};

export const MenuIcon = (p: IconProps) => (
  <svg {...base} strokeWidth={1.8} {...p}>
    <path d="M4 7h16M4 12h16M4 17h10" />
  </svg>
);

export const CloseIcon = (p: IconProps) => (
  <svg {...base} strokeWidth={1.8} {...p}>
    <path d="M6 6l12 12M18 6L6 18" />
  </svg>
);

export const ArrowRight = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M4 12h15M13 6l6 6-6 6" />
  </svg>
);

export const ArrowUp = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M12 20V5M6 11l6-6 6 6" />
  </svg>
);

export const PlayIcon = (p: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...p}>
    <path d="M9 7.5v9a1 1 0 0 0 1.53.85l7-4.5a1 1 0 0 0 0-1.7l-7-4.5A1 1 0 0 0 9 7.5Z" />
  </svg>
);

export const ExternalIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M14 4h6v6M20 4l-8.5 8.5" />
    <path d="M18 14v4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4" />
  </svg>
);

export const WhatsAppIcon = (p: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...p}>
    <path d="M12.04 2C6.6 2 2.2 6.4 2.2 11.84c0 1.94.55 3.75 1.5 5.28L2 22l5-1.62a9.8 9.8 0 0 0 5.04 1.39h.01c5.43 0 9.84-4.4 9.84-9.84C21.89 6.4 17.48 2 12.04 2Zm0 17.96h-.01a8.14 8.14 0 0 1-4.14-1.14l-.3-.18-3.07 1 1.03-3-.2-.31a8.1 8.1 0 0 1-1.25-4.34c0-4.5 3.67-8.16 8.18-8.16 2.18 0 4.23.85 5.77 2.39a8.1 8.1 0 0 1 2.39 5.78c0 4.5-3.67 8.16-8.4 8.16Zm4.48-6.1c-.24-.12-1.45-.72-1.68-.8-.22-.09-.39-.12-.55.12-.16.24-.63.8-.77.96-.14.16-.28.18-.52.06-.24-.12-1.03-.38-1.96-1.21-.72-.65-1.21-1.45-1.35-1.69-.14-.24-.02-.37.1-.5.12-.11.26-.29.39-.43.13-.14.18-.24.26-.4.09-.16.04-.3-.02-.43-.06-.12-.55-1.33-.75-1.82-.2-.48-.4-.41-.55-.42h-.47c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2 0 1.18.86 2.32.98 2.48.12.16 1.68 2.66 4.1 3.63.57.25 1.02.4 1.37.5.58.19 1.1.16 1.52.1.46-.07 1.45-.6 1.65-1.17.2-.58.2-1.07.14-1.17-.06-.11-.22-.17-.46-.29Z" />
  </svg>
);

export const MailIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <rect x="3" y="5" width="18" height="14" rx="2.5" />
    <path d="M4 7.5l7.4 5.1a1.2 1.2 0 0 0 1.36 0L20 7.5" />
  </svg>
);

export const DriveIcon = (p: IconProps) => (
  <svg viewBox="0 0 24 24" aria-hidden fill="currentColor" {...p}>
    <path d="M8.2 3h7.6l6 10.4h-7.6L8.2 3Zm-1.1 1.8 3.8 6.6-3.8 6.6L1 10.4 7.1 4.8Zm2.3 10.6h11.1L17 21H6.1l3.3-5.6Z" />
  </svg>
);

export const AwardIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <circle cx="12" cy="9" r="5.2" />
    <path d="M8.6 13.6 7 21l5-2.6L17 21l-1.6-7.4" />
  </svg>
);

export const CameraIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M3 8.5A2.5 2.5 0 0 1 5.5 6h1.9a2 2 0 0 0 1.7-.95l.5-.8A1.6 1.6 0 0 1 10.95 3.5h2.1a1.6 1.6 0 0 1 1.35.75l.5.8A2 2 0 0 0 16.6 6h1.9A2.5 2.5 0 0 1 21 8.5v8A2.5 2.5 0 0 1 18.5 19h-13A2.5 2.5 0 0 1 3 16.5v-8Z" />
    <circle cx="12" cy="12.4" r="3.6" />
  </svg>
);

export const ScissorsIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <circle cx="6" cy="6.5" r="2.5" />
    <circle cx="6" cy="17.5" r="2.5" />
    <path d="M8.2 7.9 20 17M8.2 16.1 20 7" />
  </svg>
);

export const CalendarIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <rect x="3.5" y="5" width="17" height="15.5" rx="2.5" />
    <path d="M3.5 10h17M8 3.5V6.5M16 3.5V6.5" />
  </svg>
);

export const SparklesIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M12 3.5l1.6 4.4 4.4 1.6-4.4 1.6L12 15.5l-1.6-4.4L6 9.5l4.4-1.6L12 3.5Z" />
    <path d="M18.5 15.5l.7 1.8 1.8.7-1.8.7-.7 1.8-.7-1.8-1.8-.7 1.8-.7.7-1.8Z" />
  </svg>
);

export const BulbIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M9.5 17.5a6 6 0 1 1 5 0v1.2a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-1.2Z" />
    <path d="M9.8 17.5h4.4" />
  </svg>
);

export const GraduationIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M3 9l9-4 9 4-9 4-9-4Z" />
    <path d="M7 11v4.5c0 1.4 2.2 2.5 5 2.5s5-1.1 5-2.5V11" />
  </svg>
);

export const BriefcaseIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <rect x="3" y="7.5" width="18" height="12" rx="2.5" />
    <path d="M9 7.5V6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v1.5M3 12.5h18" />
  </svg>
);

export const iconMap = {
  scissors: ScissorsIcon,
  camera: CameraIcon,
  calendar: CalendarIcon,
  sparkles: SparklesIcon,
  bulb: BulbIcon,
} as const;
