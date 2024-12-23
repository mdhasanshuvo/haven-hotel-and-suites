import React from 'react';
import SliderBanner from '../components/SliderBanner';
import FeaturedRooms from '../components/FeaturedRooms ';
import UserReviews from '../components/UserReviews';
import SpecialOffers from '../components/SpecialOffers ';
import HotelFacilities from '../components/HotelFacilities';
import Countdown from '../components/Countdown';
import HotelMap from '../components/Map';

const Home = () => {
    return (
        <div>
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