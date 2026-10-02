import type { Metadata } from "next";
import { CheckCircle2, ShieldCheck, Users, Target, BookOpen } from "lucide-react";
import { Container } from "@/components/shared/Container";
import { Section } from "@/components/shared/Section";
import { PageHeader } from "@/components/shared/PageHeader";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Talukdar IT & Computer Training Centre, our mission, lab facilities, and dedicated approach to computer education.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        badge="About The Institute"
        title="About Talukdar IT & Computer Training Centre"
        description="A practical, community-rooted IT education center committed to empowering students, job seekers, and professionals with real computer skills."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About Us" },
        ]}
      />

      <Section background="surface">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            <div className="space-y-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#062B52]">
                Our Mission &amp; Educational Philosophy
              </h2>
              <p className="text-base text-[#64748B] leading-relaxed">
                At {siteConfig.name}, we believe that IT education should be fundamentally practical. Many students struggle in real-world jobs because they only learned theoretical concepts. Our training methodology emphasizes hands-on workstation practice from day one.
              </p>
              <p className="text-base text-[#64748B] leading-relaxed">
                Whether you need basic computer literacy for government exams, advanced spreadsheet proficiency for corporate accounting, or design skills for freelance markets, our structured programs are tailored to help you achieve measurable competence.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#16A34A] shrink-0" />
                  <span className="text-sm font-medium text-[#172033]">
                    100% Individual Computer Access in Practical Classes
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#16A34A] shrink-0" />
                  <span className="text-sm font-medium text-[#172033]">
                    Structured Lesson Plans &amp; Step-by-Step Lab Manuals
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#16A34A] shrink-0" />
                  <span className="text-sm font-medium text-[#172033]">
                    Dedicated Practice Hours Outside Regular Scheduled Batches
                  </span>
                </div>
              </div>
            </div>

            {/* Core Values Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-6 rounded-xl bg-[#EFF7FF] border border-[#D0E7FF] space-y-3">
                <ShieldCheck className="w-8 h-8 text-[#0756A8]" />
                <h3 className="text-lg font-bold text-[#062B52]">Integrity &amp; Trust</h3>
                <p className="text-xs sm:text-sm text-[#64748B]">
                  Transparent course guidelines, realistic career guidance, and honest mentoring.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-white border border-[#E2E8F0] shadow-sm space-y-3">
                <Users className="w-8 h-8 text-[#F97316]" />
                <h3 className="text-lg font-bold text-[#062B52]">Student Focus</h3>
                <p className="text-xs sm:text-sm text-[#64748B]">
                  Small batches ensuring every student gets direct instructor attention.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-white border border-[#E2E8F0] shadow-sm space-y-3">
                <Target className="w-8 h-8 text-[#16A34A]" />
                <h3 className="text-lg font-bold text-[#062B52]">Career Readiness</h3>
                <p className="text-xs sm:text-sm text-[#64748B]">
                  Focus on practical tasks that prepare trainees for immediate workplace tasks.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-[#062B52] text-white space-y-3">
                <BookOpen className="w-8 h-8 text-[#38BDF8]" />
                <h3 className="text-lg font-bold text-white">Continual Support</h3>
                <p className="text-xs sm:text-sm text-slate-300">
                  Continued lab access and community consultation even after course completion.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
