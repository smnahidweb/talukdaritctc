import * as React from "react";
import Link from "next/link";
import { Clock, BookOpen, Target } from "lucide-react";
import { coursesData } from "@/data/courses";
import { Container } from "@/components/shared/Container";

const iconConf: Record<string, { bg: string; label: string }> = {
  word: { bg: "#2B579A", label: "W" },
  excel: { bg: "#217346", label: "X" },
  powerpoint: { bg: "#D24726", label: "P" },
  computer: { bg: "#0756A8", label: "C" },
  web: { bg: "#0B74D1", label: "W" },
};

export function BestSellingCourse() {
  // Pick the 4 most popular courses as bestsellers
  const bestSelling = coursesData.filter((c) => c.isPopular).slice(0, 4);

  return (
    <section className="py-10 sm:py-14 bg-white border-b border-[#E2E8F0]">
      <Container>
        {/* Section heading */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#062B52] uppercase tracking-tight">
            Our Best Selling Course
          </h2>
          <div className="w-12 h-1 bg-[#F97316] rounded-full mx-auto mt-3 mb-4" />
          <p className="text-sm sm:text-base text-[#64748B] leading-relaxed">
            Our Bestselling Courses for Achieving Your Goals and Realizing Your Potential!
          </p>
        </div>

        {/* Best selling course cards — 4-col grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {bestSelling.map((course) => {
            const ic = iconConf[course.iconType] ?? { bg: "#0756A8", label: "C" };
            return (
              <div
                key={course.id}
                className="bg-white rounded-xl border border-[#E2E8F0] overflow-hidden shadow-xs hover:shadow-md transition-shadow flex flex-col"
              >
                {/* Image area */}
                <Link href={`/courses/${course.slug}`} className="block">
                  <div
                    className="w-full aspect-[16/9] flex items-center justify-center"
                    style={{ backgroundColor: ic.bg + "15" }}
                  >
                    <div
                      className="w-16 h-16 rounded-2xl flex items-center justify-center text-white font-extrabold text-4xl shadow-md"
                      style={{ backgroundColor: ic.bg }}
                    >
                      {ic.label}
                    </div>
                  </div>
                </Link>

                {/* Body */}
                <div className="p-4 flex flex-col flex-1 gap-3">
                  <h3 className="text-base font-bold text-[#062B52]">
                    <Link
                      href={`/courses/${course.slug}`}
                      className="hover:text-[#0756A8] transition-colors"
                    >
                      {course.title}
                    </Link>
                  </h3>

                  <div className="flex flex-wrap gap-x-3 gap-y-1 text-xs text-[#64748B]">
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

                  {/* Dual CTA — same as rayhansict.com */}
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
          })}
        </div>
      </Container>
    </section>
  );
}
