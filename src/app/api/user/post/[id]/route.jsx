import { query } from "@/db/db"
import { cookies } from "next/headers"
import { NextResponse } from "next/server"

export async function GET(req, route) {
  const cookie = cookies()
  const loginUserCookie = cookie.get("user") && cookie.get("user").value
  const loginUser = loginUserCookie && JSON.parse(loginUserCookie)
  const id = route.params.id
  const page = req.nextUrl.searchParams.get("page")
  const endLimit = page * 4
  const startLimit = endLimit - 4
  const result = await query({
    query: `SELECT * FROM post WHERE user_id = ${id} LIMIT ${startLimit}, ${endLimit}`,
    values: [id, startLimit, endLimit]
  })
  if(result && !result.errno) {
    return NextResponse.json({ response: result, isLoginUser: loginUser.id == id }, { status: 200 })
  }
  if(result.errno) {
    return NextResponse.json({ response: "" }, { status: 500 })
  }
}