import Image from "next/image";

const images = [
  "/images/image1.jpg",
  "/images/image2.jpg",
  "/images/image3.jpg",
  "/images/image4.jpg",
  "/images/image5.jpg",
  "/images/image6.jpg",
  "/images/image7.jpg",
  "/images/image8.jpg",
];

export default function Gallery() {
  return (
    <>
      <div>
        <h1 className="text-2xl font-bold uppercase my-20 text-center text-dark dark:text-light sm:text-3xl lg:text-5xl  ">
          Our <span className="text-teal-600">Gallery</span>
        </h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-4 p-4">
        {images.map((src, index) => (
          <div
            key={index}
            className="relative w-full h-64 rounded overflow-hidden shadow"
          >
            <Image
              src={src}
              alt={`Gallery image ${index + 1}`}
              layout="fill"
              objectFit="cover"
              className="rounded hover:scale-105 transition-transform ease-out duration-500"
            />
          </div>
        ))}
      </div>
    </>
  );
}
