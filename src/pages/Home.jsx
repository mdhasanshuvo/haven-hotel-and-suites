import React from 'react';
import SliderBanner from '../components/SliderBanner';
import FeaturedRooms from '../components/FeaturedRooms ';
import UserReviews from '../components/UserReviews';
import SpecialOffers from '../components/SpecialOffers ';
import HotelFacilities from '../components/HotelFacilities';

const Home = () => {
    return (
        <div>
            <SliderBanner></SliderBanner>
            <FeaturedRooms></FeaturedRooms>
            <UserReviews></UserReviews>
            <SpecialOffers></SpecialOffers>
            <HotelFacilities></HotelFacilities>
        </div>
    );
};

export default Home;