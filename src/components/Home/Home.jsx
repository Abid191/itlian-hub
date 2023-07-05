/* eslint-disable no-unused-vars */
import React from 'react';
import Banner from './Banner';
import Chef from './Chef';
import AboutUs from './AboutUs';
import DiscoverTaste from './DiscoverTaste';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Chef/>
            <AboutUs/>
            <DiscoverTaste/>
        </div>
    );
};

export default Home;