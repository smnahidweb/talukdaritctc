import * as React from "react";
import Link from "next/link";
import { CheckCircle2, ArrowRight, Monitor, Globe } from "lucide-react";
import { ReferenceCourseItem } from "@/data/courses";

export interface CourseCardProps {
  course: ReferenceCourseItem;
}

export function CourseCard({ course }: CourseCardProps) {
  // Render icon tile corresponding to the course
  const renderIcon = () => {
    switch (course.iconType) {
      case "word":
        return (
          <div className="w-12 h-12 rounded-xl bg-[#0066B2] text-white flex items-center justify-center font-bold text-xl shadow-xs">
            W
          </div>
        );
      case "excel":
        return (
          <div className="w-12 h-12 rounded-xl bg-[#107C41] text-white flex items-center justify-center font-bold text-xl shadow-xs">
            X
          </div>
        );
      case "powerpoint":
        return (
          <div className="w-12 h-12 rounded-xl bg-[#D83B01] text-white flex items-center justify-center font-bold text-xl shadow-xs">
            P
          </div>
        );
      case "computer":
        return (
          <div className="w-12 h-12 rounded-xl bg-[#0078D4] text-white flex items-center justify-center shadow-xs">
            <Monitor className="w-6 h-6" />
          </div>
        );
      case "web":
        return (
          <div className="w-12 h-12 rounded-xl bg-[#0284C7] text-white flex items-center justify-center shadow-xs">
            <Globe className="w-6 h-6" />
          </div>
        );
      default:
        return (
          <div className="w-12 h-12 rounded-xl bg-[#0756A8] text-white flex items-center justify-center font-bold">
            IT
          </div>
        );
    }
  };

  return (
    <div className="bg-white rounded-xl border border-[#E2E8F0] p-5 sm:p-6 shadow-xs hover:shadow-md hover:border-[#0756A8]/50 transition-all flex flex-col justify-between group">
      <div>
        {/* Course Icon Tile */}
        <div className="mb-4">{renderIcon()}</div>

        {/* Title */}
        <h3 className="text-lg font-bold text-[#062B52] leading-tight mb-3 group-hover:text-[#0756A8] transition-colors">
          <Link href={`/courses/${course.slug}`}>
            {course.title}
          </Link>
        </h3>

        {/* Bullet Checklist */}
        <div className="space-y-2 mb-4">
          {course.features.map((feat, idx) => (
            <div
              key={idx}
              className="flex items-start gap-2 text-xs sm:text-[13px] text-[#64748B]"
            >
              <CheckCircle2 className="w-3.5 h-3.5 text-[#16A34A] shrink-0 mt-0.5" />
              <span>{feat}</span>
            </div>
          ))}
        </div>
      </div>

      <div>
        {/* Meta Stats: Duration & Level */}
        <div className="pt-3 border-t border-[#E2E8F0] space-y-1 mb-4 text-xs font-semibold text-[#062B52]">
          <p>
            Duration: <span className="font-normal text-[#64748B]">{course.duration}</span>
          </p>
          <p>
            Level: <span className="font-normal text-[#64748B]">{course.level}</span>
          </p>
        </div>

        {/* Action Button: Solid Blue */}
        <Link
          href={`/courses/${course.slug}`}
          className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-lg bg-[#0756A8] hover:bg-[#0B74D1] text-white text-xs sm:text-sm font-semibold transition-colors shadow-2xs"
        >
          <span>View Course</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
}
