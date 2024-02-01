import { query } from "@/db/db"
import { cookies } from "next/headers"
import { NextResponse } from "next/server"
import { redirect } from 'next/navigation'

export async function GET(req, route) {
  const cookie = cookies()
  const loginUserCookie = cookie.get("user") && cookie.get("user").value
  const loginUser = loginUserCookie && JSON.parse(loginUserCookie)
  const result = await query({
    query: "SELECT id,username,email,firstname,lastname,gender,birth,job,link,bio,image,background FROM user where id = ?",
    values: [loginUser.id]
  })
  if(result[0] && !result.errno) {
    return NextResponse.json({ response: result[0] }, { status: 200 })
  }
  if(result && !result[0] && !result.errno) {
    redirect("/auth", "get")
  }
  return NextResponse.json({ response: "request failed" }, { status: 500 })
}
