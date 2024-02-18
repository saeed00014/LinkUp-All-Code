import { query } from "@/db/db";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET() {
  const cookie = cookies();
  const loginUserCookie = cookie.get("user")?.value;
  const loginUser = loginUserCookie && JSON.parse(loginUserCookie);
  const result = await query({
    query: "SELECT id,username,firstname,image FROM user where id = ?",
    values: [loginUser.id],
  });
  if (result[0]) {
    return NextResponse.json({ response: result[0] }, { status: 200 });
  }
  if (result) {
    return NextResponse.json({ response: "" }, { status: 500 });
  }
}
