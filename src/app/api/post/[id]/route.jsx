import { query } from "@/db/db"
import { cookies } from "next/headers"
import { NextResponse } from "next/server"

export async function GET(req, route) {
  const post_id = route.params.id
  const result = await query({
    query: `SELECT * FROM post WHERE id = ${post_id}`,
    value: [post_id]
  })
  if(result && !result.errno) {
    return NextResponse.json({ response: result }, { status: 200 })
  }
  if(result.errno) {
    return NextResponse.json({ response: "" }, { status: 500 })
  }
}


export async function DELETE(req, route) {
  const cookie = cookies()
  const loginUserCookie = cookie.get("user")
  const loginUser = loginUserCookie && JSON.parse(loginUserCookie.value)
  const post_id = route.params.id
  
  const result = await query({
    query: `DELETE FROM post WHERE id = ${post_id} AND user_id = ${loginUser.id}`,
    value: [post_id, loginUser.id]
  })
  console.log(result)
  if(result && !result.errno && result.affectedRows == "1") {
    return NextResponse.json({ deleted: true }, { status: 200 })
  }
  if(result && !result.errno && result.affectedRows == "0") {
    return NextResponse.json({ deleted: false }, { status: 404 })
  }
  if(result) {
    return NextResponse.json({ response: "" }, { status: 500 })
  }
}