import { query } from "@/db/db"
import { cookies } from "next/headers"
import { NextResponse } from "next/server"

export async function POST(req) {
  const cookie = cookies()
  const loginUserCookie = cookie.get("user")
  const loginUser = loginUserCookie && JSON.parse(loginUserCookie.value)
  const targetUser_id = req.nextUrl.searchParams.get("targetUser_id")
  const values = [loginUser.id, targetUser_id]
  const result = await query({
    query: "INSERT INTO `follow`(loginUser_id, targetUser_id) VALUES (?,?)",
    values: values
  })
  if(result && !result.errno) {
    return NextResponse.json({ response: "user followed", id: result.insertId }, { status: 200 })
  }
  if(result.errno && result.code == 'ER_DUP_ENTRY' ) {
    return NextResponse.json({ response: "was followed before", id: "", repeat: true }, { status: 200 })
  }
  if(result) {
    return NextResponse.json({ response: "failed", id: "" }, { status: 500 })
  }
}
