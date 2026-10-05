"use client";

import * as React from "react";
import {
    ArrowRight,
    BriefcaseBusiness,
    Code2,
    GraduationCap,
    TrendingUp,
    Wrench,
} from "lucide-react";
import {
    AnimatePresence,
    motion,
    useInView,
    useScroll,
    useSpring,
} from "motion/react";

import { Container } from "@/components/shared/Container";

const journeySteps = [
    {
        id: "learn",
        number: "01",
        title: "Learn",
        subtitle: "Build Your Foundation",
        description:
            "Start with the right knowledge through structured learning, experienced guidance, and practical understanding.",
        icon: GraduationCap,
        label: "Foundation",
    },
    {
        id: "practice",
        number: "02",
        title: "Practice",
        subtitle: "Turn Knowledge Into Skill",
        description:
            "Strengthen your ability through hands-on exercises, guided tasks, and practical learning experiences.",
        icon: Wrench,
        label: "Skill",
    },
    {
        id: "create",
        number: "03",
        title: "Create",
        subtitle: "Build Something Real",
        description:
            "Apply what you have learned to meaningful projects that help you develop confidence and a professional mindset.",
        icon: Code2,
        label: "Projects",
    },
    {
        id: "grow",
        number: "04",
        title: "Grow",
        subtitle: "Build Confidence & Capability",
        description:
            "Continue improving your skills, build your portfolio, and prepare yourself for bigger opportunities.",
        icon: TrendingUp,
        label: "Growth",
    },
    {
        id: "earn",
        number: "05",
        title: "Earn",
        subtitle: "Turn Skills Into Opportunity",
        description:
            "Use your skills to move toward employment, freelancing, business, and meaningful professional opportunities.",
        icon: BriefcaseBusiness,
        label: "Opportunity",
    },
];

export function FromLearningToEarning() {
    const sectionRef = React.useRef<HTMLElement | null>(null);

    const isInView = useInView(sectionRef, {
        amount: 0.25,
    });

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start 70%", "end 30%"],
    });

    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 90,
        damping: 30,
        mass: 0.2,
    });

    const [activeIndex, setActiveIndex] = React.useState(0);
    const [isManualSelection, setIsManualSelection] =
        React.useState(false);

    /*
     * Scroll based stage detection.
     *
     * We only update the active stage while the section
     * is actually visible. This prevents unrelated page
     * scrolling from changing the component.
     */
    React.useEffect(() => {
        if (isManualSelection) {
            return;
        }

        const unsubscribe = smoothProgress.on("change", (value) => {
            const nextIndex = Math.min(
                journeySteps.length - 1,
                Math.max(
                    0,
                    Math.floor(value * journeySteps.length)
                )
            );

            setActiveIndex(nextIndex);
        });

        return () => unsubscribe();
    }, [smoothProgress, isManualSelection]);

    /*
     * Re-enable scroll control after a manual selection.
     */
    React.useEffect(() => {
        if (!isManualSelection) {
            return;
        }

        const timeout = window.setTimeout(() => {
            setIsManualSelection(false);
        }, 1200);

        return () => window.clearTimeout(timeout);
    }, [isManualSelection]);

    const handleStepChange = (index: number) => {
        setActiveIndex(index);
        setIsManualSelection(true);
    };

    const activeStep = journeySteps[activeIndex];

    const ActiveIcon = activeStep.icon;

    return (
        <section
            ref={sectionRef}
            className="relative overflow-hidden border-y border-brand-border bg-surface py-20 sm:py-24 lg:py-28"
        >
            {/* -------------------------------------------------
          SUBTLE BACKGROUND
      -------------------------------------------------- */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
                <motion.div
                    animate={{
                        x: activeIndex * 12,
                        y: activeIndex * -6,
                    }}
                    transition={{
                        duration: 1,
                        ease: [0.22, 1, 0.36, 1],
                    }}
                    className="absolute -left-48 top-20 h-[420px] w-[420px] rounded-full bg-blue-100/50 blur-3xl"
                />

                <motion.div
                    animate={{
                        x: activeIndex * -10,
                        y: activeIndex * 8,
                    }}
                    transition={{
                        duration: 1.2,
                        ease: [0.22, 1, 0.36, 1],
                    }}
                    className="absolute -right-48 bottom-0 h-[420px] w-[420px] rounded-full bg-orange-100/50 blur-3xl"
                />
            </div>

            <Container>
                {/* -------------------------------------------------
            SECTION HEADER
        -------------------------------------------------- */}
                <div className="relative mx-auto max-w-2xl text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 14 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{
                            duration: 0.55,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                    >
                        <span className="text-xs font-bold uppercase tracking-[0.16em] text-accent">
                            Your Learning Journey
                        </span>

                        <h2 className="mt-3 text-3xl font-bold tracking-tight text-brand-text sm:text-4xl lg:text-[44px]">
                            From Learning{" "}
                            <span className="text-primary">to Earning</span>
                        </h2>

                        <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-brand-muted sm:text-base">
                            A practical journey that helps you move from learning
                            new skills to creating real opportunities.
                        </p>
                    </motion.div>
                </div>

                {/* -------------------------------------------------
            MAIN EXPERIENCE
        -------------------------------------------------- */}
                <div className="relative mx-auto mt-14 max-w-6xl sm:mt-16 lg:mt-20">
                    <div className="relative overflow-hidden rounded-[28px] border border-brand-border bg-white">
                        {/* ---------------------------------------------
                TOP ACCENT PROGRESS
            ---------------------------------------------- */}
                        <div className="absolute left-0 right-0 top-0 h-[3px] bg-brand-blue-light">
                            <motion.div
                                animate={{
                                    width: `${((activeIndex + 1) / journeySteps.length) * 100}%`,
                                }}
                                transition={{
                                    duration: 0.6,
                                    ease: [0.22, 1, 0.36, 1],
                                }}
                                className="h-full bg-primary"
                            />
                        </div>

                        {/* ---------------------------------------------
                DESKTOP PANEL
            ---------------------------------------------- */}
                        <div className="hidden min-h-[430px] lg:grid lg:grid-cols-[0.85fr_1.15fr]">
                            {/* Left */}
                            <div className="relative flex flex-col justify-between border-r border-brand-border p-10 xl:p-12">
                                <div>
                                    <AnimatePresence mode="wait">
                                        <motion.div
                                            key={activeStep.number}
                                            initial={{
                                                opacity: 0,
                                                y: 12,
                                            }}
                                            animate={{
                                                opacity: 1,
                                                y: 0,
                                            }}
                                            exit={{
                                                opacity: 0,
                                                y: -12,
                                            }}
                                            transition={{
                                                duration: 0.3,
                                            }}
                                        >
                                            <span className="text-xs font-bold uppercase tracking-[0.16em] text-accent">
                                                Stage {activeStep.number}
                                            </span>

                                            <h3 className="mt-4 text-4xl font-bold tracking-tight text-brand-text xl:text-5xl">
                                                {activeStep.title}
                                            </h3>

                                            <p className="mt-3 text-base font-semibold text-primary">
                                                {activeStep.subtitle}
                                            </p>

                                            <p className="mt-5 max-w-md text-sm leading-7 text-brand-muted">
                                                {activeStep.description}
                                            </p>
                                        </motion.div>
                                    </AnimatePresence>
                                </div>

                                {/* Stage label */}
                                <div>
                                    <div className="mb-3 flex items-center justify-between">
                                        <span className="text-xs font-semibold text-brand-muted">
                                            Progress
                                        </span>

                                        <span className="text-xs font-bold text-primary">
                                            {activeStep.number} / 05
                                        </span>
                                    </div>

                                    <div className="h-1.5 overflow-hidden rounded-full bg-brand-blue-light">
                                        <motion.div
                                            animate={{
                                                width: `${((activeIndex + 1) /
                                                    journeySteps.length) *
                                                    100
                                                    }%`,
                                            }}
                                            transition={{
                                                duration: 0.6,
                                                ease: [0.22, 1, 0.36, 1],
                                            }}
                                            className="h-full rounded-full bg-primary"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Right */}
                            <div className="relative flex items-center justify-center overflow-hidden bg-brand-bg p-12">
                                {/* Large background number */}
                                <AnimatePresence mode="wait">
                                    <motion.span
                                        key={`number-${activeStep.number}`}
                                        initial={{
                                            opacity: 0,
                                            scale: 0.94,
                                        }}
                                        animate={{
                                            opacity: 1,
                                            scale: 1,
                                        }}
                                        exit={{
                                            opacity: 0,
                                            scale: 1.04,
                                        }}
                                        transition={{
                                            duration: 0.5,
                                        }}
                                        className="pointer-events-none absolute right-6 top-0 select-none text-[240px] font-bold leading-none tracking-[-0.08em] text-primary/[0.035]"
                                    >
                                        {activeStep.number}
                                    </motion.span>
                                </AnimatePresence>

                                {/* Visual */}
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={activeStep.id}
                                        initial={{
                                            opacity: 0,
                                            scale: 0.94,
                                            y: 14,
                                        }}
                                        animate={{
                                            opacity: 1,
                                            scale: 1,
                                            y: 0,
                                        }}
                                        exit={{
                                            opacity: 0,
                                            scale: 1.04,
                                            y: -10,
                                        }}
                                        transition={{
                                            duration: 0.45,
                                            ease: [0.22, 1, 0.36, 1],
                                        }}
                                        className="relative"
                                    >
                                        {/* Main visual */}
                                        <div className="relative flex h-44 w-44 items-center justify-center rounded-full border border-brand-blue-border bg-white">
                                            <div className="absolute inset-4 rounded-full border border-dashed border-brand-blue-border" />

                                            <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-primary text-white">
                                                <ActiveIcon
                                                    className="h-9 w-9"
                                                    strokeWidth={1.5}
                                                />
                                            </div>

                                            {/* Accent dot */}
                                            <motion.span
                                                animate={{
                                                    rotate: 360,
                                                }}
                                                transition={{
                                                    duration: 12,
                                                    repeat: Infinity,
                                                    ease: "linear",
                                                }}
                                                className="absolute inset-0"
                                            >
                                                <span className="absolute left-1/2 top-0 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-accent" />
                                            </motion.span>
                                        </div>

                                        <div className="mt-7 text-center">
                                            <span className="text-xs font-bold uppercase tracking-[0.16em] text-brand-muted">
                                                {activeStep.label}
                                            </span>
                                        </div>
                                    </motion.div>
                                </AnimatePresence>
                            </div>
                        </div>

                        {/* ---------------------------------------------
                MOBILE PANEL
            ---------------------------------------------- */}
                        <div className="lg:hidden">
                            <div className="relative overflow-hidden bg-brand-bg px-6 py-12 sm:px-10 sm:py-14">
                                {/* Background number */}
                                <AnimatePresence mode="wait">
                                    <motion.span
                                        key={`mobile-number-${activeStep.number}`}
                                        initial={{
                                            opacity: 0,
                                            x: 20,
                                        }}
                                        animate={{
                                            opacity: 1,
                                            x: 0,
                                        }}
                                        exit={{
                                            opacity: 0,
                                            x: -20,
                                        }}
                                        className="pointer-events-none absolute right-4 top-4 select-none text-[150px] font-bold leading-none text-primary/[0.04]"
                                    >
                                        {activeStep.number}
                                    </motion.span>
                                </AnimatePresence>

                                <div className="relative flex flex-col items-center text-center">
                                    <AnimatePresence mode="wait">
                                        <motion.div
                                            key={activeStep.id}
                                            initial={{
                                                opacity: 0,
                                                y: 12,
                                            }}
                                            animate={{
                                                opacity: 1,
                                                y: 0,
                                            }}
                                            exit={{
                                                opacity: 0,
                                                y: -12,
                                            }}
                                            transition={{
                                                duration: 0.35,
                                            }}
                                        >
                                            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl bg-primary text-white">
                                                <ActiveIcon
                                                    className="h-9 w-9"
                                                    strokeWidth={1.5}
                                                />
                                            </div>

                                            <span className="mt-7 block text-xs font-bold uppercase tracking-[0.16em] text-accent">
                                                Stage {activeStep.number}
                                            </span>

                                            <h3 className="mt-2 text-3xl font-bold tracking-tight text-brand-text">
                                                {activeStep.title}
                                            </h3>

                                            <p className="mt-2 text-sm font-semibold text-primary">
                                                {activeStep.subtitle}
                                            </p>

                                            <p className="mx-auto mt-4 max-w-md text-sm leading-7 text-brand-muted">
                                                {activeStep.description}
                                            </p>
                                        </motion.div>
                                    </AnimatePresence>
                                </div>
                            </div>
                        </div>

                        {/* ---------------------------------------------
                STAGE NAVIGATION
            ---------------------------------------------- */}
                        <div className="border-t border-brand-border bg-white">
                            <div className="grid grid-cols-5">
                                {journeySteps.map((step, index) => {
                                    const isActive = index === activeIndex;
                                    const completed = index < activeIndex;

                                    return (
                                        <button
                                            key={step.id}
                                            type="button"
                                            onClick={() => handleStepChange(index)}
                                            className={`group relative flex min-h-[78px] flex-col items-center justify-center gap-1 border-r border-brand-border px-2 transition-colors duration-300 last:border-r-0 sm:min-h-[88px] ${isActive
                                                ? "bg-brand-blue-light"
                                                : "hover:bg-brand-bg"
                                                }`}
                                        >
                                            {/* Active indicator */}
                                            <span
                                                className={`absolute bottom-0 left-1/2 h-[3px] -translate-x-1/2 rounded-t-full transition-all duration-300 ${isActive
                                                    ? "w-10 bg-accent"
                                                    : "w-0 bg-primary group-hover:w-6"
                                                    }`}
                                            />

                                            <span
                                                className={`text-[10px] font-bold tracking-[0.12em] transition-colors duration-300 sm:text-[11px] ${isActive
                                                    ? "text-accent"
                                                    : completed
                                                        ? "text-primary"
                                                        : "text-brand-muted"
                                                    }`}
                                            >
                                                {step.number}
                                            </span>

                                            <span
                                                className={`text-xs font-bold sm:text-sm ${isActive
                                                    ? "text-primary"
                                                    : "text-brand-text"
                                                    }`}
                                            >
                                                {step.title}
                                            </span>
                                        </button>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>

                {/* -------------------------------------------------
            BOTTOM STATEMENT
        -------------------------------------------------- */}
                <motion.div
                    initial={{
                        opacity: 0,
                        y: 12,
                    }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                    }}
                    viewport={{
                        once: true,
                        amount: 0.3,
                    }}
                    transition={{
                        duration: 0.5,
                    }}
                    className="mx-auto mt-10 max-w-xl text-center"
                >
                    <p className="text-sm leading-6 text-brand-muted">
                        Every skill starts with learning. The right journey
                        turns that skill into opportunity.
                    </p>

                    <a
                        href="/courses"
                        className="group mt-4 inline-flex items-center gap-2 text-sm font-bold text-primary transition-colors duration-300 hover:text-accent"
                    >
                        Explore Our Courses

                        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </a>
                </motion.div>
            </Container>
        </section>
    );
}