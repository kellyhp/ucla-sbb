const Contact = () => {
  return (
    <div className="container mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      {/* Image Section */}
      <div className="order-1 md:order-2 bg-gray-100 rounded-lg h-72 flex items-center justify-center">
        <img
          src="https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM="
          alt="Map placeholder"
          className="rounded-lg w-full h-full object-cover"
        />
      </div>

      {/* Form Section */}
      <div className="order-2 md:order-1">
        <h2 className="text-xl font-bold mb-4">Contact us</h2>
        <p className="text-gray-500 mb-6">
          Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.
        </p>
        <form className="flex flex-col space-y-4">
          <input
            type="text"
            placeholder="Your name"
            className="border border-gray-300 bg-transparent p-2 rounded"
          />
          <input
            type="email"
            placeholder="Email"
            className="border border-gray-300 bg-transparent p-2 rounded"
          />
          <textarea
            placeholder="Description (optional)"
            className="border border-gray-300 bg-transparent p-2 rounded"
          ></textarea>
          <button
            type="submit"
            className="bg-black text-white px-4 py-2 rounded-full max-w-[160px]">
            Send Request
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
