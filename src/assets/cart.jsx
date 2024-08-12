import MyContext from "../Context/context";

const ShoppingCart = () => {
    return (
        <div >
        <div className="max-w-[1100px] mx-auto pt-20">
            <h2 className="text-center py-24 pb-16">Shopping Cart</h2>
            
            <div className="grid grid-cols-12 max-md:hidden py-6 border-t border-b border-gray-800 mx-16">
                <div className="col-span-12 md:col-span-7">
                    <p className="font-normal text-lg leading-8 text-gray-400">Product Details</p>
                </div>
                <div className="col-span-12 md:col-span-5">
                    <div className="grid grid-cols-5">
                        <div className="col-span-3">
                            <p className="font-normal text-lg leading-8 text-gray-400 text-center">Quantity</p>
                        </div>
                        <div className="col-span-2">
                            <p className="font-normal text-lg leading-8 text-gray-400 text-center">Total</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-col min-[500px]:flex-row min-[500px]:items-center gap-5 py-10  border-b border-gray-800 group mx-16">
                <div className="w-full md:max-w-[126px]">
                    <img src="/Relax2.png" alt="" className="mx-auto rounded-xl"></img>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-4 w-full">
                    <div className="md:col-span-2">
                        <div className="flex flex-col max-[500px]:items-center gap-3">
                            <p className="font-semibold leading-7 text-black">Name of the Box</p>
                            <p className="font-medium leading-7 text-gray-600 transition-all duration-300 hover:text-orange-700">Box price</p>
                        </div>
                    </div>
                    
                    <div className="flex items-center max-[500px]:justify-center h-full max-md:mt-3">
                        <div className="flex items-center h-full">
                            <button className="group rounded-l-xl px-5 py-[18px] border border-gray-200 flex items-center justify-center shadow-sm shadow-transparent transition-all duration-500 hover:bg-gray-50 hover:border-gray-300 hover:shadow-gray-300 focus-within:outline-gray-300">
                                        <svg className="stroke-gray-900 transition-all duration-500 group-hover:stroke-black"
                                            xmlns="http://www.w3.org/2000/svg" width="22" height="22"
                                            viewBox="0 0 22 22" fill="none">
                                            <path d="M16.5 11H5.5" stroke="" strokeWidth="1.6"
                                                strokeLinecap="round" />
                                            <path d="M16.5 11H5.5" stroke="" strokeOpacity="0.2" strokeWidth="1.6"
                                                strokeLinecap="round" />
                                            <path d="M16.5 11H5.5" stroke="" strokeOpacity="0.2" strokeWidth="1.6"
                                                strokeLinecap="round" />
                                        </svg>
                            </button>
                            
                            <input type="text"
                                        className="border-y border-gray-200 outline-none text-gray-900 font-semibold text-lg w-full max-w-[73px] min-w-[60px] placeholder:text-gray-900 py-[15px]  text-center bg-transparent"
                                        placeholder="1">
                            </input>

                            <button className="group rounded-r-xl px-5 py-[18px] border border-gray-200 flex items-center justify-center shadow-sm shadow-transparent transition-all duration-500 hover:bg-gray-50 hover:border-gray-300 hover:shadow-gray-300 focus-within:outline-gray-300">
                                        <svg className="stroke-gray-900 transition-all duration-500 group-hover:stroke-black"
                                            xmlns="http://www.w3.org/2000/svg" width="22" height="22"
                                            viewBox="0 0 22 22" fill="none">
                                            <path d="M11 5.5V16.5M16.5 11H5.5" stroke="" strokeWidth="1.6"
                                                strokeLinecap="round" />
                                            <path d="M11 5.5V16.5M16.5 11H5.5" stroke="" strokeOpacity="0.2"
                                                strokeWidth="1.6" strokeLinecap="round" />
                                            <path d="M11 5.5V16.5M16.5 11H5.5" stroke="" strokeOpacity="0.2"
                                                strokeWidth="1.6" strokeLinecap="round" />
                                        </svg>
                            </button>
                        </div>
                    </div>


                    <div className="flex items-center max-[500px]:justify-center md:justify-end max-md:mt-3 h-full">
                        <p className="font-bold leading-8 text-gray-600 text-center transition-all duration-300 group-hover:text-orange-700">Total price</p>
                    </div>
                </div>
            </div>




            <div className="m-16">
                <div className="flex justify-between my-10">
                    <p className="text-2xl font-semibold">Subtotal</p>
                    <p className="text-2xl font-semibold">Price sum</p>
                </div>
                <p className="text-center text-base">Shipping taxes and discounts calculated at checkout</p>
                <div className="flex gap-3 justify-center my-5">
                    <button type="button" className="border border-stone-800 px-6 py-2 md:px-12 md:py-2 text-stone-900 shadow-[4px_4px_8px_rgba(0,0,0,0.2)]">Continue shopping</button>
                    <button type="button" className="px-24 py-2 bg-black text-white shadow-[4px_4px_8px_rgba(0,0,0,0.2)]">Checkout</button>
                </div>
            </div>
            

        </div>
        </div>
        )
}

export default ShoppingCart