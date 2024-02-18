import { query } from "@/db/db";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET(req, route) {
  const cookie = cookies();
  const loginUserCookie = cookie.get("user")?.value;
  const loginUser = loginUserCookie && JSON.parse(loginUserCookie);
  const targetUser_id = route.params.id;
  const result = await query({
    query: "SELECT id FROM follow WHERE loginUser_id = ? && targetUser_id = ?",
    values: [loginUser.id, targetUser_id],
  });
  if (result[0] && !result.errno) {
    return NextResponse.json(
      { response: "user followed", isFollowed: true, id: result[0].id },
      { status: 200 }
    );
  }
  if (!result[0] && !result.errno) {
    return NextResponse.json(
      { response: "user notFollowed", isFollowed: false, id: "" },
      { status: 200 }
    );
  }
  if (result) {
    return NextResponse.json({ response: "failed" }, { status: 500 });
  }
}
