import { Link } from "react-router-dom";
import MyContext from "../Context/context";
import { useContext, useState } from "react";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

const Login = () => {
    const { login, setLogin } = useContext(MyContext);
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
                    <input id="email" name="email" type="email" autocomplete="email" value={login.email} onChange={(e) => setLogin({
                             ...login,
                             email: e.target.value})}required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                    </div>
                </div>

                <div>
                    <div className="flex items-center justify-between">
                    <label for="password" className="block text-sm font-medium leading-6 text-gray-900">Password</label>
                    <div className="text-sm">
                        <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">Forgot password?</a>
                    </div>
                    </div>
                    <div className="mt-2">
                    <input id="password" name="password" type="password" autocomplete="current-password" value={login.password} onChange={(e) => setLogin({
                             ...login,
                             password: e.target.value})} required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                    {/* <span class="flex justify-around items-center" onClick={handleToggle}>
                        <p class="absolute mr-10" style={{ size: "25px" }}>{icon}</p>
                    </span> */}
                    </div>
                </div>

                <div>
                    <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    onClick={(e) => {
                        e.preventDefault();
                        console.log(login);
                        setLogin({email: "", password: ""}) /* This button is storing the value correctly */
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