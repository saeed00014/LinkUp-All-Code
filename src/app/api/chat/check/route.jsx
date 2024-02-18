import { query } from "@/db/db";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET(req) {
  const cookie = cookies();
  const loginUserCookie = cookie.get("user")?.value;
  const loginUser = loginUserCookie && JSON.parse(loginUserCookie);
  const chat_id = req.nextUrl.searchParams.get("chat_id");
  const targetUser_id = req.nextUrl.searchParams.get("targetUser_id");
  const result = await query({
    query:
      "SELECT id FROM chat WHERE id = ? && userOne = ? && userTwo = ? || userOne = ? && userTwo = ?",
    values: [chat_id, loginUser.id, targetUser_id, targetUser_id, loginUser.id],
  });
  if (result && !result.errno) {
    return NextResponse.json({ response: result }, { status: 200 });
  }
  if (result) {
    return NextResponse.json({ response: "" }, { status: 500 });
  }
}
