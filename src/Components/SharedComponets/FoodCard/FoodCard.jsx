import React from 'react';
import useAuth from '../../../Hooks/useAuth';
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom';

const FoodCard = ({ item }) => {
    const { name, recipe, price, image } = item;
    const {user} = useAuth()
    const navigate = useNavigate()

    const handleCart = food => {
        if(user && user.email){

        }
        else{
            Swal.fire({
                title: "Please Login",
                text: "Please Login to add to the cart",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "LogIn"
              }).then((result) => {
                if (result.isConfirmed) {
                  navigate('/login')
                }
              });   
        }
          
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