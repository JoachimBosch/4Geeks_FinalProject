import { Link } from "react-router-dom";
import MyContext from "../Context/context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";

const Manage = () => {
    return (
        <>
        <div className="md:mx-60 mt-20 flex flex-col">
            <div className="mt-2 mb-4 ml-2">
                    <h2 className="indent-4">Subscription management</h2>
            </div>
            <div className="profile mx-2 p-4">
                
                <form className="mt-3 grid grid-cols-3 gap-4">
                    <label className="col-span-1">Subscription name:</label>
                    <p className="indent-8 py-2 profile-text border col-span-2 sub">Recharge</p>
                    <label className="col-span-1">Label:</label>
                    <input className="indent-8 py-2 profile-text border col-span-2" />
                    <label className="col-span-1">Billing address:</label>
                    <select className="indent-8 py-2 profile-text border col-span-2">
                        <option value="label1">101 Street name, City, Country</option>
                    </select>
                    <label className="col-span-1">Shipping address:</label>
                    <select className="indent-8 py-2 profile-text border col-span-2">
                        <option value="label1">101 Street name, City, Country</option>
                    </select>
                    <label className="col-span-1">Extend term</label>
                    <select className="indent-8 py-2 profile-text border col-span-2">
                        <option value="1month" className="indent-8">1 Month</option>
                        <option value="3months">3 Months</option>
                        <option value="6months">6 Months</option>
                        <option value="12months">12 Months</option>
                    </select>
                </form>
                    <div className="mt-8 mb-6 flex justify-center">
                        <Link to="">
                            <button className="profile-button mx-3 px-2 py-1 border rounded bg-inherit"><FontAwesomeIcon icon={faCheck}/> Confirm changes</button>
                        </Link>
                        <Link to="">
                            <button className="profile-button mx-3 px-2 py-1 border rounded bg-inherit"><FontAwesomeIcon icon={faXmark} /> Cancel changes</button>
                        </Link>
                    </div>
            </div>
            <div className="my-6 mx-auto flex justify-center">
                <Link to="/marketplace">
                    <button className="profile-button mx-3 px-2 py-1 border rounded bg-inherit">
                    Add another subscription
                    </button>
                </Link>
                &nbsp;
                <Link to="/profile">
                    <button className="profile-button mx-3 px-2 py-1 border rounded bg-inherit">
                    Back to profile
                    </button>
                </Link>
            </div>
        </div>
        </>
        )
}

export default Manage