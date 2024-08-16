import MyContext from "../Context/context"; 
import { useContext, useState } from "react";

const Checkout = () => {
    const [checkoutCart, setCheckoutCart] = useState([]);
    const { cart } = useContext(MyContext);


    cart.map(box => {
        for(let i = 0; i < box.quantity; i++) {
            checkoutCart.push(box)
        }
    });



    function handlePrice(box, term) {
        switch(term) {
            case "price_3":
                return box.price_3;
            case "price_6":
                return box.price_6;
            case "price_12":
                return box.price_12;
            default:
                return box.price
        }
    };
    
    function handleSubscriptionChange(event, index) {
        const selectedTerm = event.target.value;
        setCheckoutCart(prevCart =>
            prevCart.map((box, i) =>
                index === i ? {...box, final_price: handlePrice(box, selectedTerm)} : box
            )
        );
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
                                        <select name="subscription" id="subscription" onChange={(event) => handleSubscriptionChange(event, index)}>
                                            <option value="price_3">3 months subscription - get a box every month</option>
                                            <option value="price_6">6 months subscription - get a box every month</option>
                                            <option value="price_12">12 months subscription - get a box every month</option>
                                            <option value="once">One box, one time only</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="flex justify-end max-md:mt-3 h-full">
                                    <p className="font-bold leading-8 text-gray-600 text-center transition-all duration-300">{parseFloat(box.final_price).toFixed(2) + "€"}</p>
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