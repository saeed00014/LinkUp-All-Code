import { cookies } from 'next/headers'
import { query } from "@/db/db"
import { NextResponse } from "next/server"
import bcrypt from "bcrypt"

export async function GET(req) {
  const cookie = cookies()
  const loginUserCookie = cookie.get("user") && cookie.get("user").value
  
  try {
    JSON.parse(loginUserCookie);
  } catch (e) {
    cookie.set("user", "")
    return NextResponse.json({ login: false }, { status: 200 })
  } 

  const loginUser = loginUserCookie && JSON.parse(loginUserCookie)
  const result = await query({
    query: "SELECT id,username,password FROM user WHERE id = ?",
    values: [loginUser.id]
  })
  if(!result[0] && !result.errno) {
    return NextResponse.json({ login: false }, { status: 200 })
  }
  if(result[0] && !result.errno) {
    const {id, username, password} = result[0]
    const campareInfo = (
      username == loginUser.username &&
      password == loginUser.password
    )
    if(campareInfo) {
      return NextResponse.json({ login: true }, { status: 200 })
    }
    if(!campareInfo) {
      return NextResponse.json({ login: false }, { status: 200 })
    }
  }

  return NextResponse.json({ response: "request failed" }, { status: 500 })

}

export async function POST(req) {
  const body = await req.json()
  const {username, password} = body
  const result = await query({
    query: "SELECT id,username,password FROM user WHERE username = ?",
    values: [username]
  })
  if(!result[0] && !result.errno) {
    return NextResponse.json({ login: false }, { status: 200 })
  }
  if(result[0] && !result.errno) {
    const comparedPassword = await bcrypt.compare(password, result[0].password)
    if(comparedPassword) {
      return NextResponse.json({ login: true, result: result[0] }, { status: 200 })
    }
    if(!comparedPassword) {
      return NextResponse.json({ login: false }, { status: 200 })
    }
  }
  return NextResponse.json({ response: "request failed" }, { status: 500 })
}


