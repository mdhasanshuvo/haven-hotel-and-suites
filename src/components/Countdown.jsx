import { useState, useEffect, useRef } from 'react';
import CountUp from 'react-countup';

const HotelStatsCounter = () => {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.3, 
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const stats = [
    { title: 'Rooms Available', endValue: 250, icon: '🛏️' },
    { title: 'Bookings Made', endValue: 5000, icon: '📅' },
    { title: 'Happy Guests', endValue: 4500, icon: '😊' },
    { title: 'Awards Won', endValue: 15, icon: '🏆' },
  ];

  return (
    <section
      ref={sectionRef}
      className="py-16 bg-gradient-to-r from-indigo-600 to-blue-500 text-white"
    >
      <div className="container mx-auto max-w-7xl px-6 text-center">
        <h2 className="text-4xl font-extrabold mb-8">Our Achievements at Haven Hotel & Suites</h2>
        <p className="text-lg md:text-xl mb-12">
          Haven Hotel & Suites has provided a memorable experience for our guests. Here’s a glimpse of what we've accomplished together.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-white text-indigo-600 rounded-lg shadow-lg p-8 transform hover:scale-105 transition-transform duration-300"
            >
              <div className="text-6xl">{stat.icon}</div>
              <div className="text-5xl font-bold mt-4">
                {inView && (
                  <CountUp start={0} end={stat.endValue} duration={2.5} separator="," />
                )}
              </div>
              <p className="text-lg font-medium mt-2">{stat.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HotelStatsCounter;
