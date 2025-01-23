import React from 'react';
import FoodCard from '../../../Components/SharedComponets/FoodCard/FoodCard';

const OrderFood = ({items}) => {
    return (
        <div className="grid grid-cols-3 gap-4 ml-4">
        {
            items.map(item => <FoodCard key={item._id} item={item} />)
        }
    </div>
    );
};

export default OrderFood;