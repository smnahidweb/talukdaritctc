import * as React from "react";
import { cn } from "@/lib/utils";

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  as?: React.ElementType;
  background?: "default" | "surface" | "light-blue" | "navy";
}

const backgroundStyles: Record<
  NonNullable<SectionProps["background"]>,
  string
> = {
  default: "bg-[#F8FAFC]",
  surface: "bg-white",
  "light-blue": "bg-[#EFF7FF] border-y border-[#D0E7FF]/60",
  navy: "bg-[#062B52] text-white",
};

export function Section({
  as: Component = "section",
  background = "default",
  className,
  children,
  ...props
}: SectionProps) {
  return (
    <Component
      className={cn(
        "py-12 sm:py-16 md:py-20 lg:py-24 relative overflow-hidden",
        backgroundStyles[background],
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
