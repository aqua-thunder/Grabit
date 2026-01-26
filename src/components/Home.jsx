// --------------- I have learned from this project --------------- 

// localstorage 
// React Router DOM
// To create slider(crousal) = use react-slick website
// Tostify = use for better alerts
// group = use for hover
// <a id="link" href="#element_target">Click</a> = When you click on it, it will take you to where you want to go
// logic of increase or decrease the quantity when click on button
// reload the page
// Delete item from the localstorage
// Auth0 = used for login , Logout functionality
/*
    Media qery in tailwind 

 if (window.matchMedia("(max-width: 640px)").matches) {
     window.location.href = "../chekout"; // Change to your desired URL
 }      
*/


import React, { useState, useRef } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import '../Navbar.css'

const Home = ({ product, tranding, topRated, detail, AddWishList, fruits, vegetables }, props) => {

    const [img, setimg] = useState([
        {
            img: "images/posters/img1.jpg",
            title: "Explore fresh & juicy fruits",
            starting: "Starting at $ 29.9"
        },
        {
            img: "images/posters/img2.jpg",
            title: "Organic & healthy vegitables",
            starting: "Starting at $ 10.9"
        },

    ])
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "ease-in-out"
    };

    const Items = {
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 700,
        autoplaySpeed: 2000,
        cssEase: "linear"

    };

    if (props.home) {
        const h = document.getElementById('homeFilter');
        h.style.pointerEvents = props.pointerEvents,
            h.style.filter = props.filter;
    }

    const notify = () => toast("Item has been inserted into the wishlist successfully!!!");



    return (
        <>
            <div id='homeFilter' >
                <div className='crousal mt-12'>
                    <Slider {...settings}>
                        {
                            img.map((items) => {
                                return <div className='relative ' key={items}>
                                    <span className='text-green-600 font-semibold text-[20px] pl-24 mt-24 absolute max-sm:mt-20 max-sm:pl-10'>{items.starting}</span>
                                    <div className='flex max-sm:items-center'>
                                        <img src={items.img} alt="img" />
                                        <h1 className='absolute top-1 text-5xl font-bold text-[#4b5966] w-[35vw] leading-[8vh] pt-36 pl-24 z-10 max-sm:pl-10  max-sm:text-4xl max-sm:leading-[7vh] max-sm:w-[95vw]  '>{items.title}</h1>
                                    </div>
                                    <button className='bg-[#4b5966] absolute top-1 mt-72 ml-24 text-white p-4 py-3 rounded-md hover:bg-[#5caf90] transition-all cursor-pointer max-sm:ml-10'>Shop Now {'>>'}</button>
                                </div>
                            })
                        }
                    </Slider>
                </div>
                <div className='mt-10 grid grid-cols-2 gap-3 lg:flex md:flex lg:justify-between md:justify-between '>
                    <Link to="/fruits" className='lg:w-52 lg:h-52 w-41 flex  justify-center items-center rounded-md 0'>
                        <div className='text-center w-44 h-44 bg-white space-y-2 shadow-[1px_-10px_10px_#fef3e7] rounded-md py-3 cursor-pointer hover:shadow-[1px_-10px_7px_#fff0e0] transition-all'>
                            <div className='flex justify-center'>
                                <img src="images/fruits.png" alt="fruits" width={70} className='' />
                            </div>
                            <div className='font-bold text-[#4b5966]'>Fruits</div>
                            <div className='text-sm text-gray-400'>{fruits.length} items</div>
                        </div>
                    </Link>
                    <div className='lg:w-52 lg:h-52 w-41 flex  justify-center items-center rounded-md 0'>
                        <div className='text-center w-44 h-44 bg-white space-y-2 shadow-[1px_-10px_7px_#e2fce2] rounded-md py-3 cursor-pointer hover:shadow-[1px_-10px_7px_#fff0e0] transition-all'>
                            <div className='flex justify-center'>
                                <img src="images/Bakery.png" alt="Bakery" width={70} className='' />
                            </div>
                            <div className='font-bold text-[#4b5966]'>Bakery</div>
                            <div className='text-sm text-gray-400'>32 items</div>
                        </div>
                    </div>
                    <Link to="/vegetables" className='lg:w-52 lg:h-52 w-41 flex  justify-center items-center rounded-md 0'>
                        <div className='text-center w-44 h-44 bg-white space-y-2 shadow-[1px_-10px_7px_#fceae9] rounded-md py-3 cursor-pointer hover:shadow-[1px_-10px_7px_#fff0e0] transition-all'>
                            <div className='flex justify-center'>
                                <img src="images/vegetables.png" alt="vegetables" width={70} className='' />
                            </div>
                            <div className='font-bold text-[#4b5966]'>Vegetables</div>
                            <div className='text-sm text-gray-400'>{vegetables.length} items</div>
                        </div>
                    </Link>
                    <div className='lg:w-52 lg:h-52 w-41 flex  justify-center items-center rounded-md 0'>
                        <div className='text-center w-44 h-44 bg-white space-y-2 shadow-[1px_-10px_7px_#fce3f5] rounded-md py-3 cursor-pointer hover:shadow-[1px_-10px_7px_#fff0e0] transition-all'>
                            <div className='flex justify-center'>
                                <img src="images/dairy.png" alt="dairy" width={70} className='' />
                            </div>
                            <div className='font-bold text-[#4b5966]'>Dairy & Milk</div>
                            <div className='text-sm text-gray-400'>40 items</div>
                        </div>
                    </div>
                    <div className='lg:w-52 lg:h-52 w-41 flex  justify-center items-center rounded-md 0'>
                        <div className='text-center w-44 h-44 bg-white space-y-2 shadow-[1px_-10px_7px_#ebf0fd] rounded-md py-3 cursor-pointer hover:shadow-[1px_-10px_7px_#fff0e0] transition-all'>
                            <div className='flex justify-center'>
                                <img src="images/snacks.png" alt="snacks" width={70} className='' />
                            </div>
                            <div className='font-bold text-[#4b5966]'>Snack & Spice</div>
                            <div className='text-sm text-gray-400'>85 items</div>
                        </div>
                    </div>
                    <div className='lg:w-52 lg:h-52 w-41 flex  justify-center items-center rounded-md 0'>
                        <div className='text-center w-44 h-44 bg-white space-y-2 shadow-[1px_-10px_7px_#f7f8dd] rounded-md py-3 cursor-pointer hover:shadow-[1px_-10px_7px_#fff0e0] transition-all'>
                            <div className='flex justify-center'>
                                <img src="images/drinks.png" alt="drinks" width={70} className='' />
                            </div>
                            <div className='font-bold text-[#4b5966]'>Juice & Drinks</div>
                            <div className='text-sm text-gray-400'>73 items</div>
                        </div>
                    </div>

                </div>
                <div className='Deal mt-10'>
                    <h1 className='text-[25px] font-bold text-[#4b5966] '>Day Of The <span className='text-[#5caf90]'>Deal</span></h1>
                    <span className='text-gray-400 text-sm mt-5'>Don't wait. The time will never be just right.</span>
                    <div className='lg:grid lg:grid-cols-5 gap-7  grid-cols-1'>
                        {
                            product.map((productItem, productIndex) => {
                                return (
                                    <div className='group mt-7 rounded-md cursor-pointer relative' key={productIndex}  >
                                        <div className='border border-[#ececec] lg:w-[15vw] flex-col justify-center  max-sm:border-[#c6c6c6] w-[100%]' >
                                            <img src={productItem.url} alt="" width={250} className='w-56 mx-auto' />
                                            <div className='invisible flex justify-evenly  w-36 m-auto  group-hover:visible group-hover:transition group-hover:delay-30 group-hover:duration-300 group-hover:ease-in-out group-hover:translate-y-[-17px] group-hover:scale-110 '>
                                                <button className='heart bg-white p-1 rounded-md border border-[#d9d9d9] cursor-pointer hover:bg-[#e6e6e6]' onClick={() => { AddWishList(productItem), notify() }}><img src="images/SVGs/heart.svg" alt="heart" width={17} /></button>
                                                <button className='bg-white p-1 rounded-md border border-[#d9d9d9] cursor-pointer hover:bg-[#e6e6e6]'><img src="images/SVGs/eye.svg" alt="eye" width={17} /></button>
                                                <button className='bg-white p-1 rounded-md border border-[#d9d9d9] cursor-pointer hover:bg-[#e6e6e6]'><img src="images/SVGs/exchange.svg" alt="exchange" width={17} /></button>
                                                <button className='bg-white p-1 rounded-md border border-[#d9d9d9] cursor-pointer hover:bg-[#e6e6e6]'><img src="images/SVGs/cart.svg" alt="cart" width={17} /></button>
                                            </div>
                                        </div>
                                        <Link to="/detail" className='' onClick={() => { detail(productItem) }}>
                                            <div className='relative lg:w-[15vw] px-5 space-y-3 border border-[#ececec] h-48 rounded-md w-[100%] max-sm:border-[#c6c6c6] max-md:h-44'>
                                                <div className='text-sm text-gray-400 mt-3 '>{productItem.type}</div>
                                                <div className='text-gray-400 font-semibold '>{productItem.name}</div>
                                                <div className='absolute pb-5 bottom-0 max-sm:bottom-0'>
                                                    <div className='flex '>
                                                        <img src="images/star.png" alt="star" width={17} />
                                                        <img src="images/star.png" alt="star" width={17} />
                                                        <img src="images/star.png" alt="star" width={17} />
                                                        <img src="images/star.png" alt="star" width={17} />
                                                        <img src="images/star.png" alt="star" width={17} />
                                                    </div>
                                                    <div className='flex space-x-3 mt-3'>
                                                        <div className='text-[#4b5966] font-extrabold'>${productItem.price}.00</div>
                                                        <div className='text-[#4b5966] line-through'>${productItem.discount}.00</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div className='poster-1 mt-8 relative lg:block md:block hidden'>
                    <img src="images/posters/img3.jpg" alt="" className='rounded-md h-[55vh] w-[100%]' />
                    <div className='absolute top-20 right-32 text-[#4b5966] text-5xl font-bold w-[400vw]  '>
                        <h1 className='end-0 absolute'>Fresh Fruits</h1>
                        <h1 className='end-0 top-14 absolute'>Healthy Products</h1>
                        <div className='absolute end-0 top-36 text-[28px] text-[#5caf90]'>30% off sale <span className='text-[#4b5966]'>Hurry up!!!</span></div>
                        <button className='absolute end-0 top-48 bg-[#5caf90] text-white text-[15px] py-3 px-5 rounded-sm cursor-pointer hover:bg-[#4b5966] transition-all'>Shop Now</button>
                    </div>
                </div>
                <div className='New-Ariivals mt-10 hidden lg:block'>
                    <h1 className='text-[25px] font-bold text-[#4b5966]'>New <span className='text-[#5caf90]'>Arrivals</span></h1>
                    <span className='text-gray-400 text-sm mt-5'>Shop online for new arrivals and get free shipping!</span>
                    <div className='grid grid-cols-5 gap-7 max-sm:grid-cols-4'>
                        {
                            fruits.map((productItem, productIndex) => {
                                return (
                                    <div className='group mt-7 rounded-md cursor-pointer relative' key={productIndex} onClick={() => { detail(productItem) }} >
                                        <div className='border border-[#ececec] w-[15vw] flex-col justify-center max-sm:border-[#c6c6c6] max-sm:w-[60vw] '>
                                            <img src={productItem.url} alt="fruits" width={250} className='max-sm:max-w-[46vw] max-sm:m-auto' />
                                            <div className='invisible flex justify-evenly  w-36 m-auto  group-hover:visible group-hover:transition group-hover:delay-30 group-hover:duration-300 group-hover:ease-in-out group-hover:translate-y-[-17px] group-hover:scale-110 '>
                                                <button className='bg-white p-1 rounded-md border hover:bg-[#e6e6e6] border-[#d9d9d9] cursor-pointer' onClick={() => notify()}><img src="images/SVGs/heart.svg" alt="heart" width={17} /></button>
                                                <button className='bg-white p-1 rounded-md border hover:bg-[#e6e6e6] border-[#d9d9d9] cursor-pointer'><img src="images/SVGs/eye.svg" alt="eye" width={17} /></button>
                                                <button className='bg-white p-1 rounded-md border hover:bg-[#e6e6e6] border-[#d9d9d9] cursor-pointer'><img src="images/SVGs/exchange.svg" alt="exchange" width={17} /></button>
                                                <button className='bg-white p-1 rounded-md border hover:bg-[#e6e6e6] border-[#d9d9d9] cursor-pointer'><img src="images/SVGs/cart.svg" alt="cart" width={17} /></button>
                                            </div>
                                        </div>
                                        <Link to="/detail">
                                            <div className='relative w-[15vw] px-5 space-y-3 border border-[#ececec] h-48 rounded-md max-sm:w-[60vw] max-sm:border-[#c6c6c6] max-md:h-44'>
                                                <div className='text-sm text-gray-400 mt-3'>{productItem.type}</div>
                                                <div className='text-gray-400 font-semibold '>{productItem.name}</div>
                                                <div className='absolute pb-5 bottom-0 max-sm:bottom-0'>
                                                    <div className='flex '>
                                                        <img src="images/star.png" alt="star" width={17} />
                                                        <img src="images/star.png" alt="star" width={17} />
                                                        <img src="images/star.png" alt="star" width={17} />
                                                        <img src="images/star.png" alt="star" width={17} />
                                                        <img src="images/star.png" alt="star" width={17} />
                                                    </div>
                                                    <div className='flex space-x-3 mt-3'>

                                                        <div className='text-[#4b5966] font-extrabold'>${productItem.price}.00</div>
                                                        <div className='text-[#4b5966] line-through'>${productItem.discount}.00</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                )
                            })
                        }
                    </div>

                </div>
                <div className='poster-2 mt-20 lg:grid md:grid md:grid-cols-2 lg:grid-cols-2 gap-7 hidden'>
                    <div className='relative'>
                        <img src="images/posters/img4.jpg" alt="" className='w-[100%] rounded-lg max-sm:h-[50vh]' />
                        <span className='absolute top-1 text-4xl font-bold text-[#4b5966] right-16 mt-14'>Tasty Snaks </span>
                        <span className='absolute top-1 text-4xl font-bold text-[#4b5966] right-16 mt-24'>& Fastfood</span>
                        <span className='text-gray-400 absolute top-40 right-24 text-lg font-semibold w-40'>The Flavor Of Something Special</span>
                        <button className=' bg-[#5caf90] absolute top-56 right-39 text-white p-3 py-2 rounded-md hover:bg-[#4b5966] transition-all cursor-pointer'>Shop Now</button>
                    </div>

                    <div className='relative'>
                        <img src="images/posters/img12.jpg" alt="" className='w-[100%] h-[45vh] rounded-lg' />
                        <span className='absolute top-1 text-4xl font-bold text-[#4b5966] right-16 mt-14'>Fresh Fruits</span>
                        <span className='absolute top-1 text-4xl font-bold text-[#4b5966] right-16 mt-24'>& Vaggies</span>
                        <span className='text-gray-400 absolute top-40 right-24 text-lg font-semibold w-40'>A Healthy Meal For Everyone</span>
                        <button className=' bg-[#5caf90] absolute top-56 right-39 text-white p-3 py-2 rounded-md hover:bg-[#4b5966] transition-all cursor-pointer'>Shop Now</button>
                    </div>
                </div>
                <div className='lg:flex md:flex lg:justify-between md:justify-between grid grid-cols-1 mt-10'>
                    <div className='text-center lg:w-[20vw] mt-10 border border-[#e4e4e4] rounded-md py-5 cursor-pointer w-full max-sm:py-8 max-sm:px-3 max-sm:space-y-5 max-sm:border-[#b9b9b9]'>
                        <img src="images/shipping.png" alt="" width={50} className='m-auto' />
                        <h1 className='font-semibold text-lg mt-5 text-[#4b5966]'>Free Shipping</h1>
                        <div className='text-[16px] mt-2 text-gray-400'>Free Shipping on all US order or order above $200</div>
                    </div>
                    <div className='text-center lg:w-[20vw] mt-10 border border-[#e4e4e4] rounded-md py-5 cursor-pointer w-full max-sm:py-8 max-sm:px-3 max-sm:space-y-5 max-sm:border-[#b9b9b9]'>
                        <img src="images/support.png" alt="" width={50} className='m-auto' />
                        <h1 className='font-semibold text-lg mt-5 text-[#4b5966]'>24X7 Support</h1>
                        <div className='text-[16px] mt-2 text-gray-400'>Free Shipping on all US order or order above $200</div>
                    </div>
                    <div className='text-center lg:w-[20vw] mt-10 border border-[#e4e4e4] rounded-md py-5 cursor-pointer w-full max-sm:py-8 max-sm:px-3 max-sm:space-y-5 max-sm:border-[#b9b9b9]'>
                        <img src="images/return.png" alt="" width={50} className='m-auto' />
                        <h1 className='font-semibold text-lg mt-5 text-[#4b5966]'>30 Days Return</h1>
                        <div className='text-[16px] mt-2 text-gray-400'>Free Shipping on all US order or order above $200</div>
                    </div>
                    <div className='text-center lg:w-[20vw] mt-10 border border-[#e4e4e4] rounded-md py-5 cursor-pointer w-full max-sm:py-8 max-sm:px-3 max-sm:space-y-5 max-sm:border-[#b9b9b9]'>
                        <img src="images/payment.png" alt="" width={50} className='m-auto' />
                        <h1 className='font-semibold text-lg mt-5 text-[#4b5966]'>Payment Secure</h1>
                        <div className='text-[16px] mt-2 text-gray-400'>Free Shipping on all US order or order above $200</div>
                    </div>
                </div>
                <div className='lg:grid lg:grid-cols-4 mt-20 grid grid-cols-1'>
                    <div className='relative max-sm:hidden'>
                        <img src="images/posters/img6.jpg" alt="" className='rounded-md h-[60vh] w-[100%]' />
                        <span className='absolute top-5 text-[#4b5966] text-2xl font-bold py-5 px-7 w-60'>Out Top Most Products Check It Now</span>
                        <button className=' bg-[#5caf90] absolute top-44 ml-7 cursor-pointer text-white p-3 py-2 rounded-md hover:bg-[#4b5966] transition-all'>Shop Now</button>
                    </div>
                    <div className='px-5'>
                        <div className='flex justify-between items-center'>
                            <h1 className='text-[#4b5966] font-bold text-2xl'>Trending <span className='text-[#5caf90]'>Items</span></h1>
                            <div className='space-x-3'>
                                <button className='text-[#4b5966] text-2xl font-bold cursor-pointer'>{'<'}</button>
                                <button className='text-[#4b5966] text-2xl font-bold cursor-pointer'>{'>'}</button>
                            </div>
                        </div>
                        <div className='mt-5 max-sm:border max-sm:border-[#dadada] max-sm:rounded-md'>
                            <Slider  {...Items}>
                                {
                                    tranding.map((productItem, productIndex) => {
                                        return (
                                            <div key={productIndex}>
                                                {
                                                    productItem.map((subItem, subIndex) => {
                                                        return (
                                                            <div className='cursor-pointer flex  w-[20vw] text-[#4b5966]  mt-5 items-center py-3 px-3 rounded-md max-sm:w-[80vw] max-sm:gap-3' key={subIndex}>
                                                                <div>
                                                                    <img src={subItem.url} alt="" width={73} />
                                                                </div>
                                                                <div className='space-y-1'>
                                                                    <div className='font-semibold'>{subItem.name}</div>
                                                                    <div className='text-sm'>{subItem.type}</div>
                                                                    <div className='flex gap-4 items-center'>
                                                                        <div className='font-bold'>${subItem.price}</div>
                                                                        <div className='line-through text-sm'>${subItem.discount}</div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        )
                                                    })
                                                }
                                            </div>
                                        )
                                    })
                                }
                            </Slider>
                        </div>
                    </div>
                    <div>
                        <div className='px-5 '>
                            <div className='flex justify-between items-center'>
                                <h1 className='text-[#4b5966] font-bold text-2xl'>Top <span className='text-[#5caf90]'>Rated</span></h1>
                                <div className='space-x-3'>
                                    <button className='text-[#4b5966] text-2xl font-bold cursor-pointer'>{'<'}</button>
                                    <button className='text-[#4b5966] text-2xl font-bold cursor-pointer'>{'>'}</button>
                                </div>
                            </div>
                            <div className='mt-5 max-sm:border max-sm:border-[#dadada] max-sm:rounded-md'>
                                <Slider  {...Items}>
                                    {
                                        topRated.map((productItem, productIndex) => {
                                            return (
                                                <div className='' key={productIndex}>
                                                    {
                                                        productItem.map((subItem, subIndex) => {
                                                            return (
                                                                <div className=' flex cursor-pointer w-[20vw] text-[#4b5966]  mt-5 items-center py-3 px-3 rounded-md max-sm:w-[80vw] max-sm:gap-3' key={subIndex} >
                                                                    <div>
                                                                        <img src={subItem.url} alt="" width={73} />
                                                                    </div>
                                                                    <div className='space-y-1'>
                                                                        <div className='font-semibold '>{subItem.name}</div>
                                                                        <div className='text-sm'>{subItem.type}</div>
                                                                        <div className='flex gap-4 items-center'>
                                                                            <div className='font-bold'>${subItem.price}</div>
                                                                            <div className='line-through text-sm'>${subItem.discount}</div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            )
                                                        })
                                                    }
                                                </div>
                                            )
                                        })
                                    }
                                </Slider>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className='px-5 max-sm:hidden'>
                            <div className='flex justify-between items-center'>
                                <h1 className='text-[#4b5966] font-bold text-2xl'>Top <span className='text-[#5caf90]'>Selling</span></h1>
                                <div className='space-x-3'>
                                    <button className='text-[#4b5966] text-2xl font-bold cursor-pointer'>{'<'}</button>
                                    <button className='text-[#4b5966] text-2xl font-bold cursor-pointer'>{'>'}</button>
                                </div>
                            </div>
                            <div className='mt-5 '>
                                <Slider  {...Items}>
                                    {
                                        topRated.map((productItem, productIndex) => {
                                            return (
                                                <div className='' key={productIndex}>
                                                    {
                                                        productItem.map((subItem, subIndex) => {
                                                            return (
                                                                <div className='flex cursor-pointer w-[20vw] text-[#4b5966]  mt-5 items-center py-3 px-3 rounded-md max-sm:w-[80vw] max-sm:gap-3' key={subIndex}>
                                                                    <div>
                                                                        <img src={subItem.url} alt="" width={73} />
                                                                    </div>
                                                                    <div className='space-y-1'>
                                                                        <div className='font-semibold '>{subItem.name}</div>
                                                                        <div className='text-sm'>{subItem.type}</div>
                                                                        <div className='flex gap-4 items-center'>
                                                                            <div className='font-bold'>${subItem.price}</div>
                                                                            <div className='line-through text-sm'>${subItem.discount}</div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            )
                                                        })
                                                    }
                                                </div>
                                            )
                                        })
                                    }
                                </Slider>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="Latest-Blog mt-20 hidden lg:block">
                    <h1 className='text-[25px] font-bold text-[#4b5966]'>Latest <span className='text-[#5caf90]'>Blog</span></h1>
                    <span className='text-sm text-gray-400'>We tackle interesting topics every day in 2025</span>
                    <div className='mt-5 cursor-pointer flex justify-between'>
                        <div className=' w-[17vw] max-sm:w-[60vw]'>
                            <img src="images/posters/img7.jpg" alt="" width={250} className='m-auto rounded-md' />
                            <div className='mt-3 px-3 text-gray-400'>
                                <span className='text-sm '>June 30,2022 - Organic</span>
                                <p className='font-semibold text-lg  mt-2 mb-3 text-[#4b5966]'>Marketing Guide: 5 Steps to Success to Way.</p>
                                <a href="" className='text-sm'>Read More {'>>'}</a>
                            </div>
                        </div>
                        <div className=' w-[17vw] max-sm:w-[60vw]'>
                            <img src="images/posters/img8.jpg" alt="" width={250} className='m-auto rounded-md' />
                            <div className='mt-3 px-3 text-gray-400'>
                                <span className='text-sm '>June 30,2022 - Organic</span>
                                <p className='font-semibold text-lg  mt-2 mb-3 text-[#4b5966]'>Marketing Guide: 5 Steps to Success to Way.</p>
                                <a href="" className='text-sm'>Read More {'>>'}</a>
                            </div>
                        </div>
                        <div className=' w-[17vw] max-sm:w-[60vw]'>
                            <img src="images/posters/img9.jpg" alt="" width={250} className='m-auto rounded-md' />
                            <div className='mt-3 px-3 text-gray-400'>
                                <span className='text-sm '>June 30,2022 - Organic</span>
                                <p className='font-semibold text-lg  mt-2 mb-3 text-[#4b5966]'>Marketing Guide: 5 Steps to Success to Way.</p>
                                <a href="" className='text-sm'>Read More {'>>'}</a>
                            </div>
                        </div>
                        <div className=' w-[17vw] max-sm:w-[60vw]'>
                            <img src="images/posters/img10.jpg" alt="" width={250} className='m-auto rounded-md' />
                            <div className='mt-3 px-3 text-gray-400'>
                                <span className='text-sm '>June 30,2022 - Organic</span>
                                <p className='font-semibold text-lg  mt-2 mb-3 text-[#4b5966]'>Marketing Guide: 5 Steps to Success to Way.</p>
                                <a href="" className='text-sm'>Read More {'>>'}</a>
                            </div>
                        </div>
                        <div className=' w-[17vw] max-sm:hidden'>
                            <img src="images/posters/img11.jpg" alt="" width={250} className='m-auto rounded-md' />
                            <div className='mt-3 px-3 text-gray-400'>
                                <span className='text-sm '>June 30,2022 - Organic</span>
                                <p className='font-semibold text-lg  mt-2 mb-3 text-[#4b5966]'>Marketing Guide: 5 Steps to Success to Way.</p>
                                <a href="" className='text-sm'>Read More {'>>'}</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="line h-[1px] bg-[#efefef] w-[100%] mt-16"></div>
                <ToastContainer />
            </div>
        </>
    )
}

export default Home
