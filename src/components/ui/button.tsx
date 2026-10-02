import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "accent" | "outline" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  isExternal?: boolean;
}

const variantStyles: Record<NonNullable<ButtonProps["variant"]>, string> = {
  primary:
    "bg-[#0756A8] text-white hover:bg-[#0B74D1] shadow-sm active:translate-y-[1px]",
  accent:
    "bg-[#F97316] text-white hover:bg-[#EA580C] shadow-sm active:translate-y-[1px] font-semibold",
  outline:
    "border border-[#0756A8] text-[#0756A8] hover:bg-[#EFF7FF] active:bg-[#D0E7FF]",
  secondary:
    "bg-[#EFF7FF] text-[#0756A8] hover:bg-[#D0E7FF] border border-[#D0E7FF]",
  ghost:
    "text-[#172033] hover:text-[#0756A8] hover:bg-slate-100",
};

const sizeStyles: Record<NonNullable<ButtonProps["size"]>, string> = {
  sm: "text-xs sm:text-sm px-3.5 py-1.5 min-h-[38px] rounded-md gap-1.5",
  md: "text-sm sm:text-base px-5 py-2.5 min-h-[44px] rounded-lg gap-2",
  lg: "text-base sm:text-lg px-6 py-3 min-h-[48px] rounded-lg gap-2.5",
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      href,
      isExternal,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "inline-flex items-center justify-center font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0756A8] disabled:opacity-50 disabled:pointer-events-none select-none text-center cursor-pointer";
    const combinedClassName = cn(
      baseStyles,
      variantStyles[variant],
      sizeStyles[size],
      className
    );

    if (href) {
      if (isExternal) {
        return (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={combinedClassName}
          >
            {children}
          </a>
        );
      }
      return (
        <Link href={href} className={combinedClassName}>
          {children}
        </Link>
      );
    }

    return (
      <button
        ref={ref}
        disabled={disabled}
        className={combinedClassName}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
