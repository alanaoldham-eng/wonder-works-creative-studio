import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { createPublicSupabaseClient } from "@/lib/supabase/server";

const signupSchema = z.object({
  email: z.string().trim().email().max(320),
  firstName: z.string().trim().max(80).optional(),
  source: z.string().trim().max(80).default("homepage"),
});

export async function POST(request: NextRequest) {
  try {
    const signup = signupSchema.parse(await request.json());
    const supabase = createPublicSupabaseClient();

    const { error } = await supabase.from("launch_team").insert({
      email: signup.email.toLowerCase(),
      first_name: signup.firstName || null,
      source: signup.source,
    });

    if (error) {
      if (error.code === "23505") {
        return NextResponse.json({
          ok: true,
          message: "You are already on the Launch Team.",
        });
      }

      console.error("Supabase signup error:", error);
      return NextResponse.json(
        { ok: false, message: "Subscription could not be saved." },
        { status: 500 },
      );
    }

    return NextResponse.json(
      { ok: true, message: "Welcome to the Launch Team." },
      { status: 201 },
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { ok: false, message: "Please enter a valid email address." },
        { status: 400 },
      );
    }

    console.error("Newsletter route error:", error);
    return NextResponse.json(
      { ok: false, message: "Subscription could not be saved." },
      { status: 500 },
    );
  }
}
