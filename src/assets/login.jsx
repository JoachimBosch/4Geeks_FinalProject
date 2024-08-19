import { Link } from "react-router-dom";
import MyContext from "../Context/context";
import { useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

const Login = () => {
    const { loggingIn, setLoggingIn, login } = useContext(MyContext);
    const [type, setType] = useState("password");
    const [icon, setIcon] = useState(faEyeSlash);

    const handleToggle = () => {
        if (type==='password'){
           setIcon(faEye);
           setType('text')
        } else {
           setIcon(faEyeSlash)
           setType('password')
        }
        console.log("Current type:", type);
     }

    return (
    <>
        <div className="flex min-h-full flex-col justify-center px-6 py-40 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign in to your account</h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form className="space-y-6" action="#" method="POST">
                <div>
                    <label for="email" className="block text-sm font-medium leading-6 text-gray-900">Email address</label>
                    <div className="mt-2">
                    <input id="email" name="email" type="email" autocomplete="email" value={loggingIn.email} onChange={(e) => setLoggingIn({
                             ...loggingIn,
                             email: e.target.value})}required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                    </div>
                </div>

                <div>
                    <div className="flex items-center justify-between">
                    <label for="password" className="block text-sm font-medium leading-6 text-gray-900">Password</label>
                    <div className="text-sm">
                        <Link to="/change-password">
                            <p className="cancel">Forgot password?</p>
                        </Link>
                    </div>
                    </div>
                    <div className="mt-2 flex border-1 rounded">
                    <input id="password" name="password" type={type} autocomplete="current-password" value={loggingIn.password} onChange={(e) => setLoggingIn({
                             ...loggingIn,
                             password: e.target.value})} required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 mr-2" />
                                <button
                                type="button"
                                className="inset-y-0 right-0 pr-3 flex items-center"
                                onClick={handleToggle}
                            >
                                <FontAwesomeIcon icon={icon} style={{ fontSize: "20px" }} />
                            </button>
                    </div>
                </div>

                <div>
                    <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    onClick={(e) => {
                        e.preventDefault();
                        login();
                        setLoggingIn({email: "", password: ""}) /* This button is storing the value correctly */
                        }}>Sign in</button>
                </div>
                </form>

                <p className="mt-10 text-center text-sm text-gray-500">
                Not registered yet? 
                &nbsp;
                <Link to="/subscribe">
                    <button className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500 bg-inherit">Sign up here.</button>
                </Link>
                </p>
            </div>
        </div>
    </>
    )
    
}

export default Login