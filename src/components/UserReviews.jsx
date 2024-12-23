import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

const UserReviews = () => {
  const reviews = [
    {
      name: 'Ali Ibrahim',
      country: 'Egypt',
      feedback: 'This hotel exceeded all my expectations. The room was spotless, and the view was breathtaking!',
      image: 'https://plus.unsplash.com/premium_photo-1689530775582-83b8abdb5020?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwcGVyc29ufGVufDB8fDB8fHww',
    },
    {
      name: 'Sara Al-Mansoori',
      country: 'UAE',
      feedback: 'The facilities were top-notch, and I truly enjoyed my stay here. A perfect getaway spot for families.',
      image: 'https://media.istockphoto.com/id/1466995518/photo/business-woman-and-worker-portrait-at-office-desk-as-administration-executive-company-manager.jpg?s=612x612&w=0&k=20&c=NvKeG6Fh0_VVfH_N0Ka-5j8284XJhL2VTJfe6IwDkWQ=',
    },
    {
      name: 'Mohammed Khan',
      country: 'Pakistan',
      feedback: 'The location is unbeatable, and the amenities were just perfect for a relaxing stay. Highly recommend!',
      image: 'https://i.redd.it/6u8idpt040m51.jpg',
    },
    {
      name: 'Aisha Noor',
      country: 'Saudi Arabia',
      feedback: 'From the moment I arrived, I felt at home. The service was impeccable, and the hotel was so peaceful.',
      image: 'https://t4.ftcdn.net/jpg/06/25/09/07/360_F_625090798_8gkjy4oGeEYM7gqHNDXoObtwMKx3Ry42.jpg',
    },
  ];

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
          {reviews.map((review, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white p-8 rounded-3xl shadow-xl transition-transform transform hover:scale-105 flex flex-col items-center">
                <div className="flex justify-center mb-6">
                  <img
                    className="w-24 h-24 rounded-full object-cover border-4 border-accent"
                    src={review.image}
                    alt={review.name}
                  />
                </div>
                <p className="text-xl text-gray-600 italic mb-4">"{review.feedback}"</p>
                <h3 className="text-xl font-semibold text-gray-800">{review.name}</h3>
                <p className="text-sm text-gray-500">{review.country}</p>
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
