import * as React from "react";
import { Phone, Clock, MapPin } from "lucide-react";

import { siteConfig } from "@/data/site";
import { Container } from "@/components/shared/Container";

export function TopBar() {
  return (
    <div className="border-b border-blue-900/60 bg-[#062B52] text-xs text-slate-200 sm:text-[13px]">
      <Container className="flex flex-wrap items-center justify-between gap-2 py-2 sm:py-2.5">
        {/* Left: Location */}
        <div className="flex items-center gap-1.5 text-slate-300">
          <MapPin className="h-3.5 w-3.5 shrink-0 text-[#F97316]" />

          <span className="max-w-[240px] truncate sm:max-w-none">
            {siteConfig.contact.address}, {siteConfig.contact.city}
          </span>
        </div>

        {/* Center: Phone */}
        <div className="hidden items-center md:flex">
          <a
            href={`tel:${siteConfig.contact.phone}`}
            className="inline-flex items-center gap-1.5 font-medium text-white transition-colors hover:text-white"
            aria-label={`Call us at ${siteConfig.contact.phoneDisplay}`}
          >
            <Phone className="h-3.5 w-3.5 shrink-0 text-[#F97316]" />
            <span>{siteConfig.contact.phoneDisplay}</span>
          </a>
        </div>

        {/* Right: Working Hours & Socials */}
        <div className="flex items-center gap-4 text-slate-300">
          {/* Working Hours */}
          <div className="flex items-center gap-1.5">
            <Clock className="h-3.5 w-3.5 shrink-0 text-blue-300" />

            <span>{siteConfig.contact.workingHours}</span>
          </div>

          {/* Social Icons */}
          <div className="hidden items-center gap-2 border-l border-blue-800 pl-2 sm:flex">
            {/* Facebook */}
            <a
              href={siteConfig.contact.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-800/80 text-white transition-colors hover:bg-[#0756A8]"
              aria-label="Facebook"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-3 w-3"
                fill="currentColor"
              >
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
              </svg>
            </a>

            {/* LinkedIn */}
            <a
              href={siteConfig.contact.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-700/80 text-white transition-colors hover:bg-blue-600"
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
              className="flex h-5 w-5 items-center justify-center rounded-full bg-pink-600/80 text-white transition-colors hover:bg-pink-600"
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
      </Container>
    </div>
  );
}