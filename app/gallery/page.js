import fs from "fs";
import path from "path";
import Image from "next/image";

export default function GalleryPage() {
  const galleryFolder = path.join(process.cwd(), "public/_images/gallery");

  const files = fs.readdirSync(galleryFolder);

  const images = files.filter((file) => file.match(/\.(jpg|jpeg|png)$/i));

  return (
    <div className="container mx-auto px-6 pb-10 pt-20">
      {/* Title */}
      <h1 className="md:text-5xl text-3xl font-bold text-center mb-4">Gallery</h1>
      <p className="text-center text-gray-500 mb-10">
        Explore our latest photos from the gallery.
      </p>

      {/* Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {images.map((filename, index) => (
          <div
            key={index}
            className="bg-gray-200 flex items-center justify-center rounded-lg shadow-md aspect-square"
          >
            <Image
              src={`/_images/gallery/${filename}`}
              alt={filename}
              width={500}
              height={500}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
