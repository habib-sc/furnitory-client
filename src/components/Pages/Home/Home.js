import React from 'react';
import HeroSection from './HeroSection/HeroSection';
import Statistic from './Statistic/Statistic';
import WhoWeAre from './WhoWeAre/WhoWeAre';

const Home = () => {
    return (
        <div>
            <HeroSection></HeroSection>
            <WhoWeAre></WhoWeAre>
            <Statistic></Statistic>
        </div>
    );
};

export default Home;