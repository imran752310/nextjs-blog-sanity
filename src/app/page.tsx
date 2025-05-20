import BlogCard from "@/components/BlogCard";
import { client } from "../../sanity/lib/client";
import { Post } from "../../typing";
import Hero from "@/components/Hero";

export const revalidate = 60; //seconds

export default async function Home() {
  const query = `*[_type=='post'] | order(_createdAt asc){
  
    summary,title,image,
      "slug":slug.current
  }`;

  const posts:Post[] = await client.fetch(query)
  console.log(posts)

  return (
    <>
    <Hero />
   
    <main className="flex min-h-screen flex-col w-[90%] mx-auto ">
      <h1 className="text-2xl font-bold uppercase my-20 text-center text-dark dark:text-light sm:text-3xl lg:text-5xl ">
        Most Recent <span className="text-teal-600" >blogs</span>
      </h1>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {
          posts.map((post:Post)=>(
            <BlogCard post={post} key={post.slug} />
          ))
        }

      </section>
    </main>
     </>
  );
}