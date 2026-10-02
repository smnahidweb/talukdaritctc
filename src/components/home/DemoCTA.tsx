import * as React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { siteConfig } from "@/data/site";
import { Container } from "@/components/shared/Container";

export function DemoCTA() {
  return (
    <section className="py-12 sm:py-16 bg-gradient-to-r from-[#062B52] via-[#0756A8] to-[#062B52]">
      <Container>
        <div className="max-w-3xl mx-auto text-center space-y-5">
          {/* Eyebrow */}
          <div className="text-xs font-bold uppercase tracking-widest text-[#F97316]">
            FREE DEMO CLASS
          </div>

          {/* Headline — exact from mockup */}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight">
            Not Sure Which Course Is Right For You?
          </h2>

          {/* Subtext */}
          <p className="text-sm sm:text-base text-blue-100 leading-relaxed max-w-xl mx-auto">
            Join our free demo class or seminar and discover how our practical training can help you build your digital skills.
          </p>

          {/* Dual CTA buttons — exact from mockup */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <Link
              href="/admission"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg bg-[#F97316] hover:bg-[#EA580C] text-white font-bold shadow-xs transition-colors w-full sm:w-auto"
            >
              Apply for Demo Class
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/forum"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg bg-transparent hover:bg-white/10 text-white font-semibold border border-white/30 transition-colors w-full sm:w-auto"
            >
              Join Free Seminar
            </Link>
          </div>

          {/* Trust note */}
          <p className="text-xs text-blue-200 pt-1">
            {siteConfig.contact.workingHours} &middot;{" "}
            <a
              href={`tel:${siteConfig.contact.phone}`}
              className="hover:text-white transition-colors"
            >
              {siteConfig.contact.phoneDisplay}
            </a>
          </p>
        </div>
      </Container>
    </section>
  );
}
