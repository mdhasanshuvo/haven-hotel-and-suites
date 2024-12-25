import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const FeaturedRooms = () => {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/featured-rooms')
      .then((response) => {
        setRooms(response.data);
      })
      .catch((error) => {
        console.error('Error fetching rooms:', error);
      });
  }, []);

  return (
    <div className="my-16 lg:my-32 px-4 text-center container mx-auto">
      <h2 className="text-3xl font-bold">Featured Rooms</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {rooms.map((room) => (
          <div key={room._id} className="rounded-lg overflow-hidden shadow-lg">
            <img
              src={room.images[0]}
              alt={room.name}
              className="w-full h-60 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold">{room.name}</h3>
              <p className="text-gray-600">{room.description}</p>
              <p className="text-gray-500">Price: ${room.price}</p>
              <Link
                to={`/rooms/${room._id}`}
                className="mt-4 inline-block bg-blue-500 text-white py-2 px-4 rounded-full"
              >
                Book Now
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedRooms;
