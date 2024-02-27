import { query } from "@/db/db";
import { NextResponse } from "next/server";

export async function GET(req, route) {
  const id = route.params.id;
  const page = req.nextUrl.searchParams.get("page");
  const endLimit = page * 4;
  const startLimit = endLimit - 4;
  const result = await query({
    query: `SELECT * FROM post WHERE user_id = ${id} LIMIT ${startLimit}, ${endLimit}`,
    values: [id, startLimit, endLimit],
  });
  if (result && !result.errno) {
    return NextResponse.json({ response: result }, { status: 200 });
  }
  return NextResponse.json({ response: "" }, { status: 500 });
}
