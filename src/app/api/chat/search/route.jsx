import { query } from "@/db/db";
import { NextResponse } from "next/server";

export async function GET(req) {
  const searchValue = req.nextUrl.searchParams.get("searchValue");
  try {
    const result = await query({
      query: "SELECT * FROM friend WHERE username = ? || firstname = ? && ",
      values: [searchValue],
    });
    return NextResponse.json({ response: "response" }, { status: 200 });
  } catch {

  }
}
