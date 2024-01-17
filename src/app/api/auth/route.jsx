import { cookies } from 'next/headers'
import { query } from "@/db/db"
import { NextResponse } from "next/server"
import bcrypt from "bcrypt"

export async function GET(req) {
  const cookie = cookies()
  const loginUserCookie = cookie.get("user")
  const loginUser = loginUserCookie && JSON.parse(loginUserCookie.value)
  if(loginUser) {
    const result = await query({
      query: "SELECT * FROM user WHERE id = ?",
      values: [loginUser.id]
    })
    if(result[0]) {
      const {id, username, follower, following, firstname, lastname, job, link, bio, image, background} = result[0]
      if(result[0].username == username && result[0].password == loginUser.password) {
        return NextResponse.json({login: true, user: {id, username, follower, following, firstname, lastname, job, link, bio, image, background}}, { status: 200 })
      }
      if(result[0].username != username || result[0].password != loginUser.password) {
        return NextResponse.json({ login: false }, { status: 200 })
      }
    }
    if(result) {
      return NextResponse.json({ login: false }, { status: 200 })
    }
  }
  if(!loginUser) {
    return NextResponse.json({ login: false }, { status: 200 })
  }
}

export async function POST(req) {
  const body = await req.json()
  const {username, password} = body
  const result = await query({
    query: "SELECT id,username,password FROM user WHERE username = ?",
    values: [username]
  })
  if(result[0]) {
    const comparedPassword = await bcrypt.compare(password, result[0].password)
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


