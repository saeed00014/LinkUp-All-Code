import { query } from "@/db/db"
import { NextResponse } from "next/server"

export async function GET(req, route) {
  const id = route.params.id
  const result = await query({
    query: "SELECT id,username,email,firstname,lastname,gender,birth,job,link,bio,image,background FROM user where id = ?",
    values: [id]
  })
  if(result[0]) {
    return NextResponse.json({ response: result[0] }, { status: 200 })
  }
  if(result) {
    return NextResponse.json({ response: "" }, { status: 500 })
  }
}

export async function PUT(req, route) {
  const id = route.params.id
  const body = await req.json()
  const {username, email, firstname, lastname, job, link, bio, image, background} = {...body}  
  const result = await query({
    query: "UPDATE user SET username = ?, email = ?, firstname = ?, lastname = ?, job = ?, link = ?, bio = ?, image = ?, background = ? WHERE id = ?",
    values: [username, email, firstname, lastname, job, link, bio, image, background, id]
  })
  if(result && !result.errno && result.affectedRows == 1) {
    return NextResponse.json({ response: "changes saved" }, { status: 200 })
  }
  if(result && !result.errno && result.affectedRows == 0) {
    return NextResponse.json({ response: "user notfound" }, { status: 404 })
  } 
  return NextResponse.json({ response: "failed" }, { status: 500 })
}
