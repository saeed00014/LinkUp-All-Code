import { query } from "@/db/db";
import { CookieUserType } from "@/type/type";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET(req: any) {
  const cookie = cookies();
  const loginUserCookie: string = cookie.get("user")?.value || "{}";
  const loginUser: CookieUserType = JSON.parse(loginUserCookie);
  const chat_id: string = req.nextUrl.searchParams.get("chat_id");
  const targetUser_id: string = req.nextUrl.searchParams.get("targetUser_id");

  try {
    const selectChat_id = <{ id: number }[]>await query({
      query:
        "SELECT id FROM chat WHERE id = ? && userOne = ? && userTwo = ? || userOne = ? && userTwo = ?",
      values: [
        chat_id,
        loginUser.id,
        targetUser_id,
        targetUser_id,
        loginUser.id,
      ],
    });
    if (selectChat_id[0].id) {
      return NextResponse.json({ response: selectChat_id }, { status: 200 });
    }

    return NextResponse.json({ response: "" }, { status: 500 });
  } catch (error) {
    return NextResponse.json({ response: "" }, { status: 500 });
  }
}
