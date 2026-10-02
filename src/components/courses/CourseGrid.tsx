import * as React from "react";
import { ReferenceCourseItem } from "@/data/courses";
import { CourseCard } from "./CourseCard";

export interface CourseGridProps {
  courses: ReferenceCourseItem[];
}

export function CourseGrid({ courses }: CourseGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-5">
      {courses.map((course) => (
        <CourseCard key={course.id} course={course} />
      ))}
    </div>
  );
}
