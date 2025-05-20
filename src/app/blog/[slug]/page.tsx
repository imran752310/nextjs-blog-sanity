import Image from "next/image";
import { client } from "../../../../sanity/lib/client";
import { urlForImage } from "../../../../sanity/lib/image";
import { PortableText } from "@portabletext/react";
import { HandCoins, Heart, MessageCircle } from "lucide-react";

export const revalidate = 60; //seconds

export async function generateStaticParams() {
  const query = `*[_type=='post']{
    "slug":slug.current
  }`;
  const slugs = await client.fetch(query);
  const slugRoutes = slugs.map((item: { slug: string }) => item.slug);
  // console.log(slugRoutes)
  return slugRoutes.map((slug: string) => ({ slug }));
}

// To create static pages for dynamic routes
export default async function page({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const query = `*[_type=='post' && slug.current=="${slug}"]{
    title,summary,image,content,
      author->{bio,image,name}
  }[0]`;
  const post = await client.fetch(query);

  return (
    <article className="mt-12 mb-24 px-2 2xl:px-12 flex flex-col gap-y-8 w-[70%] mx-auto">
      {/* Blog Title */}
      <h1 className="text-xl xs:text-3xl lg:text-5xl font-bold text-dark dark:text-light">
        {post.title}
      </h1>

      <div className="flex justify-between">
        {/* Author Section (Image & Bio) */}
        <section className=" flex  gap-4 items-start xs:items-center justify-start">
          <Image
            src={urlForImage(post.author.image)}
            width={100}
            height={100}
            alt="author"
            className="object-cover rounded-full h-12 w-12 "
          />
          <div className="flex flex-col gap-1">
            <h3 className="text-xl font-bold text-dark dark:text-light">
              {post.author.name}
            </h3>
            <p className="italic text-xs xs:text-sm sm:text-base text-dark/80 dark:text-light/80">
              {post.author.bio}
            </p>
          </div>
        </section>

        <div className="flex gap-5 text-gray-500">
          <div className="flex gap-2">
            <Heart /> 308
          </div>
          <div className="flex gap-2">
            <MessageCircle /> 34
          </div>
        </div>
      </div>

      {/* Featured Image */}
      <Image
        src={urlForImage(post.image)}
        width={1000}
        height={200}
        alt="AI for everyone"
        className="rounded"
      />

      {/* Blog Summary Section */}
      <section>
        <h2 className="text-xl xs:text-2xl md:text-3xl font-bold uppercase text-accentDarkPrimary">
          Summary
        </h2>
        <p className="text-base md:text-xl leading-relaxed text-justify text-dark/80 dark:text-light/80">
          {post.summary}
        </p>
      </section>

      {/* Main Body of Blog */}
      <section
        className="text-lg leading-normal text-dark/80 dark:text-light/80 prose-strong:text-dark dark:prose-strong:text-white"
      >
        <PortableText value={post.content} />
      </section>
    </article>
  );
}
