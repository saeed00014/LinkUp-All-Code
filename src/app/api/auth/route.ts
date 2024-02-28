import { cookies } from "next/headers";
import { query } from "@/db/db";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { AuthUserInfoType, CookieUserType } from "@/type/type";

export async function GET() {
  const cookie = cookies();
  const loginUserCookie: string = cookie.get("user")?.value || "{}";
  const loginUser: CookieUserType = JSON.parse(loginUserCookie);
  try {
    const result = <AuthUserInfoType[]>await query({
      query: "SELECT id,username,password FROM user WHERE id = ?",
      values: [loginUser.id],
    });

    if (result[0]) {
      const { username, password } = result[0];
      const campareInfo =
        username == loginUser.username && password == loginUser.password;
      if (campareInfo) {
        return NextResponse.json({ login: true }, { status: 200 });
      }

      return NextResponse.json({ login: false }, { status: 200 });
    }

    return NextResponse.json({ login: false }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ response: "request failed" }, { status: 500 });
  }
}

export async function POST(req: Request) {
  const body: AuthUserInfoType = await req.json();
  const { username, password } = body;

  try {
    const result = <AuthUserInfoType[]>await query({
      query: "SELECT id,username,password FROM user WHERE username = ?",
      values: [username],
    });

    if (result[0]) {
      const comparedPassword: boolean = await bcrypt.compare(
        password,
        result[0].password
      );

      if (comparedPassword) {
        return NextResponse.json(
          { login: true, result: result[0] },
          { status: 200 }
        );
      }

      return NextResponse.json({ login: false }, { status: 200 });
    }

    return NextResponse.json({ login: false }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ response: "request failed" }, { status: 500 });
  }
}
