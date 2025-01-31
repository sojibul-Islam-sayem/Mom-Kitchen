import React from 'react';

const FoodCard = ({ item }) => {
    const { name, recipe, price, image } = item;

    const handleCart = food => {
        console.log(food);
    }

    return (
        <div className="card w-96 shadow-xl">
            <figure className='relative'>
                <img
                    src={image}
                    alt="Shoes" />
                <p className='absolute top-4 px-4 py-1 rounded-lg right-7 bg-black font-medium text-white'>$ {price}</p>
            </figure>
            <div className="card-body flex flex-col text-black items-center">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <button
                    onClick={() => handleCart(item)}
                    className='uppercase  text-[#BB8506] font-medium px-7 py-4 rounded-xl hover:bg-slate-700 border-b-4 border-[#BB8506] '>ADD to cart</button>
            </div>
        </div>
    );
};

export default FoodCard;