import { query } from "@/db/db" 
import bcrypt from "bcrypt"
import { NextResponse } from "next/server"

export async function GET(req) {
  const result = await query({
    query: "SELECT * FROM user",
    values: []
  })
  if(result) {
    const response = JSON.stringify(result)
    return NextResponse.json({ message: response}, { status: 200 })
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
  if (result.insertId) {
    return NextResponse.json({ id: result.insertId, username: username, email: email, firstname: firstname, lastname: lastname, gender: gender, birth: years, password: hashedPassword }, { status: 200 })
  }
  if(result.code == 'ER_DUP_ENTRY') {
    const repeated = result.sqlMessage.split('key')[1]
    return NextResponse.json({ message: `repeated ${repeated}`, repeated: repeated }, { status: 200 })
  }
  return NextResponse.json({ message: "you request faild pls try later" }, { status: 500 })
}