import { query } from "@/db/db"
import { cookies } from "next/headers"
import { NextResponse } from "next/server"

export async function GET(req, route) {
  const cookie = cookies()
  const cookieUser = cookie.get("user")
  const loginUser = cookieUser && JSON.parse(cookieUser.value)
  const result = await query({
    query: "SELECT id,username,firstname FROM user where id = ?",
    values: [loginUser.id]
  })
  if(result[0]) {
    return NextResponse.json({ response: result[0] }, { status: 200 })
  }
  if(result) {
    return NextResponse.json({ response: "" }, { status: 500 })
  }
}
