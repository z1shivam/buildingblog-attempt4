import { getAllBlogs } from "@/data/getAllBlogs";
import { db } from "@/server/db";
import { blogs } from "@/server/db/schema";
import { eq } from "drizzle-orm";
import Link from "next/link";

export default async function BlogsPage() {
  const allposts = await db.select({title: blogs.title}).from(blogs).where(eq(blogs.slug , "first-post")).all();

  const allBlogs = getAllBlogs();
  return (
    <main>
      <h1>Blogs</h1>
      {JSON.stringify(allposts)}
      <div className="space-y-4 px-5">
        {allBlogs.map((blog) => (
          <div key={blog.slug}>
            <h2>{blog.title}</h2>
            <p>{blog.content}</p>
            <Link href={`/blogs/${blog.slug}`} className="text-blue-600">
              Read More
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}
