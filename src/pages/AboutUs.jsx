import React from 'react';
import { Helmet } from 'react-helmet';

const AboutUs = () => {
    return (
        <div className="bg-base-300">
            <Helmet>
                <title>About | Haven Hotel & Suites</title>
            </Helmet>
            <div className="max-w-screen-xl mx-auto px-6 sm:px-8 py-12">

                {/* Hero Section */}
                <section className="text-center mb-12 sm:mb-28">

                    <h1 className="text-5xl font-extrabold text-primary leading-tight mb-8">
                        Welcome to Haven Hotel and Suites
                    </h1>
                    <img
                        src="https://i.ibb.co.com/Jmr4tgW/hotel-exterior-night.jpg"
                        alt="Hotel Exterior"
                        className="w-full h-96 object-cover rounded-xl"
                    />
                </section>

                {/* Our Story Section */}
                <section className="bg-white rounded-lg shadow-lg p-8 mb-12 sm:mb-32">
                    <h2 className="text-3xl font-semibold text-gray-800 text-center mb-6">Our Story</h2>
                    <div className="flex flex-col md:flex-row items-center space-x-6">
                        <img
                            src="https://i.ibb.co.com/3svcCjS/3d6598f418272467bfe4d184adeb399d.jpg"
                            alt="Hotel Interior"
                            className="w-full md:w-1/2 h-64 object-cover rounded-lg shadow-lg"
                        />
                        <p className="text-lg text-gray-700 leading-relaxed text-center md:text-left mt-6 md:mt-0">
                            At Haven Hotel and Suites, we blend luxury with comfort to create the perfect environment for both business and leisure travelers.
                            Our hotel was founded with one mission in mind: to offer a truly unforgettable experience. Whether you’re here for a relaxing weekend,
                            an important business trip, or a romantic getaway, we offer exceptional service, world-class amenities, and personalized hospitality
                            to ensure your time with us is nothing short of extraordinary.
                        </p>
                    </div>
                </section>

                {/* Our Values Section */}
                <section className="mb-12 sm:mb-28">
                    <h2 className="text-3xl font-semibold text-primary text-center mb-8">
                        Our Values
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                        <div className="text-center bg-white p-8 rounded-lg shadow-lg transition duration-300 hover:shadow-2xl">
                            <div className="mb-4">
                                <i className="fas fa-bed text-4xl text-blue-500"></i>
                            </div>
                            <h3 className="text-2xl font-semibold text-gray-800 mb-2">Luxury Comfort</h3>
                            <p className="text-gray-600">Every detail is crafted for your comfort, ensuring a restful stay with top-tier facilities.</p>
                        </div>

                        <div className="text-center bg-white p-8 rounded-lg shadow-lg transition duration-300 hover:shadow-2xl">
                            <div className="mb-4">
                                <i className="fas fa-handshake text-4xl text-green-500"></i>
                            </div>
                            <h3 className="text-2xl font-semibold text-gray-800 mb-2">Exceptional Service</h3>
                            <p className="text-gray-600">Our dedicated staff is always at your service, committed to making your experience extraordinary.</p>
                        </div>

                        <div className="text-center bg-white p-8 rounded-lg shadow-lg transition duration-300 hover:shadow-2xl">
                            <div className="mb-4">
                                <i className="fas fa-cocktail text-4xl text-yellow-500"></i>
                            </div>
                            <h3 className="text-2xl font-semibold text-gray-800 mb-2">Unique Experiences</h3>
                            <p className="text-gray-600">Indulge in exquisite dining, personalized services, and experiences designed to delight.</p>
                        </div>
                    </div>
                </section>

                {/* Meet the Team Section */}
                <section className="text-center mb-12 sm:mb-28">
                    <h2 className="text-3xl font-semibold text-primary mb-8">
                        Meet Our Team
                    </h2>
                    <div className="flex flex-wrap justify-center gap-8">
                        {/* Team Member 1 */}
                        <div className="w-72 bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition">
                            <img
                                src="https://i.ibb.co.com/TvmpV0N/d38f440cb3654d71701e6335a35e932b.webp"
                                alt="Hotel Manager"
                                className="w-full h-64 object-cover"
                            />
                            <div className="p-6 text-center">
                                <h3 className="text-2xl font-semibold text-gray-800">John Doe</h3>
                                <p className="text-gray-600">Hotel Manager</p>
                            </div>
                        </div>

                        {/* Team Member 2 */}
                        <div className="w-72 bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition">
                            <img
                                src="https://i.ibb.co.com/SQfZF5Z/luxury-hotel-receptionist-869741-1113.jpg"
                                alt="Customer Service"
                                className="w-full h-64 object-cover"
                            />
                            <div className="p-6 text-center">
                                <h3 className="text-2xl font-semibold text-gray-800">Jane Smith</h3>
                                <p className="text-gray-600">Customer Service Lead</p>
                            </div>
                        </div>

                        {/* Team Member 3 */}
                        <div className="w-72 bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition">
                            <img
                                src="https://i.ibb.co.com/LrjqVy5/image-832x1024.png"
                                alt="Head Chef"
                                className="w-full h-64 object-cover"
                            />
                            <div className="p-6 text-center">
                                <h3 className="text-2xl font-semibold text-gray-800">Samuel Johnson</h3>
                                <p className="text-gray-600">Head Chef</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Contact Section */}
                <section className="bg-gray-100 py-12 text-center">
                    <h2 className="text-3xl font-semibold text-gray-800 mb-6">
                        Get In Touch
                    </h2>
                    <p className="text-lg text-gray-600 mb-6">
                        Whether you have a question about our services or are planning a stay, our team is here to assist you. Reach out today!
                    </p>
                    <a
                        href="mailto:contact@Havenhotel.com"
                        className="inline-block px-8 py-4 bg-blue-500 text-white text-lg font-semibold rounded-lg hover:bg-blue-600 transition"
                    >
                        Email Us
                    </a>
                </section>
            </div>
        </div>
    );
};

export default AboutUs;
