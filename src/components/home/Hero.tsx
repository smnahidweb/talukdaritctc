"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  GraduationCap,
  Users,
} from "lucide-react";

import { Container } from "@/components/shared/Container";
import { departments } from "@/data/content";
import DepartmentSlider from "./DepartmentSlider";

const rotatingWords = ["Skills", "Career", "Future"];

export function Hero() {
  const [activeWord, setActiveWord] = React.useState(0);
  const [visible, setVisible] = React.useState(true);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);

      setTimeout(() => {
        setActiveWord(
          (current) => (current + 1) % rotatingWords.length
        );
        setVisible(true);
      }, 250);
    }, 2600);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="flex min-h-[100svh] flex-col overflow-hidden bg-white sm:h-[85svh] sm:min-h-[620px]">
      {/* =========================================================
          HERO AREA
      ========================================================== */}
      <div className="relative min-h-0 flex-1">
        {/* Main Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#EFF7FF] via-white to-white" />

        {/* Decorative Blue Glow */}
        <div className="absolute -left-40 -top-40 h-[400px] w-[400px] rounded-full bg-[#0756A8]/10 blur-3xl" />

        {/* Decorative Orange Glow */}
        <div className="absolute -bottom-40 -right-40 h-[500px] w-[500px] rounded-full bg-[#F97316]/10 blur-3xl" />

        {/* Soft Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: `
              linear-gradient(
                90deg,
                rgba(7, 86, 168, 0.18) 1px,
                transparent 1px
              ),
              linear-gradient(
                0deg,
                rgba(7, 86, 168, 0.18) 1px,
                transparent 1px
              )
            `,
            backgroundSize: "80px 80px",
            maskImage:
              "radial-gradient(circle at center, black 0%, rgba(0,0,0,0.65) 45%, transparent 85%)",
            WebkitMaskImage:
              "radial-gradient(circle at center, black 0%, rgba(0,0,0,0.65) 45%, transparent 85%)",
          }}
        />

        <Container className="h-full">
          {/* 
            Desktop:
            - vertically centered
            - comfortable top/bottom breathing room

            Mobile:
            - extra top padding for navbar
            - slightly tighter spacing
          */}
          <div className="relative z-10 flex h-full items-center pt-20 pb-8 sm:py-10 lg:py-12">
            <div className="grid w-full grid-cols-1 items-center gap-8 sm:gap-10 lg:grid-cols-2 lg:gap-12">
              {/* =====================================================
                  LEFT CONTENT
              ====================================================== */}
              <div className="max-w-2xl">
                {/* Eyebrow */}
                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#0756A8]/15 bg-white px-3.5 py-1.5 text-xs font-semibold text-[#0756A8] shadow-sm sm:mb-5 sm:px-4 sm:py-2 sm:text-sm">
                  <GraduationCap className="h-4 w-4" />
                  Practical IT & Computer Training
                </div>

                {/* Heading */}
                <h1 className="max-w-[680px] text-[1.9rem] font-extrabold leading-[1.08] tracking-tight text-[#062B52] sm:text-5xl lg:text-[3.6rem] xl:text-[4.2rem]">
                  Build Your{" "}
                  <span
                    className="inline-block text-[#F97316]"
                    style={{
                      opacity: visible ? 1 : 0,
                      transform: visible
                        ? "translateY(0)"
                        : "translateY(12px)",
                      transition:
                        "opacity 250ms ease, transform 250ms ease",
                    }}
                  >
                    {rotatingWords[activeWord]}
                  </span>
                  <br />
                  Shape Your Future.
                </h1>

                {/* Description */}
                <p className="mt-4 max-w-[550px] text-xs leading-5 text-[#64748B] sm:mt-5 sm:text-base sm:leading-7 lg:text-lg">
                  Build practical digital skills through career-focused IT and
                  computer training for education, employment, freelancing and
                  professional growth.
                </p>

                {/* CTA Buttons */}
                <div className="mt-5 flex flex-col gap-2.5 sm:mt-7 sm:flex-row sm:gap-3">
                  <Link
                    href="/courses"
                    className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#0756A8] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-[#0756A8]/20 transition-all duration-300 hover:bg-[#062B52] hover:shadow-xl sm:px-6 sm:py-3.5 sm:text-base"
                  >
                    Explore Our Courses
                    <ArrowRight className="h-4 w-4" />
                  </Link>

                  <Link
                    href="/admission"
                    className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#F97316] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-[#F97316]/20 transition-all duration-300 hover:bg-[#EA580C] hover:shadow-xl sm:px-6 sm:py-3.5 sm:text-base"
                  >
                    <BookOpen className="h-4 w-4" />
                    Admission Information
                  </Link>
                </div>

                {/* Feature Highlights */}
                <div className="mt-5 flex flex-wrap gap-4 text-xs text-[#64748B] sm:mt-7 sm:gap-5 sm:text-sm">
                  {/* Practical Learning */}
                  <div className="flex items-center gap-2">
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#EFF7FF] text-[#0756A8] sm:h-8 sm:w-8">
                      <GraduationCap className="h-4 w-4" />
                    </span>

                    <span>Practical Learning</span>
                  </div>

                  {/* Career Focused */}
                  <div className="flex items-center gap-2">
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#FFF3E8] text-[#F97316] sm:h-8 sm:w-8">
                      <Users className="h-4 w-4" />
                    </span>

                    <span>Career Focused</span>
                  </div>
                </div>
              </div>

              {/* =====================================================
                  RIGHT IMAGE
              ====================================================== */}
              <div className="relative mx-auto w-full max-w-[580px] lg:ml-auto">
                {/* Image Glow */}
                <div className="absolute -inset-4 rounded-[28px] bg-[#0756A8]/10 blur-3xl sm:-inset-5" />

                {/* Back Layer */}
                <div className="absolute -right-2 -top-2 h-full w-full rounded-[20px] border border-[#0756A8]/10 bg-[#EFF7FF] sm:-right-3 sm:-top-3 sm:rounded-[24px]" />

                {/* Main Image */}
                <div className="relative aspect-[16/9] overflow-hidden rounded-[20px] border-4 border-white bg-[#F8FAFC] shadow-2xl sm:aspect-[4/3] sm:rounded-[24px]">
                  <Image
                    src="/images/hero/hero-lab.jpg"
                    alt="Students learning computer skills at Talukdar IT & Computer Training Centre"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />

                  {/* Image Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#062B52]/25 via-transparent to-transparent" />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* =========================================================
          DEPARTMENT SLIDER
          Mobile gets a small breathing gap.
          Desktop stays directly connected.
      ========================================================== */}
      <div className="mt-3 h-[68px] shrink-0 sm:mt-0 sm:h-[76px] lg:h-[85px]">
        <DepartmentSlider departments={departments} />
      </div>
    </section>
  );
}