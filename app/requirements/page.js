export default function RequirementsPage() {
    return (
      <div className="container mx-auto px-6 pb-10 pt-20">
        {/* Title */}
        <h1 className="md:text-5xl text-3xl font-bold text-center mb-6">Membership Requirements</h1>
  
        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-5">
          {/* Left: Accordion/List */}
          <div className="border p-6 rounded-lg shadow-sm">
            <ul className="space-y-4">
              <li>
                <button className="flex items-center text-left w-full text-lg font-semibold">
                  <span className="mr-2">+</span> Cursus at est venenatis in.
                </button>
              </li>
              <li className="text-gray-400 pl-6">
                — Posuere amet vel egestas malesuada vel odio neque.
              </li>
              <li>
                <button className="flex items-center text-left w-full text-lg font-semibold">
                  <span className="mr-2">+</span> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </button>
              </li>
              <li>
                <button className="flex items-center text-left w-full text-lg font-semibold">
                  <span className="mr-2">+</span> Quam nunc dolor varius.
                </button>
              </li>
            </ul>
          </div>
  
          {/* Right: Description */}
          <div className="border p-6 rounded-lg shadow-sm">
            <h2 className="text-2xl font-bold mb-4">Blandit nec feugiat vitae luctus.</h2>
            <p className="text-gray-600 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dictum arcu, dolor, molestie
              feugiat rutrum id urna quisque purus. Sit ut non urna auctor libero, dictumst ut
              adipiscing. Platea non convallis vel iaculis nec odio. Nulla habitant felis laoreet
              pharetra scelerisque placerat scelerisque interdum. Lacus habitasse neque, scelerisque
              aliquet. Nec, bibendum viverra vitae, molestie cum ut. Pharetra lectus volutpat arcu ut
              ultrices eu sit volutpat. Pretium egestas in massa cursus ornare. Amet, non gravida
              rutrum luctus.
            </p>
          </div>
        </div>
      </div>
    );
  }
  