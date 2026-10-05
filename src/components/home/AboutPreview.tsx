import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Calendar,
  Sparkles,
} from "lucide-react";

import { Container } from "@/components/shared/Container";

const highlights = [
  "Practical hands-on computer lab training",
  "Beginner-friendly curriculum for all ages",
  "Career-focused: office work, freelancing, and beyond",
  "Certificate provided on course completion",
];

export function AboutPreview() {
  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-24">
      {/* =========================================================
          BACKGROUND
      ========================================================== */}

      <div className="pointer-events-none absolute -left-48 top-20 h-[420px] w-[420px] rounded-full bg-[#0756A8]/[0.035] blur-3xl" />

      <div className="pointer-events-none absolute -right-48 bottom-0 h-[420px] w-[420px] rounded-full bg-[#F97316]/[0.035] blur-3xl" />

      <Container>
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
          {/* =====================================================
              LEFT - IMAGE COMPOSITION
          ====================================================== */}

          <div className="relative mx-auto w-full max-w-[600px] lg:mx-0">
            {/* Soft background shape */}
            <div className="absolute -inset-5 rounded-[32px] bg-[#EFF7FF]/70 blur-2xl" />

            {/* Decorative corner */}
            <div className="absolute -left-3 -top-3 z-0 h-20 w-20 rounded-2xl border border-[#0756A8]/10 bg-white/70" />

            {/* Main image */}
            <div className="relative z-10 aspect-[4/3] overflow-hidden rounded-[24px] border border-white bg-[#F8FAFC] shadow-[0_20px_60px_rgba(15,23,42,0.12)]">
              <Image
                src="/images/institute/storefront.jpg"
                alt="Talukdar IT & Computer Training Centre building in Prasadpur Bazar, Manda, Naogaon"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 hover:scale-[1.02]"
              />

              {/* Image overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#062B52]/25 via-transparent to-white/5" />

              {/* Established badge */}
              <div className="absolute left-4 top-4 flex items-center gap-3 rounded-2xl border border-white/70 bg-white/95 px-4 py-3 shadow-lg backdrop-blur-md sm:left-5 sm:top-5">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#EFF7FF] text-[#0756A8]">
                  <Calendar className="h-4 w-4" />
                </div>

                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#64748B]">
                    Established
                  </p>

                  <p className="mt-0.5 text-sm font-extrabold text-[#062B52]">
                    20 March 2024
                  </p>
                </div>
              </div>
            </div>

            {/* =====================================================
                INSET CLASSROOM IMAGE
            ====================================================== */}

            <div className="absolute -bottom-9 -right-4 z-20 hidden w-[54%] sm:block lg:-right-8">
              <div className="relative aspect-[4/3] overflow-hidden rounded-[20px] border-[5px] border-white bg-[#F8FAFC] shadow-[0_18px_45px_rgba(15,23,42,0.18)]">
                <Image
                  src="/images/institute/lab-classroom.jpg"
                  alt="Students practicing in computer training lab"
                  fill
                  sizes="30vw"
                  className="object-cover transition-transform duration-700 hover:scale-[1.03]"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#062B52]/30 via-transparent to-transparent" />
              </div>
            </div>

            {/* Floating learning badge */}
            <div className="absolute -bottom-5 left-5 z-30 flex items-center gap-2.5 rounded-xl border border-[#E2E8F0] bg-white px-3.5 py-2.5 shadow-lg sm:left-8">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#FFF7F2] text-[#F97316]">
                <Sparkles className="h-4 w-4" />
              </div>

              <div>
                <p className="text-[10px] font-semibold uppercase tracking-wider text-[#94A3B8]">
                  Learning Approach
                </p>

                <p className="text-xs font-bold text-[#172033]">
                  Practical &amp; Career Focused
                </p>
              </div>
            </div>
          </div>

          {/* =====================================================
              RIGHT - CONTENT
          ====================================================== */}

          <div className="relative lg:pl-2">
            {/* Section label */}
            <div className="mb-5 flex items-center gap-3">


              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#F97316]">
                About Us
              </span>
            </div>

            {/* Heading */}
            <h2 className="max-w-[650px] text-3xl font-extrabold leading-[1.12] tracking-tight text-[#062B52] sm:text-4xl lg:text-[2.8rem]">
              Practical skills for a{" "}
              <span className="text-[#0756A8]">digital future.</span>
            </h2>

            {/* Location */}
            <div className="mt-3 flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#F97316]" />

              <p className="text-sm font-medium text-[#64748B]">
                Talukdar IT &amp; Computer Training Centre · Prasadpur Bazar,
                Manda, Naogaon
              </p>
            </div>

            {/* Description */}
            <p className="mt-6 max-w-[620px] text-sm leading-7 text-[#64748B] sm:text-base">
              We are a local IT and computer training centre committed to
              providing practical, affordable and career-focused digital
              skills training for students, homemakers, job seekers and
              working professionals in Naogaon and surrounding areas.
            </p>

            {/* =====================================================
                HIGHLIGHTS
            ====================================================== */}

            <div className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-3.5">
              {highlights.map((item) => (
                <div
                  key={item}
                  className="group flex items-start gap-3 rounded-xl border border-[#E2E8F0]/80 bg-[#FAFBFD] px-4 py-3.5 transition-all duration-300 hover:border-[#0756A8]/15 hover:bg-white hover:shadow-[0_8px_25px_rgba(15,23,42,0.06)]"
                >
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#ECFDF3] text-[#16A34A]">
                    <CheckCircle2 className="h-3.5 w-3.5" />
                  </span>

                  <span className="text-[13px] font-medium leading-5 text-[#172033]">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* =====================================================
                CTA
            ====================================================== */}

            <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
              <Link
                href="/about"
                className="group inline-flex items-center gap-2.5 rounded-lg bg-[#0756A8] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_8px_24px_rgba(7,86,168,0.18)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#062B52] hover:shadow-[0_12px_28px_rgba(7,86,168,0.22)]"
              >
                Learn More About Us

                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              <span className="text-xs font-medium text-[#94A3B8]">
                Learn practical skills. Build your future.
              </span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}