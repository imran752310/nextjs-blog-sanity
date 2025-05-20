import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative  h-[85vh] flex items-center justify-center bg-black text-white overflow-hidden mb-5">
      {/* Background Image */}
      <Image
        src="/images/hero2.webp" // Replace with your image path
        alt="Hero background"
        fill
        className="object-cover brightness-50"
        priority
      />

      {/* Overlay Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl">
        <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-4">
          Explore the Future with{" "}
          <span className="text-teal-400">AI & Tech Insights</span>
        </h1>
        <p className="text-lg sm:text-xl text-gray-200 mb-6">
          Dive into expert-written articles on artificial intelligence, emerging
          technologies, and innovations shaping our world.
        </p>

        <Link
          href="/blogs"
          className="inline-block bg-teal-500 hover:bg-teal-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300"
        >
          Read Latest Articles
        </Link>
      </div>
    </section>
  );
}
