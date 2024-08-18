import { useContext, useState } from "react";
import MyContext from "../Context/context";
import { Link } from "react-router-dom";

const ChangePassword = () => {
    const { personInfo, changePassword, setChangePassword, change_Password } = useContext(MyContext);
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
                setChangePassword({ email: personInfo.email, old_password: "", new_password: "" });
                setIdenticalCheck("");
                setError("");
                alert("Password changed successfully");
            })
            .catch(() => {
                setError("Failed to change password. Please try again.");
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
                        <input
                            id="old_password"
                            name="old_password"
                            type="password"
                            className=""
                            onChange={handleChange}
                            value={changePassword.old_password}
                        />
                        &nbsp;
                        <span>Enter your new password:</span>
                        <input
                            id="new_password"
                            name="new_password"
                            type="password"
                            className=""
                            onChange={handleChange}
                            value={changePassword.new_password}
                        />
                        &nbsp;
                        <span>Repeat your new password:</span>
                        <input
                            id="identicalCheck"
                            type="password"
                            className=""
                            onChange={handleIdenticalCheck}
                            value={identicalCheck}
                        />
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