import { query } from "@/db/db"
import { cookies } from "next/headers"
import { NextResponse } from "next/server"

export async function GET(req) {
  const cookie = cookies()
  const loginUserCookie = cookie.get("user") && cookie.get("user").value
  const loginUser = loginUserCookie && JSON.parse(loginUserCookie)
  const result = await query({
    query: `SELECT * FROM post WHERE user_id != ${loginUser.id}`,
    value: ""
  })
  if(result && !result.errno) {
    return NextResponse.json({ response: result }, { status: 200 })
  }
  if(result) {
    return NextResponse.json({ response: "" }, { status: 500 })
  }
}

export async function POST(req) {
  const cookie = cookies()
  const loginUserCookie = cookie.get("user") && cookie.get("user").value
  const loginUser = loginUserCookie && JSON.parse(loginUserCookie)
  const body = await req.json()
  const isComments = body.isCommentsChecked ? 1 : 0 
  const values = [loginUser.id,isComments,body.text,body.tag,body.myComment,body.image]
  const result = await query({
    query: "INSERT INTO `post`(user_id,isComments,text,tag,myComment,image) VALUES (?,?,?,?,?,?)",
    values: values
  })
  if(result && !result.errno && result.insertId) {
    return NextResponse.json({ inserted: true, id: result.insertId }, { status: 200 })
  }
  if(result && result.errno && result.code == 'ER_BAD_FIELD_ERROR') {
    return NextResponse.json({ inserted: false }, { status: 200 })
  }

  return NextResponse.json({ response: "failed" }, { status: 500 })
  
}
