import React from 'react';

const HeroSection = ({ searchTerm, setSearchTerm, onSearch }) => {
  return (
    <section className="bg-purple-700 text-white py-20 px-6 mt-5">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          Find Your Dream Apartment in Lagos
        </h1>
        <p className="text-lg md:text-xl mb-8">
          Explore verified listings from trusted landlords and agents.
        </p>

        <div className="bg-white p-4 rounded-lg shadow-lg max-w-2xl mx-auto flex flex-col sm:flex-row items-center gap-4">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search by location e.g. Yaba"
            className="flex-1 p-3 rounded-md border border-gray-300 w-full text-black"
          />
          <button
            onClick={onSearch}
            className="bg-purple-700 text-white px-6 py-3 rounded-md hover:bg-purple-800 w-full sm:w-auto"
          >
            Search
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
