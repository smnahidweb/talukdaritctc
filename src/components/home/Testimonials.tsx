"use client";

import * as React from "react";
import Image from "next/image";
import {
  ArrowLeft,
  ArrowRight,
  Quote,
  Star,
} from "lucide-react";
import { motion } from "motion/react";

import { testimonialsData } from "@/data/testimonials";
import { Container } from "@/components/shared/Container";

export function Testimonials() {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [isPaused, setIsPaused] = React.useState(false);
  const [visibleCount, setVisibleCount] = React.useState(3);

  const total = testimonialsData.length;

  /*
   * Responsive visible cards
   */
  React.useEffect(() => {
    const updateVisibleCount = () => {
      if (window.innerWidth < 640) {
        setVisibleCount(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCount(2);
      } else {
        setVisibleCount(3);
      }
    };

    updateVisibleCount();

    window.addEventListener(
      "resize",
      updateVisibleCount
    );

    return () => {
      window.removeEventListener(
        "resize",
        updateVisibleCount
      );
    };
  }, []);

  const maxIndex = Math.max(
    0,
    total - visibleCount
  );

  /*
   * Keep index valid after responsive changes
   */
  React.useEffect(() => {
    setActiveIndex((current) =>
      Math.min(current, maxIndex)
    );
  }, [maxIndex]);

  const nextSlide = React.useCallback(() => {
    setActiveIndex((current) =>
      current >= maxIndex ? 0 : current + 1
    );
  }, [maxIndex]);

  const previousSlide = () => {
    setActiveIndex((current) =>
      current <= 0 ? maxIndex : current - 1
    );
  };

  /*
   * Auto play
   */
  React.useEffect(() => {
    if (
      isPaused ||
      total <= visibleCount
    ) {
      return;
    }

    const timer = window.setInterval(
      nextSlide,
      5000
    );

    return () => {
      window.clearInterval(timer);
    };
  }, [
    isPaused,
    nextSlide,
    total,
    visibleCount,
  ]);

  /*
   * Percentage for horizontal track.
   *
   * Each slide moves according to the number
   * of visible cards.
   */
  const translatePercentage =
    activeIndex * (100 / visibleCount);

  return (
    <section
      className="relative overflow-hidden bg-brand-bg py-20 sm:py-24 lg:py-28"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <Container>
        {/* =================================================
            SECTION HEADER
        ================================================== */}
        <div className="mb-12 flex flex-col gap-7 lg:mb-14 lg:flex-row lg:items-end lg:justify-between">
          {/* Left */}
          <div className="max-w-2xl">
            <div className="mb-4 flex items-center gap-3">


              <span className="text-xs font-bold uppercase tracking-[0.18em] text-accent">
                Student Experiences
              </span>
            </div>

            <h2 className="text-3xl font-bold leading-tight tracking-tight text-brand-text sm:text-4xl lg:text-[44px]">
              What Our Students
              <br className="hidden sm:block" />{" "}
              <span className="text-primary">
                Say About Us
              </span>
            </h2>
          </div>

          {/* Right */}
          <div className="flex max-w-md flex-col gap-5 lg:items-end lg:text-right">
            <p className="text-sm leading-7 text-brand-muted sm:text-base">
              Real experiences from learners who
              trusted us to build practical skills,
              confidence, and new opportunities.
            </p>

            {/* Controls */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={previousSlide}
                aria-label="Previous testimonial"
                className="group flex h-11 w-11 items-center justify-center rounded-full border border-brand-border bg-white text-brand-text transition-all duration-300 hover:border-primary hover:bg-primary hover:text-white"
              >
                <ArrowLeft
                  className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-0.5"
                  strokeWidth={1.8}
                />
              </button>

              <button
                type="button"
                onClick={nextSlide}
                aria-label="Next testimonial"
                className="group flex h-11 w-11 items-center justify-center rounded-full bg-primary text-white transition-all duration-300 hover:bg-primary-hover"
              >
                <ArrowRight
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
                  strokeWidth={1.8}
                />
              </button>
            </div>
          </div>
        </div>

        {/* =================================================
            TESTIMONIAL TRACK
        ================================================== */}
        <div className="relative overflow-hidden">
          <motion.div
            animate={{
              x: `-${translatePercentage}%`,
            }}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="-mx-2 flex"
          >
            {testimonialsData.map(
              (item, index) => (
                <div
                  key={item.id}
                  className="shrink-0 px-2"
                  style={{
                    width: `${100 / visibleCount}%`,
                  }}
                >
                  <article
                    className={`group relative flex h-full min-h-[350px] flex-col overflow-hidden rounded-xl border bg-white p-7 transition-all duration-500 sm:p-8 ${index >= activeIndex &&
                      index <
                      activeIndex + visibleCount
                      ? "border-brand-border"
                      : "border-brand-border/70"
                      }`}
                  >
                    {/* ---------------------------------
                        Large quote
                    ---------------------------------- */}
                    <div className="absolute right-6 top-6">
                      <Quote
                        className="h-14 w-14 text-primary/[0.055]"
                        strokeWidth={1}
                      />
                    </div>

                    {/* ---------------------------------
                        Top row
                    ---------------------------------- */}
                    <div className="relative flex items-center justify-between">
                      {/* Rating */}
                      <div className="flex items-center gap-1">
                        {Array.from({
                          length: 5,
                        }).map((_, starIndex) => (
                          <Star
                            key={starIndex}
                            className={`h-4 w-4 ${starIndex <
                              item.rating
                              ? "fill-[#F59E0B] text-[#F59E0B]"
                              : "text-brand-border"
                              }`}
                            strokeWidth={1.5}
                          />
                        ))}
                      </div>


                    </div>

                    {/* ---------------------------------
                        Review
                    ---------------------------------- */}
                    <div className="relative mt-8 flex-1">
                      <p className="max-w-[520px] text-[15px] leading-7 text-brand-text sm:text-base sm:leading-8">
                        “{item.content}”
                      </p>
                    </div>

                    {/* ---------------------------------
                        Author
                    ---------------------------------- */}
                    <div className="mt-8 flex items-center gap-3">
                      {/* Avatar */}
                      <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full bg-brand-blue-light ring-4 ring-brand-blue-light/60">
                        {item.avatar ? (
                          <Image
                            src={item.avatar}
                            alt={item.name}
                            fill
                            sizes="48px"
                            className="object-cover"
                          />
                        ) : (
                          <div className="flex h-full w-full items-center justify-center text-sm font-bold text-primary">
                            {item.name
                              .charAt(0)
                              .toUpperCase()}
                          </div>
                        )}
                      </div>

                      <div>
                        <p className="text-sm font-bold text-brand-text">
                          {item.name}
                        </p>

                        <div className="mt-1 flex items-center gap-2">
                          <span className="text-xs font-semibold text-primary">
                            {item.role}
                          </span>

                          <span className="h-1 w-1 rounded-full bg-brand-border" />

                          <span className="text-xs text-brand-muted">
                            {item.course}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* ---------------------------------
                        Bottom accent
                    ---------------------------------- */}
                    <div className="absolute bottom-0 left-7 right-7 h-[2px] origin-left scale-x-0 bg-accent transition-transform duration-500 group-hover:scale-x-100" />
                  </article>
                </div>
              )
            )}
          </motion.div>
        </div>

        {/* =================================================
            BOTTOM NAVIGATION
        ================================================== */}
        <div className="mt-8 flex items-center justify-between">
          {/* Progress */}
          <div className="flex items-center gap-2">
            {Array.from({
              length: maxIndex + 1,
            }).map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() =>
                  setActiveIndex(index)
                }
                aria-label={`Go to testimonial group ${index + 1
                  }`}
                className="group flex h-5 items-center"
              >
                <span
                  className={`h-1.5 rounded-full transition-all duration-300 ${index === activeIndex
                    ? "w-8 bg-primary"
                    : "w-4 bg-brand-border group-hover:bg-primary/40"
                    }`}
                />
              </button>
            ))}
          </div>

          {/* Counter */}
          <div className="flex items-center gap-2 text-xs">
            <span className="font-bold text-primary">
              {String(
                activeIndex + 1
              ).padStart(2, "0")}
            </span>

            <span className="text-brand-border">
              /
            </span>

            <span className="text-brand-muted">
              {String(maxIndex + 1).padStart(
                2,
                "0"
              )}
            </span>
          </div>
        </div>
      </Container>
    </section>
  );
}
