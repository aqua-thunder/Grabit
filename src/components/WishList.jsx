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
            <div className="p-4 md:p-6 lg:max-w-6xl md:max-w-4xl mx-auto">
                <h2 className="text-2xl font-bold mb-4 text-[#4b5966] ">Your <span className='text-[#5caf90]'>Wishlist</span></h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-5 mb-10">
                    {wishList.length === 0 ?
                        <div className="col-span-full flex flex-col items-center w-full border border-[#dcdcdc] rounded-md py-10 ">
                            <lord-icon
                                src="https://cdn.lordicon.com/ulnswmkk.json"
                                trigger="hover"
                                colors="primary:#6a7282"
                                style={{ "width": "30px", "height": "30px" }}>
                            </lord-icon>
                            <p className="text-lg text-gray-500 mt-2">Your wishlist is empty</p>
                            <p className="text-sm text-gray-400 mb-4">Start adding your favorite items now!</p>
                            <Link to="/">
                                <button variant="default" size="lg" className="px-6 py-3 bg-[#5caf90] text-white rounded-md hover:bg-[#4b5966] transition-colors cursor-pointer">Explore Products</button>
                            </Link>
                        </div> :
                        wishList.map((productItem, productIndex) => (
                            <div key={productIndex} className="p-4 rounded-2xl shadow-md border border-gray-100 flex flex-col h-full bg-white">
                                <img
                                    src={productItem.url}
                                    alt={productItem.name}
                                    className="w-full h-48 object-cover rounded-lg"
                                />
                                <div className="p-2 flex-grow flex flex-col mt-2">
                                    <h3 className="text-lg font-medium text-[#4b5966]">{productItem.name}</h3>
                                    <p className="text-gray-500 font-semibold mt-1">Price : ${productItem.price}.00</p>
                                    <p className="text-gray-400 text-sm mt-1">Category: {productItem.type}</p>
                                    <p className="italic text-gray-600 text-sm">Quantity: {productItem.qua}</p>

                                    <div className="mt-auto pt-4 flex justify-between items-center gap-2">
                                        <button className='bg-[#4b5966] text-white px-3 py-2 rounded-md text-[13px] hover:bg-[#5caf90] transition-colors cursor-pointer flex-1' onClick={() => { AddToCart(productItem), notify() }}>
                                            Add to Cart
                                        </button>
                                        <button className='text-red-500 hover:text-red-700 font-medium text-sm cursor-pointer' onClick={(e) => { handleDeleteWishList(e, productItem.id), notifyDelete() }}>
                                            Delete
                                        </button>
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
