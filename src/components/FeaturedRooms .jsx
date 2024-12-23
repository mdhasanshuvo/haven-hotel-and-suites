import React from 'react';
import { Link } from 'react-router-dom';

const rooms = [
  { img: 'room1.jpg', title: 'Deluxe Room', description: 'A spacious room with a beautiful view.', link: '/room1' },
  { img: 'room2.jpg', title: 'Suite Room', description: 'Luxurious suite for a perfect stay.', link: '/room2' },
  { img: 'room3.jpg', title: 'Family Room', description: 'Perfect for family stays, with lots of space.', link: '/room3' },
  { img: 'room4.jpg', title: 'Executive Room', description: 'Ideal for business travelers.', link: '/room4' },
  { img: 'room5.jpg', title: 'Standard Room', description: 'Comfortable and affordable stay.', link: '/room5' },
  { img: 'room6.jpg', title: 'Presidential Suite', description: 'Exclusive suite for luxury living.', link: '/room6' },
];

const FeaturedRooms = () => {
  return (
    <div className="my-16 px-4 text-center">
      <h2 className="text-3xl font-bold">Featured Rooms</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {rooms.map((room, index) => (
          <div key={index} className="rounded-lg overflow-hidden shadow-lg">
            <img src={room.img} alt={room.title} className="w-full h-60 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold">{room.title}</h3>
              <p className="text-gray-600">{room.description}</p>
              <Link to={room.link} className="mt-4 inline-block bg-blue-500 text-white py-2 px-4 rounded-full">
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
