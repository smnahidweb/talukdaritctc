import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { siteConfig } from "@/data/site";
import { Container } from "@/components/shared/Container";
import { Section } from "@/components/shared/Section";
import { PageHeader } from "@/components/shared/PageHeader";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Contact & Location",
  description:
    "Get in touch with Talukdar IT & Computer Training Centre for admissions, course details, and lab visits.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        badge="Get In Touch"
        title="Contact Us &amp; Visit Our Centre"
        description="We welcome prospective students, parents, and working professionals to visit our computer lab during opening hours."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Contact" },
        ]}
      />

      <Section background="surface">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
            {/* Left Column: Direct Contact Info */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-[#062B52]">
                  Institute Information
                </h2>
                <p className="text-sm text-[#64748B] mt-1">
                  Reach out by phone, WhatsApp, or drop by in person.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 rounded-xl border border-[#E2E8F0] bg-[#F8FAFC]">
                  <div className="w-10 h-10 rounded-lg bg-[#EFF7FF] flex items-center justify-center shrink-0 border border-[#D0E7FF]">
                    <Phone className="w-5 h-5 text-[#0756A8]" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-[#062B52]">Telephone &amp; Mobile</h3>
                    <a
                      href={`tel:${siteConfig.contact.phone}`}
                      className="text-sm text-[#0756A8] font-medium hover:underline block mt-0.5"
                    >
                      {siteConfig.contact.phoneDisplay}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl border border-[#E2E8F0] bg-[#F8FAFC]">
                  <div className="w-10 h-10 rounded-lg bg-[#EFF7FF] flex items-center justify-center shrink-0 border border-[#D0E7FF]">
                    <Mail className="w-5 h-5 text-[#0756A8]" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-[#062B52]">Email Address</h3>
                    <a
                      href={`mailto:${siteConfig.contact.email}`}
                      className="text-sm text-[#0756A8] font-medium hover:underline block mt-0.5"
                    >
                      {siteConfig.contact.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl border border-[#E2E8F0] bg-[#F8FAFC]">
                  <div className="w-10 h-10 rounded-lg bg-[#EFF7FF] flex items-center justify-center shrink-0 border border-[#D0E7FF]">
                    <MapPin className="w-5 h-5 text-[#F97316]" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-[#062B52]">Physical Address</h3>
                    <p className="text-sm text-[#64748B] mt-0.5">
                      {siteConfig.contact.address}, {siteConfig.contact.city}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl border border-[#E2E8F0] bg-[#F8FAFC]">
                  <div className="w-10 h-10 rounded-lg bg-[#EFF7FF] flex items-center justify-center shrink-0 border border-[#D0E7FF]">
                    <Clock className="w-5 h-5 text-[#16A34A]" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-[#062B52]">Training Centre Hours</h3>
                    <p className="text-sm text-[#64748B] mt-0.5">
                      {siteConfig.contact.workingHours}
                    </p>
                    <p className="text-xs text-slate-500 mt-1">
                      Friday: Closed for official maintenance
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Inquiry & Consultation Form Placeholder */}
            <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-xl border border-[#E2E8F0] shadow-sm space-y-6">
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-[#062B52]">
                  Send an Inquiry
                </h2>
                <p className="text-sm text-[#64748B] mt-1">
                  Have questions about upcoming batches, course fees, or schedules? Submit this message.
                </p>
              </div>

              <form className="space-y-4" action="#">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label htmlFor="name" className="text-xs font-semibold text-[#172033]">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      placeholder="e.g. Tanvir Hossain"
                      className="w-full px-3.5 py-2.5 rounded-lg border border-[#E2E8F0] text-sm focus:border-[#0756A8] focus:outline-none"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label htmlFor="phone" className="text-xs font-semibold text-[#172033]">
                      Mobile Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      placeholder="01XXXXXXXXX"
                      className="w-full px-3.5 py-2.5 rounded-lg border border-[#E2E8F0] text-sm focus:border-[#0756A8] focus:outline-none"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="course" className="text-xs font-semibold text-[#172033]">
                    Interested Course
                  </label>
                  <select
                    id="course"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-[#E2E8F0] text-sm focus:border-[#0756A8] focus:outline-none bg-white"
                  >
                    <option value="">Select a program...</option>
                    <option value="office">Computer Office Application &amp; ICT</option>
                    <option value="graphics">Professional Graphic Design</option>
                    <option value="web">Web Design &amp; Development</option>
                    <option value="marketing">Digital Marketing &amp; SEO</option>
                    <option value="hardware">Hardware &amp; Basic Networking</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="message" className="text-xs font-semibold text-[#172033]">
                    Message / Questions
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    placeholder="Ask about batch timings, fees, or prerequisites..."
                    className="w-full px-3.5 py-2.5 rounded-lg border border-[#E2E8F0] text-sm focus:border-[#0756A8] focus:outline-none resize-none"
                  />
                </div>

                <Button
                  variant="primary"
                  size="lg"
                  className="w-full sm:w-auto font-semibold"
                >
                  Submit Inquiry
                </Button>
              </form>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
