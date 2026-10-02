import * as React from "react";
import { CheckCircle2 } from "lucide-react";
import { trustHighlights } from "@/data/features";
import { Container } from "@/components/shared/Container";

export function TrustHighlights() {
  return (
    <section className="py-0 bg-white border-b border-[#E2E8F0]">
      {/* No separate trust highlights section — integrated into AboutPreview below hero */}
      {/* Keeping this as spacer to avoid removing hero bottom bar */}
      <Container>
        <div className="py-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {trustHighlights.map((item) => (
            <div
              key={item.id}
              className="flex items-start gap-3 p-3.5 rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] hover:border-[#0756A8]/30 hover:bg-[#EFF7FF]/50 transition-all"
            >
              <CheckCircle2 className="w-5 h-5 text-[#16A34A] shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-bold text-[#062B52] leading-snug">
                  {item.title}
                </p>
                <p className="text-xs text-[#64748B] mt-0.5 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
