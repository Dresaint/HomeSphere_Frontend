import React, { useState, useEffect } from 'react';
import Header from '../components/Header'
import HeroSection from '../components/Hero';
import LatestListings from '../components/LatestListings';
import axios from 'axios';

const Home = () => {
  const [properties, setProperties] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  // Function to fetch from API
  const fetchProperties = async (location = '') => {
    try {
      const res = await axios.get(
        location
          ? `http://localhost:5000/api/properties?location=${location}`
          : 'http://localhost:5000/api/properties'
      );
      setProperties(res.data);
    } catch (error) {
      console.error('Failed to fetch properties:', error.message);
    }
  };

  // Fetch all properties on first load
  useEffect(() => {
    fetchProperties();
  }, []);

  // Handle search
  const handleSearch = () => {
    fetchProperties(searchTerm.trim());
  };

  return (
    <div>
      <Header />
      <HeroSection
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        onSearch={handleSearch}
      />
      <LatestListings properties={properties} />
    </div>
  );
};

export default Home;
