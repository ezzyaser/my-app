// import { NextResponse } from "next/server";
// import { db } from "@/db/index";
// import { blogPosts } from "@/db/schema";
// import { eq } from "drizzle-orm";

// export async function GET(
//   request: Request,
//   { params }: { params: { slug: string } }
// ) {
//   const post = await db
//     .select()
//     .from(blogPosts)
//     .where(eq(blogPosts.slug, params.slug))
//     .then((res) => res[0]);

//   if (!post) {
//     return NextResponse.json({ error: "المقال غير موجود" }, { status: 404 });
//   }

//   return NextResponse.json(post);
// }
