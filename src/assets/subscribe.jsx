import { Link } from "react-router-dom";
import MyContext from "../Context/context";
import { useContext } from "react";

const Subscribe = () => {
    const { subscribe, setSubscribe, setLogin, register } = useContext(MyContext)
    return (
        <>
            <div className="flex min-h-full flex-col justify-center px-6 py-40 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <h2 className="mt-10 text-center text-2xl font-bold tracking-tight text-gray-900">Create an account</h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form className="space-y-6" action="#" method="POST">
                <div>
                    <label for="email"><p>Email address</p></label>
                    <div className="mt-2">
                    <input id="email" name="email" type="email" value={subscribe.email} onChange={(e) => setSubscribe({
                             ...subscribe,
                             email: e.target.value})} autocomplete="email" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                    </div>
                </div>

                <div>
                    <div className="flex items-center justify-between">
                    <label for="password"><p>Password</p></label>
                    </div>
                    <div className="mt-2">
                    <input id="password" name="password" value={subscribe.password} onChange={(e) => setSubscribe({
                             ...subscribe,
                             password: e.target.value})} type="password" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                    </div>
                </div>

                <div>
                    <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" 
                    onClick={(e) => {
                    e.preventDefault();
                    register();
                    /* setSubscribe({email: "", password: ""}) */ /* This button is storing the value correctly */
                    }}>Register</button>
                </div>
                </form>

                <p className="mt-10 text-center text-sm text-gray-500">
                Already have an account?
                &nbsp;
                <Link to="/login">
                    <button className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500 bg-inherit"> Sign in here.</button>
                </Link>
                
                </p>
            </div>
        </div>
        </>
        )
}

export default Subscribe