import * as React from "react";
import Image from "next/image";
import { Star, Quote } from "lucide-react";
import { testimonialsData } from "@/data/testimonials";
import { Container } from "@/components/shared/Container";

export function Testimonials() {
  return (
    <section className="py-10 sm:py-14 bg-[#F8FAFC] border-b border-[#E2E8F0]">
      <Container>
        {/* Section heading — matches rayhansict.com "What People Think About Us?" */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#062B52] uppercase tracking-tight">
            What Students Think{" "}
            <span className="text-[#0756A8]">About Us?</span>
          </h2>
          <div className="w-12 h-1 bg-[#F97316] rounded-full mx-auto mt-3 mb-4" />
          <p className="text-sm sm:text-base text-[#64748B] leading-relaxed">
            Our reputation is positively perceived by our students who regard us with appreciation for our practical and professional training approach.
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
          {testimonialsData.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl border border-[#E2E8F0] p-6 shadow-xs hover:shadow-sm transition-shadow relative flex flex-col"
            >
              {/* Stars */}
              <div className="flex items-center gap-0.5 mb-3">
                {Array.from({ length: item.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-[#F59E0B] text-[#F59E0B]"
                  />
                ))}
              </div>

              {/* Review text */}
              <p className="text-sm text-[#172033] leading-relaxed flex-1 italic">
                &ldquo;{item.content}&rdquo;
              </p>

              {/* Author — photo + name + course */}
              <div className="flex items-center gap-3 mt-5 pt-4 border-t border-[#E2E8F0]">
                <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-[#E2E8F0] shrink-0 bg-[#EFF7FF]">
                  {item.avatar && (
                    <Image
                      src={item.avatar}
                      alt={item.name}
                      fill
                      sizes="40px"
                      className="object-cover"
                    />
                  )}
                </div>
                <div>
                  <p className="text-sm font-bold text-[#062B52]">{item.name}</p>
                  <p className="text-xs text-[#0756A8] font-medium">{item.course}</p>
                </div>
              </div>

              {/* Decorative quote */}
              <Quote className="absolute top-4 right-4 w-5 h-5 text-slate-100" />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
