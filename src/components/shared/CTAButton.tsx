import * as React from "react";
import { ArrowRight } from "lucide-react";
import { Button, ButtonProps } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export interface CTAButtonProps extends ButtonProps {
  showArrow?: boolean;
}

export function CTAButton({
  children,
  showArrow = true,
  className,
  variant = "accent",
  size = "md",
  ...props
}: CTAButtonProps) {
  return (
    <Button
      variant={variant}
      size={size}
      className={cn("group font-semibold tracking-wide", className)}
      {...props}
    >
      <span>{children}</span>
      {showArrow && (
        <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
      )}
    </Button>
  );
}
