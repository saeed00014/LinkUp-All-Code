import { query } from "@/db/db";
import { CookieUserType } from "@/type/type";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET(req: any) {
  const cookie = cookies();
  const loginUserCookie: string = cookie.get("user")?.value || "{}";
  const loginUser: CookieUserType = JSON.parse(loginUserCookie);
  const userOne: string = req.nextUrl.searchParams.get("userOne");
  const userTwo: string = req.nextUrl.searchParams.get("userTwo");
  const targetUser_id: number =
    loginUser.id === Number(userOne) ? Number(userTwo) : Number(userOne);
    
  try {
    const result = <{}[]> await query({
      query: "SELECT id,username,firstname,image FROM user where id = ?",
      values: [targetUser_id],
    });
    if (result[0]) {
      return NextResponse.json({ response: result[0] }, { status: 200 });
    }
    return NextResponse.json({ response: "" }, { status: 500 });
  } catch {
    return NextResponse.json({ response: "" }, { status: 500 });
  }
}
