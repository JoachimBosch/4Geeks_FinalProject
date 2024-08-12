import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";
import { Button, Modal } from 'flowbite-react';
import { useContext } from "react";
import MyContext from "../Context/context";

const ManageSubscriptionModal = ({ show, onClose }) => {
    const { subscriptionInfo, setSubscriptionInfo } = useContext(MyContext)

return (
        <Modal dismissible show={show} onClose={onClose}>
            <Modal.Header>Subscription Management</Modal.Header>
            <Modal.Body>
                <div className="space-y-2 modal-text">
                    <form className="grid grid-cols-3 gap-4">
                        <label className="col-span-1">Subscription name:</label>
                        <p className="indent-8 py-2 profile-text border col-span-2 sub">Recharge</p>
                        <label className="col-span-1">Label:</label>
                        <input
                            className="indent-8 py-2 profile-text border col-span-2"
                            value={subscriptionInfo.label}
                            onChange={(e) => setSubscriptionInfo({ ...subscriptionInfo, label: e.target.value })}
                        />
                        <label className="col-span-1">Billing address:</label>
                        <select
                            className="indent-8 py-2 profile-text border col-span-2"
                            value={subscriptionInfo.billingAddress}
                            onChange={(e) => setSubscriptionInfo({ ...subscriptionInfo, billingAddress: e.target.value })}
                        >
                            <option value="label1">101 Street name, City, Country</option>
                        </select>
                        <label className="col-span-1">Shipping address:</label>
                        <select
                            className="indent-8 py-2 profile-text border col-span-2"
                            value={subscriptionInfo.shippingAddress}
                            onChange={(e) => setSubscriptionInfo({ ...subscriptionInfo, shippingAddress: e.target.value })}
                        >
                            <option value="label1">101 Street name, City, Country</option>
                        </select>
                        <label className="col-span-1">Extend term:</label>
                        <select
                            className="indent-8 py-2 profile-text border col-span-2"
                            value={subscriptionInfo.term}
                            onChange={(e) => setSubscriptionInfo({ ...subscriptionInfo, term: e.target.value })}
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
                <Button>
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