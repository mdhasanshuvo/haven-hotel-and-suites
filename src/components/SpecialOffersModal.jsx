import React from "react";
import Slider from "react-slick";

const SpecialOffersModal = ({ isVisible, onClose }) => {
    if (!isVisible) return null;

    const offers = [
        {
            title: "Summer Special: 25% Off!",
            description: "Book your stay for the summer and enjoy an exclusive 25% discount on all bookings. Offer valid till August 31st.",
            image: "https://i.ibb.co.com/0mV3RYh/summer-special-offer-banner-template-with-product-podium-under-parasol-and-palm-leafs-vector.jpg",
            terms: "Available for bookings of 3 nights or more. Subject to availability.",
            discount: "25% OFF",
        },
        {
            title: "Family Getaway Package",
            description: "Enjoy a fun-filled family package with discounts for kids and complimentary breakfast included.",
            image: "https://i.ibb.co.com/Gnsj5PY/20190701-EST-Website-Family-Package-Thumbnail-01.jpg",
            terms: "Valid for families of 3 or more. Available during weekends only.",
            discount: "20% OFF",
        },
        {
            title: "Weekend: 2 Nights for 1 Price",
            description: "Escape the stress with our weekend offer. Stay 2 nights for the price of 1 and make your weekend unforgettable!",
            image: "https://i.ibb.co.com/68jr5b0/images.jpg",
            terms: "Offer valid on selected weekends only. Limited availability.",
            discount: "50% OFF",
        },
    ];

    // Slick Slider settings
    const settings = {
        infinite: true,
        speed: 700,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: true, // Enable arrows for manual navigation
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white rounded-lg shadow-lg w-11/12 max-w-lg p-8 relative">
                {/* Close Button */}
                <button
                    className="absolute top-4 right-4 text-gray-500 hover:text-black text-2xl font-bold"
                    onClick={onClose}
                >
                    ×
                </button>
                <h2 className="text-2xl font-bold text-center text-primary mb-6">
                    Exclusive Offers Just for You!
                </h2>

                {/* Slider */}
                <Slider {...settings}>
                    {offers.map((offer, index) => (
                        <div key={index} className="text-center">
                            <img
                                src={offer.image}
                                alt={offer.title}
                                className="w-full h-48 object-cover rounded mb-4 shadow"
                            />
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">{offer.title}</h3>
                            <p className="text-gray-600 mb-3">{offer.description}</p>
                            <p className="text-sm text-gray-500 italic">{offer.terms}</p>
                            <div className="mt-4 h-10">
                                <span className="px-4 py-3 bg-primary text-white text-sm font-semibold rounded-full shadow">
                                    {offer.discount}
                                </span>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default SpecialOffersModal;
