import * as React from "react";
import Link from "next/link";
import { GraduationCap, Phone, MapPin, Clock, ArrowRight } from "lucide-react";
import { siteConfig } from "@/data/site";
import { coursesData } from "@/data/courses";
import { Container } from "@/components/shared/Container";

const usefulLinks = [
  { label: "About Us", href: "/about" },
  { label: "Courses", href: "/courses" },
  { label: "Success Stories", href: "/success" },
  { label: "Career", href: "/career" },
  { label: "Forum", href: "/forum" },
  { label: "Contact", href: "/contact" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#062B52] text-slate-300">
      {/* ── Main Footer Content ── */}
      <Container>
        <div className="py-10 sm:py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 border-b border-blue-900/50">
          {/* Col 1: Brand + Social */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#0756A8] flex items-center justify-center shrink-0 border border-blue-700">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-base font-extrabold text-white leading-tight">Talukdar IT</p>
                <p className="text-[11px] text-slate-400">Computer Training Centre</p>
              </div>
            </Link>

            <p className="text-sm text-slate-400 leading-relaxed">
              Practical computer and IT training to develop real-world digital skills for education, employment and career growth in Naogaon.
            </p>

            <div>
              <p className="text-xs font-semibold text-slate-400 mb-2">Follow us</p>
              <div className="flex items-center gap-2">
                <a
                  href={siteConfig.contact.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded bg-blue-800/70 hover:bg-[#0756A8] text-white flex items-center justify-center transition-colors"
                  aria-label="Facebook"
                >
                  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                  </svg>
                </a>
                        {/* LinkedIn */}
                                  <a
                                    href={siteConfig.contact.linkedinUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex w-8 h-8 rounded bg-blue-800/70 hover:bg-[#0756A8] text-white flex items-center justify-center transition-colors"
                                    aria-label="LinkedIn"
                                  >
                                    <svg
                                      viewBox="0 0 24 24"
                                      className="h-3 w-3"
                                      fill="currentColor"
                                    >
                                      <path d="M6.94 8.5H3.56V20h3.38V8.5ZM5.25 3A2.06 2.06 0 003.19 5.06c0 1.14.92 2.06 2.06 2.06s2.06-.92 2.06-2.06A2.06 2.06 0 005.25 3ZM20.44 13.03c0-3.46-1.84-5.07-4.29-5.07-1.97 0-2.85 1.08-3.34 1.84V8.5H9.43V20h3.38v-5.69c0-1.5.28-2.95 2.14-2.95 1.84 0 1.87 1.72 1.87 3.05V20h3.38l.24-6.97Z" />
                                    </svg>
                                  </a>
                      
                                  {/* Instagram */}
                                  <a
                                    href={siteConfig.contact.instagramUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex w-8 h-8 rounded bg-pink-600/80 hover:bg-pink-600 text-white flex items-center justify-center transition-colors"
                                    aria-label="Instagram"
                                  >
                                    <svg
                                      viewBox="0 0 24 24"
                                      className="h-3 w-3"
                                      fill="none"
                                      stroke="currentColor"
                                      strokeWidth="2"
                                    >
                                      <rect
                                        x="3"
                                        y="3"
                                        width="18"
                                        height="18"
                                        rx="5"
                                      />
                                      <circle cx="12" cy="12" r="4" />
                                      <circle
                                        cx="17.5"
                                        cy="6.5"
                                        r="1"
                                        fill="currentColor"
                                        stroke="none"
                                      />
                                    </svg>
                                  </a>
              </div>
            </div>
          </div>

          {/* Col 2: Useful Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold text-white">Useful Links</h3>
            <ul className="space-y-2">
              {usefulLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="inline-flex items-center gap-1.5 text-sm text-slate-400 hover:text-white transition-colors"
                  >
                    <ArrowRight className="w-3 h-3 text-[#F97316]" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Popular Courses */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold text-white">Popular Courses</h3>
            <ul className="space-y-2">
              {coursesData.map((course) => (
                <li key={course.slug}>
                  <Link
                    href={`/courses/${course.slug}`}
                    className="inline-flex items-center gap-1.5 text-sm text-slate-400 hover:text-white transition-colors"
                  >
                    <ArrowRight className="w-3 h-3 text-[#F97316]" />
                    {course.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold text-white">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href={`tel:${siteConfig.contact.phone}`}
                  className="flex items-center gap-2.5 text-slate-400 hover:text-white transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#F97316] shrink-0" />
                  {siteConfig.contact.phoneDisplay}
                </a>
              </li>
              <li>
                <div className="flex items-start gap-2.5 text-slate-400">
                  <MapPin className="w-4 h-4 text-[#F97316] shrink-0 mt-0.5" />
                  <span>
                    {siteConfig.contact.address}, {siteConfig.contact.city}
                  </span>
                </div>
              </li>
            </ul>

            <div className="space-y-1 pt-1">
              <h3 className="text-sm font-bold text-white">Opening Hours</h3>
              <div className="flex items-center gap-2 text-sm text-slate-400">
                <Clock className="w-4 h-4 shrink-0" />
                <span>{siteConfig.contact.workingHours}</span>
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* ── Copyright Bar ── */}
      <div className="border-t border-blue-900/60 py-4">
        <Container>
          <p className="text-xs text-slate-500 text-center uppercase tracking-wide">
            Copyright &copy; 2021 - {year} Talukdar IT &amp; Computer Training Centre. All rights reserved.
          </p>
        </Container>
      </div>
    </footer>
  );
}
