import image1 from '../images/OurClients.jpg';
import { Link } from 'react-router-dom'

const Canceled = () => {
    return(
        <div className ="bg-[#e9d0bd] pt-56 pb-36 px-6 h-screen" style={{ backgroundImage: `url(${image1})`}}>
            <div className="bg-[#e9d0bd] space-y-12 mx-auto max-w-[800px] text-center pt-24 pb-20 px-16">
                <h4 className="text-3xl">Your payment was cancelled</h4>
                <p className="text-2xl">
                    Did something go wrong?
                    We're happy to assist you in case you have any questions.</p>
                <p>Feel free to contact us at info@reset.com if we can help in any way.</p>
                <Link to="/">
                    <button className="mt-8 underline leading-6 text-orange-700 hover:text-orange-900">Back Home</button>
                </Link>
            </div>
        </div>
    )
}

export default Canceled