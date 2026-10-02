import type { Metadata } from "next";
import { Container } from "@/components/shared/Container";
import { Section } from "@/components/shared/Section";
import { PageHeader } from "@/components/shared/PageHeader";
import { Testimonials } from "@/components/home/Testimonials";
import { DemoCTA } from "@/components/home/DemoCTA";

export const metadata: Metadata = {
  title: "Success Stories",
  description:
    "Discover how our students transformed their careers through practical computer and IT education at Talukdar IT.",
};

export default function SuccessPage() {
  return (
    <>
      <PageHeader
        badge="Trainee Stories"
        title="Student Success &amp; Achievements"
        description="Read feedback and real career transitions from students who built practical computer skills with us."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Success Stories" },
        ]}
      />

      <Testimonials />

      <Section background="default">
        <Container>
          <div className="max-w-3xl mx-auto p-6 sm:p-8 rounded-xl bg-white border border-[#E2E8F0] text-center space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-[#062B52]">
              Are You a Former Student?
            </h2>
            <p className="text-sm text-[#64748B] leading-relaxed">
              We love celebrating our alumni! Share your workplace success story or freelance milestone with our instructor community.
            </p>
          </div>
        </Container>
      </Section>

      <DemoCTA />
    </>
  );
}
