import * as React from "react";
import { CheckCircle2, XCircle } from "lucide-react";
import { comparisonRows } from "@/data/content";
import { Container } from "@/components/shared/Container";

export function ComparisonTable() {
  return (
    <section className="py-10 sm:py-14 bg-[#F8FAFC] border-b border-[#E2E8F0]">
      <Container>
        {/* Section heading */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#062B52] uppercase tracking-tight">
            আমাদের সাথে অন্য কোর্সের পার্থক্য
          </h2>
          <div className="w-12 h-1 bg-[#F97316] rounded-full mx-auto mt-3" />
        </div>

        {/* Comparison Table */}
        <div className="max-w-3xl mx-auto overflow-x-auto rounded-xl border border-[#E2E8F0] shadow-sm">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-[#062B52] text-white">
                <th className="text-left px-5 py-3.5 font-semibold">
                  কোর্সে যা রয়েছে
                </th>
                <th className="text-center px-5 py-3.5 font-semibold">
                  আমাদের কোর্স
                </th>
                <th className="text-center px-5 py-3.5 font-semibold">
                  অন্যান্য কোর্স
                </th>
              </tr>
            </thead>
            <tbody>
              {comparisonRows.map((row, idx) => (
                <tr
                  key={row.feature}
                  className={`border-t border-[#E2E8F0] ${
                    idx % 2 === 0 ? "bg-white" : "bg-[#F8FAFC]"
                  }`}
                >
                  <td className="px-5 py-3 text-[#172033] font-medium">
                    {row.feature}
                  </td>
                  <td className="px-5 py-3 text-center">
                    {row.ours ? (
                      <CheckCircle2 className="w-5 h-5 text-[#16A34A] mx-auto" />
                    ) : (
                      <XCircle className="w-5 h-5 text-red-500 mx-auto" />
                    )}
                  </td>
                  <td className="px-5 py-3 text-center">
                    {row.others ? (
                      <CheckCircle2 className="w-5 h-5 text-[#16A34A] mx-auto" />
                    ) : (
                      <XCircle className="w-5 h-5 text-red-500 mx-auto" />
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Container>
    </section>
  );
}
