import { query } from "@/db/db";
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
  const body = await req.json()
  console.log(body)
  
  
  return NextResponse.json({ response: "" }, { status: 500 })
}