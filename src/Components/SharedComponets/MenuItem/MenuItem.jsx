import React from 'react';

const MenuItem = ({item}) => {
    const {name, recipe, price, image} = item;
    return (
        <div className='flex space-x-7 items-center'>
            <img className='w-28 h-24 rounded-r-full rounded-bl-full' src={image} alt="" />
            <div>
                <div className='flex text-xl justify-between'>
                    <h5 className='text-[#151515]'>{name}</h5>
                    <p className='text-[#BB8506]'>${price}</p>
                </div>
                <p className='text-[#737373]'>{recipe}</p>
            </div>
        </div>
    );
};

export default MenuItem;