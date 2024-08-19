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
    };

    const handleIdenticalCheck = (e) => {
        setIdenticalCheck(e.target.value);
    };

    const identicalChecker = () => {
        return changePassword.new_password === identicalCheck;
    };

    const handleSubmit = () => {
        handleToggle();
        if (changePassword.new_password.length <= 8) {
            setError("New password is not long enough");
        }
        else if (!identicalChecker()) {
            setError("Passwords do not match");
            setChangePassword({ email: personInfo.email, old_password: "", new_password: "" });
            setIdenticalCheck("");
        }

        else {
            change_Password(changePassword)
            .then(() => {
                setChangePassword({ email: "", old_password: "", new_password: "" });
                setIdenticalCheck("");
                setError("");
                setError("Password changed successfully");
            })
            .catch(() => {
                setError("Password incorrect. Please try again.");
            });
        }
    };

    return (
        <>
            <div className="flex min-h-full flex-col justify-center px-6 py-8 lg:px-8">
                <div className="md:mx-80 mt-20 flex flex-col">
                    <div className="mt-4 mb-6 ml-2">
                        <h2 className="text-center">Change password</h2>
                    </div>
                    <div className="profile mx-2 p-4 text-center flex flex-col">
                        <span>Enter your current password:</span>
                        <div className="mt-2 flex border-1 rounded">
                            <input
                                id="old_password"
                                name="old_password"
                                type={type}
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 mr-2"
                                onChange={handleChange}
                                value={changePassword.old_password}
                            />
                            <button
                                type="button"
                                className="inset-y-0 right-0 pr-3 flex items-center"
                                onClick={handleToggle}
                            >
                                <FontAwesomeIcon icon={icon} style={{ fontSize: "20px" }} />
                            </button>
                        </div>
                        
                        &nbsp;
                        <span>Enter your new password:</span>
                        <div className="mt-2 flex border-1 rounded">
                            <input
                                id="new_password"
                                name="new_password"
                                type={type}
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 mr-2"
                                onChange={handleChange}
                                value={changePassword.new_password}
                            />
                            <button
                                type="button"
                                className="inset-y-0 right-0 pr-3 flex items-center"
                                onClick={handleToggle}
                            >
                                <FontAwesomeIcon icon={icon} style={{ fontSize: "20px" }} />
                            </button>
                        </div>
                        
                        &nbsp;
                        <span>Repeat your new password:</span>
                        <div className="mt-2 flex border-1 rounded">
                            <input
                                id="identicalCheck"
                                type={type}
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 mr-2"
                                onChange={handleIdenticalCheck}
                                value={identicalCheck}
                            />
                            <button
                                type="button"
                                className="inset-y-0 right-0 pr-3 flex items-center"
                                onClick={handleToggle}
                            >
                                <FontAwesomeIcon icon={icon} style={{ fontSize: "20px" }} />
                            </button>
                        </div>
                        
                        &nbsp;
                        {error && <p className="error">{error}</p>}
                        <div className="my-6 mx-auto flex flex-col justify-center">
                            <button
                                onClick={handleSubmit}
                                className="profile-button px-2 py-1 border rounded bg-inherit"
                            >
                                Confirm change
                            </button>
                            <Link to="/profile">
                                <button className="cancel mx-3 px-2 py-1 bg-inherit">Back to profile</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
    </>
        )
}

export default ChangePassword