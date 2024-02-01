import { query } from "@/db/db"
import { NextResponse } from "next/server"

export async function DELETE(req, route) {
  const id = route.params.id
  const result = await query({
    query: "DELETE FROM message WHERE id = ?",
    values: [id]
  })
  if(result && !result.errno) {
    return NextResponse.json({ response: "message deleted" }, { status: 200 })
  }
  if(result) {
    return NextResponse.json({ response: "failed" }, { status: 500 })
  }
}