import React, { cache } from "react";
import { prisma } from "../../../prisma/prisma";
import Gallery from "@/components/Gallery";

async function getPosts() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/openai`, {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed");
  }

  const posts = await res.json();
  //   const posts = await prisma.post.findMany();
  return posts;
}

const Share = async () => {
  const { posts } = await getPosts();
  console.log("POSTS", posts);

  return (
    <main className="max-w-5xl mx-auto">
      <Gallery posts={posts} />
    </main>
  );
};

export default Share;
