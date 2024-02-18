import { query } from "@/db/db";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET() {
  const cookie = cookies();
  const loginUserCookie = cookie.get("user")?.value;
  const loginUser = loginUserCookie && JSON.parse(loginUserCookie);

  const result = await query({
    query: "SELECT * FROM chat WHERE userOne = ? || userTwo = ?",
    values: [loginUser.id, loginUser.id],
  });
  if (result && !result.errno) {
    return NextResponse.json({ response: result }, { status: 200 });
  }
  if (result) {
    return NextResponse.json({ response: "" }, { status: 500 });
  }
}
