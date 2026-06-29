import { NextResponse } from "next/server";

const SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbwpeXNbe7xY5JPuCpuaA6TcRi9YnakWplBJw5WnAq8JmaUEQk9PsNW5dK41ooh0IxtNyg/exec";

export async function POST(request: Request) {
  try {
    const raw = await request.json();

    const payload = {
      timestamp: new Date().toISOString(),
      lang: raw.lang ?? "",
      serviceType: raw.serviceType ?? "",
      name: raw.name ?? "",
      phone: raw.phone ?? "",
      email: raw.email ?? "",
      telegram: raw.telegram ?? "",
      siteSubType: raw.siteSubType ?? "",
      businessDescription: raw.businessDescription ?? "",
      hasSite: raw.hasSite ?? "",
      siteUrl: raw.siteUrl ?? "",
      budget: raw.budget ?? "",
      timeline: raw.timeline ?? "",
      platforms: raw.platforms ?? "",
      appIdea: raw.appIdea ?? "",
      appStatus: raw.appStatus ?? "",
      level: raw.level ?? "",
      buildGoal: raw.buildGoal ?? "",
      format: raw.format ?? "",
      startupIdea: raw.startupIdea ?? "",
      stage: raw.stage ?? "",
      need: raw.need ?? "",
    };

    const res = await fetch(SCRIPT_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      redirect: "follow",
    });

    if (!res.ok && res.status !== 0) {
      throw new Error(`Apps Script responded with ${res.status}`);
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("submit error", err);
    return NextResponse.json({ ok: false, error: String(err) }, { status: 500 });
  }
}
