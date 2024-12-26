const SpecialOffers = () => {
    const offers = [
        {
            title: 'Summer Special: 25% Off!',
            description: 'Book your stay for the summer and save 25%. Limited time offer!',
            image: 'https://i.ibb.co.com/0mV3RYh/summer-special-offer-banner-template-with-product-podium-under-parasol-and-palm-leafs-vector.jpg',
        },
        {
            title: 'Family Getaway Package',
            description: 'A fun-filled family package with discounts for kids. The perfect family vacation!',
            image: 'https://i.ibb.co.com/Gnsj5PY/20190701-EST-Website-Family-Package-Thumbnail-01.jpg',
        },
        {
            title: 'Weekend: 2 Nights for 1 Price',
            description: 'Enjoy a relaxing weekend escape with our exclusive weekend offer.',
            image: 'https://i.ibb.co.com/68jr5b0/images.jpg',
        },
    ];

    return (
        <section className="bg-accent py-16 lg:py-32">
            <div className="container mx-auto text-center px-4">
                <h2 className="text-3xl lg:text-4xl font-bold text-white mb-8">Special Offers</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {offers.map((offer, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-transform"
                        >
                            <img
                                src={offer.image}
                                alt={offer.title}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-6">
                                <h3 className="text-2xl font-semibold text-gray-800 mb-4">{offer.title}</h3>
                                <p className="text-lg text-gray-600 mb-4">{offer.description}</p>
                                <button className="px-6 py-2 bg-primary text-white rounded-full hover:bg-accent-dark transition-colors">
                                    Book Now
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SpecialOffers;
