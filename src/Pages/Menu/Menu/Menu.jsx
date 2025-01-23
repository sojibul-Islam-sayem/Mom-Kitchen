import React from 'react';
import { Helmet } from 'react-helmet-async';
import Cover from '../../../Components/SharedComponets/Cover/Cover';
import coverImg1 from '../../../assets/menu/banner3.jpg'
import PopularMenus from '../../../Components/PopularMenus/PopularMenus';

const Menu = () => {
    return (
        <div>
            <Helmet>
                <title>
                    Mom Kitchen | Menu
                </title>
            </Helmet>
            <Cover img={coverImg1} heading="OUR MENU" details="Would You like to try a dish?"></Cover>
            <PopularMenus></PopularMenus>
        </div>
    );
};

export default Menu;