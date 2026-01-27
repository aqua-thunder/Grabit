import React from 'react'
import { useState, useEffect, useRef } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import GoToTop from './GoToTop';
import { Link } from 'react-router-dom';

const Detail = ({ productDetail, product, AddToCart, AddWishList, detail }, props) => {
    const [Info, setInfo] = useState([])
    useEffect(() => {
        setInfo(productDetail)
    }, [productDetail])


    useEffect(() => {
        const hasRefreshed = localStorage.getItem("hasRefreshed");
        if (!hasRefreshed) {
            localStorage.setItem("hasRefreshed", "true")
            setTimeout(() => {
                window.location.reload();
            }, 700);
        }
        if (hasRefreshed) {
            localStorage.setItem("hasRefreshed", "")
        }

    }, []);

    const CaregoryRef = useRef(0);
    const WeightRef = useRef(0);
    const colorRef = useRef(0);
    const PriceRef = useRef(0);

    const clickCategory = () => {
        CaregoryRef.current.classList.toggle('hidden');
    }
    const clickWeight = () => {
        WeightRef.current.classList.toggle('hidden');
    }
    const clickColor = () => {
        colorRef.current.classList.toggle("hidden");
    }

    const PriceClick = () => {
        PriceRef.current.classList.toggle("hidden");
    }

    const [count, setcount] = useState(1)
    const decrese = () => {
        setcount(count - 1);
    }
    const increase = () => {
        setcount(count + 1);
    }
    if (props.PrInfo) {
        let h = document.getElementById("prInfo");
        h.style.filter = props.filter;
    }
    const notify = () => {
        setTimeout(() => {
            // window.location.reload();
        }, 2500);
        toast("Item has beed added to the cart successfully")
    };
    const notifyInsert = () => {
        setTimeout(() => {
            window.location.reload();
        }, 2500);
        toast("The product has been successfully added to the wishlist")
    };

    return (
        <div id='prInfo'>
            <div>
                <div className='flex justify-between border border-[#e2e2e2] px-6 py-3 rounded-md'>
                    <span className='font-bold text-[#4b5966]'>Product Page</span>
                    <div>
                        <span className='text-sm font-semibold text-[#4b5966]'>Home <span className='text-[#5caf90]'>{">"} Product Page</span> </span>
                    </div>
                </div>
                <div className='flex mt-20 gap-6 '>
                    <div>
                        <ul className='bg-[#f8f8fb] font-bold text-[#4b5966] w-[19vw] px-5 py-3 rounded-md border border-[#e2e2e2] max-sm:w-[70vw] max-sm:hidden'>
                            <div>
                                <div className='flex justify-between border-b-1 border-[#e7e7e7] cursor-pointer' onClick={() => { clickCategory() }}>
                                    <li className='py-4'>Category</li>
                                    <img src="images/SVGs/down-arrow.svg" alt="" width={12} />
                                </div>
                                <div className='hidden  w-[10vw] text-sm font-semibold space-y-3 px-3' ref={CaregoryRef}>
                                    <div className='mt-3'><li>Dried Fruit</li></div>
                                    <div><li>Cookies</li></div>
                                    <div><li>Foods</li></div>
                                    <div><li>Fresh Fruits</li></div>
                                    <div><li>Tuber Root</li></div>
                                    <div><li>Vegetables</li></div>
                                    <div><li>Snacks</li></div>
                                    <div><li>Unisex</li></div>
                                    <div><li>Jewellery</li></div>
                                </div>
                            </div>
                            <div>
                                <div className='flex justify-between border-b-1 border-[#e7e7e7] cursor-pointer' onClick={() => { clickWeight() }}>
                                    <li className='py-4'>Weight</li>
                                    <img src="images/SVGs/down-arrow.svg" alt="" width={12} />
                                </div>
                                <div className='hidden w-[10vw] text-sm font-semibold space-y-3 px-3 mt-3' ref={WeightRef}>
                                    <div className='space-x-3 space-y-2'><input type="checkbox" name="2kd" /> <label htmlFor="">2kg</label></div>
                                    <div className='space-x-3 space-y-2'><input type="checkbox" name="2kd" /> <label htmlFor="">5kg</label></div>
                                    <div className='space-x-3 space-y-2'><input type="checkbox" name="2kd" /> <label htmlFor="">10kg</label></div>
                                    <div className='space-x-3 space-y-2'><input type="checkbox" name="2kd" /> <label htmlFor="">2pack</label></div>
                                    <div className='space-x-3 space-y-2'><input type="checkbox" name="2kd" /> <label htmlFor="">500g</label></div>
                                    <div className='space-x-3 space-y-2'><input type="checkbox" name="2kd" /> <label htmlFor="">2pcs</label></div>
                                    <div className='space-x-3 space-y-2'><input type="checkbox" name="2kd" /> <label htmlFor="">100g</label></div>
                                    <div className='space-x-3 space-y-2'><input type="checkbox" name="2kd" /> <label htmlFor="">3pcs</label></div>

                                </div>
                            </div>
                            <div>
                                <div className='flex justify-between border-b-1 border-[#e7e7e7] cursor-pointer' onClick={() => { clickColor() }}>
                                    <li className='py-4'>Color</li>
                                    <img src="images/SVGs/down-arrow.svg" alt="" width={12} />
                                </div>
                                <div className='hidden ' ref={colorRef}>
                                    <div className='flex gap-3'>
                                        <div className='w-[10px] h-[10px] bg-[#d3e0f9] mt-5 rounded-full p-3 cursor-pointer hover:border-1'></div>
                                        <div className='w-[10px] h-[10px] bg-[#fd9bac] mt-5 rounded-full p-3 cursor-pointer hover:border-1'></div>
                                        <div className='w-[10px] h-[10px] bg-[#4a4a4b] mt-5 rounded-full p-3 cursor-pointer hover:border-1'></div>
                                        <div className='w-[10px] h-[10px] bg-[#68fd7f] mt-5 rounded-full p-3 cursor-pointer hover:border-1'></div>
                                        <div className='w-[10px] h-[10px] bg-[#fda18d] mt-5 rounded-full p-3 cursor-pointer hover:border-1'></div>
                                        <div className='w-[10px] h-[10px] bg-[#f386fe] mt-5 rounded-full p-3 cursor-pointer hover:border-1'></div>
                                        <div className='w-[10px] h-[10px] bg-[#fdf14b] mt-5 rounded-full p-3 cursor-pointer hover:border-1'></div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className='flex justify-between border-b-1 border-[#e7e7e7] cursor-pointer' onClick={() => { PriceClick() }}>
                                    <li className='py-4'>Price</li>
                                    <img src="images/SVGs/down-arrow.svg" alt="" width={12} />
                                </div>
                                <div className='hidden  ' ref={PriceRef}>
                                    <div className='flex justify-evenly'>
                                        <div className='text-center'>From <div>0</div></div>
                                        <span>-</span>
                                        <div className='text-center'>To <div>0</div></div>
                                    </div>
                                    <input type="range" min="1" max="100" className='m-auto w-[100%]'></input>
                                </div>
                            </div>
                            <div className='flex justify-between border-b-1 border-[#e7e7e7]'>
                                <li className='py-3'>Tags</li>
                            </div>
                            <button className='bg-[#5caf90] text-white px-3 py-2 m-3 rounded-md cursor-pointer hover:bg-[#4b5966]'>Filter</button>
                        </ul>
                    </div>
                    <div>
                        <div className=' gap-7 lg:grid lg:grid-cols-2 grid grid-cols-1 justify-center'>
                            <div className='mx-auto'>
                                {
                                    Info?.map((productItem, productIndex) => {
                                        return (
                                            <div className='border border-[#dedede] lg:w-[30vw] rounded-md w-52 mx-auto' key={productIndex}>
                                                <img src={productItem.url} alt="" />
                                            </div>
                                        )
                                    })
                                }
                            </div>
                            <div>
                                {
                                    Info?.map((productItem, productIndex) => {
                                        return (
                                            <div className='text-[#4b5966] space-y-4  lg:w-[32vw] w-[20vw]' key={productIndex}>
                                                <span className='text-2xl font-semibold '>{productItem.name}</span>
                                                <div className='flex mt-5'>
                                                    <img src="images/star.png" alt="star" width={15} />
                                                    <img src="images/star.png" alt="star" width={15} />
                                                    <img src="images/star.png" alt="star" width={15} />
                                                    <img src="images/star.png" alt="star" width={15} />
                                                    <img src="images/star.png" alt="star" width={15} />
                                                </div>
                                                <div className='space-x-3'>
                                                    <span className='font-bold text-2xl'>$ {productItem.price}.00</span>
                                                    <span className='font-semibold text-[#5caf90] text-[18px]'>- 74%</span>
                                                </div>
                                                <div className='flex justify-between items-center'>
                                                    <span className=' text-[20px] '>MRP: <span className='line-through'>${productItem.discount}.00</span></span>
                                                    <span className='text-[#5caf90] font-semibold'>IN STOCK</span>
                                                </div>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos voluptatibus sint delectus natus doloribus amet dignissimos neque consequuntur accusamus nulla.</p>
                                                <ul className='ml-4'>
                                                    <li className='font-bold list-disc'>Brand : <span className='font-normal'>{productItem.brand}</span></li>
                                                    <li className='font-bold list-disc'>Comes In : <span className='font-normal'>{productItem.comesIn}</span></li>
                                                    <li className='font-bold list-disc'>Quantity : <span className='font-normal'>{productItem.qua}</span></li>
                                                    <li className='font-bold list-disc'>Outer Material : <span className='font-normal'>A Gragde Standard Quality</span></li>
                                                </ul>
                                                <div className='flex justify-evenly mt-10'>
                                                    <div className='items-center text-lg font-bold rounded-md border border-[#ebebeb] w-32 flex justify-between cursor-pointer'>
                                                        <button className='cursor-pointer p-2 px-3' onClick={() => decrese()}>-</button>
                                                        <span>{count}</span>
                                                        <button className='cursor-pointer p-2 px-3' onClick={() => increase()}>+</button>
                                                    </div>
                                                    <button className='bg-[#4b5966] py-3 px-7 rounded-md text-white font-bold text-[14px] cursor-pointer hover:bg-[#5caf90] transition-all' onClick={() => { AddToCart(productItem), notify() }}>ADD TO CART</button>
                                                    <div className='border border-[#ebebeb]  p-3 cursor-pointer rounded-md hover:bg-[#76ffcd]' onClick={() => { { AddWishList(productItem), notifyInsert() } }}>
                                                        <img src="images/SVGs/heart.svg" alt="" width={20} />
                                                    </div>
                                                    <div className='border border-[#ebebeb]  p-3 cursor-pointer rounded-md hover:bg-[#76ffcd]'>
                                                        <img src="images/SVGs/eye.svg" alt="" width={20} />
                                                    </div>

                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                        <div className='flex justify-between mt-10'>
                            {
                                product.slice(0, 3).map((productItem, productIndex) => {
                                    return (
                                        <Link to="/detail" key={productIndex} onClick={() => { detail(productItem) }}>
                                            <div className='flex items-center gap-5 bg-[#f9f6f6] py-3 rounded-md px-7 text-[#4b5966] cursor-pointer' >
                                                <img src={productItem.url} alt="" width={80} className='rounded-sm border border-[#e2e2e2]' />
                                                <div className='space-y-3'>
                                                    <div className='font-semibold text-sm'>{productItem.name}</div>
                                                    <span className='font-semibold'>$ {productItem.price}.00</span>
                                                    <span className='line-through ml-3 text-sm'>${productItem.discount}.00</span>
                                                </div>
                                            </div>
                                        </Link>
                                    )
                                })
                            }
                        </div>
                        <div>
                            <div className='flex gap-3 mt-10'>
                                <button className='hover:bg-[#5caf90] transition-all hover:text-white border border-gray-300 px-4 font-semibold py-2 rounded-md'>Detail</button>
                                <button className='hover:bg-[#5caf90] transition-all hover:text-white border border-gray-300 px-4 font-semibold py-2 rounded-md'>Specification</button>
                                <button className='hover:bg-[#5caf90] transition-all hover:text-white border border-gray-300 px-4 font-semibold py-2 rounded-md'>Vendor</button>
                                <button className='hover:bg-[#5caf90] transition-all hover:text-white border border-gray-300 px-4 font-semibold py-2 rounded-md'>Reviews</button>
                            </div>
                            <div className='border border-gray-200 px-10 mt-3 rounded-md pb-5'>
                                <div className='mt-7  text-[#4b5966] font-semibold text-sm/6'>
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam aliquid voluptas quos quis animi dolore, rem et nemo rerum facilis labore dolor cum repellat ipsum debitis tempora dolores exercitationem, libero sapiente deserunt quam dolorum modi quia. Quia iusto non cum cumque velit quod doloremque ipsum corrupti exercitationem, blanditiis dolorum cupiditate ad, commodi omnis debitis veniam sit. Quasi necessitatibus nesciunt vitae sapiente voluptatum magni cupiditate maxime repudiandae vel, quae tempora exercitationem, quia sunt accusamus. Aperiam accusantium asperiores exercitationem sit, nihil deleniti eum ad aspernatur ea officiis laudantium magni, laboriosam harum sapiente odio esse impedit, corrupti vero praesentium quisquam nam natus. Laborum?
                                </div>
                                <div className='mt-4 text-sm/6 text-[#4b5966] font-semibold'>
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam aliquid voluptas quos quis animi dolore, rem et nemo rerum facilis labore dolor cum repellat ipsum debitis tempora dolores exercitationem, libero sapiente deserunt quam dolorum modi quia. Quia iusto non cum cumque velit quod doloremque ipsum corrupti exercitationem, blanditiis dolorum cupiditate ad, commodi omnis debitis veniam sit. Quasi necessitatibus nesciunt vitae sapiente voluptatum magni cupiditate maxime repudiandae vel, quae tempora exercitationem, quia sunt accusamus. Aperiam accusantium asperiores exercitationem sit, nihil deleniti eum ad aspernatur ea officiis laudantium magni, laboriosam harum sapiente odio esse impedit, corrupti vero praesentium quisquam nam natus. Laborum?
                                </div>
                                <div className='mt-4 text-sm/6 text-[#4b5966] font-semibold'>
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam aliquid voluptas quos quis animi dolore, rem et nemo rerum facilis labore dolor cum repellat ipsum debitis tempora dolores exercitationem, libero sapiente deserunt quam dolorum modi quia. Quia iusto non cum cumque velit quod doloremque ipsum corrupti exercitationem, blanditiis dolorum cupiditate ad, commodi omnis debitis veniam sit. Quasi necessitatibus nesciunt vitae sapiente voluptatum magni cupiditate maxime repudiandae vel, quae tempora exercitationem, quia sunt accusamus. Aperiam accusantium asperiores exercitationem sit, nihil deleniti eum ad aspernatur ea officiis laudantium magni, laboriosam harum sapiente odio esse impedit, corrupti vero praesentium quisquam nam natus. Laborum?
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi est pariatur earum adipisci aperiam, sint itaque ex maiores vero deserunt! Labore soluta, nisi sed aliquam ipsam minus sunt ad eveniet vero, quasi cupiditate odio maiores. Ullam rerum sint incidunt earum non repellat perferendis. Doloribus aut facilis sequi, ea consequatur enim porro quas aliquid odit repudiandae voluptatem explicabo distinctio eos dolor numquam aspernatur molestiae adipisci saepe rerum tenetur similique at. Voluptates optio cum cupiditate, exercitationem non obcaecati eum laudantium ad ducimus deserunt! Nulla vero nam fugit nihil magnam dolorum. Autem voluptatem, natus reprehenderit accusamus aliquid quaerat quae rerum fugit facilis provident.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer />
            <GoToTop />
        </div >

    )
}

export default Detail
