import { Link } from "react-router-dom";
import MyContext from "../Context/context";
import { useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Modal } from "flowbite-react";

const Login = () => {
    const { loggingIn, setLoggingIn, login, type, icon, handleToggle, loginModal, setLoginModal } = useContext(MyContext);

    const handleLogin = async () => {
        await login(loggingIn);
        if (error) {
            setLoginModal(true)
        }
    }

    return (
    <div className="bg-orange-50 pt-28 md:pt-52 pb-32 flex justify-center">
        
            
            <div className="bg-[#faeae0] rounded flex flex-col-reverse md:flex-row mx-2 shadow-[6px_6px_12px_rgba(0,0,0,0.4)]">
                <div id="left-side" className="py-12 px-6 md:px-10 md:w-[60%]">
                    <h2 className="text-center text-3xl pb-10 md:pb-16">Sign in</h2>
                    <form className="space-y-4" action="#" method="POST">
                    <div>
                        <label for="email" className="block text-base text-gray-900">Email address</label>
                        <div className="mt-2">
                        <input id="email" name="email" type="email" autocomplete="email" value={loggingIn.email} onChange={(e) => setLoggingIn({
                                ...loggingIn,
                                email: e.target.value})}required 
                                className="block w-full border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-base sm:leading-6" />
                        </div>
                    </div>

                    <div>
                        <div className="flex items-center justify-between">
                        <label for="password" className="block text-base text-gray-900">Password</label>
                        <div className="">
                            <Link to="/change-password">
                                <p className="text-sm font-semibold text-gray-700 hover:underline">Forgot password?</p>
                            </Link>
                        </div>
                        </div>
                        <div className="mt-2 flex relative">
                            <input id="password" name="password" type={type} autocomplete="current-password" value={loggingIn.password} onChange={(e) => setLoggingIn({
                                ...loggingIn,
                                password: e.target.value})} required className="block w-full border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-base sm:leading-6 mr-2" />
                                    <button
                                    type="button"
                                    className="absolute inset-y-0 right-2 pr-3 flex items-center"
                                    onClick={handleToggle}
                                >
                                    <FontAwesomeIcon icon={icon} style={{ fontSize: "15 px" }} className="text-orange-950 opacity-60" />
                                </button>
                        </div>
                    </div>

                    <div className="flex justify-center pt-7">
                        <button type="submit" className="px-16 py-2 bg-black text-white shadow-[4px_4px_8px_rgba(0,0,0,0.2)] text-base"
                        onClick={(e) => {
                            e.preventDefault();
                            handleLogin();
                            }}>Sign in</button>
                    </div>
                    </form>

                    <p className="mt-4 text-center text-sm text-gray-500">
                    Not registered yet? 
                    &nbsp;
                    <Link to="/subscribe">
                        <button className="underline leading-6 text-orange-700 hover:text-orange-900">Sign up here.</button>
                    </Link>
                    </p>
                </div>
                <div id="right-side" className="opacity-80">
                    <img src="/Candles&lights.png" className="h-[530px] md:h-[100%] object-cover rounded-t-md md:rounded-r-md"></img>
                </div>
            </div>
            
            <Modal show={loginModal} size="md" onClose={() => setLoginModal(false)} popup>
                <Modal.Header />
                <Modal.Body>
                    <div className="text-center">
                        
                        <h3 className="mb-5 text-2xl font-normal text-black">
                        Username or password incorrect. Please try again.
                        </h3>
                        <div className="flex justify-center gap-4">
                        <Button color="dark" style={{padding: "8px 40px", borderRadius: "0"}} onClick={() => setLoginModal(false)}>
                            <p className="xl">Dismiss</p>
                        </Button>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        
    </div>
    )
    
}

export default Login