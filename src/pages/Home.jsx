import React, { useState, useEffect } from 'react';
import SliderBanner from '../components/SliderBanner';
import FeaturedRooms from '../components/FeaturedRooms ';
import UserReviews from '../components/UserReviews';
import SpecialOffers from '../components/SpecialOffers ';
import HotelFacilities from '../components/HotelFacilities';
import Countdown from '../components/Countdown';
import HotelMap from '../components/Map';
import SpecialOffersModal from '../components/SpecialOffersModal';

const Home = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);

    useEffect(() => {
        // Show modal after a small delay on page load
        const timer = setTimeout(() => {
            setIsModalVisible(true);
        }, 1000); // 1 second delay
        return () => clearTimeout(timer);
    }, []);

    return (
        <div>
            <SpecialOffersModal
                isVisible={isModalVisible}
                onClose={() => setIsModalVisible(false)}
            />
            <SliderBanner></SliderBanner>
            <FeaturedRooms></FeaturedRooms>
            <Countdown></Countdown>
            <UserReviews></UserReviews>
            <SpecialOffers></SpecialOffers>
            <HotelFacilities></HotelFacilities>
            <HotelMap></HotelMap>
        </div>
    );
};

export default Home;