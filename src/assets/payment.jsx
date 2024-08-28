import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useState, useEffect, useContext } from 'react';
import { useLocation } from "react-router-dom";
import CheckoutForm from "./checkoutForm";
import MyContext from "../Context/context";

const Payment = () => {
    const { _APILINK_ } = useContext(MyContext)
    const [stripePromise, setStripePromise] = useState(null)
    const [clientSecret, setClientSecret] = useState("");

    const location = useLocation();
    const amount = location.state?.totalPrice;

    useEffect(() => {
        const url = `${_APILINK_}/config`
        fetch(url)
            .then(async (r) => {
            const {publishableKey} = await r.json();
            console.log(publishableKey);

            setStripePromise(loadStripe(publishableKey));
        })
        .catch((error) => {
            console.error("Failed to fetch config:", error);
        });
    }, []);

    useEffect(() => {
        const url = `${_APILINK_}/payment`
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                amount: amount * 100
            }),
        }).then( async (r) => {
            const { clientSecret } = await r.json();
            console.log(clientSecret);

            setClientSecret(clientSecret);
        })
        .catch((error) => {
            console.error("Failed to create payment intent:", error);
          });
    }, [])

    return (
        <>
        <h2 className="py-36 text-center">Payment</h2>
            { stripePromise && clientSecret && (
                <Elements stripe={stripePromise} options={{clientSecret}}>
                    <CheckoutForm />
                </Elements>
            )}
        </>
    )
};

export default Payment;