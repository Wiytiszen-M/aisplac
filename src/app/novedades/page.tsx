import { PostCard } from "@/components/post-card";
import { getPosts } from "@/sanity/client";

export const revalidate = 60; // Revalidate this page every 60 seconds

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <div className="container grid gap-6 mx-auto p-4 py-36">
      <h1 className="mb-8 text-4xl font-bold">Blog</h1>

      <PostCard key={posts[0]._id} post={posts[0]} isWide />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 ">
        {posts.map((post) =>
          post._id !== posts[0]._id ? (
            <PostCard key={post._id} post={post} />
          ) : null
        )}
      </div>
    </div>
  );
}
