import { query } from "@/db/db"
import { cookies } from "next/headers"
import { NextResponse } from "next/server"

export async function GET(req, route) {
  const cookie = cookies()
  const loginUserCookie = cookie.get("user")
  const loginUser = loginUserCookie && JSON.parse(loginUserCookie.value)
  const id = route.params.id
  const result = await query({
    query: `SELECT * FROM post WHERE user_id = ${id}`,
    value: [id]
  })
  if(result && !result.errno) {
    return NextResponse.json({ response: result, isLoginUser: loginUser.id == id }, { status: 200 })
  }
  if(result.errno) {
    return NextResponse.json({ response: "" }, { status: 500 })
  }
}