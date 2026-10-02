"use client";
import * as React from "react";
import { ChevronDown } from "lucide-react";
import { faqItems } from "@/data/content";
import { Container } from "@/components/shared/Container";

function FAQItem({
  item,
  open,
  onToggle,
}: {
  item: (typeof faqItems)[0];
  open: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="bg-white rounded-lg border border-[#E2E8F0] overflow-hidden shadow-xs">
      <button
        type="button"
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-3 px-5 py-4 text-left text-sm font-semibold text-[#062B52] hover:bg-[#F8FAFC] transition-colors"
        aria-expanded={open}
      >
        <span>{item.question}</span>
        <ChevronDown
          className={`w-4 h-4 text-[#0756A8] shrink-0 transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      {open && (
        <div className="px-5 pb-4 text-sm text-[#64748B] leading-relaxed border-t border-[#E2E8F0] pt-3">
          {item.answer}
        </div>
      )}
    </div>
  );
}

export function FAQSection() {
  const [openId, setOpenId] = React.useState<string | null>(null);

  const toggle = (id: string) => setOpenId((prev) => (prev === id ? null : id));

  // Split into 2 columns
  const mid = Math.ceil(faqItems.length / 2);
  const leftItems = faqItems.slice(0, mid);
  const rightItems = faqItems.slice(mid);

  return (
    <section className="py-10 sm:py-14 bg-white border-b border-[#E2E8F0]">
      <Container>
        {/* Section heading */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#062B52] uppercase tracking-tight">
            Frequently Asked Questions
          </h2>
          <div className="w-12 h-1 bg-[#F97316] rounded-full mx-auto mt-3" />
        </div>

        {/* 2-column FAQ accordion — matches rayhansict.com layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 max-w-5xl mx-auto">
          <div className="space-y-3">
            {leftItems.map((item) => (
              <FAQItem
                key={item.id}
                item={item}
                open={openId === item.id}
                onToggle={() => toggle(item.id)}
              />
            ))}
          </div>
          <div className="space-y-3">
            {rightItems.map((item) => (
              <FAQItem
                key={item.id}
                item={item}
                open={openId === item.id}
                onToggle={() => toggle(item.id)}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
