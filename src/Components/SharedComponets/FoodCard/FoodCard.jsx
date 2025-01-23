import React from 'react';

const FoodCard = ({item}) => {
    const { name, recipe, price, image } = item;

    return (
        <div className="card bg-base-100 w-96 shadow-xl">
            <figure className='relative'>
                <img
                    src={image}
                    alt="Shoes" />
                    <p className='absolute top-4 px-4 py-1 rounded-lg right-7 bg-black'>{price}</p>
            </figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
               
            </div>
        </div>
    );
};

export default FoodCard;