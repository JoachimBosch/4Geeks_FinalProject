import { useState } from 'react';
import { useStripe, useElements } from "@stripe/react-stripe-js";
import { PaymentElement } from '@stripe/react-stripe-js';

const CheckoutForm = () => {
    const stripe = useStripe();
    const elements = useElements();

    const [message, setMessage] = useState("");
    const [isProcessing, setIsProcessing] = useState(false);



    const handleSubmit = async (e) => {
        e.preventDefault();

        if(!stripe || !elements) {
            return;
        }

        setIsProcessing(true);

        const { error } = await stripe.confirmPayment({
            elements,
            confirmParams: {
                return_url: `${window.location.origin}/` /* add completion component */
            },
        });

        if(error.type === "card_error" || error.type === "validation_error") {
            setMessage(error.message)
        } else {
            setMessage("Payment complete");
        }

        setIsProcessing(false);
    };

    return(
        <>
            <form id="payment-form" className="mb-10">
                <PaymentElement />
                <button disabled={isProcessing || !stripe || !elements} id="submit">
                    <span id="button-text">
                        {isProcessing ? "Processing..." : "Pay now"}
                    </span>
                </button>
                {message && <div id="payment-message">{message}</div>}
            </form>
        </>
    )
};

export default CheckoutForm;