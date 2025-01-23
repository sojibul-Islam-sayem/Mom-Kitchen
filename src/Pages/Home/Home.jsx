import React from 'react';
import Banner from '../../Components/Banner/Banner';
import FoodCategorys from '../../Components/FoodCategorys/FoodCategorys';
import PopularMenus from '../../Components/PopularMenus/PopularMenus';
import Featured from '../../Components/Featured/Featured';
import Testimonials from '../../Components/Testimonials/Testimonials';
import { Helmet } from 'react-helmet-async';




const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Mom Kitchen | Home</title>
            </Helmet>
            <Banner></Banner>
            <FoodCategorys></FoodCategorys>
            <PopularMenus></PopularMenus>
            <Featured></Featured>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;