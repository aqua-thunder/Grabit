import React from 'react'
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';



const WishList = ({ wishList, handleDeleteWishList, AddToCart }) => {

    const notify = () => {
        setTimeout(() => {
            window.location.reload()
        }, 2500);
        toast("The product has been successfully added to the cart");
    };
    const notifyDelete = () => toast("The product has been successfully deleted from the wishlist");
    return (
        <>
            <div className="p-6 max-w-4xl mx-auto">
                <h2 className="text-2xl font-bold mb-4 text-[#4b5966] ">Your <span className='text-[#5caf90]'>Wishlist</span></h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-5 max-sm:grid max-sm:grid-cols-3 max-sm:mb-10">
                    {wishList.length === 0 ?
                        <div className="flex flex-col items-center w-[53vw] border border-[#dcdcdc] rounded-md py-10 ">
                            <lord-icon
                                src="https://cdn.lordicon.com/ulnswmkk.json"
                                trigger="hover"
                                colors="primary:#6a7282"
                                style={{ "width": "30px", "height": "30px" }}>
                            </lord-icon>
                            <p className="text-lg text-gray-500">Your wishlist is empty</p>
                            <p className="text-sm text-gray-400 mb-4">Start adding your favorite items now!</p>
                            <Link to="/">
                                <button variant="default" size="lg" className="px-6 py-3 cursor-pointer">Explore Products</button>
                            </Link>
                        </div> :
                        wishList.map((productItem, productIndex) => (
                            <div key={productIndex} className="p-4 rounded-2xl shadow-md ">
                                <img
                                    src={productItem.url}
                                    alt={productItem.name}
                                    className="w-full h-40 object-cover rounded-lg"
                                />
                                <div className="p-2 relative h-[23vh]">
                                    <h3 className="text-lg font-medium">{productItem.name}</h3>
                                    <p className="text-gray-500">Price : {productItem.price}.00</p>
                                    <p className="  text-gray-400 text-sm">Category: {productItem.type}</p>
                                    <p className=" italic  text-gray-600 text-sm">Quantity: {productItem.qua}</p>
                                    <div className="absolute bottom-0">
                                        <div className='flex gap-20'>
                                            <button className='handleDelete bg-black text-white px-4 py-2 rounded-md text-[13px] cursor-pointer ' onClick={() => { { AddToCart(productItem), notify() } }}>
                                                <span /> Add to Cart
                                            </button>
                                            <button className='cursor-pointer' size="sm" onClick={(e) => { { handleDeleteWishList(e, productItem.id), notifyDelete() } }}>
                                                <span className="w-4 h-4 text-red-500" /> Delete
                                            </button>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        ))}
                </div>
                <ToastContainer />
            </div>
        </>
    )
}

export default WishList
