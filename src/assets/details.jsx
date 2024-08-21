import MyContext from "../Context/context";
import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';


const Details = () => {

    const { id } = useParams();

    const { boxes, cart, onAddToCart } = useContext(MyContext);

    const thisBox = boxes.filter((box) => {
            return box.id == id })[0];

    console.log(cart)


    return (
        
            <div className={`${thisBox.bg_color} py-20`}>
                <div className="border-b border-black flex">
                    <div className="max-w-[50%] lg:max-w-[40%] content-center">
                        <img src={thisBox.box_out} className="mx-auto p-8"></img>
                        <div className="flex gap-1 pb-5 px-8">
                            <img src={thisBox.box_out} className="border border-black w-1/2"></img>
                            <img src={thisBox.box_out} className="w-1/2"></img>
                        </div>
                    </div>
                    <div className="border-l border-black p-8 content-center">
                        <h3 className="text-6xl text-white [text-shadow:_5px_5px_8px_rgb(0_0_0_/_20%)]">{thisBox.name} box</h3>
                        <p className="text-black-500 [text-shadow:_3px_3px_3px_rgb(0_0_0_/_20%)] text-xl md:text-3xl my-3">from 29€</p>
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
                                onClick={() => onAddToCart({id: thisBox.id,
                                                            name: thisBox.name,
                                                            box_out: thisBox.box_out,
                                                            price: thisBox.price,
                                                            quantity: thisBox.quantity,
                                                            price_3: thisBox.price_3,
                                                            price_6: thisBox.price_6,
                                                            price_12: thisBox.price_12})
                                                            }
                                                            >Add to cart
                        </button>
                    </div>
                </div>



                <div>
                    <h2 className="p-8">See products inside</h2>
                    <div className = "flex mx-10 pb-8 border-b border-black col gap-5">
                        <img src="" className="size-48"></img>
                        <div className="content-center gap-5">
                            <h4>Name</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras leo lectus, facilisis non f
ermentum sit amet, ultrices vitae mauris. Maecenas enim augue, pretium ut nibh quis</p>
                        </div>
                    </div>
                    <div className = "flex mx-10 py-8 border-b border-black col gap-5">
                        <img src="" className="size-48"></img>
                        <div className="content-center gap-5">
                            <h4>Name</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras leo lectus, facilisis non f
ermentum sit amet, ultrices vitae mauris. Maecenas enim augue, pretium ut nibh quis</p>
                        </div>
                    </div>
                    <div className = "flex mx-10 py-8 border-b border-black col gap-5">
                        <img src="" className="size-48"></img>
                        <div className="content-center gap-5">
                            <h4>Name</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras leo lectus, facilisis non f
ermentum sit amet, ultrices vitae mauris. Maecenas enim augue, pretium ut nibh quis</p>
                        </div>
                    </div>
                    <div className = "flex mx-10 py-8 border-b border-black col gap-5">
                        <img src="" className="size-48"></img>
                        <div className="content-center gap-5">
                            <h4>Name</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras leo lectus, facilisis non f
ermentum sit amet, ultrices vitae mauris. Maecenas enim augue, pretium ut nibh quis</p>
                        </div>
                    </div>
                </div>
                
            </div>
        
        )
}

export default Details