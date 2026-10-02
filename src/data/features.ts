import { FeatureHighlight } from "@/types";

export interface HeroStatItem {
  id: string;
  title: string;
  subtitle: string;
  iconName: "Calendar" | "Laptop" | "UserCheck" | "TrendingUp";
  colorClass: string;
}

export const heroStats: HeroStatItem[] = [
  {
    id: "stat-1",
    title: "Since 2024",
    subtitle: "Trusted Training Centre",
    iconName: "Calendar",
    colorClass: "text-[#0756A8] bg-[#EFF7FF] border-[#D0E7FF]",
  },
  {
    id: "stat-2",
    title: "Practical Training",
    subtitle: "Learn by Doing",
    iconName: "Laptop",
    colorClass: "text-[#16A34A] bg-[#F0FDF4] border-[#DCFCE7]",
  },
  {
    id: "stat-3",
    title: "Expert Guidance",
    subtitle: "From Experienced Trainers",
    iconName: "UserCheck",
    colorClass: "text-[#F97316] bg-[#FFF7ED] border-[#FFEDD5]",
  },
  {
    id: "stat-4",
    title: "Career-Focused Learning",
    subtitle: "Build a Brighter Future",
    iconName: "TrendingUp",
    colorClass: "text-[#9333EA] bg-[#FAF5FF] border-[#F3E8FF]",
  },
];

export const trustHighlights: FeatureHighlight[] = [
  {
    id: "highlight-1",
    title: "Practical and hands-on training",
    description: "Every student practices on their own computer in an air-conditioned modern lab.",
    iconName: "CheckCircle2",
  },
  {
    id: "highlight-2",
    title: "Beginner to advanced level courses",
    description: "Step-by-step curriculum starting from computer fundamentals to advanced projects.",
    iconName: "CheckCircle2",
  },
  {
    id: "highlight-3",
    title: "Friendly learning environment",
    description: "Supportive trainers dedicated to answering every question with patience.",
    iconName: "CheckCircle2",
  },
  {
    id: "highlight-4",
    title: "Career-focused guidance",
    description: "Practical tasks that prepare trainees for office duties, freelance work, and job tests.",
    iconName: "CheckCircle2",
  },
];

export interface WhyChooseItem {
  id: string;
  title: string;
  description: string;
  iconName: "Settings" | "Smile" | "Briefcase" | "UserCheck" | "Lightbulb" | "Monitor";
  color: string;
  bgColor: string;
}

export const whyChooseUsFeatures: WhyChooseItem[] = [
  {
    id: "why-1",
    title: "Practical Learning",
    description: "Learn skills through hands-on training.",
    iconName: "Settings",
    color: "#16A34A",
    bgColor: "#F0FDF4",
  },
  {
    id: "why-2",
    title: "Beginner Friendly",
    description: "Courses designed for all levels.",
    iconName: "Smile",
    color: "#0756A8",
    bgColor: "#EFF7FF",
  },
  {
    id: "why-3",
    title: "Career Focused",
    description: "Skills that support employment and growth.",
    iconName: "Briefcase",
    color: "#F97316",
    bgColor: "#FFF7ED",
  },
  {
    id: "why-4",
    title: "Personal Guidance",
    description: "Get help throughout your learning journey.",
    iconName: "UserCheck",
    color: "#9333EA",
    bgColor: "#FAF5FF",
  },
  {
    id: "why-5",
    title: "Modern Digital Skills",
    description: "Build essential computer skills.",
    iconName: "Lightbulb",
    color: "#EC4899",
    bgColor: "#FDF2F8",
  },
  {
    id: "why-6",
    title: "Demo Classes",
    description: "Try a class before enrolling.",
    iconName: "Monitor",
    color: "#0284C7",
    bgColor: "#F0F9FF",
  },
];
