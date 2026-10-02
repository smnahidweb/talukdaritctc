import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Calendar } from "lucide-react";
import { Container } from "@/components/shared/Container";

const highlights = [
  "Practical hands-on computer lab training",
  "Beginner-friendly curriculum for all ages",
  "Career-focused: office work, freelancing, and beyond",
  "Certificate provided on course completion",
];

export function AboutPreview() {
  return (
    <section className="py-10 sm:py-14 bg-white border-b border-[#E2E8F0]">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          {/* Left: Photos */}
          <div className="relative">
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-md border border-[#E2E8F0] bg-slate-100">
              <Image
                src="/images/institute/storefront.jpg"
                alt="Talukdar IT & Computer Training Centre building in Prasadpur Bazar, Manda, Naogaon"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>

            {/* Inset classroom photo */}
            <div className="hidden sm:block absolute -bottom-6 -right-5 w-3/5 aspect-[4/3] rounded-xl overflow-hidden shadow-xl border-4 border-white bg-slate-100">
              <Image
                src="/images/institute/lab-classroom.jpg"
                alt="Students practicing in computer training lab"
                fill
                sizes="30vw"
                className="object-cover"
              />
            </div>

            {/* Established badge */}
            <div className="absolute -top-3 left-4 bg-white/95 backdrop-blur-xs px-4 py-2 rounded-xl border border-[#E2E8F0] shadow-sm flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-lg bg-[#EFF7FF] text-[#0756A8] flex items-center justify-center">
                <Calendar className="w-4 h-4" />
              </div>
              <div>
                <p className="text-[11px] text-[#64748B] font-medium leading-none mb-0.5">Established</p>
                <p className="text-sm font-extrabold text-[#0756A8] leading-none">20 March 2024</p>
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div className="space-y-5 pb-6 sm:pb-0">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-[#F97316] mb-2">
                ABOUT US
              </p>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#062B52] leading-tight">
                Talukdar IT &amp; Computer Training Centre
              </h2>
              <p className="mt-1 text-sm font-medium text-[#64748B]">
                Prasadpur Bazar, Manda, Naogaon
              </p>
            </div>

            <p className="text-sm sm:text-base text-[#64748B] leading-relaxed">
              We are a local IT and computer training centre committed to providing practical, affordable and career-focused digital skills training for students, homemakers, job seekers and working professionals in Naogaon and surrounding areas.
            </p>

            <div className="space-y-2.5">
              {highlights.map((item, i) => (
                <div key={i} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4.5 h-4.5 text-[#16A34A] shrink-0 mt-0.5" />
                  <span className="text-sm text-[#172033] font-medium">{item}</span>
                </div>
              ))}
            </div>

            <Link
              href="/about"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-[#0756A8] hover:bg-[#062B52] text-white font-semibold transition-colors text-sm"
            >
              Learn More About Us
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
