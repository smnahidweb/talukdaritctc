"use client";

import Link from "next/link";
import { BookOpen } from "lucide-react";

interface Department {
    id: string | number;
    title: string;
    href: string;
}

interface DepartmentSliderProps {
    departments: Department[];
}

export default function DepartmentSlider({
    departments,
}: DepartmentSliderProps) {
    const animationDuration = Math.max(departments.length * 3, 18);

    return (
        <div className="department-slider border-y border-[#E2E8F0] bg-[#F8FAFC]">
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
    return (
        <Link
            href={department.href}
            aria-hidden={ariaHidden}
            tabIndex={ariaHidden ? -1 : undefined}
            className="
        group
        flex
        h-[85px]
        w-[50vw]
        shrink-0
        flex-col
        items-center
        justify-center
        gap-2
        border-r
        border-[#E2E8F0]
        px-3
        text-center
        transition
        hover:bg-[#EFF7FF]
        sm:w-[33.333vw]
        lg:w-[16.666vw]
      "
        >
            <BookOpen className="h-5 w-5 text-[#0756A8] transition-transform duration-300 group-hover:scale-110" />

            <span className="text-xs font-semibold leading-tight text-[#172033] transition-colors group-hover:text-[#0756A8]">
                {department.title}
            </span>
        </Link>
    );
}