import type { Metadata } from "next";
import {
  CheckCircle2,
  FileText,
  Phone,
  HelpCircle,
  CreditCard,
  Clock3,
} from "lucide-react";

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
    "Apply online for courses at Talukdar IT & Computer Training Centre. View admission procedure, required documents, payment information, and batch schedules.",
};

export default function AdmissionPage() {
  return (
    <>
      <PageHeader
        badge="Join The Next Batch"
        title="Admission & Student Registration"
        description="Enroll in practical computer training. Choose your desired course and submit your application for the upcoming session."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Admission" },
        ]}
      />

      <Section background="default">
        <Container>
          {/* Admission Procedure */}
          <div className="mb-12 space-y-6">
            <div className="mx-auto max-w-2xl space-y-2 text-center">
              <Badge variant="primary">Simple Process</Badge>

              <h2 className="text-2xl font-bold text-[#062B52] sm:text-3xl">
                How to Complete Your Admission
              </h2>

              <p className="text-sm text-[#64748B]">
                Follow these simple steps to confirm your seat and workstation.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {/* Step 1 */}
              <div className="space-y-2 rounded-xl border border-[#E2E8F0] bg-white p-5 shadow-sm">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#0756A8] text-sm font-bold text-white">
                  1
                </span>

                <h3 className="text-base font-bold text-[#062B52]">
                  Select Course
                </h3>

                <p className="text-xs text-[#64748B]">
                  Choose the curriculum aligned with your academic or career
                  goals.
                </p>
              </div>

              {/* Step 2 */}
              <div className="space-y-2 rounded-xl border border-[#E2E8F0] bg-white p-5 shadow-sm">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#0756A8] text-sm font-bold text-white">
                  2
                </span>

                <h3 className="text-base font-bold text-[#062B52]">
                  Submit Form
                </h3>

                <p className="text-xs text-[#64748B]">
                  Complete the application form with your accurate contact
                  details.
                </p>
              </div>

              {/* Step 3 */}
              <div className="space-y-2 rounded-xl border border-[#E2E8F0] bg-white p-5 shadow-sm">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#0756A8] text-sm font-bold text-white">
                  3
                </span>

                <h3 className="text-base font-bold text-[#062B52]">
                  Batch Confirmation
                </h3>

                <p className="text-xs text-[#64748B]">
                  Our office contacts you to confirm your preferred
                  morning/evening slot.
                </p>
              </div>

              {/* Step 4 */}
              <div className="space-y-2 rounded-xl border border-[#E2E8F0] bg-white p-5 shadow-sm">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#16A34A] text-sm font-bold text-white">
                  4
                </span>

                <h3 className="text-base font-bold text-[#062B52]">
                  Lab Onboarding
                </h3>

                <p className="text-xs text-[#64748B]">
                  Collect your student ID, lab guide, and attend your first
                  orientation class.
                </p>
              </div>
            </div>
          </div>

          {/* Form & Admission Information */}
          <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12 lg:gap-12">
            {/* Admission Form */}
            <div className="space-y-6 rounded-xl border border-[#E2E8F0] bg-white p-6 shadow-sm sm:p-8 lg:col-span-7">
              <div>
                <h3 className="text-xl font-bold text-[#062B52]">
                  Online Admission Application
                </h3>

                <p className="mt-1 text-xs text-[#64748B] sm:text-sm">
                  Seats are allocated on a first-come, first-served basis per
                  batch.
                </p>
              </div>

              <form className="space-y-4" action="#">
                {/* Name + Phone */}
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="space-y-1.5">
                    <label
                      htmlFor="studentName"
                      className="text-xs font-semibold text-[#172033]"
                    >
                      Applicant Full Name *
                    </label>

                    <input
                      type="text"
                      id="studentName"
                      name="studentName"
                      required
                      placeholder="Full Name"
                      className="w-full rounded-lg border border-[#E2E8F0] px-3.5 py-2.5 text-sm outline-none transition-colors focus:border-[#0756A8]"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label
                      htmlFor="studentPhone"
                      className="text-xs font-semibold text-[#172033]"
                    >
                      Active Mobile Number *
                    </label>

                    <input
                      type="tel"
                      id="studentPhone"
                      name="studentPhone"
                      required
                      placeholder="01XXXXXXXXX"
                      className="w-full rounded-lg border border-[#E2E8F0] px-3.5 py-2.5 text-sm outline-none transition-colors focus:border-[#0756A8]"
                    />
                  </div>
                </div>

                {/* Course */}
                <div className="space-y-1.5">
                  <label
                    htmlFor="selectedCourse"
                    className="text-xs font-semibold text-[#172033]"
                  >
                    Select Training Program *
                  </label>

                  <select
                    id="selectedCourse"
                    name="selectedCourse"
                    required
                    className="w-full rounded-lg border border-[#E2E8F0] bg-white px-3.5 py-2.5 text-sm outline-none transition-colors focus:border-[#0756A8]"
                  >
                    <option value="">Select course...</option>

                    {coursesData.map((course) => (
                      <option key={course.id} value={course.slug}>
                        {course.title} ({course.duration})
                      </option>
                    ))}
                  </select>
                </div>

                {/* Batch */}
                <div className="space-y-1.5">
                  <label
                    htmlFor="preferredBatch"
                    className="text-xs font-semibold text-[#172033]"
                  >
                    Preferred Batch Time *
                  </label>

                  <select
                    id="preferredBatch"
                    name="preferredBatch"
                    required
                    className="w-full rounded-lg border border-[#E2E8F0] bg-white px-3.5 py-2.5 text-sm outline-none transition-colors focus:border-[#0756A8]"
                  >
                    <option value="">Select timing...</option>

                    <option value="morning">
                      Morning (9:00 AM – 11:00 AM)
                    </option>

                    <option value="afternoon">
                      Afternoon (3:00 PM – 5:00 PM)
                    </option>

                    <option value="evening">
                      Evening (6:00 PM – 8:00 PM)
                    </option>

                    <option value="friday">
                      Friday Special Batch
                    </option>
                  </select>
                </div>

                {/* Notes */}
                <div className="space-y-1.5">
                  <label
                    htmlFor="notes"
                    className="text-xs font-semibold text-[#172033]"
                  >
                    Additional Notes / Educational Background
                  </label>

                  <textarea
                    id="notes"
                    name="notes"
                    rows={3}
                    placeholder="e.g. Student / Job Seeker / Beginner"
                    className="w-full resize-none rounded-lg border border-[#E2E8F0] px-3.5 py-2.5 text-sm outline-none transition-colors focus:border-[#0756A8]"
                  />
                </div>

                {/* Payment Confirmation */}
                <div className="rounded-xl border border-[#D0E7FF] bg-[#EFF7FF] p-4 sm:p-5">
                  <div className="flex gap-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white">
                      <CreditCard
                        className="h-4 w-4 text-[#0756A8]"
                        strokeWidth={1.8}
                      />
                    </div>

                    <div>
                      <p className="text-sm font-bold text-[#062B52]">
                        Payment Confirmation
                      </p>

                      <p className="mt-1 text-xs leading-5 text-[#64748B]">
                        Complete your admission fee payment using the bKash or
                        Nagad numbers provided on the right, then enter your
                        transaction ID below.
                      </p>
                    </div>
                  </div>

                  {/* Transaction ID */}
                  <div className="mt-4">
                    <label
                      htmlFor="transactionId"
                      className="mb-2 block text-xs font-semibold text-[#172033]"
                    >
                      Transaction ID *
                    </label>

                    <input
                      type="text"
                      id="transactionId"
                      name="transactionId"
                      required
                      placeholder="Enter your payment transaction ID"
                      className="w-full rounded-lg border border-[#E2E8F0] bg-white px-3.5 py-2.5 text-sm outline-none transition-colors focus:border-[#0756A8]"
                    />

                    <p className="mt-2 text-[11px] leading-5 text-[#64748B]">
                      Enter the transaction ID after completing your payment.
                      We will use it to verify your payment.
                    </p>
                  </div>

                  {/* 12-24 Hours Notice */}
                  <div className="mt-4 flex gap-3 rounded-lg border border-[#BBF7D0] bg-[#F0FDF4] p-3.5">
                    <Clock3 className="mt-0.5 h-4 w-4 shrink-0 text-[#16A34A]" />

                    <p className="text-xs leading-5 text-[#166534]">
                      After your payment is verified, you will receive full
                      access to your enrolled course within{" "}
                      <strong>12 to 24 hours</strong>.
                    </p>
                  </div>
                </div>

                {/* Submit */}
                <Button
                  type="submit"
                  variant="accent"
                  size="lg"
                  className="w-full font-bold shadow-sm"
                >
                  Submit Admission Application
                </Button>
              </form>
            </div>

            {/* Right Side Information */}
            <div className="space-y-6 lg:col-span-5">
              {/* Payment Numbers */}
              <div className="space-y-5 rounded-xl border border-[#D0E7FF] bg-[#EFF7FF] p-6">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white">
                    <CreditCard
                      className="h-5 w-5 text-[#0756A8]"
                      strokeWidth={1.8}
                    />
                  </div>

                  <div>
                    <h4 className="text-base font-bold text-[#062B52]">
                      Admission Fee Payment
                    </h4>

                    <p className="mt-0.5 text-xs text-[#64748B]">
                      Pay using bKash or Nagad and keep your transaction ID.
                    </p>
                  </div>
                </div>

                {/* bKash */}
                <div className="rounded-lg border border-[#D0E7FF] bg-white p-4">
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#64748B]">
                        bKash
                      </p>

                      <p className="mt-1 text-sm font-semibold tracking-wide text-[#062B52]">
                        +880 1751-525294
                      </p>
                    </div>

                    <span className="rounded-md bg-[#FCE7F3] px-2.5 py-1 text-[10px] font-bold text-[#DB2777]">
                      Send Money / Cash In
                    </span>
                  </div>
                </div>

                {/* Nagad */}
                <div className="rounded-lg border border-[#D0E7FF] bg-white p-4">
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#64748B]">
                        Nagad
                      </p>

                      <p className="mt-1 text-sm font-semibold tracking-wide text-[#062B52]">
                        +880 1751-525294
                      </p>
                    </div>

                    <span className="rounded-md bg-orange-100 px-2.5 py-1 text-[10px] font-bold text-[#EA580C]">
                      Send Money / Cash In
                    </span>
                  </div>
                </div>
              </div>

              {/* Required Documents */}
              <div className="space-y-4 rounded-xl border border-[#D0E7FF] bg-[#EFF7FF] p-6">
                <div className="flex items-center gap-2">
                  <FileText className="h-5 w-5 text-[#0756A8]" />

                  <h4 className="text-base font-bold text-[#062B52]">
                    Required at Time of Admission
                  </h4>
                </div>

                <ul className="space-y-2.5 text-xs text-[#172033] sm:text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-[#16A34A]" />
                    <span>2 Passport size photographs</span>
                  </li>

                 
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-[#16A34A]" />
                    <span>
                      Last educational qualification certificate/ID
                    </span>
                  </li>

                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-[#16A34A]" />
                    <span>Admission fee deposit</span>
                  </li>
                </ul>
              </div>

              {/* Help */}
              <div className="space-y-3 rounded-xl border border-[#E2E8F0] bg-white p-6 shadow-sm">
                <div className="flex items-center gap-2">
                  <HelpCircle className="h-5 w-5 text-[#F97316]" />

                  <h4 className="text-base font-bold text-[#062B52]">
                    Need Help With Enrollment?
                  </h4>
                </div>

                <p className="text-xs leading-relaxed text-[#64748B] sm:text-sm">
                  You are welcome to come directly to our admission office
                  during business hours to inspect the computer lab and get
                  in-person guidance.
                </p>

                <div className="pt-2">
                  <a
                    href={`tel:${siteConfig.contact.phone}`}
                    className="inline-flex items-center gap-2 text-sm font-bold text-[#0756A8] transition-colors hover:text-[#F97316] hover:underline"
                  >
                    <Phone className="h-4 w-4" />
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