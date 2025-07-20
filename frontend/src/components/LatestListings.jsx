// src/components/LatestListings.jsx
import React from 'react';
import PropertyCard from './PropertyCard';

const LatestListings = ({ properties }) => {
  return (
    <section className="px-6 py-12 bg-gray-100">
      <h2 className="text-2xl font-bold mb-6 text-center text-purple-800">
        Latest Listings
      </h2>

      {properties.length === 0 ? (
        <p className="text-center text-gray-500">No listings match your search.</p>
      ) : (
        <div className="flex flex-wrap gap-6 justify-center">
          {properties.map((property) => (
            <PropertyCard key={property._id} {...property} />
          ))}
        </div>
      )}
    </section>
  );
};

export default LatestListings;
