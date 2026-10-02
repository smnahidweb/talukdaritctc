import type { Metadata } from "next";
import { MessageSquare, ArrowRight } from "lucide-react";
import { Container } from "@/components/shared/Container";
import { Section } from "@/components/shared/Section";
import { PageHeader } from "@/components/shared/PageHeader";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Student Forum",
  description:
    "Connect with fellow trainees, access study materials, and discuss computer problem-solving topics at Talukdar IT.",
};

export default function ForumPage() {
  return (
    <>
      <PageHeader
        badge="Community"
        title="Student Community &amp; Knowledge Forum"
        description="A collaborative hub for students and alumni to exchange notes, solve software challenges, and share learning resources."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Forum" },
        ]}
      />

      <Section background="default">
        <Container>
          <div className="max-w-4xl mx-auto space-y-8">
            {/* Notice Banner */}
            <div className="p-6 rounded-xl bg-[#EFF7FF] border border-[#D0E7FF] flex items-start gap-4">
              <MessageSquare className="w-6 h-6 text-[#0756A8] shrink-0 mt-0.5" />
              <div className="space-y-1">
                <h2 className="text-base font-bold text-[#062B52]">
                  Welcome to the Trainee Discussion Space
                </h2>
                <p className="text-sm text-[#64748B] leading-relaxed">
                  Active enrolled students and alumni can interact with trainers, ask doubts regarding class assignments, and download practice datasets.
                </p>
              </div>
            </div>

            {/* Forum Topic Categories */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-xl border border-[#E2E8F0] space-y-3">
                <Badge variant="primary">Office Apps</Badge>
                <h3 className="text-lg font-bold text-[#062B52]">
                  Office &amp; Data Q&amp;A
                </h3>
                <p className="text-xs sm:text-sm text-[#64748B]">
                  Discussion on MS Excel formulas, document templates, Bangla typing layouts, and printing tips.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl border border-[#E2E8F0] space-y-3">
                <Badge variant="accent">Graphic Design</Badge>
                <h3 className="text-lg font-bold text-[#062B52]">
                  Design Feedback Hub
                </h3>
                <p className="text-xs sm:text-sm text-[#64748B]">
                  Post your logo sketches, banner layouts, and color palettes for constructive peer and mentor critique.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl border border-[#E2E8F0] space-y-3">
                <Badge variant="neutral">Web &amp; IT</Badge>
                <h3 className="text-lg font-bold text-[#062B52]">
                  Coding &amp; Hardware Lab
                </h3>
                <p className="text-xs sm:text-sm text-[#64748B]">
                  Troubleshooting CSS bugs, responsive layouts, Windows driver issues, and LAN setups.
                </p>
              </div>
            </div>

            {/* Offline & Online Hub Information */}
            <div className="p-6 rounded-xl bg-white border border-[#E2E8F0] text-center space-y-4">
              <h3 className="text-lg font-bold text-[#062B52]">
                Join Our Dedicated Student Discussion Group
              </h3>
              <p className="text-sm text-[#64748B] max-w-xl mx-auto">
                All enrolled students are added to private batch groups managed by our course instructors for daily assignment updates.
              </p>
              <Button
                variant="primary"
                size="md"
                href="/contact"
                className="gap-2"
              >
                <span>Contact Institute Office for Batch Access</span>
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
