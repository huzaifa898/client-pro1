import React from 'react';

const FeaturesSection = () => {
  return (
    <section className="bg-black text-white py-16">
      <div className="container mx-auto flex flex-col items-center justify-center">
        {/* Heading */}
        <div className="mb-12 text-center">
          <h1 className="text-lime-400 text-5xl font-bold leading-tight mb-8">
            We Prioritise Features, <br />
            Map Design Options And <br />
            Test Ideas.
          </h1>
        </div>

        {/* Image and Features */}
        <div className="flex flex-col lg:flex-row items-center justify-center space-y-12 lg:space-y-0 lg:space-x-12">
          {/* Image */}
          <div className="lg:w-1/3 flex justify-center lg:justify-end">
            <div className="relative">
              <img
                src="https://img.freepik.com/free-photo/portrait-young-handsome-man-jacket-holding-laptop_171337-19839.jpg?t=st=1724310471~exp=1724314071~hmac=cc55895ebdba72091e6f08761d2b7e6d4a3ec620d2feed35dc05344da83ec7a1&w=740"
                alt="Team"
                className="w-80 h-80 object-cover rounded-full border-4 border-lime-400"
              />
            </div>
          </div>

          {/* Features List */}
          <div className="lg:w-2/3 flex justify-center">
            <div className="grid grid-cols-2 gap-8">
              <div>
                <p className="underline mb-2">Concept Design</p>
                <p className="underline mb-2">Product Bootcamp</p>
                <p className="underline mb-2">Value Matrix</p>
                <p className="underline mb-2">Idea Sketching</p>
                <p className="underline mb-2">Experience Maps</p>
                <p className="underline mb-2">UX Design</p>
                <p className="underline mb-2">Pitch Presentation</p>
              </div>
              <div>
                <p className="underline mb-2">User Personas</p>
                <p className="underline mb-2">Wireframes</p>
                <p className="underline mb-2">Concept Design</p>
                <p className="underline mb-2">High-Fidelity Prototypes</p>
                <p className="underline mb-2">Interactive Prototypes</p>
                <p className="underline mb-2">Use Cases</p>
                <p className="underline mb-2">Wireflows</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
