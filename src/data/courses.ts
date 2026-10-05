import { Course } from "@/types";

export interface ReferenceCourseItem extends Course {
  iconType: "word" | "excel" | "powerpoint" | "computer" | "web" | "graphic" | "marketing";
}

export const coursesData: ReferenceCourseItem[] = [
  {
    id: "course-computer-basic",
    slug: "computer-basic-office-application",
    title: "Computer Basic & Office Application",
    category: "Professional Training",
    shortDescription:
      "Build essential computer and office productivity skills for study, work, and everyday digital tasks.",
    description:
      "A practical foundation course designed to build essential computer and office productivity skills. Learn everyday computer operations, office applications, digital document handling, and practical skills needed for study, workplace tasks, and daily digital activities.",
    duration: "3 Months",
    level: "Beginner",
    totalLectures: "36 Classes",
    projects: "Practical Office Projects",
    image: "/computer_basic.png",
    iconType: "computer",
    fees: 3500,
    features: [
      "Computer fundamentals",
      "Office applications",
      "Digital productivity",
      "Practical tasks",
    ],
    isPopular: true,
    isFeatured: true,
    ctaText: "View Course",
  },

  {
    id: "course-graphic-design",
    slug: "graphic-design",
    title: "Graphic Design",
    category: "Creative Skills",
    shortDescription:
      "Learn practical design skills and create posters, banners, social media graphics, and visual content.",
    description:
      "A practical graphic design course focused on developing creative and professional design skills. Learn how to create posters, banners, social media graphics, promotional materials, and other visual content through hands-on projects.",
    duration: "3 Months",
    level: "Beginner",
    totalLectures: "36 Classes",
    projects: "Practical Design Projects",
    image: "/video.jpg",
    iconType: "graphic",
    fees: 4000,
    features: [
      "Design fundamentals",
      "Poster & banner design",
      "Social media graphics",
      "Practical projects",
    ],
    isPopular: true,
    isFeatured: false,
    ctaText: "View Course",
  },

  {
    id: "course-web-design",
    slug: "web-design",
    title: "Web Design",
    category: "Web Development",
    shortDescription:
      "Learn HTML, CSS, and basic JavaScript while creating responsive and modern websites from scratch.",
    description:
      "A hands-on web design course covering HTML, CSS, and basic JavaScript. Learn how websites are structured, styled, and made responsive while building modern and practical websites from scratch.",
    duration: "4 Months",
    level: "Beginner",
    totalLectures: "48 Classes",
    projects: "Live Web Projects",
    image: "/website.jpg",
    iconType: "web",
    fees: 5000,
    features: [
      "HTML & CSS fundamentals",
      "Basic JavaScript",
      "Responsive web design",
      "Practical web projects",
    ],
    isPopular: true,
    isFeatured: false,
    ctaText: "View Course",
  },

  {
    id: "course-digital-marketing",
    slug: "digital-marketing",
    title: "Digital Marketing",
    category: "Digital Marketing",
    shortDescription:
      "Learn social media marketing, content creation, SEO basics, and online promotion through practical digital marketing activities.",
    description:
      "A practical digital marketing course designed to develop essential online marketing skills. Learn social media marketing, content creation, SEO fundamentals, online promotion, and practical strategies for building and promoting digital presence.",
    duration: "3 Months",
    level: "Beginner",
    totalLectures: "36 Classes",
    projects: "Practical Marketing Projects",
    image: "/digital.jpg",
    iconType: "marketing",
    fees: 3500,
    features: [
      "Social media marketing",
      "Content creation",
      "SEO fundamentals",
      "Online promotion",
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
