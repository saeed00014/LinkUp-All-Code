import { query } from "@/db/db"
import { cookies } from "next/headers"
import { NextResponse } from "next/server"

export async function GET(req, route) {
  const cookie = cookies()
  const loginUserCookie = cookie.get("user")
  const loginUser = loginUserCookie && JSON.parse(loginUserCookie.value)
  const searchValue = req.nextUrl.searchParams.get("value")
  const searchCategory = req.nextUrl.searchParams.get("category")
  const result = await query({
    query: `SELECT * FROM post WHERE user_id != ${loginUser.id} AND text like '%${searchValue}%'`,
    value: [searchValue]
  })
  if(result && !result.errno) {
    return NextResponse.json({ response: result }, { status: 200 })
  }
  if(result.errno) {
    return NextResponse.json({ response: "" }, { status: 500 })
  }
}