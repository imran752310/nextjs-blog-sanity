import Image from "next/image";
import Link from "next/link";
import { urlForImage } from "../../sanity/lib/image";
import { Post } from "../../typing";
import { ArrowUpRight, MessageCircle, MoveRight } from "lucide-react";

export default function BlogCard({post}:{post:Post}) {
  return (
    <section className="flex flex-col justify-between h-[480px]  rounded bg-light/90 dark:bg-dark/40 shadow-md shadow-gray-300 dark:shadow-black/80 group hover:scale-105 transition-transform ease-out duration-500">
     
     
      {/* Image Section*/}
      <div className="relative max-h-66 flex-1">
        <Image
          src={urlForImage(post.image)}
          alt="AI for everyone"
          fill
          className="object-cover rounded-t"
        />
      </div>

      {/* Title and Summary */}
      <div className="flex flex-col justify-between gapx-y-4  p-4">
        <h2 className="text-lg font-semibold line-clamp-2 text-dark dark:text-light leading-tight mb-2">
          {post.title}
        </h2>
        <p className="text-dark/70 dark:text-light/70 line-clamp-3 text-sm">
         {post.summary}
        </p>

      </div>
      <div className="flex justify-between items-center p-4">
        <div>
 {/* Read More dynamic Link */}
        <Link
          href={`/blog/${post.slug}`}
          className="flex px-4 py-1 text-center bg-teal-500  hover:bg-teal-600  text-white  font-semibold text-sm gap-2"
        >
          Read More <MoveRight />
        </Link>
        </div>
        <div className="flex text-sm text-gray-600">
          <MessageCircle size={20} />
          Comment 8
        </div>
      </div>
    </section>
  );
}
