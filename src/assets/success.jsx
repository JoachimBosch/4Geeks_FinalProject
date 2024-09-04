import image1 from '../images/OurClients.jpg';
import { Link } from 'react-router-dom'
import { useContext, useState, useEffect } from 'react';
import MyContext from '../Context/context';

const Success = () => {
    const { storeSub, setStoreSub, _APILINK_, storeSubscription, billingAddress, shippingAddress, personInfo, addressInfo } = useContext(MyContext);
    const [error, setError] = useState(null);
    const user_id = personInfo.id; 
    const billing_address = billingAddress ? billingAddress : addressInfo[0].id;
    const shipping_address = shippingAddress ? shippingAddress : addressInfo[0].id;

    const calculateEndDate = (startDate, months) => {
        const endDate = new Date(startDate);
        endDate.setMonth(endDate.getMonth() + months);
        return endDate.toLocaleDateString('en-GB', { year: 'numeric', month: '2-digit', day: '2-digit' });
    };

    const gatherSubData = () => {
        let cart = JSON.parse(localStorage.getItem('myCart'));
        
        if (!cart || cart.length === 0) {
            console.error('No cart data found');
            return;
          }

        const today = new Date().toLocaleDateString('en-GB', { year: 'numeric', month: '2-digit', day: '2-digit' });

        const updatedSubData = cart.map((item) => {

            const subscriptionTerm = item.price === item.price_3 ? 3 
                                : item.price === item.price_6 ? 6 
                                : 12;  

            const endDate = calculateEndDate(new Date(), subscriptionTerm);

            return {
                active: true,
                user_id: user_id,                         
                billing_address: billing_address,         
                shipping_address: shipping_address,       
                order: item.name,                         
                start_date: today,                        
                end_date: endDate,                        
                payment_method: 'credit card',            
            };
        });
        setStoreSub(updatedSubData);
        localStorage.setItem('subData', JSON.stringify(updatedSubData));
    };

    const postSubscriptionData = async () => {
        const storedSubData = JSON.parse(localStorage.getItem('subData'));

        console.log('retrieved data:', storedSubData);

        if (!storedSubData || storedSubData.length === 0) {
            console.error('No subscription data available to post.');
            return;
          }

        try {
            for (let sub of storedSubData) {
                await storeSubscription(sub); 
              }

            localStorage.removeItem('subData');
            localStorage.removeItem('myCart');
        } catch (error) {
        console.error('Error posting subscription data:', error);
        setError('Failed to post subscription data. Please contact support.');
        }
    };


    useEffect(() => {
        gatherSubData();
        postSubscriptionData();
    }, []);

    return(
        <div className ="bg-[#e9d0bd] pt-36 md:pt-56 pb-36 px-6 md:h-screen" style={{ backgroundImage: `url(${image1})`}}>
            <div className="bg-[#e9d0bd] space-y-8 md:space-y-12 mx-auto max-w-[800px] text-center pt-20 md:pt-24 pb-20 px-8 md:px-16">
                <h4 className="text-2xl md:text-3xl">Thank You For Choosing RE7</h4>
                <p className="text-1xl md:text-2xl">
                    <span className="font-semibold">Your order is now in the works</span>
                    , and our team is carefully preparing it to ensure every detail is perfect.</p>
                <p className="text-1xl md:text-2xl"> We are grateful for your trust in us and thrilled to be part of your journey. If you have any questions or need assistance, please don't hesitate to reach out. We're here for you every step of the way.</p>
                <Link to="/">
                    <button className="mt-8 underline leading-6 text-orange-700 hover:text-orange-900">Back Home</button>
                </Link>
            </div>
        </div>
    )

}

export default Success