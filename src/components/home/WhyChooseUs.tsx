import * as React from "react";
import {
  Settings,
  Smile,
  Briefcase,
  UserCheck,
  Lightbulb,
  Monitor,
} from "lucide-react";
import { whyChooseUsFeatures } from "@/data/features";
import { Container } from "@/components/shared/Container";
import { Section } from "@/components/shared/Section";

export function WhyChooseUs() {
  return (
    <Section background="surface" className="py-12 sm:py-16">
      <Container>
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12 space-y-2">
          <div className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#F97316]">
            WHY CHOOSE US
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-extrabold text-[#062B52] tracking-tight">
            Why Learn With Talukdar IT?
          </h2>
          <p className="text-sm sm:text-base text-[#64748B]">
            We provide a practical, friendly and career-focused learning environment.
          </p>
        </div>

        {/* 6 Grid items */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3.5 sm:gap-4">
          {whyChooseUsFeatures.map((item) => {
            const IconComponent =
              item.iconName === "Settings"
                ? Settings
                : item.iconName === "Smile"
                ? Smile
                : item.iconName === "Briefcase"
                ? Briefcase
                : item.iconName === "UserCheck"
                ? UserCheck
                : item.iconName === "Lightbulb"
                ? Lightbulb
                : Monitor;

            return (
              <div
                key={item.id}
                className="bg-white rounded-xl border border-[#E2E8F0] p-4 sm:p-5 flex flex-col items-center text-center shadow-xs hover:shadow-md hover:border-[#0756A8]/40 transition-all duration-200 group"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-3 transition-transform duration-200 group-hover:scale-105"
                  style={{ backgroundColor: item.bgColor }}
                >
                  <IconComponent
                    className="w-6 h-6"
                    style={{ color: item.color }}
                  />
                </div>
                <h3 className="text-sm sm:text-base font-bold text-[#062B52] leading-snug mb-1">
                  {item.title}
                </h3>
                <p className="text-xs text-[#64748B] leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
