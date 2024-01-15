import { query } from "@/db/db";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET(req) {
  const result = await query({
    query: "SELECT * FROM post",
    value: ""
  })
  //`SELECT * FROM message WHERE chat_id = ? ORDER BY sent DESC LIMIT ? OFFSET ?`
  if(result[0]) {
    return NextResponse.json({ response: result }, { status: 200 })
  }
  if(result) {
    return NextResponse.json({ response: "" }, { status: 500 })
  }
}

export async function POST(req) {
  const cookie = cookies()
  const loginUser = JSON.parse(cookie.get("user").value)
  const body = await req.json()
  const isComments = body.isCommentsChecked ? 1 : 0 
  const values = [loginUser.id,isComments,body.text,body.tag,body.myComment,body.image]
  const result = await query({
    query: "INSERT INTO `post`(user_id,isComments,text,tag,myComment,image) VALUES (?,?,?,?,?,?)",
    values: values
  })
  if(result.insertId) {
    return NextResponse.json({ response: "post is make", id: result.insertId }, { status: 200 })
  }
  if(result) {
    return NextResponse.json({ response: "failed" }, { status: 500 })
  }
  
}