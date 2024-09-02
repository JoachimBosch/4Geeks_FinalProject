import { Link } from "react-router-dom";
import MyContext from "../Context/context";
import { useContext } from "react";
import { Button, Modal } from "flowbite-react";

const Subscribe = () => {
    const { subscribe, setSubscribe, setLogin, register, registerMsg, setRegisterMsg, registerModal, setRegisterModal } = useContext(MyContext)
    
    const handleSubscribe = async () => {
        await register();
        setRegisterModal(true);
    }

    const handleExit = () => {
        setRegisterModal(false);
        setRegisterMsg("");
    }
    
    return (
        <div className="bg-orange-50 pt-52 pb-32 flex justify-center">
            <div className="bg-[#faeae0] rounded flex mx-10 shadow-[6px_6px_12px_rgba(0,0,0,0.4)]">
                <div id="left" >
                    <img src="/Tea.jpg" className="h-[100%] object-cover rounded-l-md"></img>
                </div>
                
                
                <div id="right" className="py-12 px-10 w-[60%]">
                    <h2 className="text-center text-3xl pb-16">Create account</h2>
                

                    
                        <form className="space-y-4" action="#" method="POST">
                        <div>
                            <label for="email" className="block text-base text-gray-900">Email address</label>
                            <div className="mt-2">
                            <input id="email" name="email" type="email" value={subscribe.email} onChange={(e) => setSubscribe({
                                    ...subscribe,
                                    email: e.target.value})} autocomplete="email" required className="block w-full  border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-base sm:leading-6" />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                            <label for="password" className="block text-base text-gray-900">Password</label>
                            </div>
                            <div className="mt-2">
                            <input id="password" name="password" value={subscribe.password} onChange={(e) => setSubscribe({
                                    ...subscribe,
                                    password: e.target.value})} type="password" required className="block w-full border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-base sm:leading-6" />
                            </div>
                        </div>

                        <div className="flex justify-center pt-7">
                            <button type="submit" className="px-16 py-2 bg-black text-white shadow-[4px_4px_8px_rgba(0,0,0,0.2)] text-base" 
                            onClick={(e) => {
                            e.preventDefault();
                            handleSubscribe();
                            /* setSubscribe({email: "", password: ""}) */ /* This button is storing the value correctly */
                            }}>Register</button>
                        </div>
                        </form>

                        <p className="mt-4 text-center text-sm text-gray-500">
                        Already have an account?
                        &nbsp;
                        <Link to="/login">
                            <button className="underline leading-6 text-orange-700 hover:text-orange-900"> Sign in here.</button>
                        </Link>
                        
                        </p>
                    
                </div>
                
            </div>

            <Modal show={registerModal} size="md" onClose={handleExit} popup>
                <Modal.Header />
                <Modal.Body>
                    <div className="text-center">
                        
                        <h3 className="mb-5 text-2xl font-normal text-black">
                        {registerMsg}
                        </h3>
                        <div className="flex justify-center gap-4">
                            {registerMsg === "Successfully registered" 
                            ?          
                            <Link to={`/login`}>
                                <Button color="dark" style={{padding: "8px 40px", borderRadius: "0"}} onClick={handleExit}>
                                    <p className="xl">Log in</p>
                                </Button>
                            </Link>
                                
                            :
                            <Button color="dark" style={{padding: "8px 40px", borderRadius: "0"}} onClick={handleExit}>
                            <p className="xl">Dismiss</p>
                            </Button>
                        }
                        
                        </div>
                    </div>
                </Modal.Body>
            </Modal>

        </div>
        )
}

export default Subscribe