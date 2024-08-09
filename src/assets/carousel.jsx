import { Link } from 'react-router-dom'
import backgroundRelax from '../images/Background-Relax.jpg'
import image2 from '../images/RelaxOut.png'

export default function Carousel() {
    return (
        <>
            <div className="h-view text-center pt-24" style={{backgroundColor: "#FAEAE0"}}>
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
            
            
            
            <div>
                <div className="flex bg-cover pt-28 justify-center gap-3" style={{ backgroundImage: `url(${backgroundRelax})`}}>
                    <div className="flex flex-col items-center align-bottom">
                        <img src={image2} alt="Relax box"></img>
                        <button type="button" className="border border-stone-800 my-10 px-10 md:px-16 py-1 md:py-2 text-stone-900 hover:bg-stone-100 shadow-[4px_4px_8px_rgba(0,0,0,0.2)] text-lg md:text-2xl">Open box</button>
                    </div>
                    <div className="w-full max-w-lg ">
                        <h3 className="text-5xl md:text-6xl lg:text-7xl text-white [text-shadow:_5px_5px_8px_rgb(0_0_0_/_20%)] py-[5%]">Surrender after a long day</h3>
                        <div className="flex flex-row items-center gap-4 py-10">
                            <button type="button" className="px-10 py-1 md:px-16 md:py-2 text-white bg-stone-700 hover:bg-stone-900 shadow-[6px_6px_12px_rgba(0,0,0,0.4)] text-xl md:text-2xl" style={{fontWeight: "500"}}>Buy now</button>
                            <Link to="details">
                                <button type="button" className="border border-stone-800 px-6 py-1 md:px-12 md:py-2 text-stone-900 hover:bg-stone-100 shadow-[4px_4px_8px_rgba(0,0,0,0.2)] text-xl md:text-2xl">See details</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-black text-white p-4 opacity-70">
                <p className="text-center text-sm md:text-xl lg:text-2xl">* Buy yourself a one-time experience, or treat yourself every month by taking a subscription. *</p>
            </div>
            
        </>
    )
}