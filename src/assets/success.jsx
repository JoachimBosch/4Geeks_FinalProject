import image1 from '../images/OurClients.jpg';
import { Link } from 'react-router-dom'

const Success = () => {
    return(
        <div className ="bg-[#e9d0bd] pt-56 pb-36 px-6 h-screen" style={{ backgroundImage: `url(${image1})`}}>
            <div className="bg-[#e9d0bd] space-y-12 mx-auto max-w-[800px] text-center pt-24 pb-20 px-16">
                <h4 className="text-3xl">Thank You For Choosing RE7</h4>
                <p className="text-2xl">
                    <span className="font-semibold">Your order is now in the works</span>
                    , and our team is carefully preparing it to ensure every detail is perfect.</p>
                <p>We are grateful for your trust in us and thrilled to be part of your journey. If you have any questions or need assistance, please don't hesitate to reach out. We're here for you every step of the way.</p>
                <Link to="/">
                    <button className="mt-8 underline leading-6 text-orange-700 hover:text-orange-900">Back Home</button>
                </Link>
            </div>
        </div>
    )
}

export default Success