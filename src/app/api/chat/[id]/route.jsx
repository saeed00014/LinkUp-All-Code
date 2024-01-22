import { query } from "@/db/db"
import { cookies } from "next/headers"
import { NextResponse } from "next/server"

export async function GET(req, route) {
  const targetUser_id = route.params.id
  const cookie = cookies()
  const loginUserCookie = cookie.get("user")
  const loginUser = loginUserCookie && JSON.parse(loginUserCookie.value)
  const result = await query({
    query: "SELECT id FROM chat WHERE userOne = ? && userTwo = ? || userOne = ? && userTwo = ?",
    values: [loginUser.id, targetUser_id, targetUser_id, loginUser.id]
  })
  if(result && !result.errno) {
    return NextResponse.json({ chat_id: result[0].id }, { status: 200})
  }
  if(result) {
    return NextResponse.json({ response: "" }, { status: 500})
  }
}