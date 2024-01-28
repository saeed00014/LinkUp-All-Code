import { query } from "@/db/db"
import { NextResponse } from "next/server"

export async function GET(req, route) {
  const id = route.params.id
  const result = await query({
    query: "SELECT id,username,firstname,image FROM user WHERE id = ?",
    values: [id]
  })
  if(result[0] && !result.errno) {
    return NextResponse.json({ response: result[0] }, {status: 200})
  }
  if(result) {
    return NextResponse.json({ response: ""}, {status: 500})
  }
}