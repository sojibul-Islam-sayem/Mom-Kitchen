import React from 'react';
import { FaBook, FaHome, FaSearch, FaShoppingCart } from 'react-icons/fa';
import { NavLink, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className='flex '>
            <div className='w-64 min-h-screen bg-orange-500 text-white'>
                <ul className='menu p-2'>
                    <li>
                        <NavLink to={'/dashboard/cart'}>
                        <FaShoppingCart/>
                        My Cart</NavLink>
                    </li>
                    <li>
                        <NavLink to={'/dashboard/bookings'}>
                        <FaBook/>
                        My Booking</NavLink>
                    </li>
                    <li>
                        <NavLink to={'/dashboard/review'}>
                        <FaShoppingCart/>
                        Add Review</NavLink>
                    </li>
                    <hr />
                    <li>
                        <NavLink to={'/'}>
                        <FaHome/>
                        Home</NavLink>
                    </li>
                    <li>
                        <NavLink to={'/order/salad'}>
                        <FaSearch/>
                        Order</NavLink>
                    </li>
                </ul>
            </div>
            <div className='w-full p-4'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;