import React, { useState } from 'react';

const PostProperty = () => {
  const [formData, setFormData] = useState({
    title: '',
    price: '',
    location: '',
    bedrooms: '',
    bathrooms: '',
    description: '',
  });

  const [images, setImages] = useState([]); // store uploaded image files

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleImageChange = (e) => {
    setImages([...e.target.files]); // accept multiple images
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      data.append(key, value);
    });

    // Append each selected image
    for (let i = 0; i < images.length; i++) {
      data.append('images', images[i]);
    }

    try {
      const response = await fetch('http://localhost:5000/api/properties', {
        method: 'POST',
        body: data,
      });

      if (!response.ok) throw new Error('Failed to post property');

      const result = await response.json();
      console.log('✅ Property saved:', result);
      alert('🎉 Property posted successfully!');

      // Reset form
      setFormData({
        title: '',
        price: '',
        location: '',
        bedrooms: '',
        bathrooms: '',
        description: '',
      });
      setImages([]);
    } catch (error) {
      console.error('❌ Error posting property:', error);
      alert('Failed to post property');
    }
  };

  return (
    <section className="px-6 py-12 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-purple-800 text-center">Post a Property</h2>

      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md space-y-4" encType="multipart/form-data">
        <input type="text" name="title" placeholder="Property Title" value={formData.title} onChange={handleChange} className="w-full border border-gray-300 p-3 rounded" required />

        <input type="number" name="price" placeholder="Price (₦)" value={formData.price} onChange={handleChange} className="w-full border border-gray-300 p-3 rounded" required />

        <input type="text" name="location" placeholder="Location" value={formData.location} onChange={handleChange} className="w-full border border-gray-300 p-3 rounded" required />

        <div className="flex gap-4">
          <input type="number" name="bedrooms" placeholder="Bedrooms" value={formData.bedrooms} onChange={handleChange} className="w-full border border-gray-300 p-3 rounded" required />
          <input type="number" name="bathrooms" placeholder="Bathrooms" value={formData.bathrooms} onChange={handleChange} className="w-full border border-gray-300 p-3 rounded" required />
        </div>

        <textarea name="description" placeholder="Description" value={formData.description} onChange={handleChange} rows={4} className="w-full border border-gray-300 p-3 rounded" />

        <input type="file" name="images" accept="image/*" multiple onChange={handleImageChange} className="w-full border border-gray-300 p-3 rounded" required />

        <button type="submit" className="w-full bg-purple-700 text-white py-3 rounded hover:bg-purple-800">Post Property</button>
      </form>
    </section>
  );
};

export default PostProperty;
