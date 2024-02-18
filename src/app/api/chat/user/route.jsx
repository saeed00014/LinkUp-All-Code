import { query } from "@/db/db";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET(req) {
  const cookie = cookies();
  const loginUserCookie = cookie.get("user")?.value;
  const loginUser = loginUserCookie && JSON.parse(loginUserCookie);
  const userOne = req.nextUrl.searchParams.get("userOne");
  const userTwo = req.nextUrl.searchParams.get("userTwo");
  const targetUser_id = loginUser.id == userOne ? userTwo : userOne;

  const result = await query({
    query: "SELECT id,username,firstname,image FROM user where id = ?",
    values: [targetUser_id],
  });
  if (result[0]) {
    return NextResponse.json({ response: result[0] }, { status: 200 });
  }
  if (result) {
    return NextResponse.json({ response: "" }, { status: 500 });
  }
}
