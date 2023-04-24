import Image from "next/image";
import React, { FC } from "react";
import Button from "./Button";

const CommunityPost: FC<any> = ({ title, imageUrl, tag }) => {
  return (
    <article className="bg-openAI_Primary flex flex-col p-5 rounded-lg text-white">
      <div className="relative h-[512px] w-auto rounded-lg">
        <Image src={imageUrl} alt={title} fill className="object-contain" />
      </div>
      <h1 className="text--2xl text-white uppercase font-bold tracking-widest mt-2">
        {title}
      </h1>
      <p className="text-yellow-500 mt-2">{tag}</p>
      <Button imageUrl={imageUrl} />
    </article>
  );
};

const Gallery: FC<GalleryProps> = ({ posts }) => {
  return (
    <section className="mt-40">
      <h1>Community Showcase</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        {posts.map((post) => {
          return <CommunityPost key={post.id} {...post} />;
        })}
      </div>
    </section>
  );
};

export default Gallery;
