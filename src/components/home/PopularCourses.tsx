"use client";
import * as React from "react";
import Link from "next/link";
import { Clock, BookOpen, Target } from "lucide-react";
import { coursesData, ReferenceCourseItem } from "@/data/courses";
import { Container } from "@/components/shared/Container";

// Icon tile colors per course type — matches the MS-app visual identity
const courseIconConfig: Record<
  ReferenceCourseItem["iconType"],
  { bg: string; src: string; label: string }
> = {
  word: { bg: "#2B579A", src: "/images/courses/icons/word.svg", label: "W" },
  excel: { bg: "#217346", src: "/images/courses/icons/excel.svg", label: "X" },
  powerpoint: {
    bg: "#D24726",
    src: "/images/courses/icons/ppt.svg",
    label: "P",
  },
  computer: {
    bg: "#0756A8",
    src: "/images/courses/icons/computer.svg",
    label: "C",
  },
  web: { bg: "#0B74D1", src: "/images/courses/icons/web.svg", label: "W" },
};

function CourseCard({ course }: { course: ReferenceCourseItem }) {
  const iconConf = courseIconConfig[course.iconType];

  return (
    <div className="bg-white rounded-xl border border-[#E2E8F0] overflow-hidden shadow-xs hover:shadow-md transition-shadow flex flex-col">
      {/* Card image / icon area */}
      <Link href={`/courses/${course.slug}`} className="block">
        <div
          className="w-full aspect-[16/9] flex items-center justify-center relative overflow-hidden"
          style={{ backgroundColor: iconConf.bg + "15" }}
        >
          {/* Large letter-icon tile */}
          <div
            className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl flex items-center justify-center text-white font-extrabold text-4xl sm:text-5xl shadow-md"
            style={{ backgroundColor: iconConf.bg }}
          >
            {iconConf.label}
          </div>
        </div>
      </Link>

      {/* Card body */}
      <div className="p-4 flex flex-col flex-1 gap-3">
        {/* Title */}
        <h3 className="text-base font-bold text-[#062B52] leading-snug">
          <Link
            href={`/courses/${course.slug}`}
            className="hover:text-[#0756A8] transition-colors"
          >
            {course.title}
          </Link>
        </h3>

        {/* Meta row: Duration, Classes, Projects */}
        <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-[#64748B]">
          <span className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5 text-[#0756A8]" />
            {course.duration}
          </span>
          <span className="flex items-center gap-1">
            <BookOpen className="w-3.5 h-3.5 text-[#0756A8]" />
            {course.totalLectures}
          </span>
          {course.projects && (
            <span className="flex items-center gap-1">
              <Target className="w-3.5 h-3.5 text-[#F97316]" />
              {course.projects}
            </span>
          )}
        </div>

        {/* CTA buttons — same dual button pattern as rayhansict.com */}
        <div className="mt-auto flex gap-2 pt-1">
          <Link
            href="/admission"
            className="flex-1 text-center py-2 rounded-md bg-[#F97316] hover:bg-[#EA580C] text-white text-xs font-semibold transition-colors"
          >
            Apply For Demo Class
          </Link>
          <Link
            href={`/courses/${course.slug}`}
            className="flex-1 text-center py-2 rounded-md border border-[#0756A8] text-[#0756A8] hover:bg-[#EFF7FF] text-xs font-semibold transition-colors"
          >
            Details
          </Link>
        </div>
      </div>
    </div>
  );
}

export function PopularCourses() {
  return (
    <section className="py-10 sm:py-14 bg-[#F8FAFC] border-b border-[#E2E8F0]">
      <Container>
        {/* Section heading — centered like rayhansict.com */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#062B52] uppercase tracking-tight">
            Popular Courses
          </h2>
          <div className="w-12 h-1 bg-[#F97316] rounded-full mx-auto mt-3 mb-4" />
          <p className="text-sm sm:text-base text-[#64748B] leading-relaxed">
            We have tailored our courses to teach crucial practical skills. The knowledge and proficiency gained will prepare you for your preferred role in education, employment and the job market.
          </p>
        </div>

        {/* Course Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-5">
          {coursesData.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>

        {/* View All Courses link */}
        <div className="text-center mt-8">
          <Link
            href="/courses"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-md border border-[#0756A8] text-[#0756A8] hover:bg-[#EFF7FF] font-semibold transition-colors text-sm"
          >
            View All Courses
          </Link>
        </div>
      </Container>
    </section>
  );
}
