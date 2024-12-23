const HotelFacilities = () => {
    const facilities = [
        {
            name: 'Free Wi-Fi',
            icon: 'https://media.istockphoto.com/id/491920436/photo/free-wifi-sign.jpg?s=612x612&w=0&k=20&c=WeeQWnJuBJ9ngvhrp3c_bay4HpgIJyvynBnz-YH1z_0=',
            description: 'Stay connected with our high-speed Wi-Fi throughout the hotel.',
        },
        {
            name: 'Swimming Pool',
            icon: 'https://c8.alamy.com/comp/2C162JW/swimming-logo-with-text-space-for-your-slogan-tag-line-vector-illustration-2C162JW.jpg',
            description: 'Relax and unwind at our outdoor pool with stunning views.',
        },
        {
            name: 'Spa & Wellness',
            icon: 'https://st4.depositphotos.com/14431644/21221/i/450/depositphotos_212217520-stock-illustration-handwriting-text-spa-wellness-concept.jpg',
            description: 'Enjoy a full range of spa services to rejuvenate your body and mind.',
        },
        {
            name: 'Fitness Center',
            icon: 'https://c8.alamy.com/comp/K9BB6J/fitness-club-logo-with-exercising-athletic-man-and-woman-isolated-K9BB6J.jpg',
            description: 'Keep fit during your stay with our state-of-the-art gym facilities.',
        },
    ];

    return (
        <section className="py-16 lg:py-32">
            <div className="container mx-auto text-center px-4">
                <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-8">Hotel Facilities</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {facilities.map((facility, index) => (
                        <div
                            key={index}
                            className="bg-white p-6 rounded-lg shadow-lg transition-transform hover:scale-105 flex flex-col items-center"
                        >
                            <img
                                src={facility.icon}
                                alt={facility.name}
                                className="w-32 h-24 mb-4"
                            />
                            <h3 className="text-xl font-semibold text-gray-800 mb-4">{facility.name}</h3>
                            <p className="text-lg text-gray-600">{facility.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HotelFacilities;
