import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";
import { Button, Modal } from 'flowbite-react';
import { useContext, useState } from "react";
import MyContext from "../Context/context";

const ManageSubscriptionModal = ({ show, onClose }) => {
    const { subscriptionInfo, setSubscriptionInfo, updateSubscription, fetchSubscriptions, personInfo, subData, setSubData, addressInfo} = useContext(MyContext);

    const handleChange = (e) => {
        setSubData({
            ...subData,
            [e.target.name]: e.target.value,
        });
    };

    const handleUpdateSubscription = async () => {
        const updatedData = {
            ...subData,
            user_id: personInfo.id || 1,
        };
        await updateSubscription(updatedData);
        onClose();
        setSubData("");
        fetchSubscriptions(personInfo.id);
    };


return (
        <Modal dismissible show={show} onClose={onClose}>
            <Modal.Header>Subscription Management</Modal.Header>
            <Modal.Body>
                <div className="space-y-2 modal-text">
                    <form className="grid grid-cols-3 gap-4">
                        <label className="col-span-1">Subscription name:</label>
                        <p className="indent-8 py-2 profile-text border col-span-2 sub">Recharge</p>
                        <label className="col-span-1">Address label:</label>
                        <input
                            className="indent-8 py-2 profile-text border col-span-2"
                            value={subscriptionInfo.label}
                            onChange={handleChange}
                        />
                        <label className="col-span-1">Billing address:</label>
                        <select
                            className="indent-8 py-2 profile-text border col-span-2"
                            value={subscriptionInfo.billingAddress}
                            onChange={handleChange}
                        >
                            {addressInfo.map((address, index) => (
                                <option value={index}>{address.street_number} {address.street} {address.postal_code} {address.city} {address.country}</option>
                            ))};
                        </select>
                        <label className="col-span-1">Shipping address:</label>
                        <select
                            className="indent-8 py-2 profile-text border col-span-2"
                            value={subscriptionInfo.shippingAddress}
                            onChange={handleChange}
                        >
                            {addressInfo.map((address, index) => (
                                <option value={index}>{address.street_number} {address.street} {address.postal_code} {address.city} {address.country}</option>
                            ))};
                        </select>
                        <label className="col-span-1">Extend term:</label>
                        <select
                            className="indent-8 py-2 profile-text border col-span-2"
                            value={subscriptionInfo.term}
                            onChange={handleChange}
                        >
                            <option value="1month">1 Month</option>
                            <option value="3months">3 Months</option>
                            <option value="6months">6 Months</option>
                            <option value="12months">12 Months</option>
                        </select>
                    </form>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={handleUpdateSubscription}>
                    Confirm
                </Button>
                <Button color="gray" onClick={onClose}>
                    Cancel
                </Button>
            </Modal.Footer>
        </Modal>
);
};

export default ManageSubscriptionModal;