import { query } from "@/db/db"
import { cookies } from "next/headers"
import { NextResponse } from "next/server"

export async function GET(req) {
  const cookie = cookies()
  const loginUserCookie = cookie.get("user")
  const loginUser = loginUserCookie && loginUserCookie.value
  const result = await query({
    query: "SELECT * FROM follow WHERE loginUser_id = ?",
    values: [loginUser.id]
  })
  if(result && !result.errno) {
    return NextResponse.json({ response: result }, {status: 200})
  }
  if(result) {
    return NextResponse.json({ response: "" }, {status: 500})
  }
}

export async function POST(req) {
  const cookie = cookies()
  const loginUserCookie = cookie.get("user")
  const loginUser = loginUserCookie && loginUserCookie.value
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

export async function DELETE(req) {
  const cookie = cookies()
  const loginUserCookie = cookie.get("user") && cookie.get("user").value
  const loginUser = loginUserCookie && JSON.parse(loginUserCookie)
  const targetUser_id = req.nextUrl.searchParams.get("targetUser_id")
  const values = [loginUser.id, targetUser_id]
  const result = await query({
    query: "DELETE FROM `follow` WHERE loginUser_id = ? && targetUser_id = ?",
    values: values
  })
  if(result && !result.errno) {
    return NextResponse.json({ response: "user unfollowed" }, { status: 200 })
  }
  if(result.errno) {
    return NextResponse.json({ response: "was not followed" }, { status: 200 })
  }
  if(result) {
    return NextResponse.json({ response: "failed" }, { status: 500 })
  }
}
