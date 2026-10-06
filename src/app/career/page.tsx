import type { Metadata } from "next";
import {
  ArrowRight,
  BriefcaseBusiness,
  CheckCircle2,
  FileText,
  Mail,
  MapPin,
  Phone,
  Upload,
  UserRound,
  Users,
} from "lucide-react";

import { Container } from "@/components/shared/Container";

export const metadata: Metadata = {
  title: "Career Opportunities",
  description:
    "Submit your career profile to Talukdar IT & Computer Training Centre and explore future job, internship, freelance, and professional opportunities.",
};

export default function CareerPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-brand-border bg-brand-bg">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -right-40 -top-40 h-[480px] w-[480px] rounded-full bg-primary/[0.055] blur-3xl" />
          <div className="absolute -bottom-40 left-1/3 h-[320px] w-[320px] rounded-full bg-accent/[0.045] blur-3xl" />

          <div
            className="absolute right-0 top-0 h-full w-[42%] opacity-30"
            style={{
              backgroundImage:
                "linear-gradient(rgba(7,86,168,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(7,86,168,0.045) 1px, transparent 1px)",
              backgroundSize: "44px 44px",
            }}
          />
        </div>

        <Container>
          <div className="relative grid min-h-[500px] items-center gap-14 py-16 sm:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20 lg:py-24">
            {/* Hero Content */}
            <div className="max-w-2xl">
              <div className="mb-6 flex items-center gap-3">

                <span className="text-xs font-bold uppercase tracking-[0.18em] text-accent">
                  Career Opportunities
                </span>
              </div>

              <h1 className="text-4xl font-bold leading-[1.1] tracking-[-0.03em] text-brand-text sm:text-5xl lg:text-[58px]">
                Your next opportunity{" "}
                <span className="text-primary">could start here.</span>
              </h1>

              <p className="mt-6 max-w-xl text-sm leading-7 text-brand-muted sm:text-base sm:leading-8">
                We are always interested in connecting with motivated people.
                Submit your career profile and let us know what kind of
                opportunity you are looking for.
              </p>

              <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-brand-success" />
                  <span className="text-xs font-medium text-brand-muted">
                    Job Opportunities
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-brand-success" />
                  <span className="text-xs font-medium text-brand-muted">
                    Internship
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-brand-success" />
                  <span className="text-xs font-medium text-brand-muted">
                    Freelance & Projects
                  </span>
                </div>
              </div>
            </div>

            {/* Hero Visual */}
            <div className="relative mx-auto w-full max-w-[440px] lg:ml-auto">
              <div className="relative overflow-hidden rounded-[28px] border border-brand-border bg-white p-6 shadow-[0_25px_70px_rgba(15,23,42,0.08)] sm:p-7">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.14em] text-brand-muted">
                      Career Profile
                    </p>

                    <h2 className="mt-2 text-xl font-bold text-brand-text">
                      Tell us where you want to go.
                    </h2>
                  </div>

                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-blue-light text-primary">
                    <BriefcaseBusiness
                      className="h-5 w-5"
                      strokeWidth={1.7}
                    />
                  </div>
                </div>

                <div className="mt-7 space-y-3">
                  <div className="flex items-center gap-3 rounded-xl bg-brand-bg p-3.5">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white text-primary">
                      <UserRound className="h-4 w-4" />
                    </div>

                    <div>
                      <p className="text-xs font-semibold text-brand-text">
                        Your Profile
                      </p>
                      <p className="mt-0.5 text-[11px] text-brand-muted">
                        Skills & experience
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 rounded-xl bg-[#FFF7EF] p-3.5">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white text-accent">
                      <BriefcaseBusiness className="h-4 w-4" />
                    </div>

                    <div>
                      <p className="text-xs font-semibold text-brand-text">
                        Your Opportunity
                      </p>
                      <p className="mt-0.5 text-[11px] text-brand-muted">
                        Job, internship or project
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 rounded-xl bg-[#F1FBF5] p-3.5">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white text-brand-success">
                      <CheckCircle2 className="h-4 w-4" />
                    </div>

                    <div>
                      <p className="text-xs font-semibold text-brand-text">
                        Stay Connected
                      </p>
                      <p className="mt-0.5 text-[11px] text-brand-muted">
                        We will contact you when relevant
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 border-t border-brand-border pt-5">
                  <div className="flex items-center gap-2 text-xs text-brand-muted">
                    <span className="h-2 w-2 rounded-full bg-brand-success" />
                    Career applications are open
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Career Benefits */}
      <section className="bg-surface py-16 sm:py-20 lg:py-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-20">
            <div>
              <div className="flex items-center gap-3">
           

                <span className="text-xs font-bold uppercase tracking-[0.18em] text-accent">
                  Why Connect With Us
                </span>
              </div>

              <h2 className="mt-5 text-3xl font-bold leading-tight tracking-tight text-brand-text sm:text-4xl">
                Opportunities can begin with a{" "}
                <span className="text-primary">conversation.</span>
              </h2>

              <p className="mt-5 max-w-md text-sm leading-7 text-brand-muted">
                Whether you are starting your career, looking for practical
                experience, or exploring your next professional opportunity,
                we would like to know more about you.
              </p>
            </div>

            <div className="grid overflow-hidden rounded-[24px] border border-brand-border sm:grid-cols-2">
              <div className="border-b border-brand-border bg-[#F2F7FF] p-6 sm:border-r sm:p-7">
                <BriefcaseBusiness
                  className="h-5 w-5 text-primary"
                  strokeWidth={1.7}
                />

                <h3 className="mt-6 text-base font-bold text-brand-text">
                  Career Opportunities
                </h3>

                <p className="mt-2 text-sm leading-6 text-brand-muted">
                  Stay connected with suitable employment and professional
                  opportunities.
                </p>
              </div>

              <div className="border-b border-brand-border bg-[#FFF7EF] p-6 sm:p-7">
                <FileText
                  className="h-5 w-5 text-accent"
                  strokeWidth={1.7}
                />

                <h3 className="mt-6 text-base font-bold text-brand-text">
                  Your Profile Matters
                </h3>

                <p className="mt-2 text-sm leading-6 text-brand-muted">
                  Share your skills, experience, interests, and CV in one
                  place.
                </p>
              </div>

              <div className="bg-[#F1FBF5] p-6 sm:border-r sm:border-brand-border sm:p-7">
                <Users
                  className="h-5 w-5 text-brand-success"
                  strokeWidth={1.7}
                />

                <h3 className="mt-6 text-base font-bold text-brand-text">
                  Professional Network
                </h3>

                <p className="mt-2 text-sm leading-6 text-brand-muted">
                  Become part of a growing network of learners and
                  professionals.
                </p>
              </div>

              <div className="bg-[#F7F4FF] p-6 sm:p-7">
                <CheckCircle2
                  className="h-5 w-5 text-violet-600"
                  strokeWidth={1.7}
                />

                <h3 className="mt-6 text-base font-bold text-brand-text">
                  Future Possibilities
                </h3>

                <p className="mt-2 text-sm leading-6 text-brand-muted">
                  Your profile may be considered when relevant opportunities
                  become available.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Career Form */}
      <section
        id="career-form"
        className="border-t border-brand-border bg-brand-bg py-16 sm:py-20 lg:py-24"
      >
        <Container>
          <div className="mx-auto max-w-5xl">
            <div className="mb-10 max-w-2xl">
              <div className="flex items-center gap-3">
                
                <span className="text-xs font-bold uppercase tracking-[0.18em] text-accent">
                  Submit Your Profile
                </span>
              </div>

              <h2 className="mt-5 text-3xl font-bold tracking-tight text-brand-text sm:text-4xl">
                Let&apos;s know what you&apos;re looking for.
              </h2>

              <p className="mt-4 text-sm leading-7 text-brand-muted sm:text-base">
                Complete the form below and submit your CV. We will review
                your profile and contact you when a suitable opportunity
                becomes available.
              </p>
            </div>

            <div className="overflow-hidden rounded-[28px] border border-brand-border bg-white">
              <form className="p-6 sm:p-8 lg:p-10">
                <div className="grid gap-6 sm:grid-cols-2">
                  {/* Full Name */}
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2.5 block text-sm font-semibold text-brand-text"
                    >
                      Full Name
                    </label>

                    <div className="relative">
                      <UserRound className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-brand-muted" />

                      <input
                        id="name"
                        type="text"
                        placeholder="Enter your full name"
                        className="h-12 w-full rounded-xl border border-brand-border bg-brand-bg pl-11 pr-4 text-sm text-brand-text outline-none transition-all placeholder:text-slate-400 focus:border-primary focus:bg-white focus:ring-4 focus:ring-primary/10"
                      />
                    </div>
                  </div>

                  {/* Phone */}
                  <div>
                    <label
                      htmlFor="phone"
                      className="mb-2.5 block text-sm font-semibold text-brand-text"
                    >
                      Phone Number
                    </label>

                    <div className="relative">
                      <Phone className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-brand-muted" />

                      <input
                        id="phone"
                        type="tel"
                        placeholder="+880 1XXXXXXXXX"
                        className="h-12 w-full rounded-xl border border-brand-border bg-brand-bg pl-11 pr-4 text-sm text-brand-text outline-none transition-all placeholder:text-slate-400 focus:border-primary focus:bg-white focus:ring-4 focus:ring-primary/10"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2.5 block text-sm font-semibold text-brand-text"
                    >
                      Email Address
                    </label>

                    <div className="relative">
                      <Mail className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-brand-muted" />

                      <input
                        id="email"
                        type="email"
                        placeholder="you@example.com"
                        className="h-12 w-full rounded-xl border border-brand-border bg-brand-bg pl-11 pr-4 text-sm text-brand-text outline-none transition-all placeholder:text-slate-400 focus:border-primary focus:bg-white focus:ring-4 focus:ring-primary/10"
                      />
                    </div>
                  </div>

                  {/* Location */}
                  <div>
                    <label
                      htmlFor="location"
                      className="mb-2.5 block text-sm font-semibold text-brand-text"
                    >
                      Current Location
                    </label>

                    <div className="relative">
                      <MapPin className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-brand-muted" />

                      <input
                        id="location"
                        type="text"
                        placeholder="City / Area"
                        className="h-12 w-full rounded-xl border border-brand-border bg-brand-bg pl-11 pr-4 text-sm text-brand-text outline-none transition-all placeholder:text-slate-400 focus:border-primary focus:bg-white focus:ring-4 focus:ring-primary/10"
                      />
                    </div>
                  </div>

                  {/* Skill */}
                  <div>
                    <label
                      htmlFor="skill"
                      className="mb-2.5 block text-sm font-semibold text-brand-text"
                    >
                      Primary Skill / Area
                    </label>

                    <select
                      id="skill"
                      className="h-12 w-full rounded-xl border border-brand-border bg-brand-bg px-4 text-sm text-brand-text outline-none transition-all focus:border-primary focus:bg-white focus:ring-4 focus:ring-primary/10"
                      defaultValue=""
                    >
                      <option value="" disabled>
                        Select your skill
                      </option>
                      <option>Computer & Office Application</option>
                      <option>Graphic Design</option>
                      <option>Web Design</option>
                      <option>Digital Marketing</option>
                      <option>Other</option>
                    </select>
                  </div>

                  {/* Opportunity */}
                  <div>
                    <label
                      htmlFor="opportunity"
                      className="mb-2.5 block text-sm font-semibold text-brand-text"
                    >
                      Opportunity Type
                    </label>

                    <select
                      id="opportunity"
                      className="h-12 w-full rounded-xl border border-brand-border bg-brand-bg px-4 text-sm text-brand-text outline-none transition-all focus:border-primary focus:bg-white focus:ring-4 focus:ring-primary/10"
                      defaultValue=""
                    >
                      <option value="" disabled>
                        What are you looking for?
                      </option>
                      <option>Full-Time Job</option>
                      <option>Part-Time Job</option>
                      <option>Internship</option>
                      <option>Freelance Work</option>
                      <option>Project-Based Work</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="message"
                      className="mb-2.5 block text-sm font-semibold text-brand-text"
                    >
                      Tell Us About Yourself
                    </label>

                    <textarea
                      id="message"
                      rows={5}
                      placeholder="Briefly tell us about your experience, skills, career goals, or the type of opportunity you are looking for..."
                      className="w-full resize-none rounded-xl border border-brand-border bg-brand-bg px-4 py-3.5 text-sm leading-6 text-brand-text outline-none transition-all placeholder:text-slate-400 focus:border-primary focus:bg-white focus:ring-4 focus:ring-primary/10"
                    />
                  </div>

                  {/* CV */}
                  <div className="sm:col-span-2">
                    <label className="mb-2.5 block text-sm font-semibold text-brand-text">
                      Upload Your CV
                    </label>

                    <label
                      htmlFor="cv"
                      className="group flex cursor-pointer flex-col items-center justify-center rounded-2xl border border-dashed border-brand-blue-border bg-brand-blue-light px-6 py-8 text-center transition-all duration-300 hover:border-primary hover:bg-[#EAF4FF]"
                    >
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-primary">
                        <Upload className="h-5 w-5" strokeWidth={1.7} />
                      </div>

                      <p className="mt-4 text-sm font-bold text-brand-text">
                        Upload your CV
                      </p>

                      <p className="mt-1 text-xs text-brand-muted">
                        PDF, DOC, or DOCX · Maximum 5MB
                      </p>

                      <input
                        id="cv"
                        type="file"
                        accept=".pdf,.doc,.docx"
                        className="sr-only"
                      />
                    </label>
                  </div>
                </div>

                <div className="mt-8 flex flex-col gap-4 border-t border-brand-border pt-7 sm:flex-row sm:items-center sm:justify-between">
                  <p className="max-w-md text-xs leading-5 text-brand-muted">
                    Your information will be reviewed for suitable
                    opportunities and used only for career-related
                    communication.
                  </p>

                  <button
                    type="submit"
                    className="group inline-flex items-center justify-center gap-2.5 rounded-xl bg-primary px-7 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary-hover"
                  >
                    Submit Career Profile
                    <ArrowRight
                      className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                      strokeWidth={2}
                    />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}