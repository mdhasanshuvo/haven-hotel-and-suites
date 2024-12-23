import { useState, useEffect, useRef } from 'react';

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState({});
  const sectionRef = useRef(null);

  useEffect(() => {
    const targetDate = new Date("2025-01-12T00:00:00Z"); // Replace with your target date
    const interval = setInterval(() => {
      const now = new Date();
      const timeDiff = targetDate - now;

      if (timeDiff <= 0) {
        clearInterval(interval);
      } else {
        const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);
        setTimeLeft({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-16 bg-gradient-to-r from-indigo-600 to-blue-500 text-white"
    >
      <div className="container mx-auto max-w-7xl px-4 text-center">
        <h2 className="text-4xl font-extrabold mb-8">Countdown to the Big Day</h2>
        <p className="text-lg md:text-xl mb-12">
          Our special event is just around the corner! Don’t miss out.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div className="flex flex-col items-center bg-white text-indigo-600 rounded-lg shadow-lg p-6 transform hover:scale-105 transition-transform duration-300">
            <div className="text-5xl">📅</div>
            <div className="text-4xl font-bold mt-4">{timeLeft.days ?? '00'}</div>
            <p className="text-lg font-medium mt-2">Days</p>
          </div>
          <div className="flex flex-col items-center bg-white text-indigo-600 rounded-lg shadow-lg p-6 transform hover:scale-105 transition-transform duration-300">
            <div className="text-5xl">⏰</div>
            <div className="text-4xl font-bold mt-4">{timeLeft.hours ?? '00'}</div>
            <p className="text-lg font-medium mt-2">Hours</p>
          </div>
          <div className="flex flex-col items-center bg-white text-indigo-600 rounded-lg shadow-lg p-6 transform hover:scale-105 transition-transform duration-300">
            <div className="text-5xl">⏳</div>
            <div className="text-4xl font-bold mt-4">{timeLeft.minutes ?? '00'}</div>
            <p className="text-lg font-medium mt-2">Minutes</p>
          </div>
          <div className="flex flex-col items-center bg-white text-indigo-600 rounded-lg shadow-lg p-6 transform hover:scale-105 transition-transform duration-300">
            <div className="text-5xl">🔔</div>
            <div className="text-4xl font-bold mt-4">{timeLeft.seconds ?? '00'}</div>
            <p className="text-lg font-medium mt-2">Seconds</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Countdown;