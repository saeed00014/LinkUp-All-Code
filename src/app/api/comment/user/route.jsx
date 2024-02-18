import { query } from "@/db/db";
import { NextResponse } from "next/server";

export async function GET(req) {
  const user_id = req.nextUrl.searchParams.get("user_id");
  console.log("hhhh");
  const result = await query({
    query: "SELECT id,username,firstname,image FROM user WHERE id = ?",
    values: [user_id],
  });
  if (result && !result.errno) {
    return NextResponse.json({ response: result[0] }, { status: 200 });
  }
  if (result) {
    return NextResponse.json({ response: "filed" }, { status: 500 });
  }
}
