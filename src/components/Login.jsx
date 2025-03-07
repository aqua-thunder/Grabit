import React from 'react'
import { Link } from 'react-router-dom';
import '../Account.css'
const Account = () => {
    return (
        <>
            <nav className='flex justify-between items-center'>
                <div>
                    <Link to="/"><img src="images/logo.png" alt="logo" width={150} /></Link>
                </div>
                <Link to="/signup" className='btn font-bold cursor-pointer border border-gray-400 px-5 py-2 rounded-md'>
                    Signup
                </Link>
            </nav>

            <div className="flex justify-center mt-10">
                <div className="w-[28vw]  p-6 shadow-2xl rounded-3xl bg-white">
                    <h2 className="text-3xl font-bold text-center mb-6 text-[#4b5966]">Log<span className='text-[#67bf9f]'>in</span></h2>
                    <div>
                        <form className="space-y-4 mt-10 ">
                            <input
                                type="email"
                                name="email"
                                placeholder="Email Address"
                                required
                                className='border border-[#dcdcdc] w-[23vw] p-2 rounded-md outline-none'
                            />
                            <input
                                type="password"
                                name="password"
                                placeholder="Password"
                                required
                                className='border border-[#dcdcdc] w-[23vw] p-2 rounded-md outline-none'
                            />
                            <div className='text-center text-[#5caf90] font-bold'>
                                <a href="" >Forgot Password</a>
                            </div>
                            <button type="submit" className="w-full bg-[#5caf90] hover:bg-[#67bf9f] text-white rounded-lg py-2 font-bold cursor-pointer" >
                                Login
                            </button>
                            <div className='text-center font-semibold'>
                                <span>Don't have an account?<a href="" className='text-[#5caf90]'> Signup</a></span>
                            </div>
                        </form>
                        <div className='flex items-center justify-between mt-4  text-[#4b5966] font-bold'>
                            <div className='h-[1px] w-[11vw] bg-black'></div>
                            <span>Or</span>
                            <div className='h-[1px] w-[11vw] bg-black'></div>
                        </div>
                        <div className="flex flex-col items-center space-y-4 mt-5">
                            <button className="flex items-center space-x-20 w-full p-3 rounded-md font-bold bg-[#4267b2] text-white hover:bg-[#4672cc] cursor-pointer">
                                <img src="images/SVGs/facebook-login.svg" alt="facebook" width={25} className='' />
                                <span>Login with Facebook</span>
                            </button>
                            <button className="flex items-center space-x-20 w-full p-3 rounded-md font-bold bg-white text-gray-700 border border-[#c8c8c8] hover:bg-gray-100 cursor-pointer">
                                <img src="images/SVGs/google-login.svg" alt="facebook" width={25} className='' />
                                <span>Login with Google</span>
                            </button>
                        </div>

                    </div>

                </div>
            </div>
        </>
    )
}

export default Account
