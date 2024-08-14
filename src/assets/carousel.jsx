import { useContext } from 'react'
import { Link } from 'react-router-dom'
import MyContext from '../Context/context'



export default function Carousel_content({id, name, background, callout, box_out, text_color, button_color, price, quantity}) {
    
    const { onAddToCart, cart } = useContext(MyContext)
    
    console.log(cart)

    return (
        <>
            
            <div>
                <div className="flex bg-cover pt-28 justify-center gap-3" style={{ backgroundImage: `url(${background})`}}>
                    <div className="flex flex-col items-center align-bottom">
                        <img src={box_out} alt={`${name} box`}></img>
                        <button type="button" className="border border-stone-800 my-10 px-10 md:px-16 py-1 md:py-2 text-stone-900 hover:bg-stone-100 shadow-[4px_4px_8px_rgba(0,0,0,0.2)] text-lg md:text-2xl">Open box</button>
                    </div>
                    <div className="w-full max-w-lg ">
                        <h3 className={`text-4xl md:text-6xl lg:text-7xl ${text_color} [text-shadow:_5px_5px_8px_rgb(0_0_0_/_20%)] py-[5%]`}>{callout}</h3>
                        <div className="flex flex-row items-center gap-4 py-10">
                            <button type="button" 
                                    className={`px-10 py-1 md:px-16 md:py-2 text-white ${button_color} hover:bg-stone-900 shadow-[6px_6px_12px_rgba(0,0,0,0.4)] text-xl md:text-2xl`} 
                                    style={{fontWeight: "500"}}
                                    onClick={() => onAddToCart({ id, name, box_out, price, quantity })}>Buy now</button>
                            <Link to={`details/${id}`}>
                                <button type="button" className="border border-stone-800 px-6 py-1 md:px-12 md:py-2 text-stone-900 hover:bg-stone-100 shadow-[4px_4px_8px_rgba(0,0,0,0.2)] text-xl md:text-2xl">See details</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            
        </>
    )
}