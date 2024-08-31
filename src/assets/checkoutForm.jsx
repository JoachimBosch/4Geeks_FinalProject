import React, { useCallback, useState, useEffect, useContext } from "react";
import {loadStripe} from '@stripe/stripe-js';
import {
  EmbeddedCheckoutProvider,
  EmbeddedCheckout
} from '@stripe/react-stripe-js';
import MyContext from "../Context/context";

// Make sure to call loadStripe outside of a component’s render to avoid
// recreating the Stripe object on every render.
// This is your test secret API key.
const stripePromise = loadStripe(`${import.meta.env.VITE_APP_STRIPE_PUBLIC_KEY}`);

const CheckoutForm = () => {
    const { _APILINK_ } = useContext(MyContext)

    const fetchClientSecret = useCallback(() => {
        // Create a Checkout Session
        return fetch(`${_APILINK_}/create-checkout-session`, {
        method: "POST",
        })
        .then((res) => res.json())
        .then((data) => data.clientSecret);
    }, []);

    const options = {fetchClientSecret};

    return (
        <div id="checkout" className="mt-28">
        <EmbeddedCheckoutProvider
            stripe={stripePromise}
            options={options}
        >
            <EmbeddedCheckout />
        </EmbeddedCheckoutProvider>
        </div>
    )
}



export default CheckoutForm