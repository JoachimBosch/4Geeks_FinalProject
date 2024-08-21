import React, { useContext, useState } from 'react';
import MyContext from '../Context/context';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencil, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import UpdatePersonalInfoModal from './personalInfoModal';
import AddressModal from './manageAddressModal';
import ManageSubscriptionModal from './manageSubscriptionModal';
import UpdateAddressModal from './updateAddressModal';

const Profile = () => {
    const { personInfo, setPersonInfo, addressInfo, setAddressInfo, subscriptionInfo, deleteAddress } = useContext(MyContext);
    const [openPersonalModal, setOpenPersonalModal] = useState(false);
    const [openAddressModal, setOpenAddressModal] = useState(false);
    const [openUpdateAddressModal, setOpenUpdateAddressModal] = useState(false);
    const [openManageSubscriptionModal, setOpenManageSubscriptionModal] = useState(false);
    const [index, setIndex] = useState("")
    const [updateInfo, setUpdateInfo] = useState()

    const handleDeleteClick = (addressId) => {
        if (window.confirm("Are you sure you want to delete this address?")) {
          deleteAddress(addressId);
        }
      };

      const handleUpdateAddress = (updatedAddress, index) => {
        const updatedAddresses = [...addressInfo];
        updatedAddresses[index] = updatedAddress;
        setAddressInfo(updatedAddresses);
    };

    return (
        <>
            <div className="md:mx-60 mt-20 flex flex-col">
            {/* Profile section */}
                <div className="mt-4 mb-6 ml-2">
                    <h2 className="indent-4">Personal information</h2>
                </div>
                <div className="profile mx-2 p-4">
                    
                    <div className="mt-3">
                        <h3>Name:</h3>
                        <p className="indent-8 pb-2 profile-text border-b">{personInfo.first_name ? personInfo.first_name : "Add your first name"}</p>
                        <h3>Last name:</h3>
                        <p className="indent-8 pb-2 profile-text border-b">{personInfo.last_name ? personInfo.last_name : "Add your last name"}</p>
                        <h3>Email address:</h3>
                        <p className="indent-8 pb-2 profile-text border-b">{personInfo.email ? personInfo.email : "Add your email address"}</p>
                        <h3>Phone number:</h3>
                        <p className="indent-8 pb-2 profile-text">{personInfo.phone ? personInfo.phone : "Add your phone number"}</p>
                    </div>
                    <div className="mt-2 mb-6 flex justify-center">
                        <Link to="/change-password">
                            <button className="profile-button mx-3 px-2 py-1 border rounded bg-inherit">Change password</button>
                        </Link>
                        
                        <button onClick={() => setOpenPersonalModal(true)} className="profile-button mx-3 px-2 py-1 border rounded bg-inherit">
                        Update profile information
                        </button>
                        
                    </div>
                </div>
            {/* Address section */}
            
                <div className="mt-10 mb-6 ml-2">
                    <h2 className="indent-4">Address information</h2>
                </div>
                <div className="profile mx-2 p-4">
                    <div class="relative overflow-x-auto mt-3">
                        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                            <thead class="text-xs text-gray-700 uppercase" style={{backgroundColor: "#f7f1ed"}}>
                                <tr>
                                    <th scope="col" class="px-6 py-3">
                                        Label
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Street and number
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        City and Country
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Manage
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                            {addressInfo.map((address, index) => (
                                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700" key={index}>
                                    <td scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        {address.relation_to_user}
                                    </td>
                                    <td class="px-6 py-4">
                                        {address.street} {address.street_number} 
                                    </td>
                                    <td class="px-6 py-4">
                                        {address.postal_code} {address.city} {address.country}
                                    </td>
                                    <td class="px-6 pr-0">
                                        <Link to="">
                                            <button className="px-2 py-1 bg-inherit" onClick={() => {
                                                setIndex(index);
                                                setOpenUpdateAddressModal(true);
                                                }}>
                                                <FontAwesomeIcon icon={faPencil} />
                                            </button>
                                        </Link>
                                        <Link to="">
                                            <button className="ml-2 px-2 py-1 bg-inherit" onClick={() => handleDeleteClick(address.id)}>
                                                <FontAwesomeIcon icon={faTrashCan} />
                                            </button>
                                        </Link>
                                    </td>
                                </tr>
                             ))}
                                
                            </tbody>
                        </table>
                            <div className="my-6 mx-auto flex justify-center">
                                <Link to="">
                                <button
                                    onClick={() => {
                                        setOpenAddressModal(true);
                                    }}
                                    className="profile-button px-2 py-1 border rounded bg-inherit">
                                        Add an address
                                    </button>
                                </Link> 
                            </div>
                    </div>
                </div>
                {/* Subscription section */}
                <div className="mt-10 mb-6 ml-2">
                    <h2 className="indent-4">Active subscriptions</h2>
                </div>
                <div className="profile mx-2 my-4 p-4">
                    <div class="relative overflow-x-auto mt-3">
                        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                            <thead class="text-xs text-gray-700 uppercase" style={{backgroundColor: "#f7f1ed"}}>
                                <tr>
                                    <th scope="col" class="px-6 py-3">
                                        Label
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Subscription
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Months left
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Next billing date
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                    <td scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        {subscriptionInfo.label}
                                    </td>
                                    <td class="px-6 py-4">
                                        Recharge
                                    </td>
                                    <td class="px-6 py-4">
                                        5
                                    </td>
                                    <td class="px-6 py-4">
                                        August 27, 2024
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                            <div className="my-6 mx-auto flex justify-center">
                                <button
                                    onClick={() => setOpenManageSubscriptionModal(true)}
                                    className="profile-button mx-3 px-2 py-1 border rounded bg-inherit">
                                        Manage subscriptions
                                </button>
                            </div>
                    </div>
                </div>
            </div>

            {/* Modals */}
            <UpdatePersonalInfoModal
                show={openPersonalModal}
                onClose={() => setOpenPersonalModal(false)}
                personInfo={personInfo}
                setPersonInfo={setPersonInfo}
            />

            <AddressModal
                show={openAddressModal}
                onClose={() => setOpenAddressModal(false)}
                addressInfo={addressInfo}
                setAddressInfo={setAddressInfo}
            />

            <UpdateAddressModal
                show={openUpdateAddressModal}
                onClose={() => setOpenUpdateAddressModal(false)}
                addressInfo={addressInfo[index]}
                setAddressInfo={(updatedAddress) => handleUpdateAddress(updatedAddress, index)}
                id={index}
            />

            <ManageSubscriptionModal
                show={openManageSubscriptionModal}
                onClose={() => setOpenManageSubscriptionModal(false)}
            />
        </>
        )
}

export default Profile