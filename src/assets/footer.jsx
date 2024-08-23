import MyContext from "../Context/context";

const Footer = () => {
    return (
    <>
        <footer className="w-full py-6 bg-black">
            <div className="max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-[150px_auto] divide-x">
                    <div className="w-fit ">
                        <img src="/4GeeksAcademyLogo-500x474.jpg" className="max-w-16 mx-auto opacity-80"></img>
                        <p className="text-orange-50 text-center text-base">4Geeks Academy </p>
                    </div>
                    <div className="px-5 min-w-3/4">
                        <p className="text-orange-50 text-xl font-semibold pb-2">Final Project</p>

                        <div className="flex space-x-4 items-center py-3">
                            <p className="text-orange-50 text-base">by</p>
                            <a href="#" className="flex gap-2 text-gray-900 items-center">
                                <img src="public/GitHub.png" className="max-w-6 max-h-6"></img>
                                <p className="text-xl text-orange-50 hover:underline">Ines Tellechea</p>
                            </a>
                            <a href="#" className="flex gap-2 text-gray-900 items-center">
                                <img src="public/GitHub.png" className="max-w-6 max-h-6"></img>
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