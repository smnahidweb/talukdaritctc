import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { Briefcase, Laptop, Code, Building2, Store, Home, ArrowRight } from "lucide-react";
import { careerPathways } from "@/data/career";
import { Container } from "@/components/shared/Container";

const iconMap = {
  Briefcase: Briefcase,
  Laptop: Laptop,
  Code: Code,
  Building: Building2,
  Store: Store,
  Home: Home,
};

export function CareerOpportunities() {
  return (
    <section className="py-12 sm:py-16 bg-white border-b border-[#E2E8F0]">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Content */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <div className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#F97316]">
                CAREER OPPORTUNITIES
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-extrabold text-[#062B52] tracking-tight leading-tight">
                Turn Your Skills Into Career Opportunities
              </h2>
            </div>

            <p className="text-sm sm:text-base text-[#64748B] leading-relaxed">
              Computer and IT skills can open many opportunities in today&apos;s world. Learn the practical skills and prepare for a successful career.
            </p>

            {/* Career Pathway Icon Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {careerPathways.map((path) => {
                const IconComp = iconMap[path.iconName] ?? Briefcase;
                return (
                  <div
                    key={path.id}
                    className="flex items-center gap-3 p-3.5 rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] hover:border-[#0756A8]/40 hover:bg-[#EFF7FF] transition-all duration-150"
                  >
                    <div className="w-9 h-9 rounded-lg bg-[#EFF7FF] border border-[#D0E7FF] flex items-center justify-center shrink-0">
                      <IconComp className="w-4.5 h-4.5 text-[#0756A8]" />
                    </div>
                    <span className="text-sm font-semibold text-[#062B52]">
                      {path.title}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* CTA */}
            <div className="pt-2">
              <Link
                href="/career"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#F97316] hover:bg-[#EA580C] text-white font-bold shadow-xs transition-colors"
              >
                Start Learning Today
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Right Column: Photo of career-going student */}
          <div className="hidden lg:block lg:col-span-5">
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-lg border-2 border-white bg-slate-100">
              <Image
                src="/images/career/career-student.jpg"
                alt="A confident student ready to pursue a career after Talukdar IT training"
                fill
                sizes="40vw"
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
