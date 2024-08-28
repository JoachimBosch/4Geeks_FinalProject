import { useState, useEffect } from 'react';
import { useStripe, useElements } from "@stripe/react-stripe-js";
import { PaymentElement } from '@stripe/react-stripe-js';

const CheckoutForm = () => {
    const [message, setMessage] = useState(null);
    const [isProcessing, setIsProcessing] = useState(false);

    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if(!stripe || !elements) {
            return;
        }

        setIsProcessing(true);

        const { error, paymentIntent } = await stripe.confirmPayment({
            elements,
            confirmParams: {
                return_url: `${window.location.origin}/completion`
            }
        });

        if(error) {
            setMessage(error.message)
        } else if (paymentIntent && paymentIntent.status === 'succeeded') {
            setMessage("Payment status " + paymentIntent)
        } else {
            setMessage("Unexpected state")
        }

        setIsProcessing(false);
    }

    return(
        <>
            <form id="payment-form" onSubmit={handleSubmit}>
                <PaymentElement />
                <button disabled={isProcessing} id="submit">
                    <span id="button-text">
                        {isProcessing ? "Processing..." : "Pay now"}
                    </span>
                </button>
            </form>
        </>
    )
};

export default CheckoutForm;