import axios from 'axios';
import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

const UserReviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    axios.get('https://hotel-booking-server-two.vercel.app/review')
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
                <span className="flex text-yellow-500">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      fill={i < item?.review?.rating ? 'currentColor' : 'none'}
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="w-3 h-3 mr-1"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12 17.5l-6.16 3.24 1.67-7.18L1 7.76l7.19-.61L12 0l3.81 6.15 7.19.61-5.51 5.8 1.67 7.18L12 17.5z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ))}
                </span>
                <p className="text-xl text-gray-600 italic mb-3">"{item?.review?.comment}"</p>
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
