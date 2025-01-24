import React from 'react';
import img from "../../assets/others/authentication2.png"
import { Link } from 'react-router-dom';

const LogIn = () => {

    const handleSignIn = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

    }
    return (
        <div className="min-h-screen ">
            <div className="flex items-center">
                <div className="w-1/2">
                    <img src={img} alt="" />
                </div>
                <form onSubmit={handleSignIn} className="w-1/2">
                    <h3 className='text-4xl text-center font-bold text-black'>Sign In</h3>
                    <div>
                        <label className='block text-xl font-semibold mb-2 text-black' htmlFor="">Email</label>
                        <input className='bg-white w-full py-3 border-2 rounded-md pl-4' placeholder='Enter your Email' type="email" name="email" id="" />
                    </div>
                    <div>
                        <label className='block text-xl font-semibold mb-2 text-black' htmlFor="">Password</label>
                        <input className='bg-white w-full py-3 border-2 rounded-md pl-4' placeholder='Enter your Password' type="password" name="password" id="" />
                    </div>
                    <input className='bg-[#D1A054] w-full font-bold rounded-md text-center py-5 text-xl text-white' type="submit" value="Sign In" />
                    <p className='text-center text-xl text-[#D1A054]'>New here? <Link className='font-bold'>Create a New Account</Link></p>
                    <p className='text-center text-[#444444] text-xl'>Or sign in with</p>
                </form>
            </div>
        </div>
    );
};

export default LogIn;