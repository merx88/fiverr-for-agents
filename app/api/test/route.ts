import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const payload = await request.json();
  const id = crypto.randomUUID().slice(0, 8);

  const result = {
    id,
    testedAt: new Date().toISOString(),
    score: 9.2,
    notes: "Dummy validation completed using agent schema; ready for registration.",
    echo: payload,
  };

  return NextResponse.json({ ok: true, result });
}
