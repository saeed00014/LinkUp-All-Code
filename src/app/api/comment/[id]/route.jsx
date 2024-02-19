import { query } from "@/db/db";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function DELETE(req, route) {
  const cookie = cookies();
  const loginUserCookie = cookie.get("user")?.value;
  const loginUser = loginUserCookie && JSON.parse(loginUserCookie);
  const comment_id = route.params.id;
  const result = await query({
    query: `DELETE FROM comment WHERE id = ${comment_id} AND user_id = ${loginUser.id}`,
    value: [comment_id, loginUser.id],
  });
  if (result && !result.errno && result.affectedRows == "1") {
    return NextResponse.json({ deleted: true }, { status: 200 });
  }
  if (result && !result.errno && result.affectedRows == "0") {
    return NextResponse.json({ deleted: false }, { status: 404 });
  }
  if (result) {
    return NextResponse.json({ response: "" }, { status: 500 });
  }
}

export async function PUT(req, route) {
  const comment_id = route.params.id;
  const text = await req.json();
  const result = await query({
    query: `UPDATE comment SET text = '${text.newComment}' WHERE id = '${comment_id}'`,
    value: [comment_id],
  });
  if (result && !result.errno && result.affectedRows == "1") {
    return NextResponse.json({ deleted: true }, { status: 200 });
  }
  if (result && !result.errno && result.affectedRows == "0") {
    return NextResponse.json({ deleted: false }, { status: 404 });
  }
  if (result) {
    return NextResponse.json({ response: "" }, { status: 500 });
  }
}
