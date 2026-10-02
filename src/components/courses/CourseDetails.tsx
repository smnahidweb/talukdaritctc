import * as React from "react";
import Link from "next/link";
import {
  Clock,
  BarChart3,
  BookOpen,
  FolderGit2,
  CheckCircle2,
  Phone,
  ArrowLeft,
  Calendar,
} from "lucide-react";
import { ReferenceCourseItem } from "@/data/courses";
import { siteConfig } from "@/data/site";

export interface CourseDetailsProps {
  course: ReferenceCourseItem;
}

export function CourseDetails({ course }: CourseDetailsProps) {
  return (
    <div className="space-y-8">
      {/* Back button */}
      <div>
        <Link
          href="/courses"
          className="inline-flex items-center gap-2 text-sm font-medium text-[#0756A8] hover:text-[#0B74D1] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Courses</span>
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
        {/* Left Column: Course Description & Curriculum */}
        <div className="lg:col-span-2 space-y-8">
          {/* Overview */}
          <div className="bg-white p-6 sm:p-8 rounded-xl border border-[#E2E8F0] space-y-4">
            <div className="flex items-center gap-2.5 flex-wrap">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-[#EFF7FF] text-[#0756A8] border border-[#D0E7FF]">
                {course.category}
              </span>
              <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-slate-100 text-slate-700 border border-slate-200">
                {course.level}
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#062B52]">
              Course Overview
            </h2>
            <p className="text-base text-[#172033] leading-relaxed">
              {course.description}
            </p>
          </div>

          {/* What You Will Learn */}
          <div className="bg-white p-6 sm:p-8 rounded-xl border border-[#E2E8F0] space-y-5">
            <h3 className="text-xl font-bold text-[#062B52]">
              Core Modules &amp; Learning Outcomes
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {course.features.map((feature, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2.5 p-3 rounded-lg bg-slate-50 border border-slate-100"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#16A34A] shrink-0 mt-0.5" />
                  <span className="text-sm text-[#172033] font-medium leading-snug">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Lab Note */}
          <div className="bg-[#EFF7FF] p-6 sm:p-8 rounded-xl border border-[#D0E7FF] space-y-3">
            <h3 className="text-lg font-bold text-[#062B52]">
              Hands-On Practical Lab Included
            </h3>
            <p className="text-sm text-[#64748B] leading-relaxed">
              Every enrolled student receives a dedicated workstation in our computer lab during scheduled classes, plus practice lab hours outside regular batches.
            </p>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="space-y-6">
          <div className="sticky top-24 bg-white rounded-xl border border-[#0756A8]/30 shadow-md overflow-hidden">
            <div className="bg-[#0756A8] text-white p-6 space-y-2">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-[#F97316] text-white">
                Admissions Open
              </span>
              <h3 className="text-xl font-bold text-white mt-2">
                Course Summary
              </h3>
            </div>

            <div className="p-6 space-y-5">
              <div className="space-y-3.5 text-sm">
                <div className="flex items-center justify-between pb-3 border-b border-[#E2E8F0]">
                  <span className="text-[#64748B] flex items-center gap-2">
                    <Clock className="w-4 h-4 text-[#0756A8]" /> Duration
                  </span>
                  <span className="font-semibold text-[#062B52]">
                    {course.duration}
                  </span>
                </div>

                <div className="flex items-center justify-between pb-3 border-b border-[#E2E8F0]">
                  <span className="text-[#64748B] flex items-center gap-2">
                    <BarChart3 className="w-4 h-4 text-[#0756A8]" /> Level
                  </span>
                  <span className="font-semibold text-[#062B52]">
                    {course.level}
                  </span>
                </div>

                {course.totalLectures && (
                  <div className="flex items-center justify-between pb-3 border-b border-[#E2E8F0]">
                    <span className="text-[#64748B] flex items-center gap-2">
                      <BookOpen className="w-4 h-4 text-[#0756A8]" /> Classes
                    </span>
                    <span className="font-semibold text-[#062B52]">
                      {course.totalLectures}
                    </span>
                  </div>
                )}

                {course.projects && (
                  <div className="flex items-center justify-between pb-3 border-b border-[#E2E8F0]">
                    <span className="text-[#64748B] flex items-center gap-2">
                      <FolderGit2 className="w-4 h-4 text-[#0756A8]" /> Projects
                    </span>
                    <span className="font-semibold text-[#062B52]">
                      {course.projects}
                    </span>
                  </div>
                )}

                <div className="flex items-center justify-between">
                  <span className="text-[#64748B] flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-[#0756A8]" /> Batches
                  </span>
                  <span className="font-semibold text-[#062B52]">
                    Morning &amp; Evening
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-3 space-y-2.5">
                <Link
                  href="/admission"
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-lg bg-[#F97316] hover:bg-[#EA580C] text-white font-bold shadow-xs transition-colors"
                >
                  Apply for Admission
                </Link>
                <a
                  href={`tel:${siteConfig.contact.phone}`}
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-lg border border-[#0756A8] text-[#0756A8] hover:bg-[#EFF7FF] font-semibold transition-colors text-sm"
                >
                  <Phone className="w-4 h-4" />
                  Call for Inquiry
                </a>
              </div>

              <p className="text-center text-xs text-[#64748B] pt-1">
                Visit our office or call us for guidance on enrollment.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
