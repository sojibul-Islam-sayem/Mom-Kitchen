import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';
import { FaCartPlus } from "react-icons/fa";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)
    console.log(user);
    const handleLogOut = () => {
        logOut()
    }


    const NavItem = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="menu">Menu</Link></li>
        <li><Link to="order/salad">Order</Link></li>
        <li>
            <button className="">
                <FaCartPlus />
                <div className="badge bg-red-500 text-white">+99</div>
            </button>
        </li>
        {
            !user ? <li><Link to="login">LogIn</Link></li> : <li><Link onClick={handleLogOut}>Logout</Link></li>
        }
    </>

    return (
        <div className="navbar max-w-7xl mx-auto fixed z-30 bg-opacity-20 bg-black text-white">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {NavItem}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">Sem's Foods</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {NavItem}
                </ul>
            </div>
            <div className="navbar-end">
                <div className="avatar online">
                    <div className="w-24 rounded-full">
                        <img src={user?.photoURL} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;