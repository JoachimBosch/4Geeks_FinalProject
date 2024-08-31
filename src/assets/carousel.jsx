import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import MyContext from '../Context/context'
import { Button, Modal } from "flowbite-react";



export default function Carousel_content({id, name, background, callout, box_out, text_color, button_color, price, quantity, price_3, price_6, price_12, tabId}) {
    const [opened, setOpened] = useState(false);
    const [openModal, setOpenModal] = useState(false);
    const { onAddToCart, cart } = useContext(MyContext)
    
    function handleOpen() {
        opened ? setOpened(false) : setOpened(true)
    };


    return (
        <>
            
            <div id={`carousel-${tabId}`} className="carousel-item">
                <div className="flex bg-cover pt-28 justify-center gap-3" style={{ backgroundImage: `url(${background})`, opacity: "0.8"}}>
                    <div className="flex flex-col items-center align-bottom">
                        <img src={box_out} alt={`${name} box`} 
                                className={`${opened ? "transition ease-in-out duration-1000 -translate-y-3/4" : "transition ease-in-out duration-1000 translate-y-0"}`}></img>
                        <button type="button" 
                                className="border border-stone-800 my-10 px-10 md:px-16 py-1 md:py-2 text-stone-900 hover:bg-stone-100 shadow-[4px_4px_8px_rgba(0,0,0,0.2)] text-lg md:text-2xl"
                                onClick={() => handleOpen()}>{opened ? "Close box" : "Open Box"}</button>
                    </div>
                    <div className="w-full max-w-lg ">
                        <h3 className={`text-5xl md:text-6xl lg:text-7xl ${text_color} [text-shadow:_5px_5px_8px_rgb(0_0_0_/_20%)] py-[5%]`}>{callout}</h3>
                        <div className="flex flex-row items-center gap-4 py-10">
                            <button type="button" 
                                    className={`px-10 py-1 md:px-16 md:py-2 text-white ${button_color} hover:bg-stone-900 shadow-[6px_6px_12px_rgba(0,0,0,0.4)] text-xl md:text-2xl`} 
                                    style={{fontWeight: "500"}}
                                    onClick={() => { onAddToCart({ id, name, box_out, price, quantity, price_3, price_6, price_12 }), setOpenModal(true)}}>Buy now</button>
                            <Link to={`details/${id}`}>
                                <button type="button" className="border border-stone-800 px-6 py-1 md:px-12 md:py-2 text-stone-900 hover:bg-stone-100 shadow-[4px_4px_8px_rgba(0,0,0,0.2)] text-xl md:text-2xl">See details</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <Modal show={openModal}  size="md" onClose={() => setOpenModal(false)} popup>
                <Modal.Header className="bg-orange-50"/>
                <Modal.Body className="bg-orange-50">
                    <div className="text-center">
                        
                        <h3 className="mb-5 text-2xl font-normal text-black">
                        You just added {name} Box to your cart. 
                        </h3>
                        <div className="flex justify-center gap-4">
                        <Button color="dark" style={{padding: "8px 40px", borderRadius: "0"}} onClick={() => setOpenModal(false)}>
                            <p className="xl">Dismiss</p>
                        </Button>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
            
        </>
    )
}