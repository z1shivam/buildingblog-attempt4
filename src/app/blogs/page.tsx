import { getAllBlogs } from "@/data/getAllBlogs";

export default async function BlogsPage() {

  const allBlogs = getAllBlogs();
  return (
    <main>
      <h1>Blogs</h1>
    </main>
  );
}
