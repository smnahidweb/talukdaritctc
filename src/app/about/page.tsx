import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  ShieldCheck,
  Target,
  Users,
} from "lucide-react";

import { Container } from "@/components/shared/Container";
import { Section } from "@/components/shared/Section";
import { PageHeader } from "@/components/shared/PageHeader";
import { siteConfig } from "@/data/site";
import { MentorSection } from "@/components/home/MentorSection";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Talukdar IT & Computer Training Centre, our mission, practical training approach, and commitment to quality IT education.",
};

const values = [
  {
    number: "01",
    icon: ShieldCheck,
    title: "Integrity & Trust",
    description:
      "Honest guidance and a learning environment built around trust.",
    iconClass: "bg-brand-blue-light text-primary",
  },
  {
    number: "02",
    icon: Users,
    title: "Student Focus",
    description:
      "Personal attention that helps every learner progress with confidence.",
    iconClass: "bg-accent-light text-accent",
  },
  {
    number: "03",
    icon: Target,
    title: "Career Readiness",
    description:
      "Practical skills designed for real workplace and freelance opportunities.",
    iconClass: "bg-green-50 text-brand-success",
  },
  {
    number: "04",
    icon: BookOpen,
    title: "Continual Support",
    description:
      "Guidance that continues beyond the classroom and course completion.",
    iconClass: "bg-navy text-white",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Page Header */}
      <PageHeader
        badge="About The Institute"
        title="Building Practical Skills for a Digital Future"
        description="Talukdar IT & Computer Training Centre is committed to helping students, job seekers, and professionals develop practical computer skills that create real opportunities."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About Us" },
        ]}
      />

      {/* -------------------------------------------------
          WHO WE ARE
      ------------------------------------------------- */}
      <Section background="surface">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
            {/* Image */}
            <div className="relative">
              <div className="relative overflow-hidden rounded-[28px]">
                <Image
                  src="/images/institute/lab-classroom.jpg"
                  alt="Instructor at Talukdar IT & Computer Training Centre"
                  width={900}
                  height={700}
                  className="h-[420px] w-full object-cover sm:h-[500px]"
                />

                {/* Image overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
              </div>

              {/* Floating information */}
              <div className="absolute -bottom-6 right-5 rounded-2xl border border-brand-border bg-white p-4 shadow-[0_15px_40px_rgba(15,23,42,0.10)] sm:right-8 sm:p-5">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent-light">
                    <CheckCircle2 className="h-5 w-5 text-accent" />
                  </div>

                  <div>
                    <p className="text-sm font-bold text-brand-text">
                      Practical Learning
                    </p>
                    <p className="mt-0.5 text-xs text-brand-muted">
                      Learn by doing
                    </p>
                  </div>
                </div>
              </div>

              {/* Decorative accent */}
              <div className="absolute -left-3 -top-3 h-16 w-16 rounded-tl-[20px] border-l-2 border-t-2 border-accent sm:-left-5 sm:-top-5" />
            </div>

            {/* Content */}
            <div>
              <div className="flex items-center gap-3">


                <span className="text-xs font-bold uppercase tracking-[0.18em] text-accent">
                  Who We Are
                </span>
              </div>

              <h2 className="mt-5 text-3xl font-bold leading-tight tracking-tight text-brand-text sm:text-4xl lg:text-[42px]">
                More than a training centre.{" "}
                <span className="text-primary">
                  A place to build confidence.
                </span>
              </h2>

              <p className="mt-6 text-sm leading-7 text-brand-muted sm:text-base sm:leading-8">
                At {siteConfig.name}, we believe technology becomes meaningful
                when people can use it confidently in real situations.
              </p>

              <p className="mt-4 text-sm leading-7 text-brand-muted sm:text-base sm:leading-8">
                Our programs combine structured lessons with hands-on
                workstation practice, helping learners turn knowledge into
                practical ability.
              </p>

              {/* Highlights */}
              <div className="mt-8 grid gap-4 border-t border-brand-border pt-7 sm:grid-cols-2">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-success" />

                  <div>
                    <p className="text-sm font-bold text-brand-text">
                      Practical Classes
                    </p>
                    <p className="mt-1 text-xs leading-5 text-brand-muted">
                      Hands-on learning from the beginning.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-success" />

                  <div>
                    <p className="text-sm font-bold text-brand-text">
                      Individual Attention
                    </p>
                    <p className="mt-1 text-xs leading-5 text-brand-muted">
                      Support that keeps learners moving forward.
                    </p>
                  </div>
                </div>
              </div>

              <Link
                href="/courses"
                className="group mt-8 inline-flex items-center gap-2 text-sm font-bold text-primary transition-colors hover:text-accent"
              >
                Explore Our Courses

                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </Container>
      </Section>

      {/* -------------------------------------------------
          MISSION
      ------------------------------------------------- */}
      <section className="relative overflow-hidden bg-brand-bg py-20 sm:py-24 lg:py-28">
        <Container>
          <div className="relative overflow-hidden rounded-[28px] border border-brand-blue-border bg-white">
            <div className="grid lg:grid-cols-[0.85fr_1.15fr]">
              {/* Label panel */}
              <div className="relative overflow-hidden bg-primary p-8 text-white sm:p-10 lg:p-12">
                <div className="absolute -bottom-20 -right-20 h-52 w-52 rounded-full bg-white/[0.06]" />

                <div className="relative">
                  <span className="text-xs font-bold uppercase tracking-[0.18em] text-blue-200">
                    Our Mission
                  </span>

                  <div className="mt-8 text-7xl font-bold tracking-[-0.06em] text-white/90 sm:text-8xl">
                    01
                  </div>

                  <div className="mt-8 h-px w-12 bg-orange-300" />

                  <p className="mt-5 max-w-xs text-sm leading-7 text-blue-100">
                    Making practical IT education accessible to learners who
                    want skills they can actually use.
                  </p>
                </div>
              </div>

              {/* Statement */}
              <div className="flex items-center p-8 sm:p-10 lg:p-14">
                <div>
                  <h2 className="max-w-3xl text-3xl font-bold leading-tight tracking-tight text-brand-text sm:text-4xl lg:text-[42px]">
                    We do not just teach technology.{" "}
                    <span className="text-primary">
                      We help people become confident using it.
                    </span>
                  </h2>

                  <p className="mt-6 max-w-2xl text-sm leading-7 text-brand-muted sm:text-base sm:leading-8">
                    From computer fundamentals to professional digital skills,
                    our approach is simple: understand the concept, practice
                    it properly, and build the confidence to use it in the
                    real world.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* -------------------------------------------------
          VALUES
      ------------------------------------------------- */}
      <Section background="surface">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-end lg:gap-20">
            {/* Heading */}
            <div>
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-accent" />

                <span className="text-xs font-bold uppercase tracking-[0.18em] text-accent">
                  What We Value
                </span>
              </div>

              <h2 className="mt-5 text-3xl font-bold leading-tight tracking-tight text-brand-text sm:text-4xl">
                The principles behind{" "}
                <span className="text-primary">our training.</span>
              </h2>

              <p className="mt-5 max-w-md text-sm leading-7 text-brand-muted">
                Everything we do is guided by a simple goal: help learners
                become capable, confident, and ready for what comes next.
              </p>
            </div>

            {/* Values */}
            <div className="grid overflow-hidden rounded-[24px] border border-brand-border sm:grid-cols-2">
              {values.map((value, index) => {
                const Icon = value.icon;

                return (
                  <div
                    key={value.number}
                    className={`group bg-white p-6 transition-colors duration-300 hover:bg-brand-bg sm:p-7 ${index < 2 ? "border-b border-brand-border" : ""
                      } ${index % 2 === 0
                        ? "sm:border-r sm:border-brand-border"
                        : ""
                      }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold tracking-[0.15em] text-brand-muted">
                        {value.number}
                      </span>

                      <div
                        className={`flex h-10 w-10 items-center justify-center rounded-xl ${value.iconClass}`}
                      >
                        <Icon className="h-5 w-5" strokeWidth={1.7} />
                      </div>
                    </div>

                    <h3 className="mt-8 text-lg font-bold text-brand-text">
                      {value.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-brand-muted">
                      {value.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </Container>
      </Section>

      <section>

        <MentorSection />

      </section>

      {/* -------------------------------------------------
          CLOSING
      ------------------------------------------------- */}
      <section className="border-t border-brand-border bg-brand-bg py-16 sm:py-20">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-accent">
              Start Your Journey
            </span>

            <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-brand-text sm:text-4xl">
              Ready to build your{" "}
              <span className="text-primary">next skill?</span>
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-brand-muted sm:text-base">
              Explore our practical courses and find a program that matches
              your learning goals.
            </p>

            <Link
              href="/courses"
              className="group mt-7 inline-flex items-center gap-2 rounded-xl bg-accent px-6 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent-hover"
            >
              Explore Courses

              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </Container>
      </section>

    </>
  );
}