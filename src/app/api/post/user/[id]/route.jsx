import { query } from "@/db/db"
import { NextResponse } from "next/server"

export async function GET(req, route) {
  const id = route.params.id
  const user = await query({
    query: `SELECT firstname,username,image FROM user WHERE id = ${id}`,
    value: [id]
  })
  if(user && !user.errno) {
    return NextResponse.json({ response: user[0] }, { status: 200 })
  }
  if(user) {
    return NextResponse.json({ response: "" }, { status: 500 })
  }
}