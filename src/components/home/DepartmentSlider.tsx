"use client";

import Link from "next/link";
import {
  ArrowUpRight,
  Monitor,
  Palette,
  Globe,
  Megaphone,
  type LucideIcon,
} from "lucide-react";

interface Department {
  id: string | number;
  title: string;
  href: string;
}

interface DepartmentSliderProps {
  departments: Department[];
}

const departmentIcons: Record<string, LucideIcon> = {
  "Computer Basic": Monitor,
  "Graphic Design": Palette,
  "Web Design": Globe,
  "Digital Marketing": Megaphone,
};

export default function DepartmentSlider({
  departments,
}: DepartmentSliderProps) {
  const animationDuration = Math.max(departments.length * 4, 24);

  return (
    <div className="department-slider relative border-y border-[#E2E8F0] bg-white">
      {/* Top subtle highlight */}
      <div className="pointer-events-none absolute inset-x-0 top-0 z-20 h-px bg-gradient-to-r from-transparent via-[#EA580C]/20 to-transparent" />

      {/* Left fade */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-white to-transparent sm:w-24 lg:w-32" />

      {/* Right fade */}
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-white to-transparent sm:w-24 lg:w-32" />

      <div className="overflow-hidden">
        <div
          className="department-slider-track flex w-max"
          style={{
            animationDuration: `${animationDuration}s`,
          }}
        >
          {/* First Set */}
          {departments.map((dept) => (
            <DepartmentItem
              key={`first-${dept.id}`}
              department={dept}
            />
          ))}

          {/* Duplicate Set */}
          {departments.map((dept) => (
            <DepartmentItem
              key={`second-${dept.id}`}
              department={dept}
              ariaHidden
            />
          ))}
        </div>
      </div>

      <style jsx>{`
        .department-slider-track {
          animation-name: department-slide;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
          will-change: transform;
        }

        .department-slider:hover .department-slider-track {
          animation-play-state: paused;
        }

        @keyframes department-slide {
          from {
            transform: translateX(0);
          }

          to {
            transform: translateX(-50%);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .department-slider-track {
            animation-play-state: paused;
          }
        }
      `}</style>
    </div>
  );
}

interface DepartmentItemProps {
  department: Department;
  ariaHidden?: boolean;
}

function DepartmentItem({
  department,
  ariaHidden = false,
}: DepartmentItemProps) {
  const Icon =
    departmentIcons[department.title] ?? Monitor;

  return (
    <Link
      href={department.href}
      aria-hidden={ariaHidden}
      tabIndex={ariaHidden ? -1 : undefined}
      className="
        group
        relative
        flex
        h-[76px]
        w-[50vw]
        shrink-0
        items-center
        justify-center
        border-r
        border-[#E2E8F0]
        px-4
        transition-all
        duration-300
        sm:h-[82px]
        sm:w-[33.333vw]
        lg:h-[85px]
        lg:w-[16.666vw]
      "
    >
      {/* Hover Background */}
      <span
        className="
          absolute
          inset-[7px]
          rounded-xl
          bg-[#FFF7F2]
          opacity-0
          scale-[0.97]
          transition-all
          duration-300
          group-hover:scale-100
          group-hover:opacity-100
        "
      />

      {/* Content */}
      <span className="relative z-[1] flex items-center gap-3">
        {/* Icon */}
        <span
          className="
            flex
            h-10
            w-10
            shrink-0
            items-center
            justify-center
            rounded-xl
            border
            border-[#EA580C]/10
            bg-[#FFF7F2]
            text-[#EA580C]
            shadow-sm
            transition-all
            duration-300
            group-hover:-translate-y-0.5
            group-hover:border-[#EA580C]/20
            group-hover:bg-white
            group-hover:shadow-md
            group-hover:shadow-[#EA580C]/10
          "
        >
          <Icon
            className="
              h-[18px]
              w-[18px]
              transition-transform
              duration-300
              group-hover:scale-110
            "
            strokeWidth={1.8}
          />
        </span>

        {/* Service Title */}
        <span
          className="
            max-w-[160px]
            text-left
            text-[13px]
            font-bold
            leading-tight
            text-[#172033]
            transition-colors
            duration-300
            group-hover:text-[#062B52]
            sm:max-w-[190px]
            sm:text-sm
          "
        >
          {department.title}
        </span>

        {/* Soft Arrow */}
        <span
          className="
            ml-1
            hidden
            h-7
            w-7
            shrink-0
            items-center
            justify-center
            rounded-full
            border
            border-[#E2E8F0]
            bg-white
            text-[#94A3B8]
            opacity-0
            translate-x-[-4px]
            transition-all
            duration-300
            group-hover:translate-x-0
            group-hover:border-[#EA580C]/20
            group-hover:text-[#EA580C]
            group-hover:opacity-100
            sm:flex
          "
        >
          <ArrowUpRight className="h-3.5 w-3.5" />
        </span>
      </span>
    </Link>
  );
}