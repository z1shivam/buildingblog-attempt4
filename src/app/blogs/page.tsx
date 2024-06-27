import { getAllBlogs } from "@/data/getAllBlogs";
import Link from "next/link";

export default function BlogsPage() {
  const allBlogs = getAllBlogs();
  return (
    <main>
      <h1>Blogs</h1>
      <div className="space-y-4 px-5">
        {allBlogs.map((blog) => (
          <div key={blog.slug}>
            <h2>{blog.title}</h2>
            <p>{blog.content}</p>
            <Link href={`/blogs/${blog.slug}`} className="text-blue-600">Read More
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}
