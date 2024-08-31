import { useContext, useState } from "react";
import MyContext from "../Context/context";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ChangePassword = () => {
    const { personInfo, changePassword, setChangePassword, change_Password, type, icon, handleToggle } = useContext(MyContext);
    const [identicalCheck, setIdenticalCheck] = useState("");
    const [error, setError] = useState("");

    const handleChange = (e) => {
        setChangePassword({
            email: personInfo.email,
            ...changePassword,
            [e.target.name]: e.target.value,
        });
        console.log(changePassword)
    };

    const handleIdenticalCheck = (e) => {
        setIdenticalCheck(e.target.value);
    };

    const identicalChecker = () => {
        return changePassword.new_password === identicalCheck;
    };

    const handleSubmit = async () => {
        if (changePassword.new_password.length <= 8) {
            setError("New password is not long enough");
        }
        else if (!identicalChecker()) {
            setError("Passwords do not match");
            setChangePassword({ email: personInfo.email, old_password: "", new_password: "" });
            setIdenticalCheck("");
        }
        else {
            try {
                const response = await change_Password(changePassword);
    
                if (response == true) {
                    setChangePassword({ email: "", old_password: "", new_password: "" });
                    setIdenticalCheck("");
                    setError("Password changed successfully");
                } else {
                    setError("An error occurred. Please try again.");
                }
            } catch (error) {
                setError("Unexpected error occurred. Please try again.");
                console.error(error);
            }
        }
    };

    return (
        <div className="bg-orange-50 pt-52 pb-32 flex justify-center">
            <div className="bg-[#faeae0] rounded flex mx-10 shadow-[6px_6px_12px_rgba(0,0,0,0.4)]">
                <div id="text-comp" className="py-12 px-8">
                <h2 className="text-center text-3xl pb-12">Change password</h2>
                    
                <div className="flex flex-col">
                    <p className="text-lg text-gray-900">Current password:</p>
                    <div className="relative mt-1 flex">
                            <input
                                id="old_password"
                                name="old_password"
                                type={type}
                                className="block w-full border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-base sm:leading-6 mr-2"
                                onChange={handleChange}
                                value={changePassword.old_password}
                            />
                            <button
                                type="button"
                                className="absolute right-5"
                                onClick={handleToggle}
                            >
                                <FontAwesomeIcon icon={icon} style={{ fontSize: "15px" }} className="text-orange-950 opacity-60" />
                            </button>
                        </div>
                        
                        &nbsp;
                        <p className="text-lg text-gray-900">Enter new password:</p>
                        <div className="relative mt-1 flex border-1 rounded">
                            <input
                                id="new_password"
                                name="new_password"
                                type={type}
                                className="block w-full border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-base sm:leading-6 mr-2"
                                onChange={handleChange}
                                value={changePassword.new_password}
                            />
                            <button
                                type="button"
                                className="absolute right-5"
                                onClick={handleToggle}
                            >
                                <FontAwesomeIcon icon={icon} style={{ fontSize: "15px" }} className="text-orange-950 opacity-60" />
                            </button>
                        </div>
                        
                        &nbsp;
                        <p className="text-lg text-gray-900">Repeat new password:</p>
                        <div className="relative mt-1 flex border-1 rounded">
                            <input
                                id="identicalCheck"
                                type={type}
                                className="block w-full border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-base sm:leading-6 mr-2"
                                onChange={handleIdenticalCheck}
                                value={identicalCheck}
                            />
                            <button
                                type="button"
                                className="absolute right-5"
                                onClick={handleToggle}
                            >
                                <FontAwesomeIcon icon={icon} style={{ fontSize: "15px" }} className="text-orange-950 opacity-60" />
                            </button>
                        </div>
                        
                        &nbsp;
                        {error && <p className="error">{error}</p>}
                        <div className="mt-3 mx-auto flex flex-col justify-center">
                            <button
                                onClick={handleSubmit}
                                className="px-16 py-2 bg-black text-white shadow-[4px_4px_8px_rgba(0,0,0,0.2)] text-base"
                            >
                                Confirm change
                            </button>
                            <Link to="/profile">
                                <button className="w-full text-center mt-3 text-base underline text-orange-700 hover:text-orange-900">Back to profile</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
    </div>
        )
}

export default ChangePassword