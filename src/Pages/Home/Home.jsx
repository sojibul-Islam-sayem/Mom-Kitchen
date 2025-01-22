import React from 'react';
import Banner from '../../Components/Banner/Banner';
import FoodCategorys from '../../Components/FoodCategorys/FoodCategorys';
import PopularMenus from '../../Components/PopularMenus/PopularMenus';




const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <FoodCategorys></FoodCategorys>
           <PopularMenus></PopularMenus>
        </div>
    );
};

export default Home;