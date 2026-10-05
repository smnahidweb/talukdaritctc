"use client";

import * as React from "react";
import { ChevronDown } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";

import { faqItems } from "@/data/content";
import { Container } from "@/components/shared/Container";

function FAQItem({
  item,
  index,
  open,
  onToggle,
}: {
  item: (typeof faqItems)[0];
  index: number;
  open: boolean;
  onToggle: () => void;
}) {
  const answerId = `faq-answer-${item.id}`;

  return (
    <div
      className={`border-b transition-colors duration-300 ${open ? "border-brand-blue-border" : "border-brand-border"
        }`}
    >
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        aria-controls={answerId}
        className="group flex w-full items-center gap-5 py-5 text-left sm:py-6"
      >
        {/* Number */}
        <span
          className={`w-7 shrink-0 text-xs font-semibold tracking-[0.12em] transition-colors duration-300 ${open ? "text-accent" : "text-brand-muted"
            }`}
        >
          {String(index + 1).padStart(2, "0")}
        </span>

        {/* Question */}
        <span
          className={`flex-1 pr-3 text-sm font-semibold leading-6 transition-colors duration-300 sm:text-[15px] ${open
            ? "text-primary"
            : "text-brand-text group-hover:text-primary"
            }`}
        >
          {item.question}
        </span>

        {/* Toggle */}
        <span
          className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${open
            ? "border-primary bg-primary text-white"
            : "border-brand-border bg-white text-brand-muted group-hover:border-primary group-hover:text-primary"
            }`}
        >
          <ChevronDown
            className={`h-4 w-4 transition-transform duration-300 ${open ? "rotate-180" : ""
              }`}
            strokeWidth={1.8}
          />
        </span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={answerId}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{
              height: {
                duration: 0.3,
                ease: [0.22, 1, 0.36, 1],
              },
              opacity: {
                duration: 0.2,
              },
            }}
          >
            <div className="pb-6 pl-12 pr-10 sm:pb-7">
              <p className="max-w-2xl text-sm leading-7 text-brand-muted">
                {item.answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function FAQSection() {
  const [openId, setOpenId] = React.useState<string | null>(null);

  const toggleFAQ = (id: string) => {
    setOpenId((current) => (current === id ? null : id));
  };

  const mid = Math.ceil(faqItems.length / 2);

  const leftItems = faqItems.slice(0, mid);
  const rightItems = faqItems.slice(mid);

  return (
    <section className="relative overflow-hidden bg-surface py-20 sm:py-24 lg:py-28">
      <Container>
        {/* Header */}
        <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-14 lg:mb-16">
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-px w-7 bg-accent" />

            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-accent">
              FAQ
            </span>

            <span className="h-px w-7 bg-accent" />
          </div>

          <h2 className="text-3xl font-bold tracking-tight text-brand-text sm:text-4xl lg:text-[42px]">
            Frequently Asked{" "}
            <span className="text-primary">Questions</span>
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-brand-muted sm:text-base">
            Everything you need to know before starting your
            learning journey with us.
          </p>
        </div>

        {/* FAQ */}
        <div className="mx-auto grid max-w-6xl gap-x-12 lg:grid-cols-2 lg:gap-x-16">
          {/* Left Column */}
          <div>
            {leftItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.04,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <FAQItem
                  item={item}
                  index={index}
                  open={openId === item.id}
                  onToggle={() => toggleFAQ(item.id)}
                />
              </motion.div>
            ))}
          </div>

          {/* Right Column */}
          <div>
            {rightItems.map((item, index) => {
              const actualIndex = mid + index;

              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{
                    once: true,
                    amount: 0.2,
                  }}
                  transition={{
                    duration: 0.45,
                    delay: index * 0.04,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <FAQItem
                    item={item}
                    index={actualIndex}
                    open={openId === item.id}
                    onToggle={() => toggleFAQ(item.id)}
                  />
                </motion.div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}