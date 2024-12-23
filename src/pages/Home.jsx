import React from 'react';
import SliderBanner from '../components/SliderBanner';
import FeaturedRooms from '../components/FeaturedRooms ';
import UserReviews from '../components/UserReviews';
import SpecialOffers from '../components/SpecialOffers ';
import HotelFacilities from '../components/HotelFacilities';
import HotelStatsCounter from '../components/Countdown';

const Home = () => {
    return (
        <div>
            <SliderBanner></SliderBanner>
            <FeaturedRooms></FeaturedRooms>
            <HotelStatsCounter></HotelStatsCounter>
            <UserReviews></UserReviews>
            <SpecialOffers></SpecialOffers>
            <HotelFacilities></HotelFacilities>
        </div>
    );
};

export default Home;