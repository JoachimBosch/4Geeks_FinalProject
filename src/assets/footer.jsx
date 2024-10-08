import MyContext from "../Context/context";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
    <>
        <footer className="w-full py-6 bg-black">
            <div className="max-w-7xl px-4 sm:px-4 lg:px-8">
                <div className="grid grid-cols-[90px_auto] md:grid-cols-[150px_auto] divide-x items-center">
                    <div className="w-fit">
                        <Link to="https://4geeks.com/" target="_blank" rel="noopener noreferrer">
                        <img src="/4GeeksAcademyLogo-500x474.jpg" className="max-w-16 mx-auto opacity-80"></img>
                        <p className="text-orange-50 text-center text-base">4Geeks Academy </p>
                        </Link>
                        
                    </div>
                    <div className="px-5 min-w-3/4">
                        <p className="text-orange-50 text-xl font-semibold pb-2">Final Project by</p>

                        <div className="md:flex space-x-4 space-y-2 items-center py-3">
                            <p className="text-orange-50 text-base"></p>
                            <a href="https://github.com/inestell/" className="flex gap-2 text-gray-900 items-center" target="_blank">
                                <img src="/GitHub.png" className="max-w-8 max-h-8 md:max-w-6 md:max-h-6"></img>
                                <p className="text-xl text-orange-50 hover:underline">Ines Tellechea</p>
                            </a>
                            <a href="https://github.com/joachimbosch/" className="flex gap-2 text-gray-900 items-center" target="_blank">
                                <img src="/GitHub.png" className="max-w-8 max-h-8 md:max-w-6 md:max-h-6"></img>
                                <p className="text-xl text-orange-50 hover:underline">Joachim Bosch</p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>                               
    </>
    )
    
}

export default Footer