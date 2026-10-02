"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, ChevronDown, GraduationCap } from "lucide-react";
import { mainNavItems, ctaNavItem } from "@/data/navigation";
import { Container } from "@/components/shared/Container";
import { MobileMenu } from "./MobileMenu";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const pathname = usePathname();

  return (
    <>
      <header className="sticky top-0 z-40 bg-white border-b border-[#E2E8F0] shadow-xs">
        <Container className="flex items-center justify-between h-18 sm:h-20">
          {/* Logo & Brand Identity */}
          <Link
            href="/"
            className="flex items-center gap-3 group focus-visible:outline-2 focus-visible:outline-[#0756A8] rounded-lg shrink-0"
            aria-label="Talukdar IT & Computer Training Centre"
          >
            {/* Emblem Badge matching reference */}
            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-[#0756A8] to-[#062B52] text-white flex items-center justify-center font-bold shadow-sm relative overflow-hidden shrink-0 border border-blue-200">
              <GraduationCap className="w-6 h-6 text-white" />
              <span className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-[#F97316] border-2 border-white flex items-center justify-center text-[8px] font-black">
                ★
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-lg sm:text-xl font-extrabold text-[#062B52] leading-tight tracking-tight group-hover:text-[#0756A8] transition-colors">
                Talukdar IT
              </span>
              <span className="text-[11px] sm:text-xs font-semibold text-[#64748B] tracking-tight">
                &amp; Computer Training Centre
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav
            aria-label="Main Navigation"
            className="hidden lg:flex items-center space-x-1 xl:space-x-2"
          >
            {mainNavItems.map((item) => {
              const isActive = pathname === item.href;
              const isCourses = item.href === "/courses";
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "inline-flex items-center gap-1 px-3.5 py-2 rounded-lg text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-[#0756A8]",
                    isActive
                      ? "text-[#0756A8] font-bold"
                      : "text-[#172033] hover:text-[#0756A8] hover:bg-slate-50"
                  )}
                >
                  <span>{item.label}</span>
                  {isCourses && (
                    <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Action: Admission CTA */}
          <div className="flex items-center gap-3">
            <Link
              href={ctaNavItem.href}
              className="inline-flex items-center justify-center px-5 py-2 sm:px-6 sm:py-2.5 rounded-lg bg-[#F97316] hover:bg-[#EA580C] text-white text-sm font-semibold shadow-xs transition-all active:translate-y-[1px] focus-visible:outline-2 focus-visible:outline-[#F97316]"
            >
              {ctaNavItem.label}
            </Link>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(true)}
              className="lg:hidden p-2 rounded-lg text-[#172033] hover:text-[#0756A8] hover:bg-slate-100 transition-colors focus-visible:outline-2 focus-visible:outline-[#0756A8]"
              aria-label="Open navigation menu"
              aria-expanded={isMobileMenuOpen}
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </Container>
      </header>

      {/* Mobile Drawer */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
}
