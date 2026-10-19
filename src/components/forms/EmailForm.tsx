"use client";

import { useState, type FormEvent, type ReactNode } from "react";
import { Button, type ButtonProps } from "@/components/ui/button";

type FormType = "Contact Form" | "Admission Form";

interface EmailFormProps {
  formType: FormType;
  children: ReactNode;
  className: string;
  buttonVariant: NonNullable<ButtonProps["variant"]>;
  buttonClassName: string;
  submitLabel: string;
  pendingLabel: string;
  successMessage?: string;
}

export function EmailForm({
  formType,
  children,
  className,
  buttonVariant,
  buttonClassName,
  submitLabel,
  pendingLabel,
  successMessage = "Your information has been submitted successfully.",
}: EmailFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus(null);

    const form = event.currentTarget;
    const formData = new FormData(form);
    const website = formData.get("website");
    const fields = Object.fromEntries(
      Array.from(formData.entries())
        .filter(([key]) => key !== "website")
        .map(([key, value]) => [key, typeof value === "string" ? value : ""])
    );

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ formType, fields, website }),
      });
      let result: { success?: boolean; error?: string };
      try {
        result = await response.json();
      } catch {
        throw new Error("Unable to submit your information. Please try again.");
      }

      if (!response.ok || !result.success) {
        throw new Error(result.error || "Unable to submit your information.");
      }

      form.reset();
      setStatus({
        type: "success",
        message: successMessage,
      });
    } catch (error) {
      setStatus({
        type: "error",
        message:
          error instanceof Error
            ? error.message
            : "Something went wrong. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form className={className} onSubmit={handleSubmit}>
      <div
        aria-hidden="true"
        className="absolute left-[-10000px] top-auto h-px w-px overflow-hidden"
      >
        <label htmlFor={`${formType}-website`}>Leave this field empty</label>
        <input
          id={`${formType}-website`}
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      {children}

      <Button
        type="submit"
        variant={buttonVariant}
        size="lg"
        className={buttonClassName}
        disabled={isSubmitting}
      >
        {isSubmitting ? pendingLabel : submitLabel}
      </Button>

      {status && (
        <p
          role={status.type === "error" ? "alert" : "status"}
          aria-live="polite"
          className={
            status.type === "success"
              ? "text-sm font-medium text-green-700"
              : "text-sm font-medium text-red-700"
          }
        >
          {status.message}
        </p>
      )}
    </form>
  );
}
