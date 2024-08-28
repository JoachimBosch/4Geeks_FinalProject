import { loadStripe } from "@stripe/stripe-js";
import { useState, useEffect } from 'react';
import { Elements } from "@stripe/react-stripe-js";
import { useLocation } from "react-router-dom";
import CheckoutForm from "./checkoutForm";

const Payment = () => {
    const [stripePromise, setStripePromise] = useState(null)
    const [clientSecret, setClientSecret] = useState("");

    const location = useLocation();
    const amount = location.state?.totalPrice;

    useEffect(() => {
        fetch('/config').then( async (r) => {
            const {publishableKey} = await r.json();
            console.log(publishableKey);

            setStripePromise(loadStripe(publishableKey))
        })
    }, [])

    useEffect(() => {
        fetch('/create_payment_intent', {
            method: 'POST', 
            headers: {
                "Content-Type": "application/json",
              },
            body: JSON.stringify({
                amount: amount * 100
            }),
        }).then( async (r) => {
            const { clientSecret } = await r.json();
            console.log(clientSecret);

            setClientSecret(clientSecret);
        })
    }, [])

    return (
        <>
        <h2 className="py-36 text-center">Payment</h2>
            { stripePromise && clientSecret && (
                <Elements stripe={stripePromise} options={{clientSecret}}>
                    <Checkout />
                </Elements>
            )}
        </>
    )
};

export default Payment;