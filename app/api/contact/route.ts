import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { createPublicSupabaseClient } from "@/lib/supabase/server";

const contactSchema = z.object({
  firstName: z.string().trim().min(1).max(80),
  lastName: z.string().trim().max(80).optional(),
  email: z.string().trim().email().max(320),
  organization: z.string().trim().max(160).optional(),
  inquiryType: z.string().trim().min(1).max(120),
  subject: z.string().trim().min(2).max(160),
  message: z.string().trim().min(10).max(5000),
});

export async function POST(request: NextRequest) {
  try {
    const inquiry = contactSchema.parse(await request.json());
    const supabase = createPublicSupabaseClient();

    const { error } = await supabase.from("contact_messages").insert({
      first_name: inquiry.firstName,
      last_name: inquiry.lastName || null,
      email: inquiry.email.toLowerCase(),
      organization: inquiry.organization || null,
      inquiry_type: inquiry.inquiryType,
      subject: inquiry.subject,
      message: inquiry.message,
      source: "website-contact-form",
    });

    if (error) {
      console.error("Supabase contact error:", error);
      return NextResponse.json({ ok: false, message: "Your message could not be saved." }, { status: 500 });
    }

    return NextResponse.json({ ok: true, message: "Thank you. Your message has been received." }, { status: 201 });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ ok: false, message: "Please complete all required fields with valid information." }, { status: 400 });
    }
    console.error("Contact route error:", error);
    return NextResponse.json({ ok: false, message: "Your message could not be sent." }, { status: 500 });
  }
}
