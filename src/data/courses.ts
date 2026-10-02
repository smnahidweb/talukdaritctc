import { Course } from "@/types";

export interface ReferenceCourseItem extends Course {
  iconType: "word" | "excel" | "powerpoint" | "computer" | "web";
}

export const coursesData: ReferenceCourseItem[] = [
  {
    id: "course-word",
    slug: "microsoft-word",
    title: "Microsoft Word",
    category: "Office Application",
    shortDescription:
      "Master official document creation, formatting, tables, layout, and professional typing.",
    description:
      "Comprehensive training on Microsoft Word designed for students, office job aspirants, and professionals. Learn touch typing in English and Bengali (Bijoy & Avro), official letter writing, government application formats, table designs, page borders, and print settings.",
    duration: "4 Weeks",
    level: "Beginner",
    totalLectures: "16 Classes",
    projects: "4 Practical Documents",
    image: "/images/courses/office-app.svg",
    iconType: "word",
    features: [
      "Document creation",
      "Formatting",
      "Tables & layout",
      "Professional documents",
    ],
    isPopular: true,
    isFeatured: false,
    ctaText: "View Course",
  },
  {
    id: "course-excel",
    slug: "microsoft-excel",
    title: "Microsoft Excel",
    category: "Office Application",
    shortDescription:
      "Learn essential spreadsheet formulas, data management, business calculations, and visual charts.",
    description:
      "Hands-on Microsoft Excel training covering essential arithmetic formulas, logical IF functions, VLOOKUP, data filtering, invoice design, salary sheets, and financial calculations tailored for business and office operations.",
    duration: "6 Weeks",
    level: "Beginner",
    totalLectures: "24 Classes",
    projects: "6 Practical Sheets",
    image: "/images/courses/office-app.svg",
    iconType: "excel",
    features: [
      "Formulas & functions",
      "Data management",
      "Practical calculations",
      "Charts & tables",
    ],
    isPopular: true,
    isFeatured: true,
    ctaText: "View Course",
  },
  {
    id: "course-powerpoint",
    slug: "microsoft-powerpoint",
    title: "Microsoft PowerPoint",
    category: "Office Application",
    shortDescription:
      "Create high-impact presentations, slide animations, academic slides, and corporate pitch decks.",
    description:
      "Learn slide layouts, visual typography, transition animations, infographical slides, and practical presentation techniques for academic seminars, business meetings, and training lectures.",
    duration: "4 Weeks",
    level: "Beginner",
    totalLectures: "16 Classes",
    projects: "4 Presentation Decks",
    image: "/images/courses/office-app.svg",
    iconType: "powerpoint",
    features: [
      "Presentation design",
      "Slide animations",
      "Professional slides",
      "Practical projects",
    ],
    isPopular: true,
    isFeatured: false,
    ctaText: "View Course",
  },
  {
    id: "course-computer-internet",
    slug: "computer-internet",
    title: "Computer & Internet",
    category: "Fundamentals",
    shortDescription:
      "Fundamental computer operations, Windows OS, safe web browsing, email management, and digital safety.",
    description:
      "The essential stepping stone for beginners. Covers computer hardware basics, mouse and keyboard mastery, Windows navigation, file and folder organization, safe internet browsing, Google drive, email communication, and cyber safety.",
    duration: "6 Weeks",
    level: "Beginner",
    totalLectures: "20 Classes",
    projects: "Lab Utilities",
    image: "/images/courses/hardware-networking.svg",
    iconType: "computer",
    features: [
      "Computer basics",
      "Internet usage",
      "Email & online services",
      "Digital safety",
    ],
    isPopular: true,
    isFeatured: false,
    ctaText: "View Course",
  },
  {
    id: "course-website-design",
    slug: "website-design",
    title: "Website Design",
    category: "Web & IT",
    shortDescription:
      "Learn HTML/CSS fundamentals, WordPress site building, layout structuring, and practical web projects.",
    description:
      "Begin your web development journey. Learn how the web works, HTML5 semantic structure, CSS styling, responsive layout principles, and WordPress website development to build fast, attractive websites for local clients and online portfolios.",
    duration: "8 Weeks",
    level: "Beginner",
    totalLectures: "32 Classes",
    projects: "3 Live Web Projects",
    image: "/images/courses/web-dev.svg",
    iconType: "web",
    features: [
      "HTML/CSS basics",
      "WordPress training",
      "Website creation",
      "Practical projects",
    ],
    isPopular: true,
    isFeatured: false,
    ctaText: "View Course",
  },
];

export function getCourseBySlug(slug: string): ReferenceCourseItem | undefined {
  return coursesData.find((course) => course.slug === slug);
}

export function getAllCourseSlugs(): string[] {
  return coursesData.map((course) => course.slug);
}
