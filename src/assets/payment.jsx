import { loadStripe } from "@stripe/stripe-js";


let stripePromise;

const getStripe = () => {
    if(!stripePromise) {
        stripePromise = loadStripe(process.env.REACT_APP_STRIPE_KEY);
    }
    return stripePromise;
}

const Payment = () => {
    return (
        "This is payment"
    )
};

export default Payment;