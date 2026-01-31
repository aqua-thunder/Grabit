import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import Home from './Home'
import ProductInfo from './ProductInfo'
import '../Navbar.css'
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = ({ CartLength, WL, AC, handleDelete }) => {
    const [data, setdata] = useState([])
    useEffect(() => {
        setdata(AC)
    }, [AC])

    const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();

    const home = () => {
        let h = document.getElementById("home")
        if (h) {
            h.style.display = "block";
            h.style.zIndex = "10px";
            h.style.width = "10vw";
        }
    }
    const homeOut = () => {
        let h = document.getElementById("home")
        if (h) {
            h.style.display = "none";
        }
    }
    const categories = () => {
        let h = document.getElementById("categories")
        if (h) {
            h.style.display = "block";
        }

    }
    const categoriesOut = () => {
        let h = document.getElementById("categories")
        if (h) {
            h.style.display = "none";
        }
    }
    const products = () => {
        let h = document.getElementById("Products")
        if (h) {
            h.style.display = "block";
        }

    }
    const productsOut = () => {
        let h = document.getElementById("Products")
        if (h) {
            h.style.display = "none";
        }
    }
    const blog = () => {
        let h = document.getElementById("blog")
        if (h) {
            h.style.display = "block";
        }

    }
    const blogOut = () => {
        let h = document.getElementById("blog")
        if (h) {
            h.style.display = "none";
        }
    }
    const pages = () => {
        let h = document.getElementById("pages")
        if (h) {
            h.style.transition = "all",
                h.style.display = "block";
            h.style.transition = "0.3s"
        }

    }
    const pagesOut = () => {
        let h = document.getElementById("pages")
        if (h) {
            h.style.display = "none";
        }
    }
    const [blur, setblur] = useState()
    const AddToCart = () => {
        let cart = document.getElementById("cart");
        let home = document.getElementById("homeFilter");
        let PrInfo = document.getElementById("prInfo");
        if (cart) {
            cart.style.width = "31vw"
            cart.style.height = "100%"
            cart.style.transition = "width transform 400ms ease-in-out";
            cart.style.transitionDelay = "250ms";
        }
        if (home) {
            setblur(
                home.style.pointerEvents = "none",
                home.style.filter = "blur(5px)",
            )
        }
        < Home blur={blur} />
        if (PrInfo) {
            setblur(
                PrInfo.style.filter = "blur(5px)"
            )
        }
        if (window.matchMedia("(max-width: 640px)").matches) {
            window.location.href = "../chekout"; // Change to your desired URL
        }
        < ProductInfo blur={blur} />
    }
    const CloseCart = () => {
        let cart = document.getElementById("cart");
        let home = document.getElementById("homeFilter");
        let PrInfo = document.getElementById("prInfo");
        if (cart) {
            cart.style.width = "0vw"
            cart.style.height = "0%"
            cart.style.transition = "width 0.3s"
        }
        if (home) {
            setblur(
                home.style.filter = "blur(0px)",
                home.style.pointerEvents = "",
            )
        }
        if (PrInfo) {
            setblur(
                PrInfo.style.filter = "blur(0px)"
            )
        }
    }

    return (
        <>
            <div id="element_target" className='lg:flex lg:justify-between md:flex md:justify-between items-center pb-5 lg:pb-10 px-4 md:px-8'>
                <div >
                    <Link to="/"><img src="images/logo.png" alt="logo" className='w-32 md:w-40 lg:w-[10vw]' /></Link>
                </div>

                {/* Chage i have made */}

                <div className="flex flex-col md:flex-row items-center justify-between gap-4 py-3 w-full md:w-auto">

                    {/* Search Box */}
                    <div className="input flex items-center border border-[#ededed] rounded-md py-2 px-3 
                    w-full md:w-[35vw] lg:w-[40vw]">
                        <input
                            type="text"
                            placeholder="Search Products..."
                            className="w-full outline-none text-base"
                            name="search"
                            id="search"
                        />
                        <div className="group hidden lg:block">
                            <lord-icon
                                src="https://cdn.lordicon.com/fkdzyfle.json"
                                trigger="hover"
                                colors="primary:#4b5966"
                                style={{ width: "26px", height: "26px" }}   // bigger for mobile
                            />
                        </div>
                    </div>

                    {/* Right Section */}
                    <ul className="flex items-center justify-between w-full md:w-auto gap-6 mt-3 md:mt-0">

                        {/* Login / Logout */}
                        {
                            isAuthenticated ? (
                                <button
                                    className="group flex items-center gap-3 cursor-pointer"
                                    onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}
                                >
                                    <lord-icon
                                        src="https://cdn.lordicon.com/hrjifpbq.json"
                                        trigger="hover"
                                        colors="primary:#4b5966"
                                        style={{ width: "36px", height: "36px" }}   // larger on mobile
                                    />
                                    <div className="text-sm md:text-[13px]">
                                        <div className="font-bold text-gray-400 group-hover:text-[#5caf90]">
                                            Account
                                        </div>
                                        <div className="font-semibold text-gray-700">
                                            LOGOUT
                                        </div>
                                    </div>
                                </button>
                            ) : (
                                <button
                                    className="group flex items-center gap-3 cursor-pointer"
                                    onClick={() => loginWithRedirect()}
                                >
                                    <lord-icon
                                        src="https://cdn.lordicon.com/hrjifpbq.json"
                                        trigger="hover"
                                        colors="primary:#4b5966"
                                        style={{ width: "36px", height: "36px" }}
                                    />
                                    <div className="text-sm md:text-[13px]">
                                        <div className="font-bold text-gray-400 group-hover:text-[#5caf90]">
                                            Account
                                        </div>
                                        <div className="font-semibold text-gray-700 lg:block hidden">
                                            LOGIN
                                        </div>
                                    </div>
                                </button>
                            )
                        }

                        {/* Wishlist */}
                        <Link to="/wishList" className="group flex items-center gap-3 cursor-pointer">
                            <lord-icon
                                src="https://cdn.lordicon.com/ulnswmkk.json"
                                trigger="hover"
                                colors="primary:#4b5966"
                                style={{ width: "36px", height: "36px" }}
                            />
                            <div className="text-sm md:text-[13px]">
                                <div className="font-bold text-gray-400 group-hover:text-[#5caf90]">
                                    Wishlist
                                </div>
                                <div className="font-semibold text-gray-700 lg:block md:block hidden">
                                    {WL}-ITEMS
                                </div>
                            </div>
                        </Link>

                        {/* Cart */}
                        <div className="group flex items-center gap-3 cursor-pointer" onClick={AddToCart}>
                            <lord-icon
                                src="https://cdn.lordicon.com/mqdkoaef.json"
                                trigger="hover"
                                colors="primary:#4b5966"
                                style={{ width: "36px", height: "36px" }}
                            />
                            <div className="text-sm md:text-[13px]">
                                <div className="font-bold text-gray-400 group-hover:text-[#5caf90]">
                                    Cart
                                </div>
                                <div className="font-semibold text-gray-700 lg:block md:block hidden">
                                    {CartLength}-ITEMS
                                </div>
                            </div>
                        </div>

                        {/* Username */}
                        {isAuthenticated && (
                            <p className="text-base md:text-sm font-semibold text-gray-700">
                                {user.name}
                            </p>
                        )}
                    </ul>
                </div>
            </div>
            <div className='w-0 h-0 overflow-x-hidden right-0 fixed z-10 top-0 bg-white ' id='cart'>
                <div className='flex justify-between  items-center px-3 py-3'>
                    <span className='font-bold text-gray-700'>My Cart</span>
                    <button onClick={() => { CloseCart() }} className='cursor-pointer p-2 text-lg font-bold'>X</button>
                </div>

                <div className='pb-[165px] w-[30vw] no-scrollbar '>
                    {
                        data.length == 0 ?
                            <div className='mt-3 px-3'>
                                <span className='font-semibold text-gray-700'>Your cart is empty</span>
                            </div> :
                            data?.map((productItem, productIndex) => {
                                return (
                                    <div key={productIndex}>
                                        <div className='flex justify-around items-center text-gray-700'>
                                            <div >
                                                <img src={productItem.url} alt="" width={140} />
                                            </div>
                                            <div className='space-y-6  w-60'>
                                                <div className='flex justify-between'>
                                                    <div className='font-bold'>{productItem.name}</div>
                                                    <img src="images/delete.png" alt="delete" width={20} height={14} className='cursor-pointer' onClick={(e) => { handleDelete(e, productItem.id) }} />
                                                </div>
                                                <div className='flex justify-around'>
                                                    <div className='mt-3 space-x-3'>
                                                        <span className='font-bold text-lg'>${productItem.price * productItem.quantity}.00</span>
                                                        <span className='line-through text-[14px]'>${productItem.discount * productItem.quantity}.00</span>
                                                    </div>
                                                    <div className='mt-3 space-x-3 text-gray-400 text-lg font-semibold'>
                                                        <button className='cursor-pointer rounded-full h-8 w-8 border-2  border-gray-400' onClick={() => {
                                                            const _CART = data.map((item, index) => {
                                                                return productIndex === index ? { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 1 } : item
                                                            })
                                                            setdata(_CART)
                                                        }}>-</button>
                                                        <span>{productItem.quantity}</span>
                                                        <button className='cursor-pointer rounded-full h-8 w-8 border-2  border-gray-400' onClick={() => {
                                                            const _CART = data.map((item, index) => {
                                                                return productIndex === index ? { ...item, quantity: item.quantity + 1 } : item
                                                            })
                                                            setdata(_CART)
                                                        }}>+</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='line bg-[#f5f5f5] h-[2px] w-full mx-2'></div>
                                    </div>
                                )

                            })
                    }
                </div>

                <div className='fixed bottom-0 bg-white w-[30vw] h-[22vh]'>
                    <div className='flex justify-between font-semibold text-lg mt-3 px-7'>
                        <span className='text-gray-400'>Total: </span>
                        <span className='font-bold'>$ {data.map(item => item.price * item.quantity).reduce((total, value) => total + value, 0)}.00</span>
                    </div>
                    <div className='flex justify-between font-semibold text-lg mt-3 px-7'>
                        <span className='text-gray-400'>Total Quantity: </span>
                        <span className='font-bold'>$ {CartLength}</span>
                    </div>
                    <Link to='/chekout' className='flex justify-center items-center mt-5 '>
                        <button className='bg-black px-5 w-[24vw] rounded-full py-4 text-white font-bold cursor-pointer'  >Checkout</button>
                    </Link>
                </div>
            </div>
            <div onMouseLeave={() => { homeOut(), categoriesOut(), productsOut(), blogOut(), pagesOut() }}>
                <div className='line bg-[#e1e1e1] h-[1px] w-full  ' ></div>
                <div className='mt-1 flex items-center justify-between max-sm:justify-around' >
                    <div className='bg-[#5caf90] w-52 flex items-center py-3 px-3 space-x-3 rounded-md cursor-pointer hidden md:flex'>
                        <lord-icon
                            src="https://cdn.lordicon.com/jnikqyih.json"
                            trigger="hover"
                            colors="primary:#ffffff"
                            style={{ "width": "30px", "height": "30px" }}>
                        </lord-icon>
                        <button className=' text-white font-semibold'>All Categories</button>
                        <lord-icon
                            src="https://cdn.lordicon.com/rmkahxvq.json"
                            trigger="hover"
                            colors="primary:#ffffff"
                            style={{ "width": "27px", "height": "27px" }}>
                        </lord-icon>
                    </div>
                    <ul className='md:flex md:items-center hidden space-x-4 lg:space-x-10' >
                        <li className='flex items-center gap-1 cursor-pointer' onMouseOver={() => { home(), categoriesOut(), productsOut(), blogOut(), pagesOut() }}  >
                            <span className='text-[#4b5966] font-semibold text-2xl md:text-sm lg:text-sm hover:text-[#5caf90]' >Home</span>
                            <img src="images/SVGs/down.svg" alt="down" width={20} />
                        </li>
                        <li className='flex items-center gap-1 cursor-pointer' onMouseOver={() => { categories(), homeOut(), productsOut(), blogOut(), pagesOut() }}>
                            <span className='text-[#4b5966] font-semibold text-2xl md:text-sm lg:text-sm hover:text-[#5caf90]'>Categories</span>
                            <img src="images/SVGs/down.svg" alt="down" width={20} />
                        </li>
                        <li className='flex items-center gap-1 cursor-pointer' onMouseOver={() => { products(), homeOut(), categoriesOut(), blogOut(), pagesOut() }}>
                            <span className='text-[#4b5966] font-semibold text-2xl md:text-sm lg:text-sm hover:text-[#5caf90]'>Products</span>
                            <img src="images/SVGs/down.svg" alt="down" width={20} />
                        </li>
                        <li className='flex items-center gap-1 cursor-pointer' onMouseOver={() => { blog(), productsOut(), homeOut(), categoriesOut(), pagesOut() }}>
                            <span className='text-[#4b5966] font-semibold text-2xl md:text-sm lg:text-sm hover:text-[#5caf90]'>Blog</span>
                            <img src="images/SVGs/down.svg" alt="down" width={20} />
                        </li>
                        <li className='flex items-center gap-1 cursor-pointer' onMouseOver={() => { pages(), blogOut(), productsOut(), homeOut(), categoriesOut() }}>
                            <span className='text-[#4b5966] font-semibold text-2xl md:text-sm lg:text-sm hover:text-[#5caf90]'>Pages</span>
                            <img src="images/SVGs/down.svg" alt="down" width={20} />
                        </li>
                        <li className='flex items-center gap-1 cursor-pointer'>
                            <span className='text-[#4b5966] font-semibold text-2xl md:text-sm lg:text-sm hover:text-[#5caf90]' onMouseOver={() => { pagesOut() }}>Offers</span>
                            <img src="images/SVGs/down.svg" alt="down" width={20} />
                        </li>
                    </ul>
                    <div className='bg-[#5caf90] text-white font-semibold w-52 flex items-center py-3 px-3 rounded-md sp cursor-pointer hidden lg:flex '>
                        <img src="images/SVGs/location-white.svg" alt="down" width={25} />
                        <div className='ml-3'>New York</div>
                        <img src="images/SVGs/down-white.svg" alt="down" width={20} className='ml-14 ' />
                    </div>
                </div>
                <div className='line bg-[#e1e1e1] h-[1px] w-full mt-1' onMouseLeave={() => { homeOut(), categoriesOut(), productsOut(), blogOut(), pagesOut() }} ></div>
                <div className='hidden  fixed z-10 bg-white ml-[22vw] ' id='home' onMouseLeave={() => { homeOut() }} >
                    <ul className='shadow-[0_30px_35px_rgba(0,0,0,0.15)]  rounded-md  py-4 px-5 space-y-3 '>
                        <li className='cursor-pointer text-sm text-gray-400 font-semibold hover:text-[#5caf90]'>Grocery</li>
                        <li className='cursor-pointer text-sm text-gray-400 font-semibold hover:text-[#5caf90]'>Fashion</li>
                        <li className='cursor-pointer text-sm text-gray-400 font-semibold hover:text-[#5caf90]'>Fashion 2</li>
                    </ul>
                </div>
                <div className='hidden fixed z-10 bg-white ml-[14vw] ' id='categories' onMouseLeave={() => { categoriesOut() }}>
                    <div className='  flex justify-evenly w-[60vw]  shadow-[0_30px_35px_rgba(0,0,0,0.15)] py-7 px-3 bg-white top-[50px] '>
                        <div>
                            <span className='text-[#5caf90] font-bold'>Classic</span>
                            <div className='line bg-[#e1e1e1] h-[1px] w-full mt-2'></div>
                            <div>
                                <div className='mt-3 text-sm text-gray-400 font-semibold cursor-pointer hover:text-[#5caf90]'>Left Sidebar 3 Column</div>
                                <div className='mt-5 text-sm text-gray-400 font-semibold cursor-pointer hover:text-[#5caf90]'>Left Sidebar 4 Column</div>
                                <div className='mt-5 text-sm text-gray-400 font-semibold cursor-pointer hover:text-[#5caf90]'>Left Sidebar 3 Column</div>
                                <div className='mt-5 text-sm text-gray-400 font-semibold cursor-pointer hover:text-[#5caf90]'>Left Sidebar 4 Column</div>
                                <div className='mt-5 text-sm text-gray-400 font-semibold cursor-pointer hover:text-[#5caf90]'>Full Width 4 Column</div>
                            </div>
                        </div>
                        <div>
                            <span className='text-[#5caf90] font-bold'>Banner</span>
                            <div className='line bg-[#e1e1e1] h-[1px] w-full mt-2'></div>
                            <div>
                                <div className='mt-3 text-sm text-gray-400 font-semibold cursor-pointer hover:text-[#5caf90]'>Left Sidebar 3 Column</div>
                                <div className='mt-5 text-sm text-gray-400 font-semibold cursor-pointer hover:text-[#5caf90]'>Left Sidebar 4 Column</div>
                                <div className='mt-5 text-sm text-gray-400 font-semibold cursor-pointer hover:text-[#5caf90]'>Left Sidebar 3 Column</div>
                                <div className='mt-5 text-sm text-gray-400 font-semibold cursor-pointer hover:text-[#5caf90]'>Left Sidebar 4 Column</div>
                                <div className='mt-5 text-sm text-gray-400 font-semibold cursor-pointer hover:text-[#5caf90]'>Full Width 4 Column</div>
                            </div>
                        </div>
                        <div>
                            <span className='text-[#5caf90] font-bold'>Column</span>
                            <div className='line bg-[#e1e1e1] h-[1px] w-full mt-2'></div>
                            <div>
                                <div className='mt-3 text-sm text-gray-400 font-semibold cursor-pointer hover:text-[#5caf90]'>Left Sidebar 3 Column</div>
                                <div className='mt-5 text-sm text-gray-400 font-semibold cursor-pointer hover:text-[#5caf90]'>Left Sidebar 4 Column</div>
                                <div className='mt-5 text-sm text-gray-400 font-semibold cursor-pointer hover:text-[#5caf90]'>Left Sidebar 3 Column</div>
                                <div className='mt-5 text-sm text-gray-400 font-semibold cursor-pointer hover:text-[#5caf90]'>Left Sidebar 4 Column</div>
                                <div className='mt-5 text-sm text-gray-400 font-semibold cursor-pointer hover:text-[#5caf90]'>Full Width 4 Column</div>
                            </div>
                        </div>
                        <div>
                            <span className='text-[#5caf90] font-bold'>List</span>
                            <div className='line bg-[#e1e1e1] h-[1px] w-full mt-2'></div>
                            <div>
                                <div className='mt-3 text-sm text-gray-400 font-semibold cursor-pointer hover:text-[#5caf90]'>Left Sidebar 3 Column</div>
                                <div className='mt-5 text-sm text-gray-400 font-semibold cursor-pointer hover:text-[#5caf90]'>Left Sidebar 4 Column</div>
                                <div className='mt-5 text-sm text-gray-400 font-semibold cursor-pointer hover:text-[#5caf90]'>Left Sidebar 3 Column</div>
                                <div className='mt-5 text-sm text-gray-400 font-semibold cursor-pointer hover:text-[#5caf90]'>Left Sidebar 4 Column</div>
                                <div className='mt-5 text-sm text-gray-400 font-semibold cursor-pointer hover:text-[#5caf90]'>Full Width 4 Column</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='hidden fixed z-10 bg-white ml-[37rem]' id='Products' onMouseLeave={() => { productsOut() }} >
                    <ul className='shadow-[0_30px_35px_rgba(0,0,0,0.15)] w-48 rounded-md  py-4 px-5 space-y-3 '>
                        <li className='cursor-pointer text-sm text-gray-400 font-semibold hover:text-[#5caf90]'>Product Page</li>
                        <li className='cursor-pointer text-sm text-gray-400 font-semibold hover:text-[#5caf90]'>Product According</li>
                        <li className='cursor-pointer text-sm text-gray-400 font-semibold hover:text-[#5caf90]'>Products Full Width</li>
                        <li className='cursor-pointer text-sm text-gray-400 font-semibold hover:text-[#5caf90]'>Accordion Full Width</li>
                    </ul>
                </div>
                <div className='hidden fixed z-10 bg-white ml-[45rem]' id='blog' onMouseLeave={() => { blogOut() }} >
                    <ul className='shadow-[0_30px_35px_rgba(0,0,0,0.15)] w-48 rounded-md  py-4 px-5 space-y-3 '>
                        <li className='cursor-pointer text-sm text-gray-400 font-semibold hover:text-[#5caf90]'>Left Sidebar</li>
                        <li className='cursor-pointer text-sm text-gray-400 font-semibold hover:text-[#5caf90]'>Right Sidebar</li>
                        <li className='cursor-pointer text-sm text-gray-400 font-semibold hover:text-[#5caf90]'>Full Width</li>
                        <li className='cursor-pointer text-sm text-gray-400 font-semibold hover:text-[#5caf90]'>Detailed Left Sidebar</li>
                        <li className='cursor-pointer text-sm text-gray-400 font-semibold hover:text-[#5caf90]'>Detailed Right Sidebar</li>
                    </ul>
                </div>
                <div className='hidden fixed z-10 bg-white ml-[51rem] transition-all' id='pages' onMouseLeave={() => { pagesOut() }} >
                    <ul className='shadow-[0_30px_35px_rgba(0,0,0,0.15)] w-48 rounded-md  py-4 px-5 space-y-3 '>
                        <li className='cursor-pointer text-sm text-gray-400 font-semibold hover:text-[#5caf90]'>About</li>
                        <li className='cursor-pointer text-sm text-gray-400 font-semibold hover:text-[#5caf90]'>Contact Us</li>
                        <li className='cursor-pointer text-sm text-gray-400 font-semibold hover:text-[#5caf90]'>Cart</li>
                        <li className='cursor-pointer text-sm text-gray-400 font-semibold hover:text-[#5caf90]'>Check out</li>
                        <li className='cursor-pointer text-sm text-gray-400 font-semibold hover:text-[#5caf90]'>Orders</li>
                        <li className='cursor-pointer text-sm text-gray-400 font-semibold hover:text-[#5caf90]'>Compare</li>
                        <li className='cursor-pointer text-sm text-gray-400 font-semibold hover:text-[#5caf90]'>FAQ</li>
                        <li className='cursor-pointer text-sm text-gray-400 font-semibold hover:text-[#5caf90]'>Login</li>
                    </ul>
                </div>
            </div>


        </>
    )
}



export default Navbar
