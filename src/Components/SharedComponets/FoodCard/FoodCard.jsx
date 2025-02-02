import React from 'react';
import useAuth from '../../../Hooks/useAuth';
import Swal from 'sweetalert2'
import { useLocation, useNavigate } from 'react-router-dom';
import { key } from 'localforage';
import axios from 'axios';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import useCart from '../../../Hooks/useCart';

const FoodCard = ({ item }) => {
    const { name, recipe, price, image, _id } = item;
    const { user } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const axiosSecure = useAxiosSecure();
    const [,refetch] = useCart();

    const handleCart = () => {
        if (user && user.email) {
            const cartItem = {
                menuId: _id,
                email: user.email,
                name,
                image,
                price
            }
            axiosSecure.post(`/carts`, cartItem)
                .then(res => {
                    console.log(res.data);
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${name} Added in cart`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                    refetch()
                })
        }
        else {
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
                    navigate('/login', { state: { from: location } })
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
                    onClick={handleCart}
                    className='uppercase  text-[#BB8506] font-medium px-7 py-4 rounded-xl hover:bg-slate-700 border-b-4 border-[#BB8506] '>ADD to cart</button>
            </div>
        </div>
    );
};

export default FoodCard;