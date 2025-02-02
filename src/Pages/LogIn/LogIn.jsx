import React, { useContext, useEffect, useState } from 'react';
import img from "../../assets/others/authentication2.png"
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../providers/AuthProvider';
import { useForm } from "react-hook-form"
import Swal from 'sweetalert2'
import 'animate.css';

const LogIn = () => {
    const [disable, setDisable] = useState(true)
    const { signInUser } = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()

    const from = location.state?.from?.pathname || '/';

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()
    const onSubmit = (data) => {
        const { email, password } = data
        signInUser(email, password)
            .then(result => {
                console.log(result.user);
                Swal.fire({
                    icon: 'success',
                    title: "Sign in Successfully",
                    confirmButtonText: 'Okey',
                    showClass: {
                        popup: `
                        animate__animated
                        animate__fadeInUp
                        animate__faster
                      `
                    },
                    hideClass: {
                        popup: `
                        animate__animated
                        animate__fadeOutDown
                        animate__faster
                      `
                    }
                });
                navigate(from, { replace: true });
            })
    }



    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])

    const validCaptcha = (e) => {
        const value = e.target.value;
        if (validateCaptcha(value)) {
            setDisable(false)
        }
        else {
            setDisable(true)
        }
    }
    return (
        <div className="min-h-screen ">
            <div className="flex items-center">
                <div className="w-1/2">
                    <img src={img} alt="" />
                </div>
                <form onSubmit={handleSubmit(onSubmit)} className="w-1/2 flex flex-col space-y-4">
                    <h3 className='text-4xl text-center font-bold text-black' >Sign In</h3>
                    <div>
                        <label className='block text-xl font-semibold mb-2 text-black' htmlFor="">Email</label>
                        <input className='bg-white w-full py-3 border-2 rounded-md pl-4'{...register("email")} placeholder='Enter your Email' type="email" name="email" id="" />
                    </div>
                    <div>
                        <label className='block text-xl font-semibold mb-2 text-black' htmlFor="">Password</label>
                        <input className='bg-white w-full py-3 border-2 rounded-md pl-4' {...register('password')} placeholder='Enter your Password' type="password" name="password" id="" />
                    </div>
                    <div>
                        <label className='block text-xl font-semibold mb-2 text-black' htmlFor=""><LoadCanvasTemplate /></label>
                        <input onBlur={validCaptcha} className='bg-white w-full py-3 border-2 rounded-md pl-4' placeholder='Enter the Captcha' type="captcha" name="captcha" id="" />
                    </div>
                    <input disabled={disable} className={`btn bg-[#D1A054] border-0 w-full font-bold rounded-md text-center  text-xl text-white`} type="submit" value="Sign In" />
                    <p className='text-center text-xl text-[#D1A054]'>New here? <Link to='/signup' className='font-bold'>Create a New Account</Link></p>
                    <p className='text-center text-[#444444] text-xl'>Or sign in with</p>
                </form>
            </div>
        </div>
    );
};

export default LogIn;