// /app/api/ask-gemini/route.ts
import { NextResponse } from "next/server";
import { generateTextFromGemini } from "@/lib/gemini";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const prompt = (body?.prompt ?? "").toString().trim();
    if (!prompt) {
      return NextResponse.json({ success: false, error: "Prompt is required" }, { status: 400 });
    }

    const reply = await generateTextFromGemini(prompt, { temperature: 0.8, maxOutputTokens: 400 });

    return NextResponse.json({ success: true, reply }, { status: 200 });
  } catch (err) {
    console.error("Gemini API error:", err);
    return NextResponse.json({ success: false, error: "AI request failed" }, { status: 500 });
  }
}
