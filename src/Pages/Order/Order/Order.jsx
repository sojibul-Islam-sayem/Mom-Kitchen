import { useState } from "react";
import orderCover from "../../../assets/shop/banner2.jpg"
import Cover from '../../../Components/SharedComponets/Cover/Cover';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import FoodCard from "../../../Components/SharedComponets/FoodCard/FoodCard";
import useMenu from "../../../Hooks/useMenu";
import OrderFood from "../OrderFood/OrderFood";
import { useParams } from "react-router-dom";

const Order = () => {
const categories = ['salad', 'pizza', 'soup', 'dessert', 'drinks'];
const {category} = useParams();
const initialIndex = categories.indexOf(category);
    const [tabIndex, setTabIndex] = useState(initialIndex);
    const [menu] = useMenu();
    
    const deserts = menu.filter(item => item.category === 'dessert')
    const pizzas = menu.filter(item => item.category === 'pizza')
    const salads = menu.filter(item => item.category === 'salad')
    const soups = menu.filter(item => item.category === 'soup')
    const drinks = menu.filter(item => item.category === 'drinks')

    return (
        <div>
            <Cover img={orderCover} heading="OUR SHOP" details="Would you like to try a dish?" />
            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab>Salad</Tab>
                    <Tab>Pizza</Tab>
                    <Tab>Soups</Tab>
                    <Tab>Dessert</Tab>
                    <Tab>Drinks</Tab>
                </TabList>
                <TabPanel>
                    <OrderFood items={salads} />
                </TabPanel>
                <TabPanel>
                    <OrderFood items={pizzas} />
                </TabPanel>
                <TabPanel>
                    <OrderFood items={soups} />
                </TabPanel>
                <TabPanel>
                    <OrderFood items={deserts} />
                </TabPanel>
                <TabPanel>
                    <OrderFood items={drinks} />
                </TabPanel>
            
            </Tabs>
        </div>
    );
};

export default Order;