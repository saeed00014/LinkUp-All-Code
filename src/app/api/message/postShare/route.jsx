import { query } from "@/db/db"
import { cookies } from "next/headers"
import { NextResponse } from "next/server"

export async function POST(req) {
  const cookie = cookies()
  const loginUserCookie = cookie.get("user") && cookie.get("user").value
  const loginUser = loginUserCookie && JSON.parse(loginUserCookie)
  const post_id = req.nextUrl.searchParams.get("post_id")
  const body = await req.json()
  const choosedUsers = body.newChoosedUsers
  choosedUsers.forEach(async (user) => {
    const result1 = await query({
      query: "SELECT id FROM chat WHERE userOne = ? && userTwo = ? || userOne = ? && userTwo = ?",
      values: [loginUser.id, user.id, user.id, loginUser.id]
    })

    if(result1[0] && !result1.errno) {
      const chat_id = result1[0].id
      const values = [chat_id, loginUser.id, post_id]
      const result2 = await query({
        query: `INSERT INTO message(chat_id, user_id, post_id) VALUES ('${chat_id}', '${loginUser.id}', '${post_id}')`,
        values: [values]
      })
      if(result2 && !result2.errno) {
        return NextResponse.json({ response: result2.insertId }, { status: 200 })
      }
      if(result2) {
        return NextResponse.json({ response: result2 }, { status: 500 })
      }
    }
    
    if(!result1[0] && !result1.errno) {
      const result3 = await query({
        query: "INSERT INTO chat(userOne, userTwo) VALUES (?,?)",
        values: [loginUser.id, user.id]
      })

      if(result3.insertId && !result3.errno) {
        const chat_id = result3.insertId 
        const values = [chat_id, loginUser.id, post_id]
        const result4 = await query({
          query: `INSERT INTO message(chat_id, user_id, post_id) VALUES ('${chat_id}', '${loginUser.id}', '${post_id}')`,
          values: [values]
        })
        if(result4 && !result4.errno) {
          return NextResponse.json({ response: result4.insertId }, { status: 200 })
        }
        if(result4) {
          return NextResponse.json({ response: result4 }, { status: 500 })
        }
      }
    }
  });
}