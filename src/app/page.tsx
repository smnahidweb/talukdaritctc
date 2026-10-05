import type { Metadata } from "next";
import { Hero } from "@/components/home/Hero";
import { AboutPreview } from "@/components/home/AboutPreview";
import { MentorSection } from "@/components/home/MentorSection";
import { Testimonials } from "@/components/home/Testimonials";
import { FAQSection } from "@/components/home/FAQSection";
import { AdmissionCTA } from "@/components/home/AdmissionCTA";
import TrainingStats from "@/components/home/TrainingStats";
import PopularCourses from "@/components/home/PopularCourses";
import { FromLearningToEarning } from "@/components/home/FromLearningToEarning";
import { DemoCTA } from "@/components/home/DemoCTA";

export const metadata: Metadata = {
  title:
    "Talukdar IT & Computer Training Centre | Prasadpur Bazar, Manda, Naogaon",
  description:
    "Practical IT and computer training in Prasadpur Bazar, Manda, Naogaon. Learn Microsoft Office, computer fundamentals, web design and digital skills. Call +880 1751-525294.",
  keywords: [
    "computer training Naogaon",
    "IT training centre Manda",
    "Microsoft Office course",
    "computer course Bangladesh",
    "Talukdar IT",
  ],
};

export default function HomePage() {
  return (
    <div className="flex flex-col w-full">
      {/* 1. Hero + Department Category Strip */}
      <Hero />

      {/* 2. About Preview */}
      <AboutPreview />

      <TrainingStats />


      <PopularCourses />

      {/* 6. Meet Our Trainers */}
      <MentorSection />

      <FromLearningToEarning />

      {/* 7. Student Testimonials / Reviews */}
      <Testimonials />

      {/* 8. FAQ */}
      <FAQSection />
      <DemoCTA />

    </div>
  );
}
