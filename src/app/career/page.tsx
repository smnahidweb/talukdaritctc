import type { Metadata } from "next";
import { Briefcase, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/shared/Container";
import { Section } from "@/components/shared/Section";
import { PageHeader } from "@/components/shared/PageHeader";
import { CareerOpportunities } from "@/components/home/CareerOpportunities";
import { DemoCTA } from "@/components/home/DemoCTA";

export const metadata: Metadata = {
  title: "Career & Placement",
  description:
    "Explore career development pathways, internship orientation, and marketplace guidance for students at Talukdar IT.",
};

export default function CareerPage() {
  return (
    <>
      <PageHeader
        badge="Career Support"
        title="Career Pathways &amp; Job Placement Support"
        description="Our programs are built to bridge training with practical employment opportunities in corporate, government, and freelance sectors."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Career" },
        ]}
      />

      <CareerOpportunities />

      <Section background="surface">
        <Container>
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="text-center space-y-3">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#062B52]">
                Our Student Career Support Pillars
              </h2>
              <p className="text-sm sm:text-base text-[#64748B]">
                We assist students through every step of preparing for the job market.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="p-6 rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] space-y-3">
                <Briefcase className="w-6 h-6 text-[#0756A8]" />
                <h3 className="text-base font-bold text-[#062B52]">
                  Resume &amp; Portfolio
                </h3>
                <p className="text-xs sm:text-sm text-[#64748B]">
                  Constructing modern CVs, GitHub portfolios, Behance showcases, and verified project links.
                </p>
              </div>

              <div className="p-6 rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] space-y-3">
                <CheckCircle2 className="w-6 h-6 text-[#F97316]" />
                <h3 className="text-base font-bold text-[#062B52]">
                  Mock Interviews
                </h3>
                <p className="text-xs sm:text-sm text-[#64748B]">
                  Practice practical typing speed tests, technical quizzes, and live software problem-solving.
                </p>
              </div>

              <div className="p-6 rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] space-y-3">
                <CheckCircle2 className="w-6 h-6 text-[#16A34A]" />
                <h3 className="text-base font-bold text-[#062B52]">
                  Freelance Guidance
                </h3>
                <p className="text-xs sm:text-sm text-[#64748B]">
                  Account verification, buyer communication, bidding ethics, and payment gateway navigation.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <DemoCTA />
    </>
  );
}
