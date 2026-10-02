import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { Container } from "@/components/shared/Container";

export function FeaturedCourse() {
  const featuredHighlights = [
    "Practical Courses",
    "Experienced Trainers",
    "Certificate Support",
    "Career Guidance",
  ];

  return (
    <section className="py-0">
      <div className="bg-gradient-to-r from-[#062B52] via-[#0756A8] to-[#0B74D1] relative overflow-hidden">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 lg:gap-10 items-center">
            {/* Left Column: Content */}
            <div className="lg:col-span-7 py-12 sm:py-16 lg:py-20 space-y-5">
              {/* Eyebrow label */}
              <div className="inline-block text-xs font-bold uppercase tracking-widest text-[#F97316] bg-white/10 px-3.5 py-1 rounded-full border border-white/15">
                OUR BEST SELLING COURSE
              </div>

              {/* Headline */}
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight">
                Build Your Computer Skills{" "}
                <span className="text-[#F97316]">With Practical Training</span>
              </h2>

              {/* Description */}
              <p className="text-sm sm:text-base text-blue-100 leading-relaxed max-w-xl">
                Join our most popular courses and develop the skills you need for education, employment, freelancing and everyday work.
              </p>

              {/* 4 Feature bullets in 2x2 grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                {featuredHighlights.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 text-sm text-slate-100"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#38BDF8] shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <Link
                  href="/admission"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-[#F97316] hover:bg-[#EA580C] text-white font-bold shadow-xs transition-colors"
                >
                  Enroll Now
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/admission"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-white/10 hover:bg-white/20 text-white font-semibold border border-white/20 transition-colors"
                >
                  Apply for Demo Class
                </Link>
              </div>
            </div>

            {/* Right Column: Authentic student photo */}
            <div className="hidden lg:block lg:col-span-5 relative self-stretch">
              <div className="absolute inset-0">
                <Image
                  src="/images/hero/featured-student.jpg"
                  alt="A student practicing computer skills at Talukdar IT training centre"
                  fill
                  sizes="40vw"
                  className="object-cover object-center"
                  style={{ objectPosition: "center top" }}
                />
                {/* Gradient overlay to blend into section */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#0756A8]/60 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}
