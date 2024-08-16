import MyContext from "../Context/context";
import { Label, Select } from 'flowbite-react' 
import { useContext } from "react";

const Checkout = () => {
    
    const { boxes, cart } = useContext(MyContext);

    const checkoutCart = []
    cart.map(box => {
        for(let i = 0; i < box.quantity; i++) {
            checkoutCart.push(box)
        }
    });

    function handlePrice(box, term) {
        if(term === "price") {
            return box.price
        } else if ( term === "price_3") {
            return box.price_3
        } else if ( term === "price_6") {
            return box.price_6
        } else {
            return box.price_12
        }
    }
    
    
    return (
        <div style={{backgroundColor: "#FAEAE0"}}>
            <div className="max-w-[1100px] mx-auto py-20 bg-orange-50">
                <div className="mx-auto py-20">
                    <h2 className="text-center pb-6">Checkout</h2>
                    <p className="text-center text-lg ">Cart <span className="ps-4">&gt;</span> <span className="px-4 font-semibold">Shipping Information</span> <span className="pe-4">&gt;</span> Payment</p>
                </div>


                {/* Personal Information */}


                <div className="mx-16">
                    <div className="py-6 border-t border-b border-gray-800">
                        <h4>1. Personal Information</h4>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-4 pt-8">
                        <div>
                            <input type="text" value="Name"
                                readOnly className="px-4 py-3 focus:bg-transparent text-gray-800 w-full focus:outline-blue-600" />
                        </div>

                        <div>
                            <input type="email" value="Email"
                                readOnly className="px-4 py-3 focus:bg-transparent text-gray-800 w-full focus:outline-blue-600" />
                        </div>

                        <div>
                            <input type="text" value="Phone No."
                                readOnly className="px-4 py-3 focus:bg-transparent text-gray-800 w-full focus:outline-blue-600" />
                        </div>
              
                    </div>
                </div>


                {/* Shipping Information */}


                <div className="mx-16 mt-24">
                    <div className="py-6 border-t border-b border-gray-800">
                        <h4>2. Shipping Information</h4>
                    </div>
                    
                    <div className="">
                        
                    {checkoutCart.map((box, index) => (
                        <div className="flex flex-col min-[500px]:flex-row gap-5 py-16 group"
                                key={index}>
                            <div className="md:max-w-[250px]">
                                <img src={box.box_out} alt="" className="mx-auto rounded-xl"></img>
                            </div>
                        
                            <div className="grid grid-cols-1 md:grid-cols-3 w-full">
                                <div className="md:col-span-2">
                                    <div className="flex flex-col gap-3" id={box.id}>
                                        <p className=" text-black font-semibold">{box.name}</p>
                                        <label htmlFor="address" className="text-lg text-gray-600">Select Address:</label>
                                        <select name="address" id="address">
                                            <option value="address1">Person's address</option>
                                            <option value="other_address">Choose other</option>
                                        </select>
                                        <label htmlFor="subscription" className="text-lg mt-4 text-gray-600 ">Select Subscription Term:</label>
                                        <select name="subscription" id="subscription">
                                            <option value="3_months">3 months subscription - get a box every month</option>
                                            <option value="6_months">6 months subscription - get a box every month</option>
                                            <option value="12_months">12 months subscription - get a box every month</option>
                                            <option value="once">One box, one time only</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="flex justify-end max-md:mt-3 h-full">
                                    <p className="font-bold leading-8 text-gray-600 text-center transition-all duration-300">price</p>
                                </div>
                            </div>
                        </div>
                    ))};
                </div>



                </div>



                {/*Billing details*/}


                <div className="mx-16 mt-12">
                    <div className="py-6 border-t border-b border-gray-800">
                        <h4>3. Billing Details</h4>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4 pt-8">
                        <div>
                            <input type="text" value="Name"
                                    className="px-4 py-3 focus:bg-transparent text-gray-800 w-full focus:outline-blue-600" />
                        </div>

                        <div>
                            <input type="text" value="VATS"
                                className="px-4 py-3 focus:bg-transparent text-gray-800 w-full focus:outline-blue-600" />
                        </div>

                        <div>
                            <input type="text" value="Billing Address"
                                className="px-4 py-3 focus:bg-transparent text-gray-800 w-full focus:outline-blue-600" />
                        </div>

                        <div>
                            <input type="text" value="Country"
                                className="px-4 py-3 focus:bg-transparent text-gray-800 w-full focus:outline-blue-600" />
                        </div>
              
                    </div>
                </div>
                <div className="flex gap-3 justify-center my-20">
                    <button type="button" className="px-24 py-2 items-center bg-black text-white shadow-[4px_4px_8px_rgba(0,0,0,0.2)]">Proceed to Payment</button>
                </div>
            </div>
        </div>
        )
}

export default Checkout