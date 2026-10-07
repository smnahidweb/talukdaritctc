"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, ChevronDown } from "lucide-react";

import { mainNavItems, ctaNavItem } from "@/data/navigation";
import { Container } from "@/components/shared/Container";
import { MobileMenu } from "./MobileMenu";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const pathname = usePathname();

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-[#E2E8F0] bg-white shadow-xs">
        <Container className="flex h-18 items-center justify-between sm:h-20">
          <Link
            href="/"
            className="flex shrink-0 items-center rounded-lg focus-visible:outline-2 focus-visible:outline-[#0756A8]"
            aria-label="Talukdar IT & Computer Training Centre"
          >
            <Image
              src="/logo.png"
              alt=""
              width={1524}
              height={505}
              priority
              className="h-auto w-36 sm:w-56"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav
            aria-label="Main Navigation"
            className="hidden items-center space-x-1 lg:flex xl:space-x-2"
          >
            {mainNavItems.map((item) => {
              const isActive = pathname === item.href;
              const isCourses = item.href === "/courses";

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "inline-flex items-center gap-1 rounded-lg px-3.5 py-2 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-[#0756A8]",
                    isActive
                      ? "font-bold text-[#0756A8]"
                      : "text-[#172033] hover:bg-slate-50 hover:text-[#0756A8]"
                  )}
                >
                  <span>{item.label}</span>

                  {isCourses && (
                    <ChevronDown className="h-3.5 w-3.5 text-slate-400" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Action */}
          <div className="flex items-center gap-3">
            {/* Admission CTA */}
            <Link
              href={ctaNavItem.href}
              className="
                admission-cta
                group relative inline-flex items-center justify-center
                overflow-hidden rounded-lg
                px-5 py-2
                text-sm font-semibold text-white
                shadow-sm
                transition-all duration-300
                hover:-translate-y-0.5 hover:shadow-md
                active:translate-y-[1px]
                focus-visible:outline-2
                focus-visible:outline-offset-2
                focus-visible:outline-[#F97316]
                sm:px-6 sm:py-2.5
              "
            >
              {/* Animated Brand Gradient */}
              <span className="admission-cta-gradient absolute inset-0" />

              {/* Hover Shine */}
              <span
                className="
                  absolute inset-0
                  -translate-x-full
                  bg-gradient-to-r
                  from-transparent
                  via-white/20
                  to-transparent
                  transition-transform
                  duration-700
                  group-hover:translate-x-full
                "
              />

              {/* Label */}
              <span className="relative z-10">
                {ctaNavItem.label}
              </span>
            </Link>

            {/* Mobile Hamburger */}
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(true)}
              className=" text-lg rounded-lg p-2 text-[#172033] transition-colors hover:bg-slate-100 hover:text-[#0756A8] focus-visible:outline-2 focus-visible:outline-[#0756A8] lg:hidden"
              aria-label="Open navigation menu"
              aria-expanded={isMobileMenuOpen}
            >
              <Menu className="h-6 w-6" />
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