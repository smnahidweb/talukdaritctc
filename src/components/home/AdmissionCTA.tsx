import * as React from "react";
import Link from "next/link";
import { Container } from "@/components/shared/Container";

export function AdmissionCTA() {
  return (
    <section className="pt-10 sm:pt-14 pb-8 sm:pb-12 bg-[#062B52]">
      <Container>
        {/* Heading block — matches rayhansict.com footer-top CTA */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white uppercase tracking-tight">
            Admission Is Going On
          </h2>
          <div className="w-12 h-1 bg-[#F97316] rounded-full mx-auto" />
          <p className="text-sm sm:text-base text-blue-200 leading-relaxed max-w-xl mx-auto">
            Enrollment is currently open, offering practical training for individuals eager to develop their digital skills and advance their career.
          </p>

          {/* Three CTA buttons — matches rayhansict.com footer-top */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
            <Link
              href="/admission"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md bg-[#F97316] hover:bg-[#EA580C] text-white font-bold shadow-sm transition-colors w-full sm:w-auto"
            >
              Apply For Demo Class
            </Link>
            <Link
              href="/courses"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md border border-white/30 hover:bg-white/10 text-white font-semibold transition-colors w-full sm:w-auto"
            >
              Our Courses
            </Link>
            <Link
              href="/forum"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md bg-white/10 hover:bg-white/20 text-white font-semibold transition-colors w-full sm:w-auto"
            >
              Join Free Seminar
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
