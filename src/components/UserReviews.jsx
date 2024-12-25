import axios from 'axios';
import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

const UserReviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/review')
      .then(response => {
        setReviews(response.data); // Ensure the data is sorted as per the backend
      })
      .catch(error => {
        console.error('Error fetching Review data:', error);
      });
  }, []);

  return (
    <section className="bg-gray-50 py-16 lg:py-32">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-8">What Our Guests Say</h2>
        <p className="text-lg text-gray-600 mb-12">
          Our guests share their unforgettable experiences at our hotel. Read their stories and get inspired!
        </p>

        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {reviews.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white p-8 rounded-3xl shadow-xl transition-transform transform hover:scale-105 flex flex-col items-center">
                <div className="flex justify-center mb-6">
                  <img
                    className="w-24 h-24 rounded-full object-cover border-4 border-accent"
                    src={item?.review?.userPhoto || 'https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png'}
                    alt={item?.review?.username}
                  />
                </div>
                <p className="text-xl text-gray-600 italic mb-4">"{item?.review?.comment}"</p>
                <h3 className="text-xl font-semibold text-gray-800">{item?.review?.username}</h3>
                <p className="text-sm text-gray-500">"Bangladesh"</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="text-right mt-8">
          <p className="text-sm text-gray-500 font-medium italic">Swipe to see more reviews ➡️</p>
        </div>
      </div>
    </section>
  );
};

export default UserReviews;
