import { query } from "@/db/db" 
import bcrypt from "bcrypt"
import { NextResponse } from "next/server"

export async function GET(req) {
  const username = req.nextUrl.searchParams.get("username")
  const result = await query({
    query: `SELECT id,username,firstname,image FROM user WHERE username like '%${username}%'`,
    values: [username]
  })
  if(result) {
    return NextResponse.json({ response: result }, { status: 200 })
  }
}