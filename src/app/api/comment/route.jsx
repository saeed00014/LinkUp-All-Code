import { query } from "@/db/db"
import { NextResponse } from "next/server"
import { cookies } from 'next/headers'

export async function GET(req) {
  const post_id = req.nextUrl.searchParams.get("post_id")
  const values = [post_id]
  const result = await query({
    query: "SELECT `id`,`user_id`,`text` FROM `comment` WHERE post_id = ?",
    values: values
  })
  if(result[0]) {
    return NextResponse.json({ response: "get successfully", result: result }, { status: 200 })
  }
  if(result) {
    return NextResponse.json({ response: "failed" }, { status: 500 })
  }
}

export async function POST(req) {
  const cookie = cookies()
  const loginUserCookie = cookie.get("user")
  const loginUser = loginUserCookie && JSON.parse(loginUserCookie.value)
  const post_id = req.nextUrl.searchParams.get("post_id")
  const text = await req.json()
  const values = [post_id, loginUser.id, text.text]
  const result = await query({
    query: "INSERT INTO `comment` (`post_id`, `user_id`, `text`) VALUES (?, ?, ?)",
    values: values
  })
  const values2 = [post_id]
  const result2 = await query({
    query: "UPDATE post SET comments = comments + 1 WHERE id = ?",
    values: values2
  })
  if(result.insertId) {
    return NextResponse.json({ response: "inserted successfully", insertId: result.insertId }, { status: 200 })
  }
  if(result) {
    return NextResponse.json({ response: "failed" }, { status: 500 })
  }
}
