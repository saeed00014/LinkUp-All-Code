import { query } from "@/db/db" 
import { cookies } from "next/headers"
import { NextResponse } from "next/server"

export async function GET(req) {
  const cookie = cookies()
  const loginUserCookie = cookie.get("user")
  const loginUser = loginUserCookie && JSON.parse(loginUserCookie.value)
  const username = req.nextUrl.searchParams.get("username")
  const result = await query({
    query: `SELECT id,username,firstname,image FROM user WHERE id != ${loginUser.id} AND username like '%${username}%'`,
    values: [username]
  })
  if(result && !result.errno) {
    return NextResponse.json({ response: result }, { status: 200 })
  }
  if(result) {
    return NextResponse.json({ response: "failed" }, { status: 500 })
  }
}