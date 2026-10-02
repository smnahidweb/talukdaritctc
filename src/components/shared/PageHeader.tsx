import * as React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Container } from "./Container";
import { Badge } from "@/components/ui/badge";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface PageHeaderProps {
  badge?: string;
  title: string;
  description?: string;
  breadcrumbs?: BreadcrumbItem[];
}

export function PageHeader({
  badge,
  title,
  description,
  breadcrumbs = [{ label: "Home", href: "/" }],
}: PageHeaderProps) {
  return (
    <div className="bg-gradient-to-b from-[#EFF7FF] to-white border-b border-[#E2E8F0] py-10 sm:py-14 md:py-16">
      <Container>
        {/* Breadcrumb Navigation */}
        <nav
          aria-label="Breadcrumb"
          className="flex items-center space-x-1.5 text-xs sm:text-sm text-[#64748B] mb-4"
        >
          {breadcrumbs.map((crumb, index) => {
            const isLast = index === breadcrumbs.length - 1;
            return (
              <React.Fragment key={index}>
                {index > 0 && <ChevronRight className="w-3.5 h-3.5 text-slate-400" />}
                {crumb.href && !isLast ? (
                  <Link
                    href={crumb.href}
                    className="hover:text-[#0756A8] transition-colors"
                  >
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-[#172033] font-medium" aria-current="page">
                    {crumb.label}
                  </span>
                )}
              </React.Fragment>
            );
          })}
        </nav>

        {/* Header Content */}
        <div className="max-w-3xl space-y-3">
          {badge && (
            <Badge variant="primary" className="text-xs uppercase tracking-wider font-semibold">
              {badge}
            </Badge>
          )}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#062B52] tracking-tight">
            {title}
          </h1>
          {description && (
            <p className="text-base sm:text-lg text-[#64748B] leading-relaxed">
              {description}
            </p>
          )}
        </div>
      </Container>
    </div>
  );
}
