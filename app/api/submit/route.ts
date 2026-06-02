import { NextResponse } from "next/server";

const SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbwpeXNbe7xY5JPuCpuaA6TcRi9YnakWplBJw5WnAq8JmaUEQk9PsNW5dK41ooh0IxtNyg/exec";

export async function POST(request: Request) {
  try {
    const raw = await request.json();

    // Map form field names to what the Apps Script expects
    const payload = {
      timestamp: new Date().toISOString(),
      // Step 1
      name: raw.fullName,
      contact: raw.contact,
      businessType: raw.businessType,
      businessDescription: raw.businessDescription,
      hasSite: raw.hasSite,
      siteUrl: raw.siteUrl ?? "",
      // Step 2
      instagramLoss: raw.instagramLoss,
      competitorIncome: raw.competitorIncome,
      whyNow: raw.whyNow,
      // Step 3
      ageRange: raw.ageRange,
      audienceLocation: raw.audienceLocation,
      expectedIncome: raw.expectedIncome,
      // Step 4
      hasLogo: raw.hasLogo,
      logoFileName: raw.logoFileName ?? "",
      color: raw.brandColor === "سایر" ? (raw.customColor ?? "سایر") : raw.brandColor,
      vibes: Array.isArray(raw.vibes) ? raw.vibes.join(", ") : raw.vibes,
      goal: raw.mainGoal,
      firstAction: raw.firstAction,
    };

    const res = await fetch(SCRIPT_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      redirect: "follow",
    });

    // Apps Script returns 200 even on redirect — any non-throw is success
    if (!res.ok && res.status !== 0) {
      throw new Error(`Apps Script responded with ${res.status}`);
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("submit error", err);
    return NextResponse.json({ ok: false, error: String(err) }, { status: 500 });
  }
}
