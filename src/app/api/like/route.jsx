import { query } from "@/db/db"
import { cookies } from "next/headers"
import { NextResponse } from "next/server"

export async function GET(req) {
  const cookie = cookies()
  const loginUserCookie = cookie.get("user") && cookie.get("user").value
  const loginUser = loginUserCookie && JSON.parse(loginUserCookie)
  const values = [loginUser.id]
  const result = await query({
    query: "SELECT `post_id` FROM `like` WHERE user_id = ?",
    values: values
  })
  if(result[0]) {
    return NextResponse.json({ message: "liked", response: result }, { status: 200 })
  }
  if(result) {
    return NextResponse.json({ response: "failed" }, { status: 500 })
  }
}

export async function POST(req) {
  const cookie = cookies()
  const loginUserCookie = cookie.get("user")
  const loginUser = loginUserCookie && JSON.parse(loginUserCookie.value)
  const post_id = req.nextUrl.searchParams.get('post_id')
  const values = [loginUser.id, post_id]
  const result = await query({
    query: "INSERT INTO `like`(`user_id`, `post_id`) VALUES (?, ?)",
    values: values
  })
  const values2 = [post_id]
  const result2 = await query({
    query: "UPDATE post SET likes = likes + 1 WHERE id = ?",
    values: values2
  })
  if(result.insertId) {
    return NextResponse.json({ message: "liked", response: result.insertId }, { status: 200 })
  }
  if(!result.insertId) {
    return NextResponse.json({ response: "failed" }, { status: 500 })
  }
}

export async function DELETE(req) {
  const cookie = cookies()
  const loginUserCookie = cookie.get("user")
  const loginUser = loginUserCookie && JSON.parse(loginUserCookie.value)
  const post_id = req.nextUrl.searchParams.get('post_id')
  const values = [loginUser.id, post_id]
  const result = await query({
    query: "DELETE FROM `like` WHERE user_id = ? && post_id = ?",
    values: values
  })
  const values2 = [post_id]
  const result2 = await query({
    query: "UPDATE post SET likes = likes - 1 WHERE id = ?",
    values: values2
  })
  if(result.affectedRows) {
    return NextResponse.json({ message: "disliked", response: result.insertId }, { status: 200 })
  }
  if(!result.affectedRows) {
    return NextResponse.json({ response: "failed" }, { status: 500 })
  }
}