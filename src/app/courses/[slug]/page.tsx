import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { coursesData, getCourseBySlug } from "@/data/courses";
import { Container } from "@/components/shared/Container";
import { Section } from "@/components/shared/Section";
import { PageHeader } from "@/components/shared/PageHeader";
import { CourseDetails } from "@/components/courses/CourseDetails";

interface CoursePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return coursesData.map((course) => ({
    slug: course.slug,
  }));
}

export async function generateMetadata({
  params,
}: CoursePageProps): Promise<Metadata> {
  const { slug } = await params;
  const course = getCourseBySlug(slug);

  if (!course) {
    return {
      title: "Course Not Found",
    };
  }

  return {
    title: course.title,
    description: course.shortDescription,
    openGraph: {
      title: `${course.title} | Talukdar IT`,
      description: course.shortDescription,
    },
  };
}

export default async function CoursePage({ params }: CoursePageProps) {
  const { slug } = await params;
  const course = getCourseBySlug(slug);

  if (!course) {
    notFound();
  }

  return (
    <>
      <PageHeader
        badge={course.category}
        title={course.title}
        description={course.shortDescription}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Courses", href: "/courses" },
          { label: course.title },
        ]}
      />

      <Section background="default">
        <Container>
          <CourseDetails course={course} />
        </Container>
      </Section>
    </>
  );
}
