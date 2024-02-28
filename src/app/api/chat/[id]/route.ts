import { query } from "@/db/db";
import { CookieUserType, SqlQueryResultSuccessType } from "@/type/type";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET(req: Request, route: any) {
  const cookie = cookies();
  const loginUserCookie: string = cookie.get("user")?.value || "{}";
  const loginUser: CookieUserType = JSON.parse(loginUserCookie);
  const targetUser_id: number = route.params.id;

  try {
    const selectChat_id = <{ id: number }[]>await query({
      query:
        "SELECT id FROM chat WHERE userOne = ? && userTwo = ? || userOne = ? && userTwo = ?",
      values: [loginUser.id, targetUser_id, targetUser_id, loginUser.id],
    });
    if (selectChat_id[0]) {
      return NextResponse.json(
        { chat_id: selectChat_id[0].id },
        { status: 200 }
      );
    }
    const makeChat = <SqlQueryResultSuccessType>await query({
      query: "INSERT INTO chat(userOne, userTwo) VALUES (?,?)",
      values: [loginUser.id, targetUser_id],
    });

    if (makeChat.insertId) {
      return NextResponse.json({ chat_id: makeChat.insertId }, { status: 200 });
    }

    return NextResponse.json({ response: "fail" }, { status: 500 });
  } catch (error) {
    return NextResponse.json({ response: "fail" }, { status: 500 });
  }
}

export async function DELETE(req: Request, route: any) {
  const id: number = route.params.id;

  try {
    const result = <SqlQueryResultSuccessType>await query({
      query: "DELETE FROM CHAT WHERE id = ?",
      values: [id],
    });
    if (result.affectedRows === 1) {
      return NextResponse.json({ response: "chat deleted" }, { status: 200 });
    }

    return NextResponse.json({ response: "chat not found" }, { status: 404 });
  } catch (error) {
    return NextResponse.json(
      { response: "there waws a problem pls try agian later" },
      { status: 500 }
    );
  }
}
