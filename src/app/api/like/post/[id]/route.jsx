import { query } from "@/db/db"
import { NextResponse } from "next/server"

export async function GET(req, route) {
  const post_id = route.params.id
  const values = [post_id]
  const result = await query({
    query: "SELECT COUNT(id) AS likenum FROM `like` WHERE post_id = ?",
    values: values
  })
  if(result[0] && !result.errno) {
    return NextResponse.json({ response: result[0].likenum }, { status: 200 })
  }  
  return NextResponse.json({ response: "failed" }, { status: 500 })
}
