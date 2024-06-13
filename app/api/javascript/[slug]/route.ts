import { NextRequest } from "next/server";
 
export async function GET(
  req: NextRequest,
  { params }: { params: { slug: string } }
) {
  const slug = params.slug;
  return Response.json({message: `nextjs received slug='${slug}'`}, {status: 200})
}