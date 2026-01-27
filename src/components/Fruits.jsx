import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react';
import GoToTop from './GoToTop';
import Slider from "react-slick";
import { ToastContainer, toast } from 'react-toastify';


const Fruits = ({ fruits, detail, AddWishList }) => {
    const [fruitCrousal, setFruitCrousal] = useState([
        {
            url: "../images/posters/img12.jpg",
            title: "Life is short. Buy the fruits",
            starting: "Starting at $ 29.9"
        },
        {
            url: "../images/posters/img3.jpg",
            title: "Fruit is nature’s candy.",
            starting: "Starting at $ 29.9"
        }
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

    const notifyInsert = () => {
        setTimeout(() => {
            window.location.reload();
        }, 2500);
        toast("The product has been successfully added to the wishlist")
    };
    return (
        <>
            <div className="crousal mt-5">
                <Slider {...settings}>
                    {
                        fruitCrousal.map((items, index) => {
                            return (
                                <div className='relative ' key={items}>
                                    <span className='text-green-600 lg:right-[20vw] font-semibold lg:text-[20px] lg:pl-24 lg:mt-24 absolute right-5 top-14'>{items.starting}</span>
                                    <div className='flex '>
                                        <img src={items.url} alt="img" className='lg:h-[70vh] lg:w-full h-48' />
                                        <h1 className='absolute lg:top-1 lg:right-5 lg:text-5xl font-bold text-[#4b5966] w-[35vw] lg:leading-[8vh] lg:pt-36 lg:pl-24 z-10  right-1 pt-20 '>{items.title}</h1>
                                    </div>
                                    <button className='bg-[#4b5966] absolute right-[21vw] top-1 mt-72 ml-24 text-white p-4 py-3 rounded-md hover:bg-[#5caf90] transition-all cursor-pointer '>Shop Now {'>>'}</button>
                                </div>
                            )
                        })
                    }
                </Slider>
            </div>
            <div className='Fruits mt-10'>
                <h1 className='text-[25px] font-bold text-[#4b5966] '>🍊 Healthy & Tasty – <span className='text-[#5caf90]'>Get Fresh Fruits! 🍉</span></h1>
                <span className='text-gray-400 text-sm mt-5'>Don't wait. The time will never be just right.</span>
                <div className='lg:grid lg:grid-cols-5 gap-7 md:grid-cols-4 grid grid-cols-2'>
                    {
                        fruits.map((productItem, productIndex) => {
                            return (
                                <div className='group mt-7 rounded-md cursor-pointer relative' key={productIndex}  >

                                    <div className='border border-[#ececec] lg:w-[15vw] flex-col justify-center   w-[43vw] gap-5 ' >
                                        <img src={productItem.url} alt="" width={250} className='w-[100%]' />
                                        <div className='invisible flex justify-evenly  w-36 m-auto  group-hover:visible group-hover:transition group-hover:delay-30 group-hover:duration-300 group-hover:ease-in-out group-hover:translate-y-[-17px] group-hover:scale-110 '>
                                            <button className='heart bg-white p-1 rounded-md border border-[#d9d9d9] cursor-pointer hover:bg-[#76ffcd]' onClick={() => { AddWishList(productItem), notifyInsert() }}><img src="images/SVGs/heart.svg" alt="heart" width={17} /></button>
                                            <button className='bg-white p-1 rounded-md border border-[#d9d9d9] cursor-pointer hover:bg-[#76ffcd]'><img src="images/SVGs/eye.svg" alt="eye" width={17} /></button>
                                            <button className='bg-white p-1 rounded-md border border-[#d9d9d9] cursor-pointer hover:bg-[#76ffcd]'><img src="images/SVGs/exchange.svg" alt="exchange" width={17} /></button>
                                            <button className='bg-white p-1 rounded-md border border-[#d9d9d9] cursor-pointer hover:bg-[#76ffcd]'><img src="images/SVGs/cart.svg" alt="cart" width={17} /></button>
                                        </div>
                                    </div>
                                    <Link to="/detail" onClick={() => { detail(productItem) }}>
                                        <div className='relative lg:w-[15vw] px-5 space-y-3 border border-[#ececec] h-48 rounded-md w-[43vw] max-sm:border-[#c6c6c6] max-md:h-44'>
                                            <div className='text-sm text-gray-400 mt-3 '>{productItem.type}</div>
                                            <div className='text-gray-400 font-semibold text-lg'>{productItem.name}</div>
                                            <div className='absolute pb-5 bottom-5 max-sm:bottom-0'>
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
                <ToastContainer />
                <GoToTop />
            </div>
        </>
    )
}

export default Fruits