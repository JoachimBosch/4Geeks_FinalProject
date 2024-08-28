import image1 from '../images/Wellbeing1.jpg'
import image2 from '../images/ChoosingProducts.jpg';
import image3 from '../images/OurClients.jpg';
import videoSrc from '../video/AdobeStock_471309002.mp4';
import Carousel_content from './carousel';
import { Link } from 'react-router-dom';
import { Accordion } from "flowbite-react";
import { Carousel } from "flowbite-react";
import { useContext } from 'react'
import MyContext from "../Context/context";


export default function Home() {
    
    const { boxes } = useContext(MyContext);

  return (
    <div>


        {/* Section 1 */}


        <header className="relative flex items-end justify-end h-screen overflow-hidden">
            <div className="relative z-30 text-right mx-20 w-full max-w-[720px]">
                <h1 className="md:my-2 [text-shadow:_5px_5px_8px_rgb(0_0_0_/_20%)] text-black-500 leading-tight text-5xl md:text-6xl">Reset your life, one box at a time</h1>
                <p className="text-black-500 [text-shadow:_3px_3px_3px_rgb(0_0_0_/_20%)] text-1xl md:text-3xl">Find your gateway to a more mindful, peaceful life through curated  experiences delivered to your doorstep.</p>
                <button className="mt-10 mb-16 px-10 py-5 bg-black text-white shadow-[6px_6px_12px_rgba(0,0,0,0.4)] text-xl md:text-1xl"><a href="#section_3">Choose your experience</a></button>
            </div>
            <video
                autoPlay
                loop
                muted
                className="absolute -z-30 w-auto min-w-full min-h-full max-w-none background-video">
                <source
                    src={videoSrc}
                    type="video/mp4">
                </source>
                Your browser does not support the video tag.
            </video>
        </header>


        {/* Section 2 */}


        <div className="bg-orange-50 h-screen flex items-center" id="section_2">
            <div style={{backgroundColor: "#FAEAE0"}} className="box-border w-[30rem] mx-auto md:w-[38rem] md:ms-[10%] leading-loose z-20 py-9 relative shadow-[6px_6px_12px_rgba(0,0,0,0.4)] text-center">
                <hr></hr>
                <p className="px-9 md:text-2xl md:my-2">We've crafted unique boxes to create</p>
                <hr></hr>
                <p className="px-9 md:text-2xl md:my-2"><strong> personalized experiences </strong> that nourish your</p>
                <hr></hr>
                <p className="px-9 md:text-2xl md:my-2">soul and enhance your well-being.</p>
                <hr></hr>
                <p><br></br></p>
                <hr></hr>
                <p className="px-9 md:text-2xl md:my-2">Each box is an invitation to <strong>create a ritual</strong></p>
                <hr></hr>
                <p className="px-9 md:text-2xl md:my-2">that suits your lifestyle and needs.</p>
                <hr></hr>
            </div>
            <img src={image1} 
                alt="A candle, a journal and a plant"
                className="absolute object-fit h-full z-10 right-0">
            </img>
        </div>


        {/*Section 3 */}
        
        
        
        <div className="h-view text-center pt-24" style={{backgroundColor: "#FAEAE0"}} id="section_3">
                <h2>Choose Your Experience</h2>
                <div className = "w-full mt-16">
                    <ul className="pb-5 relative flex flex-wrap p-1 list-none text-base md:text-lg lg:text-xl" data-tabs="tabs" role="list">
                        <li className="z-30 flex-auto text-center hover:underline">
                            <Link to="">RELAX</Link>
                        </li>
                        <li className="z-30 flex-auto text-center hover:underline">
                            <Link to="">REVIVE</Link>
                        </li>
                        <li className="z-30 flex-auto text-center hover:underline">
                            <Link to="">RECONNECT</Link>
                        </li>
                        <li className="z-30 flex-auto text-center hover:underline">
                            <Link to="">RECHARGE</Link>
                        </li>
                        <li className="z-30 flex-auto text-center hover:underline">
                            <Link to="">REFRESH</Link>
                        </li>
                        <li className="z-30 flex-auto text-center hover:underline">
                            <Link to="">REFOCUS</Link>
                        </li>
                        <li className="z-30 flex-auto text-center hover:underline">
                            <Link to="">REBALANCE</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="h-[585px]">
                <Carousel slide={false}>
                    {boxes.map((box) => <Carousel_content 
                                            key={box.id}
                                            id={box.id}
                                            name={box.name}
                                            price={box.price}
                                            price_3={box.price_3}
                                            price_6={box.price_6}
                                            price_12={box.price_12}
                                            callout={box.callout}
                                            button_color={box.button_color}
                                            text_color={box.text_color}
                                            background={box.background}
                                            box_out={box.box_out}
                                            quantity={box.quantity}
                                            />)}
                    
                </Carousel>
            </div>


        <div className="bg-black text-white p-4 opacity-70">
                <p className="text-center text-sm md:text-xl lg:text-2xl">* Buy yourself a one-time experience, or treat yourself every month by taking a subscription. *</p>
        </div>


        {/*Section 4 */}


        <div className="bg-orange-50 py-24" id="section_4">
            <h2 className="text-center">Our boxes</h2>
            <div className="my-16 md:flex">
                <img src={image2} alt="lady choosing products"></img>
                <div className="grid gap-y-4 mx-5 mt-4 md:mt-0 w-4/5">
                    <div className="border border-zinc-500 text-center content-center px-10">
                        <h4>Personalized Experience</h4>
                        <p>Each box is tailored to meet your unique needs and preferences.</p>
                    </div>
                    <div className="border border-zinc-500 text-center content-center px-10">
                        <h4>Quality and Sustainability</h4>
                        <p>We prioritize high-quality, ethically sourced and eco-friendly products.</p>
                    </div>
                    <div className="border border-zinc-500 text-center content-center px-10">
                        <h4>Expert curation</h4>
                        <p>Each item is carefully selected by a team of wellness experts.</p>
                    </div>
                </div>
            </div>
            <Link to="about">
                <button className="mx-auto px-10 py-5 bg-black text-white shadow-[4px_4px_8px_rgba(0,0,0,0.2)] text-xl md:text-1x flex content-center">More About Us</button>
            </Link>
        </div>



        {/*Section 5 */}


        <div className="z-10 relative pt-24 overflow-hidden h-[650px]" id="section_5" style={{ backgroundImage: `url(${image3})`}}>
            <h2 className="text-center [text-shadow:_3px_3px_5px_rgb(0_0_0_/_50%)] mb-10" style={{color: 'white'}}>Our Clients Love Us</h2>
            <div className="flex :justify-center">
                <div className="bg-white opacity-70 w-1/3 p-5 ms-5 my-10 rounded-sm min-w-80 max-w-96">
                    <p>"Absolutely life-changing! The Relax box has become my nightly ritual. The soothing scents and calming teas help me unwind like never before. I feel so much more at peace. Thank you, RE7!"</p>
                    <h4 className="text-right">Sophie M.</h4>
                </div>
                <div className="bg-white opacity-70 w-1/3 p-5 mx-5 my-10 rounded-sm min-w-80 max-w-96">
                    <p>"The Revive box is a game-changer! The invigorating essential oils and energizing snacks give me the perfect boost to start my day. I feel more alive and focused than ever. Highly recommend!"</p>
                    <h4 className="text-right">James L.</h4>
                </div>
                <div className="bg-white opacity-70 w-1/3 p-5 me-5 my-10 rounded-sm min-w-80 max-w-96">
                    <p>"The Renew box was just what I needed. The detoxifying products and refreshing teas made me feel rejuvenated from the inside out. It’s like a fresh start in a box. I'm hooked and can't wait to try more!"</p>
                    <h4 className="text-right">Liam K.</h4>
                </div>
                <div className="bg-white opacity-70 w-1/3 p-5 me-5 my-10 rounded-sm min-w-80 max-w-96">
                    <p>"I can't get enough of the Reconnect box! The activities and prompts have brought me closer to my loved ones. Such a beautiful way to create meaningful moments. Love it!"</p>
                    <h4 className="text-right">Emma P.</h4>
                </div>
            </div>
        </div>
        

        {/*Section 6 */}
        

        <div className="h-screen pt-24 mb-72" id="section_6">
            <h2 className="text-center mb-16">Frequently Asked Questions</h2>
            <div style={{backgroundColor: "#FAEAE0"}} className="max-w-[70%] mx-auto my-10 leading-loose py-2 shadow-[4px_4px_8px_rgba(0,0,0,0.2)] ">
                <Accordion collapseAll>
                    <Accordion.Panel>
                        <Accordion.Title className="accordion-title">
                            What's included in each box?
                        </Accordion.Title>
                        <Accordion.Content>
                            <p className="ps-10 text-gray-500">
                            Each box contains a curated selection of self-care products tailored to help you reset and rejuvenate, including skincare, wellness items, and relaxation tools.
                            </p>
                        </Accordion.Content>
                    </Accordion.Panel>
                    <Accordion.Panel>
                        <Accordion.Title className="accordion-title">
                            How often will I receive my box?
                        </Accordion.Title>
                        <Accordion.Content>
                            <p className="ps-10 text-gray-500">
                            Our subscription boxes are delivered monthly to ensure you have a consistent supply of self-care essentials.
                            </p>
                        </Accordion.Content>
                    </Accordion.Panel>
                    <Accordion.Panel>
                        <Accordion.Title className="accordion-title">
                            Can I customize my box?
                        </Accordion.Title>
                        <Accordion.Content>
                            <p className="ps-10 text-gray-500">
                            While each box is curated with a specific theme in mind, we offer options to customize certain products based on your preferences.
                            </p>
                        </Accordion.Content>
                    </Accordion.Panel>
                    <Accordion.Panel>
                        <Accordion.Title className="accordion-title">
                            Can I gift a subscription to someone else?
                        </Accordion.Title>
                        <Accordion.Content>
                            <p className="ps-10 text-gray-500">
                            Yes, our self-care boxes make perfect gifts! You can purchase a gift subscription and include a personalized message.
                            </p>
                        </Accordion.Content>
                    </Accordion.Panel>
                    <Accordion.Panel>
                        <Accordion.Title className="accordion-title">
                            How do I cancel or pause my subscription?
                        </Accordion.Title>
                        <Accordion.Content>
                            <p className="ps-10 text-gray-500">
                            You can easily manage your subscription through your account settings on our website. There are options to pause or cancel at any time.
                            </p>
                        </Accordion.Content>
                    </Accordion.Panel>
                    <Accordion.Panel>
                        <Accordion.Title className="accordion-title">
                            Do you ship internationally?
                        </Accordion.Title>
                        <Accordion.Content>
                            <p className="ps-10 text-gray-500">
                            Currently, we ship within Europe. We are working on expanding our shipping options to include international destinations.
                            </p>
                        </Accordion.Content>
                    </Accordion.Panel>
                    <Accordion.Panel>
                        <Accordion.Title className="accordion-title">
                            What is your return policy?
                        </Accordion.Title>
                        <Accordion.Content>
                            <p className="ps-10 text-gray-500">
                            If you are not satisfied with your box, please contact our customer service within 30 days of receiving it for a refund or replacement.
                            </p>
                        </Accordion.Content>
                    </Accordion.Panel>
                    <Accordion.Panel>
                        <Accordion.Title className="accordion-title">
                            How can I contact customer service?
                        </Accordion.Title>
                        <Accordion.Content>
                            <p className="ps-10 text-gray-500">
                            Our customer service team is available via email at or by phone.
                            </p>
                        </Accordion.Content>
                    </Accordion.Panel>
                </Accordion>
            </div>
            <div className="flex justify-center">
                <button className="px-10 py-5 bg-black text-white shadow-[4px_4px_8px_rgba(0,0,0,0.2)] text-xl md:text-xl"><a href="#section_3">Choose your experience</a></button>
            </div>
        </div>



    </div>
  )
}
    