import MyContext from "../Context/context";
import { useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { Button, Modal } from "flowbite-react";


const Details = () => {

    const [openModal, setOpenModal] = useState(false);
    const [seeBox, setSeeBox] = useState(true);
    
    const { id } = useParams();

    const { boxes, cart, onAddToCart } = useContext(MyContext);

    const thisBox = boxes.filter((box) => {
            return box.id == id })[0];

    console.log(cart)


    return (
        
            <div className={`${thisBox.bg_color} py-20`}>
                <div className="border-b border-black flex mt-2">
                    <div className="max-w-[50%] lg:max-w-[40%] content-center">
                        <img src={seeBox ? `${thisBox.box_out}`: "/Box_in.png"} className="mx-auto p-8"></img>
                        <div className="flex gap-1 pb-5 px-8 cursor-pointer">
                            <img src={thisBox.box_out} 
                                className={seeBox ? "border border-black w-1/2" : "w-1/2"}
                                onClick={() => setSeeBox(true)}></img>
                            <img src="/Box_in.png" 
                                className={seeBox ? "w-1/2" : "border border-black w-1/2"}
                                onClick={() => setSeeBox(false)}></img>
                        </div>
                    </div>
                    <div className="border-l border-black p-8 content-center">
                        <h3 className={`text-6xl text-bçack [text-shadow:_5px_5px_8px_rgb(0_0_0_/_20%)]`}>{thisBox.name} box</h3>
                        <p className="text-black-500 [text-shadow:_3px_3px_3px_rgb(0_0_0_/_20%)] text-xl md:text-3xl my-3">from €{thisBox.price}</p>
                        <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                        <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                        <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                        <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                        <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                        <p className="my-3">{thisBox.description_1} 
                            <br></br>
                            {thisBox.description_2}
                        </p>
                        <button type="button" 
                                className={`px-10 py-1 text-white ${thisBox.button_color} hover:bg-stone-900 shadow-[6px_6px_12px_rgba(0,0,0,0.4)] text-xl md:text-2xl mt-5`} 
                                style={{fontWeight: "500"}}
                                onClick={() => {onAddToCart({id: thisBox.id,
                                                            name: thisBox.name,
                                                            box_out: thisBox.box_out,
                                                            price: thisBox.price,
                                                            quantity: thisBox.quantity,
                                                            price_3: thisBox.price_3,
                                                            price_6: thisBox.price_6,
                                                            price_12: thisBox.price_12})
                                                            , setOpenModal(true)}}
                                                            >Add to cart
                        </button>
                    </div>
                </div>


            {/* Products inside the box */}


                <div>
                    <h2 className="p-8">See products inside</h2>
                    <div className = "flex mx-10 pb-8 border-b border-black col gap-5">
                        <img src="" className="size-48"></img>
                        <div className="content-center gap-5">
                            <h4>{thisBox.item_1}</h4>
                            <p>{thisBox.item_1_text}</p>
                        </div>
                    </div>
                    <div className = "flex mx-10 py-8 border-b border-black col gap-5">
                        <img src="" className="size-48"></img>
                        <div className="content-center gap-5">
                            <h4>{thisBox.item_2}</h4>
                            <p>{thisBox.item_2_text}</p>
                        </div>
                    </div>
                    <div className = "flex mx-10 py-8 border-b border-black col gap-5">
                        <img src="" className="size-48"></img>
                        <div className="content-center gap-5">
                            <h4>{thisBox.item_3}</h4>
                            <p>{thisBox.item_3_text}</p>
                        </div>
                    </div>
                    <div className = "flex mx-10 py-8 border-b border-black col gap-5">
                        <img src="" className="size-48"></img>
                        <div className="content-center gap-5">
                            <h4>{thisBox.item_4}</h4>
                            <p>{thisBox.item_4_text}</p>
                        </div>
                    </div>
                </div>
                

            {/* Modal Add to Cart */}

            <Modal show={openModal} size="md" onClose={() => setOpenModal(false)} popup>
                <Modal.Header />
                <Modal.Body>
                    <div className="text-center">
                        
                        <h3 className="mb-5 text-2xl font-normal text-black">
                        You just added {thisBox.name} Box to your cart. 
                        </h3>
                        <div className="flex justify-center gap-4">
                        <Button color="dark" style={{padding: "8px 40px", borderRadius: "0"}} onClick={() => setOpenModal(false)}>
                            <p className="xl">Dismiss</p>
                        </Button>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>

            </div>
        
        )
}

export default Details