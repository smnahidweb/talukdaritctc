import * as React from "react";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

import { siteConfig } from "@/data/site";
import { Container } from "@/components/shared/Container";

export function DemoCTA() {
  return (
    <section className="bg-brand-bg py-16 sm:py-20 lg:py-24">
      <Container>
        <div className="relative overflow-hidden rounded-[28px] border border-brand-blue-border bg-brand-blue-light px-6 py-12 sm:px-10 sm:py-14 lg:px-16 lg:py-16">
          {/* Subtle decorative accent */}
          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#F97316]/[0.07] blur-3xl" />

          <div className="pointer-events-none absolute -bottom-24 -left-20 h-64 w-64 rounded-full bg-primary/[0.06] blur-3xl" />

          {/* Small accent line */}
          <div className="absolute left-0 top-0 h-1 w-28 rounded-br-full bg-accent" />

          <div className="relative mx-auto max-w-3xl text-center">
            {/* Eyebrow */}
            <div className="mb-5 inline-flex items-center gap-2">
              <Sparkles
                className="h-4 w-4 text-accent"
                strokeWidth={1.8}
              />

              <span className="text-xs font-bold uppercase tracking-[0.18em] text-accent">
                Free Demo Class
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl font-bold leading-tight tracking-tight text-brand-text sm:text-4xl lg:text-[44px]">
              Not Sure Which Course{" "}
              <span className="text-primary">Is Right For You?</span>
            </h2>

            {/* Description */}
            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-brand-muted sm:text-base sm:leading-8">
              Join our free demo class and experience our practical training
              approach before choosing the course that fits your goals.
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              {/* Primary CTA */}
              <Link
                href="/admission"
                className="group inline-flex w-full items-center justify-center gap-2.5 rounded-xl bg-orange-100 px-7 py-3.5 text-sm font-bold text-orange-700 ring-1 ring-inset ring-orange-200 transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent hover:text-white hover:ring-accent sm:w-auto"
              >
                Apply for Free Demo

                <ArrowRight
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                  strokeWidth={2}
                />
              </Link>

              {/* Secondary CTA */}
              <Link
                href="/courses"
                className="group inline-flex w-full items-center justify-center gap-2.5 rounded-xl border border-brand-blue-border bg-white px-7 py-3.5 text-sm font-semibold text-primary transition-all duration-300 hover:-translate-y-0.5 hover:border-primary hover:bg-primary hover:text-white sm:w-auto"
              >
                Explore Courses

                <ArrowRight
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                  strokeWidth={1.8}
                />
              </Link>
            </div>

            {/* Trust details */}
            <div className="mt-7 flex flex-col items-center justify-center gap-2 text-xs text-brand-muted sm:flex-row sm:gap-3">
              <span>Free demo class</span>

              <span className="hidden h-1 w-1 rounded-full bg-brand-border sm:block" />

              <span>Practical learning environment</span>

              <span className="hidden h-1 w-1 rounded-full bg-brand-border sm:block" />

              <a
                href={`tel:${siteConfig.contact.phone}`}
                className="font-medium text-primary transition-colors hover:text-accent"
              >
                {siteConfig.contact.phoneDisplay}
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}