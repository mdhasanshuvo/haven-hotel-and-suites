import React from "react";
import { motion } from "framer-motion"; // Ensure you have framer-motion installed: npm install framer-motion

const Gallery = () => {
    const categories = [
        {
            title: "Hotel",
            images: [
                { url: "https://i.ibb.co.com/v4ZxB1T/a2000754-main.webp", caption: "Luxury Stay" },
                { url: "https://i.ibb.co.com/bKT7xrX/csm-ameron-koenigshof-bonn-zimmer-comfort-premium-frontal-bett-quer-3c841582b7.jpg", caption: "Premium Comfort" },
                { url: "https://i.ibb.co.com/YRHw3Y5/5b980440672e1645d97594a8.webp", caption: "Breathtaking Views" },
            ],
        },
        {
            title: "Rooms",
            images: [
                { url: "https://i.ibb.co.com/R07BDCk/Deluxe-Room-1.jpg", caption: "Deluxe Rooms" },
                { url: "https://i.ibb.co.com/jLGMhPy/images.jpg", caption: "Suite Experience" },
                { url: "https://i.ibb.co.com/Vq0XVQc/cozy-living-room-3d-rendered-interior-design-of-a-apartment-or-hotel-and-balcony-9839705.webp", caption: "Cozy Interiors" },
            ],
        },
        {
            title: "Amenities",
            images: [
                { url: "https://i.ibb.co.com/3NYdWZT/119949786.jpg", caption: "Spa & Wellness" },
                { url: "https://i.ibb.co.com/DkFSWjK/497e0e7ea8f38b403de337411909bb204b12aab3-940x440.jpg", caption: "Infinity Pool" },
                { url: "https://i.ibb.co.com/Wfj6CBJ/0-2.webp", caption: "Fine Dining" },
            ],
        },
        {
            title: "Events",
            images: [
                { url: "https://i.ibb.co.com/N7L41CG/f17c12c26f2d-74559633-4-K.jpg", caption: "Corporate Events" },
                { url: "https://i.ibb.co.com/SN8XBTx/London-hotel-wedding-venue-The-Kimpton-Fitzroy-ballroom.jpg", caption: "Weddings" },
                { url: "https://i.ibb.co.com/p3qWcpN/571602383.jpg", caption: "Celebrations" },
            ],
        },
    ];

    return (
        <div className="min-h-screen bg-base-300 py-10">
            <div className="max-w-6xl mx-auto px-4">
                <motion.h1
                    className="text-4xl sm:text-5xl font-bold text-center mb-12 text-primary"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    Explore Our Gallery
                </motion.h1>
                {categories.map((category, categoryIndex) => (
                    <motion.div
                        key={category.title}
                        className="mb-16"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: categoryIndex * 0.2 }}
                    >
                        <h2 className="text-3xl font-semibold text-gray-600 mb-6">{category.title}</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {category.images.map((image, index) => (
                                <motion.div
                                    key={index}
                                    className="relative group overflow-hidden rounded-lg shadow-lg"
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <img
                                        src={image.url}
                                        alt={`${category.title} Image ${index + 1}`}
                                        className="w-full h-60 object-cover"
                                    />
                                    <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                        <motion.span
                                            className="text-white text-lg font-medium px-3 py-1 rounded"
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.2 }}
                                        >
                                            {image.caption}
                                        </motion.span>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Gallery;
