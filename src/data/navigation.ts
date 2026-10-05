import { NavItem } from "@/types";

export const mainNavItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Courses", href: "/courses" },
  { label: "Success Stories", href: "/success" },
  { label: "Career Opportunities", href: "/career" },
  { label: "Forum", href: "/forum" },
  { label: "Contact", href: "/contact" },
];

export const ctaNavItem: NavItem = {
  label: "Admission",
  href: "/admission",
  isCTA: true,
};

export const footerQuickLinks: NavItem[] = [
  { label: "About Institute", href: "/about" },
  { label: "All Courses", href: "/courses" },
  { label: "Success Stories", href: "/success" },
  { label: "Career Placement", href: "/career" },
  { label: "Student Forum", href: "/forum" },
  { label: "Contact & Location", href: "/contact" },
  { label: "Admission Procedure", href: "/admission" },
];
