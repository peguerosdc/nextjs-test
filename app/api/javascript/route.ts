import { NextRequest } from "next/server";
 
export async function GET(
  req: NextRequest
) {
  return Response.json({message: "this is from nextjs"}, {status: 200})
}