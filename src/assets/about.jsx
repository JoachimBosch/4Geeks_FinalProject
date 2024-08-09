import image1 from '../images/AboutUs1.jpg'
import image2 from '../images/AboutUs2.jpg'
import image3 from '../images/AboutUs3.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faSpa , faBoxOpen , faPeopleGroup } from '@fortawesome/free-solid-svg-icons';

export default function About() {
    return(
        <div className="bg-[#FAEAE0] py-20">



            {/* Section 1 */}


            <h2 className="pt-20 pb-10 border-t border-black text-center [text-shadow:_5px_5px_8px_rgb(0_0_0_/_20%)]">About Us</h2>
            <p className="mx-auto px-16 max-w-[900px] md:text-2xl text-center [text-shadow:_2px_2px_2px_rgb(0_0_0_/_20%)]">Welcome to RE7, your ultimate destination for curated 
self-care experiences. Our mission is simple: to help you 
reset, rejuvenate, and recharge with thoughtfully  selected 
products designed to enhance your well-being.
            </p>


            {/* Section 2 */}


            <div className="md:flex py-24">
                <img src={image1} className="max-w-96 object-contain"></img>
                <div className="p-16 content-center">
                    <h4>Our Story</h4>
                    <p>At RE7, we believe that self-care is essential, not optional. 
Founded in 2024, our journey began with a passion for 
promoting holistic wellness and a commitment to making 
self-care accessible to everyone. We understand the 
demands of modern life and the importance of taking a 
moment for yourself. That's why we've dedicated ourselves 
to creating monthly self-care boxes that inspire and nurture 
your mind, body, and spirit.
                    </p>
                </div>

            </div>



            {/* Section 3 */}

            <div className = "bg-[#E9D0BD] text-center py-8">
                <h2>Our Core Values</h2>
                <div className="grid grid-cols-4 gap-3 py-8">
                    <div>
                        <FontAwesomeIcon className="text-6xl py-6" icon={faStar}></FontAwesomeIcon>
                        <h4>Quality</h4>
                    </div>
                    <div>
                        <FontAwesomeIcon className="text-6xl py-6" icon={faBoxOpen}></FontAwesomeIcon>
                        <h4>Simplicity</h4>
                    </div>
                    <div>
                        <FontAwesomeIcon className="text-6xl py-6" icon={faSpa}></FontAwesomeIcon>
                        <h4>Wellness</h4>
                    </div>
                    <div>
                        <FontAwesomeIcon className="text-6xl py-6" icon={faPeopleGroup}></FontAwesomeIcon>
                        <h4>Community</h4>
                    </div>
                </div>
            </div>


            {/* Section 4 */}
            
            <div className="bg-cover min-h-96 p-16 content-center bg-right-bottom lg:h-[650px]" style={{ backgroundImage: `url(${image2})`}}>
                <h4>What we offer</h4>
                <p className="max-w-[60%]">Every month, we deliver a themed box filled with high-quality, 
carefully curated items that align with our core values of renewal, 
relaxation, and revitalization.
                </p>
            </div>



            {/* Section 5 */}


            <div className="py-20">
                <div className="p-16 content-center text-center px-16 max-w-[900px] mx-auto">
                    <h2 className="pb-8">Join Our Community</h2>
                    <p className="md:text-2xl">Embrace the journey to better self-care with RE7. Whether
 you’re looking to find balance, discover new wellness products, 
or simply treat yourself, our self-care boxes are designed to 
bring joy and tranquility into your life.<br></br>
Thank you for choosing  RE7. We are excited to be a part of 
your self-care journey.</p>
                    <p className="md:text-2xl py-8" style={{fontWeight: "600"}}>Reach out to us at our email address or follow us on social media to stay connected and receive the latest updates.</p>
                </div>
            </div>



        </div>
    )
}