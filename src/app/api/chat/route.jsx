import { query } from "@/db/db"
import { cookies } from "next/headers"
import { NextResponse } from "next/server"

export async function GET(req) {
  const cookie = cookies()
  const loginUserCookie = cookie.get("user")
  const loginUser = loginUserCookie && JSON.parse(loginUserCookie.value)
  const result = await query({
    query: "SELECT * FROM chat WHERE userOne = ? || userTwo = ?",
    values: [loginUser.id, loginUser.id]
  })
  if(result && !result.errno) {
    const response = [{...result[0], loginUser_id: loginUser.id}]
    return NextResponse.json({ response: response }, { status: 200})
  }
  if(result) {
    return NextResponse.json({ response: "" }, { status: 500})
  }
}