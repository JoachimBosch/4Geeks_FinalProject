import MyContext from "../Context/context"; 
import { useContext, useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";

const Checkout = () => {
    const { personInfo, addressInfo, totalPrice, setTotalPrice, setBillingAddress, setShippingAddress, storeSubData } = useContext(MyContext);
    const [checkoutCart, setCheckoutCart] = useState([]);
    const [billing, setBilling] = useState({Name: "", VATS: "", Billing_address: "", Country: ""});
    
    const { cart } = useContext(MyContext);
    const { _APILINK_ } = useContext(MyContext);

    useEffect(() => {
        
        const newCheckoutCart = [];
        cart.map(item => {
          
          const updatedItem = {
            ...item,
            final_price: handlePrice(item, "price_3") 
          };
          
          for (let i = 0; i < item.quantity; i++) {
            newCheckoutCart.push(updatedItem);
          }
        });
        setCheckoutCart(newCheckoutCart);
        
        setTotalPrice(newCheckoutCart.reduce(
            (acc, curr) => acc + curr.final_price,
            0,
        ));
        
      }, [cart]);

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
    };

    useEffect(() => {
        const totalPrice = checkoutCart.reduce((acc, curr) => acc + curr.final_price, 0);
        setTotalPrice(totalPrice);
    }, [checkoutCart]);


    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setBilling(prevState => ({
          ...prevState,
          [name]: value
        }));
      };


    /* const handleSubmit = async (e) => {
        setError(null); // Clear any existing error
        try {
            await paymentSession(totalPrice);
        } catch (error) {
            console.error("Payment session creation failed:", error);
            setError(error.message || "An unexpected error occurred during payment processing.");
        }
    }; */

    const paymentSession = async (event) => {
        event.preventDefault();
        await storeSubData();
        
        try {
            const response = await axios.post(`${_APILINK_}/create-checkout-session`, {
                'amount': totalPrice
            }, {
                headers: {
                  'Content-Type': 'application/json'
                }
            });
            // Redirect to Stripe Checkout
            window.location.href = response.data.url;
            // Optionally, you can add a loading indicator here
            /* setTimeout(() => {
                window.location.href = response.data.url;
             }, 2000);  */// Wait for 2 seconds before reloading    
            
            //localStorage.setItem('myCart', JSON.stringify([]));
        } catch (error) {
            console.error('Error creating payment intent:', error);
            console.error('Response data:', error.response?.data);
            throw error; // Re-throw the error to handle it in handleSubmit
        }
    };

    return (
        <div style={{backgroundColor: "#FAEAE0"}}>
            <div className="max-w-[1100px] mx-auto py-20 bg-orange-50">
                <div className="mx-auto py-20 px-4">
                    <h2 className="text-center pb-6">Checkout</h2>
                    <p className="text-center text-base md:text-lg ">
                        <span className="font-semibold hover:underline">
                            <Link to="/cart">Cart </Link></span>
                        <span className="ps-2 md:ps-4">&gt;</span> 
                        <span className="px-2 md:px-4 font-semibold">Shipping Information</span> 
                        <span className="pe-2 md:pe-4">&gt;</span> Payment
                    </p>
                </div>


                {/* Personal Information */}


                <div className="mx-10 md:mx-16">
                    <div className="py-6 border-t border-b border-gray-800">
                        <h4>1. Personal Information</h4>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-4 pt-8">
                        <div>
                            <input type="text" value={personInfo.first_name ? personInfo.first_name + " " + personInfo.last_name : "Name"}
                                readOnly className="px-4 py-3 focus:bg-transparent text-gray-800 w-full focus:outline-blue-600" />
                        </div>

                        <div>
                            <input type="email" value={personInfo.email ? personInfo.email : "Email"}
                                readOnly className="px-4 py-3 focus:bg-transparent text-gray-800 w-full focus:outline-blue-600" />
                        </div>

                        <div>
                            <input type="text" value={personInfo.phone ? personInfo.phone : "Phone No."}
                                readOnly className="px-4 py-3 focus:bg-transparent text-gray-800 w-full focus:outline-blue-600" />
                        </div>
              
                    </div>
                </div>


                {/* Shipping Information */}


                <div className="mx-10 md:mx-16 mt-24">
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
                                        <select name="address" id="address" onClick={(e) => {
                                                setShippingAddress(e.target.value); 
                                            }}>
                                            {addressInfo.map((address, index) => (
                                            <option key={address.id} value={address.id}>{address.street_number} {address.street}, {address.postal_code} {address.city}, {address.country}
                                            </option>
                                            ))}
                                        </select>
                                        <label htmlFor="subscription" className="text-lg mt-4 text-gray-600 ">Select Subscription Term:</label>
                                        <select name="subscription" id="subscription" onChange={(event) => handleSubscriptionChange(event, index)}
                                        >
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
                    ))}
                </div>

                <div className="flex justify-between my-16">
                    <p className="text-2xl font-semibold">Total</p>
                    <p className="text-2xl font-bold">{parseFloat(totalPrice).toFixed(2) + "€"}</p>
                </div>
                



                </div>



                {/*Billing details*/}


                <div className="mx-10 md:mx-16 mt-12">
                    <div className="py-6 border-t border-b border-gray-800">
                        <h4>3. Billing Details</h4>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4 pt-8">
                        <div>
                            <input type="text" name="Name" value={billing.Name} onChange={handleInputChange} placeholder="Name"
                                    className="px-4 py-3 focus:bg-transparent text-gray-800 w-full focus:outline-blue-600" />
                        </div>

                        <div>
                            <input type="text" name="VATS" value={billing.VATS} onChange={handleInputChange} placeholder="VAT Number"
                                className="px-4 py-3 focus:bg-transparent text-gray-800 w-full focus:outline-blue-600" />
                        </div>

                        <div>
                            <select name="Billing_address" value={billing.Billing_address} onClick={(e) => {handleInputChange; setBillingAddress(e.target.value)}}
                                className="px-4 py-3 focus:bg-transparent text-gray-800 w-full focus:outline-blue-600">
                                {addressInfo.map((address, index) => (
                                            <option key={address.id} value={address.id}>{address.street_number} {address.street}, {address.postal_code} {address.city}, {address.country}</option>
                                            ))};
                            </select>
                        </div>

                        <div>
                            <input type="text" name="Country" value={billing.Country} onChange={handleInputChange} placeholder="Country"
                                className="px-4 py-3 focus:bg-transparent text-gray-800 w-full focus:outline-blue-600" />
                        </div>
              
                    </div>
                </div>
                <div className="flex justify-center mx-2 my-20">
                            <button onClick={(event) => paymentSession(event)}
                                id="checkout-button"
                                className="px-10 md:px-16 py-2 items-center bg-black text-white shadow-[4px_4px_8px_rgba(0,0,0,0.2)]"
                                >Proceed to Payment</button>
                        
                    
                </div>
            </div>
        </div>
        )
}

export default Checkout