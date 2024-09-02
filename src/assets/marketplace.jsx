import MyContext from "../Context/context";
import { useContext } from "react";
import { Link } from 'react-router-dom'

const Marketplace = () => {
    
    const { boxes} = useContext(MyContext);
    
    
    return (

        
        <>
            <div className="bg-[#FAEAE0] py-16">
                <h2 className="text-center pt-24 text-4xl md:text-5xl px-4">Our Experiences</h2>
                <p className="text-center py-8 text-xl">FIND THE ONE THAT SUITS YOUR NEEDS</p>
            


                <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8"> 
                    <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                        {boxes.map(box => (<div className="group relative" key={box.id}>
                            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md lg:aspect-none group-hover:opacity-75">
                                <img src={box.box_out}></img>
                            </div>
                            <div className="mt-4 flex justify-between">
                                <div className="mx-4">
                                    <h3 className="text-gray-700 text-2xl font-semibold">
                                        <Link to={`/details/${box.id}`}>
                                            <span aria-hidden="true" className="absolute inset-0"></span>
                                            {box.name}
                                        </Link>
                                    </h3>
                                    <p className="mt-1 text-gray-500 line-clamp-3 text-xl">{box.description_1}</p>
                                </div>
                                
                                <p className="font-medium text-gray-900">{parseFloat(box.price).toFixed(2) + "€"}</p>
                            </div>
                        </div>
                        ))}
                    </div>
                </div>
            </div>    
        </>
        )
}

export default Marketplace