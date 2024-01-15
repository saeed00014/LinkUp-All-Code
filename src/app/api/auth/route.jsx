import { cookies } from 'next/headers'
import { query } from "@/db/db"
import { NextResponse } from "next/server"
import bcrypt from "bcrypt"

export async function GET(req) {
  const cookieStore = cookies()
  const cookie = cookieStore.get('user') && cookieStore.get('user').value
  const user = cookie && JSON.parse(cookie) 
  if(user) {
    const result = await query({
      query: "SELECT * FROM user WHERE id = ?",
      values: [user.id]
    })
    if(result[0]) {
      const {email, username, firstname, lastname, gender, years} = result[0]
      if(result[0].username == username && result[0].password == user.password) {
        return NextResponse.json({login: true, user: {email, username, firstname, lastname, gender, years}}, { status: 200 })
      }
      if(result[0].username != username || result[0].password != user.password) {
        return NextResponse.json({ login: false }, { status: 200 })
      }
    }
    if(result) {
      return NextResponse.json({ login: false }, { status: 200 })
    }
  }
  if(!user) {
    return NextResponse.json({ login: false }, { status: 200 })
  }
}

export async function POST(req) {
  const body = await req.json()
  const {username, password} = body
  const result = await query({
    query: "SELECT * FROM user WHERE username = ?",
    values: [username]
  })
  if(result[0]) {
    const comparedPassword = await bcrypt.compare(password, result[0].password)
    console.log(result[0])
    if(comparedPassword) {
      return NextResponse.json({ login: true, result: result[0] }, { status: 200 })
    }
    if(!comparedPassword) {
      return NextResponse.json({ login: false }, { status: 200 })
    }
  }
  if(result) {
    return NextResponse.json({ login: false }, { status: 200 })
  }
}


