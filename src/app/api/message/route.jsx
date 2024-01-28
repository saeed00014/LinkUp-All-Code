import { query } from "@/db/db"
import { NextResponse } from "next/server"

export async function GET(req) {
  const chat_id = req.nextUrl.searchParams.get("chat_id")
  const result = await query({
    query: "SELECT * FROM `message` WHERE chat_id = ?",
    values: [chat_id]
  })
  if(result) {
    return NextResponse.json({ response: result }, { status: 200 })
  }
}

export async function POST(req) {
  const chat_id = req.nextUrl.searchParams.get("chat_id")
  const user_id = req.nextUrl.searchParams.get("user_id")
  const body = await req.json()
  const { text, image, post_id, attachedMessage, attachedMessage_id } = body
  const values = [chat_id, user_id, text, attachedMessage, attachedMessage_id]
  const result = await query({
    query: `INSERT INTO message(chat_id, user_id, text, image, post_id, attachedMessage, attachedMessage_id) VALUES ('${chat_id}', '${user_id}', '${text}', '${image}', '${post_id}', '${attachedMessage}', '${attachedMessage_id}' )`,
    values: [values]
  })
  if(result && !result.errno) {
    return NextResponse.json({ response: result.insertId }, { status: 200 })
  }
  if(result) {
    return NextResponse.json({ response: result }, { status: 500 })
  }
}