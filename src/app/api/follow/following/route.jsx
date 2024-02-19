import { query } from "@/db/db";
import { NextResponse } from "next/server";

export async function GET(req) {
  const targetUser_id = req.nextUrl.searchParams.get("targetUser_id");
  const following = await query({
    query: "SELECT COUNT(id) AS following FROM follow WHERE loginUser_id = ?",
    values: [targetUser_id],
  });
  const follower = await query({
    query: "SELECT COUNT(id) AS follower FROM follow WHERE targetUser_id = ?",
    values: [targetUser_id],
  });
  if (!follower.errno && !following.errno && follower[0] && following[0]) {
    return NextResponse.json(
      { follower: follower[0].follower, following: following[0].following },
      { status: 200 }
    );
  }
  if ((follower, following)) {
    return NextResponse.json({ response: "" }, { status: 500 });
  }
}
