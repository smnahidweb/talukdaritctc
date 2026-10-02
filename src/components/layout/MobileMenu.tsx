"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { X, Phone, MapPin, GraduationCap, ArrowRight } from "lucide-react";
import { mainNavItems, ctaNavItem } from "@/data/navigation";
import { siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";

export interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const pathname = usePathname();

  // Close menu on ESC key press & lock body scroll
  React.useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Mobile Navigation Menu"
      className="fixed inset-0 z-50 lg:hidden"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div className="fixed inset-y-0 right-0 z-50 w-full max-w-xs sm:max-w-sm bg-white shadow-2xl flex flex-col justify-between overflow-y-auto">
        {/* Drawer Header */}
        <div className="flex items-center justify-between p-4 sm:p-5 border-b border-[#E2E8F0]">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-lg bg-[#0756A8] text-white flex items-center justify-center font-bold text-lg">
              <GraduationCap className="w-5 h-5" />
            </div>
            <div>
              <p className="text-sm font-bold text-[#062B52] leading-tight">
                Talukdar IT
              </p>
              <p className="text-[11px] text-[#64748B]">Computer Training Centre</p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-2 text-slate-500 hover:text-[#172033] hover:bg-slate-100 rounded-lg transition-colors focus-visible:outline-2 focus-visible:outline-[#0756A8]"
            aria-label="Close navigation menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="flex-1 px-4 py-6 space-y-1">
          {mainNavItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={onClose}
                className={cn(
                  "flex items-center justify-between px-3.5 py-3 rounded-lg text-base font-medium transition-colors",
                  isActive
                    ? "bg-[#EFF7FF] text-[#0756A8] font-semibold"
                    : "text-[#172033] hover:bg-slate-50 hover:text-[#0756A8]"
                )}
              >
                <span>{item.label}</span>
                {isActive && (
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0756A8]" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Drawer Bottom CTA & Contacts */}
        <div className="p-4 sm:p-5 border-t border-[#E2E8F0] bg-slate-50 space-y-4">
          <Link
            href={ctaNavItem.href}
            onClick={onClose}
            className="flex items-center justify-center gap-2 w-full py-3 px-4 rounded-lg bg-[#F97316] hover:bg-[#EA580C] text-white font-semibold shadow-sm transition-colors text-center"
          >
            <span>{ctaNavItem.label} Application</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          <div className="space-y-2 pt-2 text-xs text-[#64748B]">
            <a
              href={`tel:${siteConfig.contact.phone}`}
              className="flex items-center gap-2 text-[#062B52] font-medium hover:text-[#0756A8]"
            >
              <Phone className="w-3.5 h-3.5 text-[#F97316]" />
              <span>{siteConfig.contact.phoneDisplay}</span>
            </a>
            <div className="flex items-start gap-2">
              <MapPin className="w-3.5 h-3.5 text-[#F97316] shrink-0 mt-0.5" />
              <span>
                {siteConfig.contact.address}, {siteConfig.contact.city}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
