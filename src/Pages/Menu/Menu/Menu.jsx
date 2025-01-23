import React from 'react';
import { Helmet } from 'react-helmet-async';
import Cover from '../../../Components/SharedComponets/Cover/Cover';
import coverImg1 from '../../../assets/menu/banner3.jpg'
import dessertImg from '../../../assets/menu/dessert-bg.jpeg'
import pizzaImg from '../../../assets/menu/pizza-bg.jpg'
import saladImg from '../../../assets/menu/salad-bg.jpg'
import soupImg from '../../../assets/menu/soup-bg.jpg'

import useMenu from '../../../Hooks/useMenu';
import MenuCategory from '../MenuCategory/MenuCategory';
import SectionTitle from '../../../Components/SharedComponets/SectionTitle/SectionTitle';

const Menu = () => {
    const [menu] = useMenu();
    const deserts = menu.filter(item => item.category === 'dessert')
    const pizzas = menu.filter(item => item.category === 'pizza')
    const salads = menu.filter(item => item.category === 'salad')
    const soups = menu.filter(item => item.category === 'soup')
    const offers = menu.filter(item => item.category === 'offered')
    return (
        <div>
            <Helmet>
                <title>
                    Mom Kitchen | Menu
                </title>
            </Helmet>
            <Cover img={coverImg1} heading="OUR MENU" details="Would You like to try a dish?"></Cover>
            <SectionTitle subHeading="---Don't miss---" heading="TODAY'S OFFER" />
            <MenuCategory items={offers} />

            <MenuCategory
                items={deserts}
            title="Desserts"
            details="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            categoryImg ={dessertImg}
            />


            <MenuCategory
                items={pizzas}
            title="pizzas"
            details="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            categoryImg ={pizzaImg}
            />


            <MenuCategory
                items={salads}
            title="salads"
            details="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            categoryImg ={saladImg}
            />

            <MenuCategory
                items={soups}
            title="soups"
            details="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            categoryImg ={soupImg}
            />

        </div>
    );
};

export default Menu;