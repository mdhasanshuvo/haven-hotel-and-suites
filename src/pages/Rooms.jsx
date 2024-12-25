import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Loading from './Loading';

const Rooms = () => {
  const [rooms, setRooms] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get('https://hotel-booking-server-two.vercel.app/rooms')
      .then((response) => setRooms(response.data))
      .catch((error) => console.error('Error fetching rooms:', error));
  }, []);

  const handleRoomClick = (roomId) => {
    navigate(`/rooms/${roomId}`); 
  };


  return (
    <div className="bg-gray-50 min-h-screen py-10 lg:py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
          Explore Our Rooms 🛌
        </h2>
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
