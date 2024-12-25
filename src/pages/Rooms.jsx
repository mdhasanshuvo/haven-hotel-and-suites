import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Rooms = () => {
  const [rooms, setRooms] = useState([]);
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch rooms with price filter if available
    const fetchRooms = () => {
      axios
        .get('https://hotel-booking-server-two.vercel.app/rooms', {
          params: {
            minPrice,  
            maxPrice,  
          },
        })
        .then((response) => setRooms(response.data)) // Set the response data
        .catch((error) => console.error('Error fetching rooms:', error));
    };

    fetchRooms(); 
  }, [minPrice, maxPrice]);

  const handleRoomClick = (roomId) => {
    navigate(`/rooms/${roomId}`);
  };

  return (
    <div className="bg-gray-50 min-h-screen py-10 lg:py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
          Explore Our Rooms 🛌
        </h2>

        {/* Price Filter Section */}
        <div className="mb-8 flex justify-center space-x-6">
          <div>
            <label className="text-lg font-medium text-gray-700">Min Price</label>
            <input
              type="number"
              value={minPrice}
              onChange={(e) => setMinPrice(e.target.value)} 
              className="input input-bordered w-full max-w-xs"
              placeholder="Min Price"
            />
          </div>

          <div>
            <label className="text-lg font-medium text-gray-700">Max Price</label>
            <input
              type="number"
              value={maxPrice}
              onChange={(e) => setMaxPrice(e.target.value)}
              className="input input-bordered w-full max-w-xs"
              placeholder="Max Price"
            />
          </div>

          <button
            onClick={() => { setMinPrice(''); setMaxPrice(''); }} // Reset filter
            className="btn btn-primary mt-6"
          >
            Reset Filter
          </button>
        </div>

        {/* Rooms List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {rooms.map((room) => (
            <div
              key={room._id}
              className="bg-white shadow-lg rounded-lg overflow-hidden cursor-pointer transform transition-transform hover:scale-105"
              onClick={() => handleRoomClick(room._id)}
            >
              <img
                src={room.images}
                alt={room.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800">
                  {room.name}
                </h3>
                <p className="text-gray-600 mt-2 line-clamp-2">
                  {room.description}
                </p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-blue-600 font-bold">
                    ${room.price}/night
                  </span>
                  <span className="text-gray-500 text-sm">
                    {room.totalReviews} reviews
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Rooms;
