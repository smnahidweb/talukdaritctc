import * as React from "react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

export interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  as?: "h1" | "h2" | "h3";
  isDark?: boolean;
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  as: Component = "h2",
  isDark = false,
  className,
}: SectionHeadingProps) {
  const isCentered = align === "center";

  return (
    <div
      className={cn(
        "flex flex-col space-y-3 mb-8 sm:mb-12 max-w-3xl",
        isCentered ? "mx-auto text-center items-center" : "text-left items-start",
        className
      )}
    >
      {eyebrow && (
        <Badge
          variant={isDark ? "accent" : "primary"}
          className="uppercase tracking-wider font-semibold text-[11px] sm:text-xs"
        >
          {eyebrow}
        </Badge>
      )}

      <Component
        className={cn(
          "text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight leading-tight",
          isDark ? "text-white" : "text-[#062B52]"
        )}
      >
        {title}
      </Component>

      {description && (
        <p
          className={cn(
            "text-base sm:text-lg leading-relaxed max-w-2xl",
            isDark ? "text-slate-300" : "text-[#64748B]"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
