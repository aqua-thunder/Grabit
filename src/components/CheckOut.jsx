import React from 'react'
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

const CheckOut = ({ AC, handleDelete }) => {
    useEffect(() => {
        const hasRefreshed = localStorage.getItem("hasRefreshed");
        if (!hasRefreshed) {
            localStorage.setItem("hasRefreshed", "true")

            window.location.reload();

        }
        if (hasRefreshed) {
            localStorage.setItem("hasRefreshed", "")
        }

    }, []);

    const Subtotal = AC.map(item => item.price * item.quantity).reduce((total, value) => total + value, 0);
    const discount = AC.map(item => item.discount * item.quantity).reduce((total, value) => total + value, 0);
    const total = Subtotal - discount + 15;

    const notify = () => toast("Item has beed deleted from the cart successfully");
    return (
        <>
            <div className='flex justify-between border border-[#e2e2e2] px-6 py-3 rounded-md mb-5'>
                <span className='font-bold text-[#4b5966]'>Cart Page</span>
                <div>
                    <span className='text-sm font-semibold text-[#4b5966]'>Home <span className='text-[#5caf90]'>{">"} Cart</span> </span>
                </div>
            </div>
            <div className='mb-5'>
                <span className='text-2xl font-bold text-[#4b5966]'>Your <span className='text-[#5caf90]'>Cart</span></span>
            </div>
            <div className='flex gap-3'>
                <div className=' w-[70%] border border-[#dddddd]  rounded-3xl px-3 pt-3 max-sm:mb-[10vw]'>
                    {
                        AC.length === 0 ? <div className='mt-3 px-3'>
                            <span className='font-semibold text-gray-700 text-lg'>Your cart is empty! Start shopping now and fill it with something awesome!</span>
                            <Link to="/" >
                                <button className='block bg-[#5caf90] text-white font-bold px-5 py-2 rounded-md bottom-0 mt-40 cursor-pointer'>Start Shopping</button>
                            </Link>
                        </div> :
                            AC.map((productItem, productInex) => {
                                return (
                                    <div key={productInex}>
                                        <div className='flex justify-between  mt-1  py-2'>
                                            <div className='flex items-center space-x-4'>
                                                <img src={productItem.url} alt="" width={140} />
                                                <div className='text-[12px] font-semibold text-[#4b5966] space-y-1'>
                                                    <div className='font-bold text-[15px] text-black'>{productItem.name}</div>
                                                    <div>Brand: {productItem.type}</div>
                                                    <div>Quantity: {productItem.qua}</div>
                                                    <div className='space-x-2'>
                                                        <span className='font-bold text-black text-lg'>${productItem.price}.00</span>
                                                        <span className='text-[13px] line-through'>${productItem.discount}.00</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='mt-3 cursor-pointer mr-5' onClick={(e) => { { handleDelete(e, productItem.id), notify() } }}>
                                                <img src="images/delete.png" alt="delete" width={23} height={17} />
                                            </div>

                                        </div>
                                        <div className="line h-[1px] w-full bg-[#dddddd]"></div>

                                    </div>
                                )
                            })
                    }
                </div>
                <div className='border border-[#dddddd] rounded-3xl pt-4 px-4 pb-5 font-bold w-[30%] text-sm text-[#4b5966] space-y-3 max-h-[40vh] max-sm:max-h-[50vh]'>
                    <h1 className='text-lg'>Order Summary</h1>
                    <div className='flex justify-between'>
                        <span>Subtotal: </span>
                        <span className='font-bold text-black'>${AC.map(item => item.price * item.quantity).reduce((total, value) => total + value, 0)}.00</span>
                    </div>
                    <div className='flex justify-between'>
                        <span>Discount: </span>
                        <span className='font-bold text-red-500'>-${AC.map(item => item.discount * item.quantity).reduce((total, value) => total + value, 0)}.00</span>
                    </div>
                    <div className='flex justify-between'>
                        <span>Delivery Fee</span>
                        <span className='font-bold text-black'>{AC.length == 0 ? "00" : "15"}</span>
                    </div>
                    <div className="line h-[1px] w-full bg-[#dddddd]"></div>
                    <div className='flex justify-between text-lg'>
                        <span>Total</span>
                        <span className='font-bold text-black '>${AC.length == 0 ? "00" : total}.00</span>
                    </div>
                    <button className='bg-black px-5 w-[24vw] rounded-full py-3 text-white font-bold cursor-pointer mt-5 text-lg max-sm:mt-10 max-sm:w-[100%]'  >Payment</button>

                </div>
                <ToastContainer />
            </div>
        </>
    )
}

export default CheckOut
