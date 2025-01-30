import { Link } from "react-router-dom"
import img from "../../assets/others/authentication2.png"
import { useContext } from "react"
import { AuthContext } from "../../providers/AuthProvider"
import { useForm } from "react-hook-form"


export default function SignUp() {
    const { signUpUser, updateUserProfile } = useContext(AuthContext)

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
        // const { email, password, name, photo } = data
        signUpUser(data.email, data.password)
            .then(result => {
                console.log(result);
                updateUserProfile(data.name, data.photo)
            })
    }


    console.log(watch("example"))



    return (
        <div className="min-h-screen ">
            <div className="flex items-center">
                <div className="w-1/2">
                    <img src={img} alt="" />
                </div>
                <form onSubmit={handleSubmit(onSubmit)} className="w-1/2 flex flex-col space-y-4">
                    <h3 className='text-4xl text-center font-bold text-black'>Sign In</h3>
                    <div>
                        <label className='block text-xl font-semibold mb-2 text-black' htmlFor="">Name</label>
                        <input
                            className="bg-white w-full py-3 border-2 rounded-md pl-4"
                            {...register("name", { required: "Name is required" })}
                            type="name"
                            id="name"
                        />
                        {errors.name && <span>Email is required</span>}
                    </div>
                    <div>
                        <label className='block text-xl font-semibold mb-2 text-black' htmlFor="">PhotoURL</label>
                        <input
                            className="bg-white w-full py-3 border-2 rounded-md pl-4"
                            {...register("photo", { required: "PhotoUrl is required" })}
                            type="photo"
                            id="photo"
                        />
                        {errors.photo && <span>Email is required</span>}
                    </div>
                    <div>
                        <label className='block text-xl font-semibold mb-2 text-black' htmlFor="">Email</label>
                        <input
                            className="bg-white w-full py-3 border-2 rounded-md pl-4"
                            {...register("email", { required: "Email is required" })}
                            type="email"
                            id="email"
                        />
                        {errors.email && <span>Email is required</span>}
                    </div>
                    <div>
                        <label className='block text-xl font-semibold mb-2 text-black' htmlFor="">Password</label>
                        <input
                            className="bg-white w-full py-3 border-2 rounded-md pl-4"
                            {...register("password", {
                                required: "Password is required",
                                minLength: { value: 8, message: "Password must be at least 8 characters" },
                                maxLength: { value: 20, message: "Password must be less than 20 characters" },
                                pattern: {
                                    value: /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])/,
                                    message: "Password must contain uppercase, lowercase, a number, and a special character",
                                },
                            })}
                            type="password"
                            id="password"
                        />
                        {errors.password?.type === "required" && <span>Password is required</span>}
                        {errors.password?.type === "maxLength" && <span>Password required less the 20</span>}
                        {errors.password?.type === "minLength" && <span>Password is required more than 8</span>}
                        {errors.password?.type === "pattern" && <span>Password is uppercase,lowercase, special</span>}
                    </div>

                    <input className={`btn bg-[#D1A054] border-0 w-full font-bold rounded-md text-center  text-xl text-white`} type="submit" value="Sign In" />
                    <p className='text-center text-xl text-[#D1A054]'>New here? <Link className='font-bold'>Create a New Account</Link></p>
                    <p className='text-center text-[#444444] text-xl'>Or sign in with</p>
                </form>
            </div>
        </div>
    )
}
