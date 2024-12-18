export default function OfficersPage() {
    const officers = [
      {
        name: "Andrei Masharin",
        position: "CEO",
        description:
          "There are many reasons to get down and start to get depressed about your situation.",
      },
      {
        name: "Stina Gunnarsdottir",
        position: "CO-FOUNDER",
        description:
          "If what you’re doing isn’t working or increasing your wellness, do something else.",
      },
      {
        name: "Dai Jiang",
        position: "CHEF",
        description:
          "There are many reasons to get down and start to get depressed about your situation.",
      },
      {
        name: "Andrei Masharin",
        position: "CEO",
        description:
          "There are many reasons to get down and start to get depressed about your situation.",
      },
      {
        name: "Stina Gunnarsdottir",
        position: "CO-FOUNDER",
        description:
          "If what you’re doing isn’t working or increasing your wellness, do something else.",
      },
      {
        name: "Dai Jiang",
        position: "CHEF",
        description:
          "There are many reasons to get down and start to get depressed about your situation.",
      },
    ];
  
    return (
      <div className="container mx-auto px-4 pb-10 pt-20">
        {/* Title */}
        <h1 className="md:text-5xl text-3xl font-bold text-center mb-4">Officers</h1>
        <p className="text-center text-gray-500 mb-10">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vulputate fames ut.
        </p>
  
        {/* Officers Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {officers.map((officer, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-6 rounded-lg shadow-lg">
              {/* Placeholder Avatar */}
              <div className="w-64 h-64 bg-gray-300 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-12 h-12 text-gray-500"
                  fill="currentColor"
                  viewBox="0 0 24 24">
                  <path
                    d="M12 12c2.761 0 5-2.239 5-5s-2.239-5-5-5-5 2.239-5 5 2.239 5 5 5zm0 2c-3.871 0-7 3.129-7 7h14c0-3.871-3.129-7-7-7z"
                  ></path>
                </svg>
              </div>
              {/* Officer Details */}
              <h3 className="text-xl font-semibold">{officer.name}</h3>
              <p className="text-gray-500 uppercase text-sm mb-2">{officer.position}</p>
              <p className="text-gray-600 text-sm">{officer.description}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
  