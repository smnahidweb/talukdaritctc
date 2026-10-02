import type { Metadata } from "next";
import { coursesData } from "@/data/courses";
import { Container } from "@/components/shared/Container";
import { Section } from "@/components/shared/Section";
import { PageHeader } from "@/components/shared/PageHeader";
import { CourseGrid } from "@/components/courses/CourseGrid";
import { DemoCTA } from "@/components/home/DemoCTA";

export const metadata: Metadata = {
  title: "Computer & IT Courses",
  description:
    "Explore our complete curriculum of practical computer, graphic design, web development, and digital marketing training programs.",
};

export default function CoursesPage() {
  return (
    <>
      <PageHeader
        badge="Academic Programs"
        title="Professional Computer &amp; IT Courses"
        description="All courses include hands-on computer lab training, real project assignments, and institutional course completion certification."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Courses" },
        ]}
      />

      <Section background="default">
        <Container>
          <div className="space-y-8">
            <div className="flex items-center justify-between border-b border-[#E2E8F0] pb-4 flex-wrap gap-4">
              <div>
                <h2 className="text-xl font-bold text-[#062B52]">
                  Available Programs ({coursesData.length})
                </h2>
                <p className="text-xs sm:text-sm text-[#64748B]">
                  Morning, afternoon, and evening batches open for enrollment.
                </p>
              </div>
            </div>

            <CourseGrid courses={coursesData} />
          </div>
        </Container>
      </Section>

      <DemoCTA />
    </>
  );
}
