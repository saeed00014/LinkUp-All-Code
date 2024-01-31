import { query } from "@/db/db" 
import bcrypt from "bcrypt"
import { cookies } from "next/headers"
import { NextResponse } from "next/server"

export async function GET(req) {
  const cookie = cookies()
  const loginUserCookie = cookie.get("user")
  const loginUser = loginUserCookie && JSON.parse(loginUserCookie.value)
  const result = await query({
    query: "SELECT id,username,firstname,image FROM user WHERE id != ? ORDER BY RAND() LIMIT 2",
    values: [loginUser.id]
  })
  if(result && !result.errno) {
    return NextResponse.json({ response: result }, { status: 200 })
  }
  if(result) {
    return NextResponse.json({ response: "failed" }, { status: 500 })
  }
}

export async function POST(req) {
  const body = await req.json()
  const {email, username, firstname, lastname, gender, years, password} = body
  const saltRounds = 10
  const hashedPassword = await bcrypt.hash(password, saltRounds)
  const values = [email, username, firstname, lastname, gender, years, hashedPassword]
  const result = await query({
    query: "INSERT INTO user (email, username, firstname, lastname, gender, birth, password) VALUES (?, ?, ?, ?, ?, ?, ?)",
    values: values
  })
  if(result.insertId) {
    return NextResponse.json({ id: result.insertId, username: username, password: hashedPassword }, { status: 200 })
  }
  if(result.code == 'ER_DUP_ENTRY') {
    const repeated = result.sqlMessage.split('key')[1]
    return NextResponse.json({ message: `repeated ${repeated}`, repeated: repeated }, { status: 200 })
  }
  return NextResponse.json({ message: "you request faild pls try later" }, { status: 500 })
}