import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import familyRoom from '../assets/familyRoom.jpg';
import deluxeRoom from '../assets/deluxeRoom.jpg';
import suiteRoom from '../assets/suiteRoom.jpg';
import { Link } from 'react-router-dom';

const Banner = () => {
  const settings = {
    dots: true, 
    infinite: true, 
    speed: 500, 
    slidesToShow: 1, 
    slidesToScroll: 1, 
    autoplay: true, 
    autoplaySpeed: 3000, 
    arrows: false, 
  };

  const slides = [
    {
      title: 'Luxury Family Rooms',
      subtext: 'Stay in our spacious family rooms with breathtaking views and modern amenities.',
      img: familyRoom,
    },
    {
      title: 'Deluxe Rooms',
      subtext: 'Experience the comfort and luxury of our deluxe rooms, perfect for a relaxing stay.',
      img: deluxeRoom,
    },
    {
      title: 'Exclusive Suites',
      subtext: 'Indulge in luxury with our exclusive suites, offering premium services and breathtaking views.',
      img: suiteRoom,
    },
  ];

  return (
    <div className="relative w-full">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="relative">
            <img
              src={slide.img}
              alt={slide.title}
              className="w-full h-[70vh] object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center p-8 text-center space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg">{slide.title}</h1>
              <p className="text-lg md:text-xl text-white drop-shadow-md">{slide.subtext}</p>
              <Link to='/rooms' className="bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-6 rounded-full font-semibold text-lg transition duration-300">
                Explore Rooms
              </Link>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Banner;
