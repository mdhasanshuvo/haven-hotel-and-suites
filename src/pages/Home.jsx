import React from 'react';
import SliderBanner from '../components/SliderBanner';
import FeaturedRooms from '../components/FeaturedRooms ';
import UserReviews from '../components/UserReviews';
import SpecialOffers from '../components/SpecialOffers ';

const Home = () => {
    return (
        <div>
            <SliderBanner></SliderBanner>
            <FeaturedRooms></FeaturedRooms>
            <UserReviews></UserReviews>
            <SpecialOffers></SpecialOffers>
        </div>
    );
};

export default Home;