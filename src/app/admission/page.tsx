import type { Metadata } from "next";
import { CheckCircle2, FileText, Phone, HelpCircle } from "lucide-react";
import { siteConfig } from "@/data/site";
import { coursesData } from "@/data/courses";
import { Container } from "@/components/shared/Container";
import { Section } from "@/components/shared/Section";
import { PageHeader } from "@/components/shared/PageHeader";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Admission & Enrollment",
  description:
    "Apply online for courses at Talukdar IT & Computer Training Centre. View admission procedure, required documents, and batch schedules.",
};

export default function AdmissionPage() {
  return (
    <>
      <PageHeader
        badge="Join The Next Batch"
        title="Admission &amp; Student Registration"
        description="Enroll in practical computer training. Choose your desired course and submit your application for the upcoming session."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Admission" },
        ]}
      />

      <Section background="default">
        <Container>
          {/* 4-Step Admission Procedure */}
          <div className="mb-12 space-y-6">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <Badge variant="primary">Simple Process</Badge>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#062B52]">
                How to Complete Your Admission
              </h2>
              <p className="text-sm text-[#64748B]">
                Follow these simple steps to confirm your seat and workstation.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-5 rounded-xl bg-white border border-[#E2E8F0] space-y-2 shadow-sm">
                <span className="w-8 h-8 rounded-full bg-[#0756A8] text-white flex items-center justify-center font-bold text-sm">
                  1
                </span>
                <h3 className="text-base font-bold text-[#062B52]">
                  Select Course
                </h3>
                <p className="text-xs text-[#64748B]">
                  Choose the curriculum aligned with your academic or career goals.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-white border border-[#E2E8F0] space-y-2 shadow-sm">
                <span className="w-8 h-8 rounded-full bg-[#0756A8] text-white flex items-center justify-center font-bold text-sm">
                  2
                </span>
                <h3 className="text-base font-bold text-[#062B52]">
                  Submit Form
                </h3>
                <p className="text-xs text-[#64748B]">
                  Complete the application form with your accurate contact details.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-white border border-[#E2E8F0] space-y-2 shadow-sm">
                <span className="w-8 h-8 rounded-full bg-[#0756A8] text-white flex items-center justify-center font-bold text-sm">
                  3
                </span>
                <h3 className="text-base font-bold text-[#062B52]">
                  Batch Confirmation
                </h3>
                <p className="text-xs text-[#64748B]">
                  Our office contacts you to confirm your preferred morning/evening slot.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-white border border-[#E2E8F0] space-y-2 shadow-sm">
                <span className="w-8 h-8 rounded-full bg-[#16A34A] text-white flex items-center justify-center font-bold text-sm">
                  4
                </span>
                <h3 className="text-base font-bold text-[#062B52]">
                  Lab Onboarding
                </h3>
                <p className="text-xs text-[#64748B]">
                  Collect your student ID, lab guide, and attend your first orientation class.
                </p>
              </div>
            </div>
          </div>

          {/* Form & Admission Requirements */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Left: Registration Form */}
            <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-xl border border-[#E2E8F0] shadow-sm space-y-6">
              <div>
                <h3 className="text-xl font-bold text-[#062B52]">
                  Online Admission Application
                </h3>
                <p className="text-xs sm:text-sm text-[#64748B] mt-1">
                  Seats are allocated on a first-come, first-served basis per batch.
                </p>
              </div>

              <form className="space-y-4" action="#">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label htmlFor="studentName" className="text-xs font-semibold text-[#172033]">
                      Applicant Full Name *
                    </label>
                    <input
                      type="text"
                      id="studentName"
                      required
                      placeholder="Full Name"
                      className="w-full px-3.5 py-2.5 rounded-lg border border-[#E2E8F0] text-sm focus:border-[#0756A8] focus:outline-none"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="studentPhone" className="text-xs font-semibold text-[#172033]">
                      Active Mobile Number *
                    </label>
                    <input
                      type="tel"
                      id="studentPhone"
                      required
                      placeholder="01XXXXXXXXX"
                      className="w-full px-3.5 py-2.5 rounded-lg border border-[#E2E8F0] text-sm focus:border-[#0756A8] focus:outline-none"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="selectedCourse" className="text-xs font-semibold text-[#172033]">
                    Select Training Program *
                  </label>
                  <select
                    id="selectedCourse"
                    required
                    className="w-full px-3.5 py-2.5 rounded-lg border border-[#E2E8F0] text-sm focus:border-[#0756A8] focus:outline-none bg-white"
                  >
                    <option value="">Select course...</option>
                    {coursesData.map((course) => (
                      <option key={course.id} value={course.slug}>
                        {course.title} ({course.duration})
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="preferredBatch" className="text-xs font-semibold text-[#172033]">
                    Preferred Batch Time *
                  </label>
                  <select
                    id="preferredBatch"
                    required
                    className="w-full px-3.5 py-2.5 rounded-lg border border-[#E2E8F0] text-sm focus:border-[#0756A8] focus:outline-none bg-white"
                  >
                    <option value="">Select timing...</option>
                    <option value="morning">Morning (9:00 AM – 11:00 AM)</option>
                    <option value="afternoon">Afternoon (3:00 PM – 5:00 PM)</option>
                    <option value="evening">Evening (6:00 PM – 8:00 PM)</option>
                    <option value="friday">Friday Special Batch</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="notes" className="text-xs font-semibold text-[#172033]">
                    Additional Notes / Educational Background
                  </label>
                  <textarea
                    id="notes"
                    rows={3}
                    placeholder="e.g. Student / Job Seeker / Beginner"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-[#E2E8F0] text-sm focus:border-[#0756A8] focus:outline-none resize-none"
                  />
                </div>

                <Button
                  variant="accent"
                  size="lg"
                  className="w-full font-bold shadow-sm"
                >
                  Submit Admission Application
                </Button>
              </form>
            </div>

            {/* Right: Admission Documents & Support Info */}
            <div className="lg:col-span-5 space-y-6">
              <div className="p-6 rounded-xl bg-[#EFF7FF] border border-[#D0E7FF] space-y-4">
                <div className="flex items-center gap-2">
                  <FileText className="w-5 h-5 text-[#0756A8]" />
                  <h4 className="text-base font-bold text-[#062B52]">
                    Required at Time of Admission
                  </h4>
                </div>
                <ul className="space-y-2.5 text-xs sm:text-sm text-[#172033]">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#16A34A] shrink-0" />
                    <span>2 Passport size photographs</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#16A34A] shrink-0" />
                    <span>Photocopy of NID or Birth Certificate</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#16A34A] shrink-0" />
                    <span>Last educational qualification certificate/ID</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#16A34A] shrink-0" />
                    <span>Admission fee deposit</span>
                  </li>
                </ul>
              </div>

              <div className="p-6 rounded-xl bg-white border border-[#E2E8F0] shadow-sm space-y-3">
                <div className="flex items-center gap-2">
                  <HelpCircle className="w-5 h-5 text-[#F97316]" />
                  <h4 className="text-base font-bold text-[#062B52]">
                    Need Help With Enrollment?
                  </h4>
                </div>
                <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                  You are welcome to come directly to our admission office during business hours to inspect the computer lab and get in-person guidance.
                </p>
                <div className="pt-2">
                  <a
                    href={`tel:${siteConfig.contact.phone}`}
                    className="inline-flex items-center gap-2 text-sm font-bold text-[#0756A8] hover:underline"
                  >
                    <Phone className="w-4 h-4" />
                    <span>{siteConfig.contact.phoneDisplay}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
