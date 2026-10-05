import Link from "next/link";
import {
    ArrowDown,
    ArrowRight,
    BookOpen,
    CheckCircle2,
    Monitor,
    Sparkles,
} from "lucide-react";

import { Container } from "@/components/shared/Container";

export function CoursesHero() {
    return (
        <section className="relative overflow-hidden border-b border-brand-border bg-brand-bg">
            {/* Background */}
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute -right-40 -top-32 h-[420px] w-[420px] rounded-full bg-primary/[0.055] blur-3xl" />

                <div className="absolute -bottom-40 left-1/3 h-[320px] w-[320px] rounded-full bg-accent/[0.045] blur-3xl" />

                <div
                    className="absolute right-0 top-0 h-full w-[45%] opacity-[0.3]"
                    style={{
                        backgroundImage:
                            "linear-gradient(rgba(7,86,168,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(7,86,168,0.045) 1px, transparent 1px)",
                        backgroundSize: "44px 44px",
                    }}
                />
            </div>

            <Container>
                <div className="relative grid min-h-[560px] items-center gap-12 py-16 sm:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:py-24">
                    {/* Left Content */}
                    <div className="max-w-2xl">
                        {/* Eyebrow */}
                        <div className="mb-6 flex items-center gap-3">

                            <span className="text-xs font-bold uppercase tracking-[0.18em] text-accent">
                                Academic Programs
                            </span>
                        </div>

                        {/* Heading */}
                        <h1 className="text-4xl font-bold leading-[1.1] tracking-[-0.03em] text-brand-text sm:text-5xl lg:text-[56px] xl:text-[62px]">
                            Practical skills for a{" "}
                            <span className="text-primary">digital future.</span>
                        </h1>

                        {/* Description */}
                        <p className="mt-6 max-w-xl text-sm leading-7 text-brand-muted sm:text-base sm:leading-8">
                            Explore practical computer and IT courses designed to help you
                            learn confidently, build useful skills, and prepare for real
                            opportunities.
                        </p>

                        {/* Actions */}
                        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                            <Link
                                href="#courses"
                                className="group inline-flex items-center justify-center gap-2.5 rounded-xl bg-primary px-6 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary-hover"
                            >
                                Explore Courses
                                <ArrowDown
                                    className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-1"
                                    strokeWidth={2}
                                />
                            </Link>

                            <Link
                                href="/admission"
                                className="group inline-flex items-center justify-center gap-2.5 rounded-xl border border-brand-border bg-white px-6 py-3.5 text-sm font-semibold text-brand-text transition-all duration-300 hover:-translate-y-0.5 hover:border-primary hover:text-primary"
                            >
                                Get Started
                                <ArrowRight
                                    className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                                    strokeWidth={1.8}
                                />
                            </Link>
                        </div>

                        {/* Trust Points */}
                        <div className="mt-9 flex flex-wrap gap-x-6 gap-y-3 border-t border-brand-border pt-6">
                            <div className="flex items-center gap-2">
                                <CheckCircle2 className="h-4 w-4 text-brand-success" />
                                <span className="text-xs font-medium text-brand-muted">
                                    Hands-on Training
                                </span>
                            </div>

                            <div className="flex items-center gap-2">
                                <CheckCircle2 className="h-4 w-4 text-brand-success" />
                                <span className="text-xs font-medium text-brand-muted">
                                    Practical Projects
                                </span>
                            </div>

                            <div className="flex items-center gap-2">
                                <CheckCircle2 className="h-4 w-4 text-brand-success" />
                                <span className="text-xs font-medium text-brand-muted">
                                    Course Certificate
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Right Visual */}
                    <div className="relative mx-auto w-full max-w-[500px] lg:ml-auto">
                        {/* Main Visual */}
                        <div className="relative overflow-hidden rounded-[28px] border border-brand-blue-border bg-white p-5 shadow-[0_25px_70px_rgba(15,23,42,0.08)] sm:p-6">
                            {/* Top */}
                            <div className="flex items-center justify-between border-b border-brand-border pb-5">
                                <div className="flex items-center gap-3">
                                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-blue-light">
                                        <BookOpen
                                            className="h-5 w-5 text-primary"
                                            strokeWidth={1.7}
                                        />
                                    </div>

                                    <div>
                                        <p className="text-sm font-bold text-brand-text">
                                            Our Courses
                                        </p>
                                        <p className="mt-0.5 text-xs text-brand-muted">
                                            Learn. Practice. Grow.
                                        </p>
                                    </div>
                                </div>

                                <Sparkles
                                    className="h-5 w-5 text-accent"
                                    strokeWidth={1.7}
                                />
                            </div>

                            {/* Course Preview */}
                            <div className="mt-5 space-y-3">
                                <div className="rounded-2xl border border-brand-border bg-[#F2F7FF] p-4">
                                    <div className="flex items-center gap-3">
                                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-primary">
                                            <Monitor className="h-5 w-5" strokeWidth={1.7} />
                                        </div>

                                        <div className="min-w-0">
                                            <p className="text-sm font-bold text-brand-text">
                                                Computer & Office
                                            </p>
                                            <p className="mt-0.5 text-xs text-brand-muted">
                                                Build your digital foundation
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="rounded-2xl border border-orange-100 bg-[#FFF7EF] p-4">
                                    <div className="flex items-center gap-3">
                                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-accent">
                                            <Sparkles className="h-5 w-5" strokeWidth={1.7} />
                                        </div>

                                        <div className="min-w-0">
                                            <p className="text-sm font-bold text-brand-text">
                                                Graphic Design
                                            </p>
                                            <p className="mt-0.5 text-xs text-brand-muted">
                                                Turn creativity into practical skills
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="rounded-2xl border border-emerald-100 bg-[#F1FBF5] p-4">
                                    <div className="flex items-center gap-3">
                                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-brand-success">
                                            <CheckCircle2 className="h-5 w-5" strokeWidth={1.7} />
                                        </div>

                                        <div className="min-w-0">
                                            <p className="text-sm font-bold text-brand-text">
                                                Web & Digital Skills
                                            </p>
                                            <p className="mt-0.5 text-xs text-brand-muted">
                                                Learn skills for real opportunities
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Bottom */}
                            <div className="mt-5 flex items-center justify-between border-t border-brand-border pt-5">
                                <div>
                                    <p className="text-lg font-bold text-brand-text">06+</p>
                                    <p className="text-[11px] text-brand-muted">
                                        Practical programs
                                    </p>
                                </div>

                                <Link
                                    href="#courses"
                                    className="group flex items-center gap-2 text-xs font-bold text-primary"
                                >
                                    View all
                                    <ArrowRight
                                        className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1"
                                        strokeWidth={2}
                                    />
                                </Link>
                            </div>
                        </div>

                        {/* Floating Label */}
                        <div className="absolute -bottom-5 -left-4 hidden rounded-2xl border border-brand-border bg-white px-4 py-3 shadow-[0_15px_40px_rgba(15,23,42,0.08)] sm:block lg:-left-8">
                            <div className="flex items-center gap-2.5">
                                <div className="h-2.5 w-2.5 rounded-full bg-brand-success" />
                                <span className="text-xs font-semibold text-brand-text">
                                    Learn by doing
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}