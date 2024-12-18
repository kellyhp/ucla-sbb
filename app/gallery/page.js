export default function GalleryPage() {
    // Array of placeholder images
    const images = Array.from({ length: 12 }, (_, i) =>
      "https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM="
    );
  
    return (
      <div className="container mx-auto px-6 pb-10 pt-20">
        {/* Title */}
        <h1 className="md:text-5xl text-3xl font-bold text-center mb-4">Gallery</h1>
        <p className="text-center text-gray-500 mb-10">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bibendum ornare quam amet proin pulvinar.
        </p>
  
        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((src, index) => (
            <div
              key={index}
              className="bg-gray-200 flex items-center justify-center rounded-lg shadow-md aspect-square">
              <img
                src={src}
                alt={`Gallery item ${index + 1}`}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          ))}
        </div>
      </div>
    );
  }
  