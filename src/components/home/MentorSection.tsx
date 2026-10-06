"use client";

import * as React from "react";
import Image from "next/image";
import { Container } from "@/components/shared/Container";
import { em } from "motion/react-client";

const teamMembers = [
  {
    id: 1,
    name: "Md.Tarikul Talukdar",
    designation: "Director",
    description:
      "Experienced trainer focused on practical computer skills, office applications, and digital productivity.",
    phone: "+880 1751-525294",
    organization: "Talukdar IT & Computer Training Centre",
    email: "tarikul@talukdarit.com",
    image: "/mentor.jpg",
  },
  {
    id: 2,
    name: "Amit Sarkar",
    designation: "Manager",
    organization: "Talukdar IT & Computer Training Centre",
    description:
      "Skilled in managing training programs, coordinating with instructors, and ensuring a smooth learning experience for students.",
    phone: "+8801759594371",
    email: "amit@talukdaritc.com",
    image: "/mentor2.jpg",
  },
  {
    id: 3,
    name: "Md. Amerul Islam Rana",
    designation: "Lead Instructor",
    organization: "Talukdar IT & Computer Training Centre",
    description:
      "Specialized in practical web design training with a focus on modern, responsive, and user-friendly websites.",
    phone: "+8801712240674",
    email: "Aminulislam.rana@gmail.com",
    image: "/mentor3.jpg",
  },
  {
    id: 4,
    name: "Md. Nayeem Mridha",
    designation: "IT Instructor",
    organization: "Talukdar IT & Computer Training Centre",
    description:
      "Helps learners understand digital marketing, social media, content strategy, and online promotion.",
    phone: "+8801787771901",
    email: "mridhanayeem749@gmail.com",
    image: "/mentor.jpg",
  },
  {
    id: 5,
    name: "Shakil Khan (Arafat)",
    designation: "Academic Mentor",
    organization: "Talukdar IT & Computer Training Centre",
    description:
      "Guides students through core academic modules, technical skill development, and career orientation.",
    phone: "+8801786231219",
    email: "mdshakilkhanbdcom51@gmail.com",
    image: "/mentor2.jpg",
  },
  {
    id: 6,
    name: "Md. Moniruzzaman",
    designation: "Lab Assistant & IT Support",
    organization: "Talukdar IT & Computer Training Centre",
    description:
      "Provides hands-on technical support, laboratory management, and assists students during practical sessions.",
    phone: "+8801342180828",
    email: "muniruruzzamanmd876@gmail.com",
    image: "/mentor3.jpg",
  }
];

export function MentorSection() {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [visibleCards, setVisibleCards] = React.useState(3);
  const [sliderIndex, setSliderIndex] = React.useState(3);
  const [isTransitioning, setIsTransitioning] = React.useState(true);

  React.useEffect(() => {
    const updateVisibleCards = () => {
      if (window.innerWidth < 640) {
        setVisibleCards(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCards(2);
      } else {
        setVisibleCards(3);
      }
    };

    updateVisibleCards();

    window.addEventListener("resize", updateVisibleCards);

    return () => {
      window.removeEventListener("resize", updateVisibleCards);
    };
  }, []);

  /*
   * We create:
   *
   * [1 2 3 4] [1 2 3 4] [1 2 3 4]
   *
   * Starting from the second set.
   * This allows the carousel to continuously move.
   */
  const sliderItems = React.useMemo(() => {
    return [
      ...teamMembers.map((member) => ({
        ...member,
        uniqueId: `before-${member.id}`,
      })),
      ...teamMembers.map((member) => ({
        ...member,
        uniqueId: `current-${member.id}`,
      })),
      ...teamMembers.map((member) => ({
        ...member,
        uniqueId: `after-${member.id}`,
      })),
    ];
  }, []);

  /*
   * Reset position without animation after reaching
   * the duplicated set.
   */
  React.useEffect(() => {
    if (sliderIndex >= 7) {
      const timeout = setTimeout(() => {
        setIsTransitioning(false);
        setSliderIndex(3);

        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            setIsTransitioning(true);
          });
        });
      }, 600);

      return () => clearTimeout(timeout);
    }
  }, [sliderIndex]);

  /*
   * Auto slide.
   *
   * 3 seconds gives enough time to read the card
   * while keeping the section dynamic.
   */
  React.useEffect(() => {
    const interval = setInterval(() => {
      setSliderIndex((previous) => previous + 1);

      setActiveIndex((previous) =>
        previous >= teamMembers.length - 1 ? 0 : previous + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handleIndicatorClick = (index: number) => {
    const current = activeIndex;

    let difference = index - current;

    if (difference < 0) {
      difference += teamMembers.length;
    }

    setSliderIndex((previous) => previous + difference);
    setActiveIndex(index);
  };

  return (
    <section className="relative overflow-hidden  bg-brand-bg py-20 sm:py-24 lg:py-28">
      {/* Background accents */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 top-20 h-80 w-80 rounded-full bg-blue-100/50 blur-3xl" />

        <div className="absolute -right-40 bottom-0 h-80 w-80 rounded-full bg-orange-100/60 blur-3xl" />

        <div className="absolute left-1/2 top-0 h-40 w-40 -translate-x-1/2 rounded-full bg-orange-50/50 blur-3xl" />
      </div>

      <Container>
        {/* Header */}
        <div className="relative mx-auto mb-12 max-w-2xl text-center sm:mb-14 lg:mb-16">
          <span className="mb-4 inline-flex items-center rounded-full border border-orange-200 bg-orange-50 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-accent">
            Our Team
          </span>

          <h2 className="text-xs font-bold tracking-tight text-brand-text sm:text-4xl lg:text-5xl">
            Meet Our{" "}
            <span className="text-primary">Team</span>
          </h2>

          <div className="mx-auto mt-5 flex items-center justify-center gap-1.5">
            <span className="h-1 w-8 rounded-full bg-primary" />
            <span className="h-1 w-3 rounded-full bg-accent" />
          </div>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-brand-muted sm:text-base">
            Meet the experienced professionals who bring knowledge,
            dedication, and practical guidance to every learner's journey.
          </p>
        </div>

        {/* Slider Container */}
        <div className="relative rounded-[32px] border border-brand-blue-border bg-white/70 px-3 py-3 sm:px-4 sm:py-4 lg:px-5 lg:py-5">
          {/* Subtle container glow */}
          <div className="pointer-events-none absolute inset-0 rounded-[32px] ring-1 ring-inset ring-white" />

          <div className="overflow-hidden rounded-[24px]">
            <div
              className={`flex ${isTransitioning
                ? "transition-transform duration-600 ease-[cubic-bezier(0.22,1,0.36,1)]"
                : ""
                }`}
              style={{
                transform: `translateX(-${sliderIndex * (100 / visibleCards)
                  }%)`,
              }}
            >
              {sliderItems.map((member) => (
                <div
                  key={member.uniqueId}
                  className="w-full shrink-0 px-2 sm:w-1/2 sm:px-2.5 lg:w-1/3 lg:px-3"
                >
                  <article className="group relative h-full overflow-hidden rounded-[24px] border border-brand-border bg-white transition-all duration-400 hover:border-orange-200">
                    {/* Top accent */}
                    <div className="absolute left-6 right-6 top-0 z-10 h-1 origin-left scale-x-0 rounded-b-full bg-accent transition-transform duration-500 group-hover:scale-x-100" />

                    {/* Image */}
                    <div className="relative aspect-[4/3] overflow-hidden bg-brand-blue-light">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw"
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-[#062B52]/30 via-transparent to-transparent" />

                      <div className="absolute bottom-4 left-4">
                        <span className="inline-flex rounded-full border border-white/40 bg-white/90 px-3 py-1.5 text-[11px] font-bold text-primary backdrop-blur-sm">
                          {member.designation}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 sm:p-7">
                      <h3 className="text-xl font-bold tracking-tight text-brand-text transition-colors duration-300 group-hover:text-primary sm:text-2xl">
                        {member.name}
                      </h3>

                      <p className="mt-3 min-h-[72px] text-sm leading-6 text-brand-muted">
                        {member.description}
                      </p>

                      <p className="mt-2 text-sm font-semibold text-gray-600 transition-colors duration-300 group-hover:text-brand-text">
                        {member.organization}
                      </p>

                      <div className="my-5 h-px bg-brand-border" />

                      <div className="flex items-center justify-between gap-4">
                        <div className="min-w-0">
                          <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-accent">
                            Contact
                          </p>

                          <p className="mt-1 truncate text-sm font-semibold text-gray-600 transition-colors duration-300 group-hover:text-brand-text">
                            {member.phone}
                          </p>
                          <p className="mt-1 truncate text-sm font-semibold text-gray-600 transition-colors duration-300 group-hover:text-brand-text">
                            {member.email}
                          </p>
                        </div>
                         
                        <a
                          href={`tel:${member.phone.replace(/\s/g, "")}`}
                          aria-label={`Call ${member.name}`}
                          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary text-white transition-all duration-300 hover:bg-accent"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.8"
                            className="h-5 w-5"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M2.25 6.75c0-1.243 1.007-2.25 2.25-2.25h2.25c.414 0 .79.227.986.592l1.287 2.403a1.125 1.125 0 01-.205 1.315l-1.49 1.49a11.04 11.04 0 005.07 5.07l1.49-1.49a1.125 1.125 0 011.315-.205l2.403 1.287c.365.196.592.572.592.986v2.25a2.25 2.25 0 01-2.25 2.25C9.46 20.25 3.75 14.54 3.75 7.5V6.75z"
                            />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </article>
                </div>
              ))}
            </div>
          </div>

          {/* Indicators */}
          <div className="mt-7 flex justify-center">
            <div className="flex items-center gap-2 rounded-full border border-brand-border bg-white px-3 py-2">
              {teamMembers.map((member, index) => {
                const isActive = index === activeIndex;

                return (
                  <button
                    key={member.id}
                    type="button"
                    onClick={() => handleIndicatorClick(index)}
                    aria-label={`Go to ${member.name}`}
                    className="group flex h-5 items-center"
                  >
                    <span
                      className={`block rounded-full transition-all duration-500 ${isActive
                        ? "h-1.5 w-9 bg-accent"
                        : "h-1.5 w-2 bg-slate-300 group-hover:bg-primary/50"
                        }`}
                    />
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}