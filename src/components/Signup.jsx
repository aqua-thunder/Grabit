import React from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {


    return (
        <>
            <nav className='flex justify-between items-center'>
                <div>
                    <Link to="/"><img src="images/logo.png" alt="logo" width={150} /></Link>
                </div>
                <Link to="/login" className='btn font-bold cursor-pointer border border-gray-400 px-5 py-2 rounded-md'>
                    Login
                </Link>
            </nav>
            <div className="flex justify-center mt-10">
                <form className="w-[28vw]  p-6 shadow-2xl rounded-3xl bg-white">
                    <h2 className="text-3xl font-bold text-center mb-6 text-[#4b5966]">Sign<span className='text-[#67bf9f]'>up</span></h2>
                    <div>
                        <div className="space-y-4 mt-10 ">
                            <input
                                type="text"
                                name="email"
                                placeholder="Email Address"
                                required
                                className='border border-[#dcdcdc] w-[25vw] p-2 rounded-md outline-none'
                            />

                            <input
                                type="password"
                                name="password"
                                placeholder="Password"
                                required
                                className='border border-[#dcdcdc] w-[25vw] p-2 rounded-md outline-none'
                            />

                            <button type="submit" className="w-full bg-[#5caf90] hover:bg-[#67bf9f] text-white rounded-lg py-2 font-bold cursor-pointer mt-3">
                                Create Account
                            </button>
                        </div>
                        <div className='flex items-center justify-between mt-4  text-[#4b5966] font-bold'>
                            <div className='h-[1px] w-[11vw] bg-black'></div>
                            <span>Or</span>
                            <div className='h-[1px] w-[11vw] bg-black'></div>
                        </div>
                        <div className="flex flex-col items-center space-y-4 mt-5">
                            <button className="flex items-center space-x-20 w-full p-3 rounded-md font-bold bg-[#4267b2] text-white hover:bg-[#4672cc] cursor-pointer">
                                <img src="images/SVGs/facebook-login.svg" alt="facebook" width={25} className='' />
                                <span>Continue with Facebook</span>
                            </button>
                            <button className="flex items-center space-x-20 w-full p-3 rounded-md font-bold bg-white text-gray-700 border border-[#c8c8c8] hover:bg-gray-100 cursor-pointer">
                                <img src="images/SVGs/google-login.svg" alt="facebook" width={25} className='' />
                                <span>Continue with Google</span>
                            </button>
                        </div>

                    </div>

                </form>
            </div>
        </>
    )
}

export default Signup
