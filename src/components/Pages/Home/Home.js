import React from 'react';
import HeroSection from './HeroSection/HeroSection';
import Items from './Items/Items';
import Statistic from './Statistic/Statistic';
import WhoWeAre from './WhoWeAre/WhoWeAre';

const Home = () => {
    return (
        <div>
            <HeroSection></HeroSection>
            <Items></Items>
            <WhoWeAre></WhoWeAre>
            <Statistic></Statistic>
        </div>
    );
};

export default Home;