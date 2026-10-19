
import { Resend } from "resend";
import { NextResponse } from "next/server";

const formFields = {
  "Contact Form": {
    allowed: ["name", "phone", "course", "message"],
    required: ["name", "phone"],
  },
  "Admission Form": {
    allowed: [
      "studentName",
      "studentPhone",
      "selectedCourse",
      "preferredBatch",
      "notes",
      "transactionId",
    ],
    required: [
      "studentName",
      "studentPhone",
      "selectedCourse",
      "preferredBatch",
      "transactionId",
    ],
  },
} as const;

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function isFormType(value: unknown): value is keyof typeof formFields {
  return (
    typeof value === "string" &&
    Object.prototype.hasOwnProperty.call(formFields, value)
  );
}

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY?.trim();
  const recipient = process.env.CONTACT_EMAIL?.trim();

  if (!apiKey || !recipient) {
    return NextResponse.json(
      { error: "Email service is not configured." },
      { status: 500 }
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { error: "Invalid form submission." },
      { status: 400 }
    );
  }

  if (!isRecord(body)) {
    return NextResponse.json(
      { error: "Invalid form submission." },
      { status: 400 }
    );
  }

  const { formType, fields, website } = body;

  if (website !== undefined && typeof website !== "string") {
    return NextResponse.json(
      { error: "Invalid form submission." },
      { status: 400 }
    );
  }

  if (typeof website === "string" && website.trim()) {
    return NextResponse.json({ success: true });
  }

  if (!isFormType(formType) || !isRecord(fields)) {
    return NextResponse.json(
      { error: "Invalid form submission." },
      { status: 400 }
    );
  }

  const config = formFields[formType];
  const allowedFields: readonly string[] = config.allowed;
  const requiredFields: readonly string[] = config.required;
  const entries = Object.entries(fields);
  const validatedEntries: [string, string][] = [];

  if (
    entries.length === 0 ||
    entries.length > allowedFields.length
  ) {
    return NextResponse.json(
      { error: "Please provide valid form information." },
      { status: 400 }
    );
  }

  for (const [key, value] of entries) {
    if (
      !allowedFields.includes(key) ||
      typeof value !== "string" ||
      value.length > 2000
    ) {
      return NextResponse.json(
        { error: "Please provide valid form information." },
        { status: 400 }
      );
    }

    validatedEntries.push([key, value]);
  }

  if (
    requiredFields.some(
      (key) => typeof fields[key] !== "string" || !fields[key].trim()
    )
  ) {
    return NextResponse.json(
      { error: "Please provide valid form information." },
      { status: 400 }
    );
  }

  const phone = fields.phone ?? fields.studentPhone;
  const phoneDigits =
    typeof phone === "string" ? phone.replace(/\D/g, "") : "";
  if (
    typeof phone !== "string" ||
    !/^[+()\d\s-]{7,25}$/.test(phone.trim()) ||
    phoneDigits.length < 7 ||
    phoneDigits.length > 15
  ) {
    return NextResponse.json(
      { error: "Please enter a valid phone number." },
      { status: 400 }
    );
  }

  const html = validatedEntries
    .filter(([, value]) => value.trim())
    .map(
      ([key, value]) =>
        `<p><strong>${escapeHtml(key)}</strong><br />${escapeHtml(
          value.trim()
        ).replace(/\r?\n/g, "<br />")}</p>`
    )
    .join("");

  try {
    const resend = new Resend(apiKey);
    const { data, error } = await resend.emails.send({
      from: "Talukdar IT Website <website@talukdaritc.com>",
      to: [recipient],
      subject: `New ${formType} Submission`,
      html: `
        <h2>New Website Inquiry</h2>
        <p><strong>Form:</strong> ${escapeHtml(formType)}</p>
        ${html}
      `,
    });

    if (error) {
      console.error("Resend email error:", error.message);

      return NextResponse.json(
        { error: "Unable to send your message. Please try again." },
        { status: 502 }
      );
    }

    return NextResponse.json({
      success: true,
      id: data?.id,
      message: "Your information has been submitted successfully.",
    });
  } catch (error) {
    console.error("Failed to send contact email:", error);
    return NextResponse.json(
      { error: "Unable to send your message. Please try again." },
      { status: 502 }
    );
  }
}
