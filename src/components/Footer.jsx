import React from 'react'

const Footer = () => {
    return (
        <>
            <div className='footer mt-20 flex justify-around max-sm:mt-0  '>
                <div className=' w-[21vw] space-y-5 max-sm:w-[90vw]'>
                    <img src="images/logo.png" alt="logo" width={150} />
                    <span className='text-gray-400 font-medium'>Grabit is the biggest market of grocery products. Get your daily needs from our store.</span>
                    <div className='flex gap-5 mt-7'>
                        <a id="link" href="#element_target" className='flex bg-[#4b5966] items-center gap-2 py-1 px-3 rounded-md cursor-pointer '>
                            <img src="images/SVGs/play-store.svg" alt="" width={30} />
                            <div className='flex flex-col  text-white'>
                                <span className='text-[10px]'>GET IT ON</span>
                                <span className='font-bold text-sm'>Google Play</span>
                            </div>
                        </a>
                        <a id="link" href="#element_target" className='flex bg-[#4b5966] items-center gap-2 py-1 px-3 rounded-md cursor-pointer '>
                            <img src="images/SVGs/apple.svg" alt="" width={30} />
                            <div className='flex flex-col  text-white'>
                                <span className='text-[10px]'>GET IT ON</span>
                                <span className='font-bold text-sm'>Google Play</span>
                            </div>
                        </a>
                    </div>
                </div>
                <div>
                    <ul className='text-gray-400 space-y-3 max-sm:hidden'>
                        <li className='text-[#4b5966] font-bold text-lg'>Category</li>
                        <div className="line h-[1px] bg-[#e7e7e7] w-[100%] mt-3"></div>
                        <li className='cursor-pointer hover:text-[#5caf90]'>Dried Fruit</li>
                        <li className='cursor-pointer hover:text-[#5caf90]'>Cookies</li>
                        <li className='cursor-pointer hover:text-[#5caf90]'>Foods</li>
                        <li className='cursor-pointer hover:text-[#5caf90]'>Fresh Fruits</li>
                        <li className='cursor-pointer hover:text-[#5caf90]'>Tuber Root</li>
                        <li className='cursor-pointer hover:text-[#5caf90]'>Vegetables</li>
                    </ul>
                </div>
                <div>
                    <ul className='text-gray-400 space-y-3 max-sm:hidden'>
                        <li className='text-[#4b5966] font-bold text-lg'>Company</li>
                        <div className="line h-[1px] bg-[#e7e7e7] w-[100%] mt-3"></div>
                        <li className='cursor-pointer hover:text-[#5caf90]'>Dried Fruit</li>
                        <li className='cursor-pointer hover:text-[#5caf90]'>Cookies</li>
                        <li className='cursor-pointer hover:text-[#5caf90]'>Foods</li>
                        <li className='cursor-pointer hover:text-[#5caf90]'>Fresh Fruits</li>
                        <li className='cursor-pointer hover:text-[#5caf90]'>Tuber Root</li>
                        <li className='cursor-pointer hover:text-[#5caf90]'>Vegetables</li>
                    </ul>
                </div>
                <div>
                    <ul className='text-gray-400 space-y-3 max-sm:hidden'>
                        <li className='text-[#4b5966] font-bold text-lg'>Account</li>
                        <div className="line h-[1px] bg-[#e7e7e7] w-[100%] mt-3"></div>
                        <li className='cursor-pointer hover:text-[#5caf90]'>Dried Fruit</li>
                        <li className='cursor-pointer hover:text-[#5caf90]'>Cookies</li>
                        <li className='cursor-pointer hover:text-[#5caf90]'>Foods</li>
                        <li className='cursor-pointer hover:text-[#5caf90]'>Fresh Fruits</li>
                        <li className='cursor-pointer hover:text-[#5caf90]'>Tuber Root</li>
                        <li className='cursor-pointer hover:text-[#5caf90]'>Vegetables</li>
                    </ul>
                </div>
                <div>
                    <ul className='text-gray-400 space-y-3'>
                        <li className='text-[#4b5966] font-bold text-lg'>Contact</li>
                        <div className="line h-[1px] bg-[#e7e7e7] w-[100%] mt-3"></div>

                        <li className='flex items-center gap-2'>
                            <img src="/images/SVGs/location.svg" alt="email" width={25} />
                            <p>2548 Broaddus Maple Court, Madisonville KY 4783, USA.</p>
                        </li>
                        <li className='flex items-center gap-2'>
                            <img src="/images/SVGs/whatsapp.svg" alt="whatsapp" width={25} />
                            <p>+00 9876543210</p>
                        </li>
                        <li className='flex items-center gap-2'>
                            <img src="/images/SVGs/email.svg" alt="email" width={25} />
                            <p>example@email.com</p>
                        </li>
                    </ul>
                    <div className='flex gap-2 mt-5'>
                        <img src="images/SVGs/facebook.svg" alt="facebook" width={30} className='bg-[#4b5966] p-2 rounded-sm cursor-pointer' />
                        <img src="images/SVGs/twitter.svg" alt="twitter" width={30} className='bg-[#4b5966] p-2 rounded-sm cursor-pointer' />
                        <img src="images/SVGs/linked-in.svg" alt="linkedin" width={30} className='bg-[#4b5966] p-2 rounded-sm cursor-pointer' />
                        <img src="images/SVGs/instagram.svg" alt="instagram" width={34} className='bg-[#4b5966] p-2 rounded-sm cursor-pointer' />
                    </div>
                </div>
            </div>
            <a id='link' href='#element_target' className='absolute right-28 cursor-pointer max-sm:right-[58vw]'><img src="images/SVGs/up-arrow.svg" alt="up arrow" width={46} /></a>

        </>
    )
}

export default Footer
