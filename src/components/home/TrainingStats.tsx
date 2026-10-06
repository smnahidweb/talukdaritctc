"use client";

import * as React from "react";
import { useEffect, useRef, useState } from "react";
import { Container } from "../shared/Container";


type Stat = {
    value: number;
    suffix: string;
    eyebrow: string;
    title: string;
    description: string;
    theme: "blue" | "orange" | "navy" | "green";
};

const stats: Stat[] = [
    {
        value: 500,
        suffix: "+",
        eyebrow: "Our Reach",
        title: "Students Trained",
        description:
            "Hundreds of learners have developed practical digital skills through structured, hands-on training and guided learning.",
        theme: "blue",
    },
    {
        value: 6,
        suffix: "+",
        eyebrow: "Learning",
        title: "Courses & Programs",
        description:
            "Industry-relevant programs designed to help learners build useful skills, strengthen confidence, and prepare for real opportunities.",
        theme: "orange",
    },
    {
        value: 200,
        suffix: "+",
        eyebrow: "Achievement",
        title: "Certificates Awarded",
        description:
            "Learners who successfully complete their programs receive recognition for their dedication, progress, and learning journey.",
        theme: "navy",
    },
    {
        value: 95,
        suffix: "%",
        eyebrow: "Experience",
        title: "Student Satisfaction",
        description:
            "A supportive learning environment focused on practical education, instructor guidance, and a better experience for every learner.",
        theme: "green",
    },
];

const themeStyles = {
    blue: {
        background: "bg-[#EFF7FF]",
        border: "border-[#D0E7FF]",
        accent: "bg-[#0756A8]",
        number: "text-[#0756A8]",
        eyebrow: "text-[#0756A8]",
        glow: "bg-[#D0E7FF]",
    },

    orange: {
        background: "bg-[#FFF7ED]",
        border: "border-orange-100",
        accent: "bg-[#F97316]",
        number: "text-[#EA580C]",
        eyebrow: "text-[#EA580C]",
        glow: "bg-orange-100",
    },

    navy: {
        background: "bg-[#F1F5F9]",
        border: "border-slate-200",
        accent: "bg-[#062B52]",
        number: "text-[#062B52]",
        eyebrow: "text-[#062B52]",
        glow: "bg-slate-200",
    },

    green: {
        background: "bg-green-50/70",
        border: "border-green-100",
        accent: "bg-[#16A34A]",
        number: "text-[#16A34A]",
        eyebrow: "text-[#16A34A]",
        glow: "bg-green-100",
    },
};

function AnimatedNumber({
    value,
    suffix,
    active,
}: {
    value: number;
    suffix: string;
    active: boolean;
}) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!active) return;

        let startTime: number | null = null;
        const duration = 1600;

        const animate = (timestamp: number) => {
            if (!startTime) {
                startTime = timestamp;
            }

            const progress = Math.min(
                (timestamp - startTime) / duration,
                1,
            );

            const easedProgress = 1 - Math.pow(1 - progress, 4);

            setCount(Math.floor(easedProgress * value));

            if (progress < 1) {
                requestAnimationFrame(animate);
            } else {
                setCount(value);
            }
        };

        requestAnimationFrame(animate);
    }, [active, value]);

    return (
        <>
            {count.toLocaleString()}
            {suffix}
        </>
    );
}

function StatCard({ stat }: { stat: Stat }) {
    const cardRef = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    const theme = themeStyles[stat.theme];

    useEffect(() => {
        const element = cardRef.current;

        if (!element) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            {
                threshold: 0.25,
            },
        );

        observer.observe(element);

        return () => observer.disconnect();
    }, []);

    return (
        <article
            ref={cardRef}
            className={`group relative min-h-[340px] overflow-hidden rounded-[10px] border ${theme.border} ${theme.background} p-7 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_24px_60px_rgba(15,23,42,0.08)] sm:p-8`}
        >
            {/* Decorative glow */}
            <div
                className={`pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full ${theme.glow} opacity-60 blur-3xl transition-transform duration-700 group-hover:scale-125`}
            />

            {/* Accent line */}
            <div
                className={`relative mb-8 h-1.5 w-10 rounded-full ${theme.accent} transition-all duration-500 group-hover:w-16`}
            />

            {/* Eyebrow */}
            <p
                className={`relative text-[11px] font-bold uppercase tracking-[0.2em] ${theme.eyebrow}`}
            >
                {stat.eyebrow}
            </p>

            {/* Number */}
            <div
                className={`relative mt-3 text-[48px] font-bold leading-none tracking-[-0.05em] sm:text-[54px] ${theme.number}`}
            >
                <AnimatedNumber
                    value={stat.value}
                    suffix={stat.suffix}
                    active={isVisible}
                />
            </div>

            {/* Title */}
            <h3 className="relative mt-6 text-xl font-bold tracking-tight text-brand-text sm:text-[22px]">
                {stat.title}
            </h3>

            {/* Description */}
            <p className="relative mt-3 text-[14px] leading-6 text-brand-muted sm:text-[15px] sm:leading-7">
                {stat.description}
            </p>

            {/* Bottom detail */}

        </article>
    );
}

export default function TrainingStats() {
    return (
        <section className="bg-brand-bg py-16 sm:py-20 lg:py-24">
            <Container>
                {/* Section intro */}
                <div className="mx-auto mb-12 max-w-2xl text-center sm:mb-14">
                    <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#F97316]">
                        Our Impact
                    </p>

                    <h2 className="text-3xl font-bold tracking-tight text-brand-text sm:text-4xl lg:text-[42px]">
                        Building Skills, Creating{" "}
                        <span className="text-primary">Impact</span>
                    </h2>

                    <p className="mt-4 text-base leading-7 text-brand-muted sm:text-[17px]">
                        Our growing community and learning achievements reflect our
                        commitment to practical, accessible, and career-focused IT
                        education.
                    </p>
                </div>

                {/* Statistics */}
                <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                    {stats.map((stat) => (
                        <StatCard key={stat.title} stat={stat} />
                    ))}
                </div>
            </Container>
        </section>
    );
}