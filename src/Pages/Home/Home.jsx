import React from 'react';
import Banner from '../../Components/Banner/Banner';
import FoodCategorys from '../../Components/FoodCategorys/FoodCategorys';
import PopularMenus from '../../Components/PopularMenus/PopularMenus';
import Featured from '../../Components/Featured/Featured';




const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <FoodCategorys></FoodCategorys>
           <PopularMenus></PopularMenus>
           <Featured></Featured>
        </div>
    );
};

export default Home;