import * as React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "primary" | "accent" | "neutral" | "success" | "outline";
}

const badgeVariants: Record<NonNullable<BadgeProps["variant"]>, string> = {
  primary: "bg-[#EFF7FF] text-[#0756A8] border-[#D0E7FF]",
  accent: "bg-[#FFF7ED] text-[#EA580C] border-[#FFEDD5]",
  neutral: "bg-slate-100 text-slate-700 border-slate-200",
  success: "bg-green-50 text-green-700 border-green-200",
  outline: "bg-transparent text-[#0756A8] border-[#0756A8]",
};

export function Badge({
  className,
  variant = "primary",
  children,
  ...props
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold border transition-colors",
        badgeVariants[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
