import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const PropertyCard = ({ images, price, title, location, bedrooms, bathrooms, description }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition w-full sm:w-[300px]">
      <div className="h-48 w-full">
        <Slider {...settings}>
          {images.map((img, index) => (
            <div key={index}>
              <img
                src={`http://localhost:5000/uploads/${img}`}
                alt={`${title}-${index}`}
                className="h-48 w-full object-cover"
              />
            </div>
          ))}
        </Slider>
      </div>

      <div className="p-4">
        <h2 className="text-xl font-semibold text-purple-800 mb-1">{title}</h2>
        <p className="text-gray-600 mb-1">{location}</p>

        <p className="text-gray-500 text-sm mb-2 line-clamp-2">{description}</p>

        <div className="flex justify-between text-sm text-gray-500 mb-3">
          <span>{bedrooms} Beds</span>
          <span>{bathrooms} Baths</span>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-lg font-bold text-green-700">₦{price.toLocaleString()}</span>
          <button className="bg-purple-700 text-white px-4 py-1 rounded hover:bg-purple-800 text-sm">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
