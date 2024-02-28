import { query } from "@/db/db";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(req) {
  const cookie = cookies();
  const loginUserCookie = cookie.get("user")?.value;
  const loginUser = loginUserCookie && JSON.parse(loginUserCookie);
  const post_id = req.nextUrl.searchParams.get("post_id");
  const body = await req.json();
  const choosedUsers = body.newChoosedUsers;

  choosedUsers.forEach(async (user) => {
    const choosedUserChat = await query({
      query:
        "SELECT id FROM chat WHERE userOne = ? && userTwo = ? || userOne = ? && userTwo = ?",
      values: [loginUser.id, user.id, user.id, loginUser.id],
    });
    if (choosedUserChat[0].id) {
      const chat_id = choosedUserChat[0].id;
      const values = [chat_id, loginUser.id, post_id];

      const insertPost = await query({
        query: `INSERT INTO message(chat_id, user_id, post_id) VALUES ('${chat_id}', '${loginUser.id}', '${post_id}')`,
        values: [values],
      });

      if (insertPost.insertId) {
        return NextResponse.json(
          { response: insertPost.insertId },
          { status: 200 }
        );
      }
      return NextResponse.json({ response: "fail" }, { status: 500 });
    }

    if (!choosedUserChat[0]?.id) {
      const insetChat = await query({
        query: "INSERT INTO chat(userOne, userTwo) VALUES (?,?)",
        values: [loginUser.id, user.id],
      });

      if (insetChat.insertId) {
        const chat_id = insetChat.insertId;
        const values = [chat_id, loginUser.id, post_id];

        const insertPost2 = await query({
          query: `INSERT INTO message(chat_id, user_id, post_id) VALUES ('${chat_id}', '${loginUser.id}', '${post_id}')`,
          values: [values],
        });

        if (insertPost2.insertId) {
          return NextResponse.json(
            { response: insertPost2.insertId },
            { status: 200 }
          );
        }

        return NextResponse.json({ response: "fail" }, { status: 500 });
      }
    }
  });
  return NextResponse.json({ response: "fail" }, { status: 500 });
}
