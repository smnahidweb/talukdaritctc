import Image from "next/image";
import Link from "next/link";
import { Container } from "../shared/Container";

const popularCourses = [
    {
        id: 1,
        title: "Computer Basic & Office Application",
        description:
            "Build essential computer and office productivity skills for study, work, and everyday digital tasks.",
        duration: "3 Months",
        classes: "36 Classes",
        level: "Beginner",
        category: "Professional Training",
        image: "/computer_basic.png",
    },
    {
        id: 2,
        title: "Graphic Design",
        description:
            "Learn practical design skills and create posters, banners, social media graphics, and visual content.",
        duration: "3 Months",
        classes: "36 Classes",
        level: "Beginner",
        category: "Creative Skills",
        image: "/video.jpg",
    },
    {
        id: 3,
        title: "Web Design",
        description:
            "Learn HTML, CSS, and basic JavaScript while creating responsive and modern websites from scratch.",
        duration: "4 Months",
        classes: "48 Classes",
        level: "Beginner",
        category: "Web Development",
        image: "/website.jpg",
    },
];

export default function PopularCourses() {
    return (
        <section className="relative overflow-hidden bg-surface py-20 sm:py-24 lg:py-28">
            {/* Background Decoration */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
                <div className="absolute -left-40 top-20 h-80 w-80 rounded-full bg-blue-100/50 blur-3xl" />
                <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-orange-100/50 blur-3xl" />
            </div>

            <Container>
                {/* Section Header */}
                <div className="relative mx-auto mb-12 max-w-3xl text-center sm:mb-14">
                    <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-accent">
                        Popular Courses
                    </p>

                    <h2 className="text-xs font-bold tracking-tight text-brand-text sm:text-4xl lg:text-5xl">
                        Learn Skills That{" "}
                        <span className="text-primary">
                            Create Opportunities
                        </span>
                    </h2>

                    <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-brand-muted sm:text-lg">
                        Practical training programs designed to help you build
                        valuable digital skills, gain confidence, and prepare
                        for real-world opportunities.
                    </p>
                </div>

                {/* Course Grid */}
                <div className="relative grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-7">
                    {popularCourses.map((course) => (
                        <article
                            key={course.id}
                            className="group flex h-full flex-col overflow-hidden rounded-xl border border-brand-border bg-white shadow-[0_12px_40px_-28px_rgba(6,43,82,0.3)] transition-all duration-500 hover:-translate-y-1.5 hover:border-brand-blue-border hover:shadow-[0_25px_60px_-30px_rgba(6,43,82,0.35)]"
                        >
                            {/* Image */}
                            <div className="relative aspect-[16/10] overflow-hidden bg-brand-blue-light">
                                <Image
                                    src={course.image}
                                    alt={course.title}
                                    fill
                                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                                />

                                {/* Soft Image Overlay */}
                                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/25 to-transparent opacity-70" />

                                {/* Level Badge */}
                                <div className="absolute left-5 top-5">
                                    <span className="inline-flex rounded-full border border-white/70 bg-white/95 px-3.5 py-1.5 text-xs font-bold text-primary shadow-sm backdrop-blur-sm">
                                        {course.level}
                                    </span>
                                </div>
                            </div>

                            {/* Card Content */}
                            <div className="flex flex-1 flex-col p-6 sm:p-7">
                                {/* Category */}
                                <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-accent">
                                    {course.category}
                                </p>

                                {/* Title */}
                                <h3 className="mt-3 text-xl font-bold leading-snug text-brand-text transition-colors duration-300 group-hover:text-primary sm:text-[22px]">
                                    {course.title}
                                </h3>

                                {/* Description */}
                                <p className="mt-3 line-clamp-3 text-sm leading-6 text-brand-muted">
                                    {course.description}
                                </p>

                                {/* Course Details */}
                                <div className="mt-6 grid grid-cols-3 divide-x divide-brand-border rounded-2xl border border-brand-border bg-brand-bg py-3.5">
                                    <div className="px-2 text-center">
                                        <p className="text-[10px] font-semibold uppercase tracking-wide text-brand-muted">
                                            Duration
                                        </p>
                                        <p className="mt-1 text-xs font-bold text-brand-text">
                                            {course.duration}
                                        </p>
                                    </div>

                                    <div className="px-2 text-center">
                                        <p className="text-[10px] font-semibold uppercase tracking-wide text-brand-muted">
                                            Classes
                                        </p>
                                        <p className="mt-1 text-xs font-bold text-brand-text">
                                            {course.classes}
                                        </p>
                                    </div>

                                    <div className="px-2 text-center">
                                        <p className="text-[10px] font-semibold uppercase tracking-wide text-brand-muted">
                                            Level
                                        </p>
                                        <p className="mt-1 text-xs font-bold text-primary">
                                            {course.level}
                                        </p>
                                    </div>
                                </div>

                                {/* Bottom CTA */}
                                <div className="mt-auto pt-6">
                                    <div className="mb-5 h-px bg-accent-border" />

                                    <Link
                                        href={`/courses/${course.id}`}
                                        className="group/link inline-flex items-center gap-2 text-sm font-bold text-primary transition-colors duration-300 hover:text-primary-hover"
                                    >
                                        View Course

                                        <span className="transition-transform duration-300 group-hover/link:translate-x-1">
                                            →
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="relative mt-10 flex justify-center">
                    <Link
                        href="/courses"
                        className="group inline-flex items-center gap-2 rounded-xl border border-brand-border bg-white px-6 py-3 text-sm font-bold text-brand-text shadow-sm transition-all duration-300 hover:border-primary hover:text-primary hover:shadow-md"
                    >
                        Explore All Courses

                        <span className="transition-transform duration-300 group-hover:translate-x-1">
                            →
                        </span>
                    </Link>
                </div>
            </Container>
        </section>
    );
}