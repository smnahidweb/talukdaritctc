import * as React from "react";
import Image from "next/image";
import { mentorsData } from "@/data/content";
import { Container } from "@/components/shared/Container";

export function MentorSection() {
  return (
    <section className="py-10 sm:py-14 bg-white border-b border-[#E2E8F0]">
      <Container>
        {/* Section heading */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#062B52] uppercase tracking-tight">
            Meet Our Trainers
          </h2>
          <div className="w-12 h-1 bg-[#F97316] rounded-full mx-auto mt-3 mb-4" />
          <p className="text-sm sm:text-base text-[#64748B] leading-relaxed">
            Introducing our dedicated team of experienced trainers, ready to guide and inspire you on your learning journey.
          </p>
        </div>

        {/* Mentor Cards — centered, circular photos like rayhansict.com */}
        <div className="flex flex-wrap justify-center gap-6 sm:gap-10">
          {mentorsData.map((mentor) => (
            <div
              key={mentor.id}
              className="flex flex-col items-center text-center w-40 sm:w-48 space-y-3"
            >
              {/* Circular photo */}
              <div className="relative w-28 h-28 sm:w-36 sm:h-36 rounded-full overflow-hidden border-4 border-[#0756A8]/20 shadow-md bg-slate-100">
                <Image
                  src={mentor.image}
                  alt={mentor.name}
                  fill
                  sizes="144px"
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="text-sm sm:text-base font-bold text-[#062B52]">
                  {mentor.name}
                </h3>
                <p className="text-xs text-[#0756A8] font-medium mt-0.5">
                  {mentor.title}
                </p>
                <p className="text-xs text-[#64748B] mt-0.5 leading-snug">
                  {mentor.department}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
