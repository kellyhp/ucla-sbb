const CardList = () => {
    const cards = Array.from({ length: 4 });
  
    return (
      <div className="container mx-auto px-6 py-12">
        <h2 className="md:text-4xl text-2xl font-bold mb-6">What We Do</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cards.map((_, index) => (
            <div
              key={index}
              className="bg-gray-100 p-6 rounded-lg flex items-center gap-4">
              <div className="bg-gray-300 w-2 h-24 rounded-lg"></div>
              <div>
                <h3 className="font-semibold">Programs</h3>
                <p className="text-gray-600 text-sm mt-2">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.
                </p>
                <button className="mt-4 border border-gray-400 px-4 py-1 rounded-full">
                  Do something
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default CardList;
  