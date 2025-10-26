// /lib/gemini.ts
import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = process.env.GEMINI_API_KEY;
if (!apiKey) {
  throw new Error("GEMINI_API_KEY is missing in env");
}

// pass the API key string (not an object)
const client = new GoogleGenerativeAI(apiKey);

/**
 * Generate plain text from Gemini.
 */
export async function generateTextFromGemini(
  prompt: string,
  options?: { temperature?: number; maxOutputTokens?: number }
): Promise<string> {
  const modelName = "gemini-1.5-flash";

  const generationConfig = {
    temperature: options?.temperature ?? 0.7,
    maxOutputTokens: options?.maxOutputTokens ?? 512,
  };

  const model = client.getGenerativeModel({ model: modelName });

  const response = await model.generateContent({
    contents: [{ role: "user", parts: [{ text: prompt }] }],
    generationConfig,
  });

  if (!response || !response.response) {
    throw new Error("No response from Gemini");
  }

  // Try common extractor patterns (SDK versions vary)
  if (typeof (response.response as any).text === "function") {
    return (response.response as any).text();
  }

  const output = (response as any).output ?? (response.response as any).output;
  if (Array.isArray(output) && output.length > 0) {
    for (const o of output) {
      if (o?.content) {
        for (const c of o.content) {
          if (typeof c?.text === "string") return c.text;
        }
      }
    }
  }

  return JSON.stringify(response);
}
