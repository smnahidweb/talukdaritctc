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

      <DemoCTA />
    </>
  );
}
