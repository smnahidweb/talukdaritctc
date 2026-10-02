import * as React from "react";
import { Phone, Clock, MapPin } from "lucide-react";
import { siteConfig } from "@/data/site";
import { Container } from "@/components/shared/Container";

export function TopBar() {
  return (
    <div className="bg-[#062B52] text-slate-200 text-xs sm:text-[13px] border-b border-blue-900/60">
      <Container className="flex items-center justify-between py-2 sm:py-2.5 flex-wrap gap-2">
        {/* Left: Location */}
        <div className="flex items-center gap-1.5 text-slate-300">
          <MapPin className="w-3.5 h-3.5 text-[#F97316] shrink-0" />
          <span className="truncate max-w-[240px] sm:max-w-none">
            {siteConfig.contact.address}, {siteConfig.contact.city}
          </span>
        </div>

        {/* Center: Phone */}
        <div className="hidden md:flex items-center">
          <a
            href={`tel:${siteConfig.contact.phone}`}
            className="inline-flex items-center gap-1.5 hover:text-white transition-colors text-white font-medium"
            aria-label={`Call us at ${siteConfig.contact.phoneDisplay}`}
          >
            <Phone className="w-3.5 h-3.5 text-[#F97316] shrink-0" />
            <span>{siteConfig.contact.phoneDisplay}</span>
          </a>
        </div>

        {/* Right: Working Hours & Socials */}
        <div className="flex items-center gap-4 text-slate-300">
          <div className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-blue-300 shrink-0" />
            <span>{siteConfig.contact.workingHours}</span>
          </div>

          <div className="hidden sm:flex items-center gap-2 pl-2 border-l border-blue-800">
            <a
              href={siteConfig.contact.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-5 h-5 rounded-full bg-blue-800/80 hover:bg-[#0756A8] text-white flex items-center justify-center transition-colors"
              aria-label="Facebook"
            >
              <svg viewBox="0 0 24 24" className="w-3 h-3" fill="currentColor"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
            </a>
            <a
              href={siteConfig.contact.youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-5 h-5 rounded-full bg-red-600/80 hover:bg-red-600 text-white flex items-center justify-center transition-colors"
              aria-label="YouTube"
            >
              <svg viewBox="0 0 24 24" className="w-3 h-3" fill="currentColor"><path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 001.46 6.42 29 29 0 001 12a29 29 0 00.46 5.58A2.78 2.78 0 003.41 19.54C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.96A29 29 0 0023 12a29 29 0 00-.46-5.58zM9.75 15.02V8.98L15.5 12l-5.75 3.02z"/></svg>
            </a>
          </div>
        </div>
      </Container>
    </div>
  );
}
