import type { Metadata } from "next";

import { CoursesHero } from "@/components/courses/CoursesHero";
import AllCourses from "@/components/home/AllCourses";
import { DemoCTA } from "@/components/home/DemoCTA";

export const metadata: Metadata = {
  title: "Computer & IT Courses",
  description:
    "Explore our complete curriculum of practical computer, graphic design, web development, and digital marketing training programs.",
};

export default function CoursesPage() {
  return (
    <>
      <CoursesHero />

      <div id="courses">
        <AllCourses />
      </div>

      <DemoCTA />
    </>
  );
}