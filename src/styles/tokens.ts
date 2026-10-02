/**
 * Talukdar IT & Computer Training Centre
 * Design System Tokens & Brand Palette Constants
 */

export const brandColors = {
  // Primary brand palette (Trust, Education, Professionalism)
  primary: {
    DEFAULT: "#0756A8",
    hover: "#0B74D1",
    navy: "#062B52",
    light: "#EFF7FF",
    borderLight: "#D0E7FF",
  },
  // Accent palette (Admission, Enrollment, Key Conversion CTAs)
  accent: {
    DEFAULT: "#F97316",
    hover: "#EA580C",
    light: "#FFF7ED",
    border: "#FFEDD5",
  },
  // Neutral layout foundation
  neutral: {
    bg: "#F8FAFC",
    surface: "#FFFFFF",
    text: "#172033",
    muted: "#64748B",
    border: "#E2E8F0",
    borderDarker: "#CBD5E1",
  },
  // Feedback states
  status: {
    success: "#16A34A",
    successBg: "#F0FDF4",
  },
} as const;

export const brandTypography = {
  fontFamily: "var(--font-hind-siliguri), system-ui, -apple-system, sans-serif",
  weights: {
    regular: "400",
    medium: "500",
    semibold: "600",
    bold: "700",
  },
} as const;

export const brandLayout = {
  maxWidth: "1280px", // max-w-7xl
  containerPadding: {
    mobile: "px-4",
    tablet: "px-6",
    desktop: "px-8",
  },
} as const;
