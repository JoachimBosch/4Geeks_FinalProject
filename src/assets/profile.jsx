import React, { useContext, useState } from 'react';
import MyContext from '../Context/context';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencil, faTrashCan} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import UpdatePersonalInfoModal from './personalInfoModal';
import AddressModal from './manageAddressModal';
import ManageSubscriptionModal from './manageSubscriptionModal';
import UpdateAddressModal from './updateAddressModal';
import { Button, Modal } from "flowbite-react";
import DeleteAddress from './deleteAddress';

const Profile = () => {
    const { personInfo, setPersonInfo, addressInfo, setAddressInfo, subscriptionInfo, setSubscriptionInfo, deleteAddress, setFormData, setSubData, index, setIndex } = useContext(MyContext);
    const [openPersonalModal, setOpenPersonalModal] = useState(false);
    const [openAddressModal, setOpenAddressModal] = useState(false);
    const [openUpdateAddressModal, setOpenUpdateAddressModal] = useState(false);
    const [openManageSubscriptionModal, setOpenManageSubscriptionModal] = useState(false);
    const [openDeleteModal, setOpenDeleteModal] = useState(false);
    


    const handleDeleteClick = (addressId) => {
        setOpenDeleteModal(true);
      };

      const handleUpdateAddress = (updatedAddress, index) => {
        const updatedAddresses = [...addressInfo];
        updatedAddresses[index] = updatedAddress;
        setFormData(updatedAddresses);
    };

    /* const handleUpdateSubscription = (updatedSubscription, index) => {
        const updatedSub = [...subscriptionInfo];
        updatedSub[index] = updatedSub;
        setSubData(updatedSub);
    }; */

    return (
        <>
            <div className="" style={{backgroundColor: "#FAEAE0"}}>
                <div className='max-w-[1100px] mx-auto py-20 bg-orange-50'>

                <h2 className="text-center py-24 pb-16">My Profile</h2>

                {/* Profile section */}

                    <div className="mx-10 md:mx-16 py-6 border-t border-b border-gray-800">
                        <h4>
                        1. Personal information
                        </h4>
                    </div>

                    <div>
                        
                        <div className="mx-10 md:mx-16 pt-8 grid md:grid-cols-2 gap-4 pt-8">
                            <div>
                                <h4 className="text-lg font-semibold">Name:</h4>
                                <input type="text" value={personInfo.first_name ? personInfo.first_name : "Add your first name"}
                                readOnly className="text-xl px-4 py-3 focus:bg-transparent text-gray-800 w-full focus:outline-blue-600" />
                        
                            </div>
                            <div>
                                <h4 className="text-lg font-semibold">Last name:</h4>
                                <input type="text" value={personInfo.last_name ? personInfo.last_name : "Add your last name"}
                                readOnly className="text-xl px-4 py-3 focus:bg-transparent text-gray-800 w-full focus:outline-blue-600" />
                            </div>
                            <div>
                                <h4 className="text-lg font-semibold">Email address:</h4>
                                <input type="text" value={personInfo.email ? personInfo.email : "Add your email address"}
                                readOnly className="text-xl px-4 py-3 focus:bg-transparent text-gray-800 w-full focus:outline-blue-600" />
                            </div>
                            <div>
                                <h4 className="text-lg font-semibold">Phone number:</h4>
                                <input type="text" value={personInfo.phone ? personInfo.phone : "Add your phone number"}
                                readOnly className="text-xl px-4 py-3 focus:bg-transparent text-gray-800 w-full focus:outline-blue-600" />
                            </div>
                        </div>
                        <div className="mt-12 mb-24 flex flex-col md:flex-row items-center justify-center space-y-2 md:space-y-0 md:space-x-4">
                            <Link to="/change-password">
                                <button className="text-xl border border-black px-8 py-2 shadow-[4px_4px_8px_rgba(0,0,0,0.2)] hover:bg-white">Change password</button>
                            </Link>
                            
                            <button onClick={() => setOpenPersonalModal(true)} className="text-xl px-8 py-2 border border-black shadow-[4px_4px_8px_rgba(0,0,0,0.2)] hover:bg-white">
                            Update profile information
                            </button>
                            
                        </div>
                    </div>


                {/* Address section */}
                
                    <div className="mx-10 md:mx-16 py-6 border-t border-b border-gray-800">
                        <h4>2. Address information</h4>
                    </div>

                    <div className="mx-4 md:mx-16 pt-8">
                        <div className="relative overflow-x-auto ">
                            <table className="w-full text-lg text-left rtl:text-right text-gray-500">
                                <thead className="bg-black text-sm text-white uppercase" >
                                    <tr>
                                        <th scope="col" className="px-6 py-3">
                                            Label
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Street and number
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            City and Country
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Manage
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                {addressInfo.map((address, index) => (
                                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700" key={index}>
                                        <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            {address.relation_to_user}
                                        </td>
                                        <td className="px-6 py-4">
                                            {address.street} {address.street_number} 
                                        </td>
                                        <td className="px-6 py-4">
                                            {address.postal_code} {address.city} {address.country}
                                        </td>
                                        <td className="px-6 pr-0">
                                            <Link to="">
                                                <button className="px-2 py-1 bg-inherit" onClick={() => {
                                                    setIndex(index);
                                                    setOpenUpdateAddressModal(true);
                                                    }}>
                                                    <FontAwesomeIcon icon={faPencil} />
                                                </button>
                                            </Link>
                                            <Link to="">
                                                <button className="ml-2 px-2 py-1 bg-inherit" onClick={() => {
                                                    setIndex(index);
                                                    setOpenDeleteModal(true);
                                                }}>
                                                    <FontAwesomeIcon icon={faTrashCan} />
                                                </button>
                                            </Link>
                                        </td>
                                    </tr>
                                ))}
                                    
                                </tbody>
                            </table>
                                <div className="mt-12 mb-24 flex justify-center">
                                    <Link to="">
                                    <button
                                        onClick={() => {
                                            setOpenAddressModal(true);
                                        }}
                                        className="text-xl px-8 py-2 items-center border border-black shadow-[4px_4px_8px_rgba(0,0,0,0.2)] hover:bg-white">
                                            Add an address
                                        </button>
                                    </Link> 
                                </div>
                        </div>
                    </div>


                    {/* Subscription section */}

                    
                    <div className="mx-10 md:mx-16 py-6 border-t border-b border-gray-800">
                        <h4>3. Active subscriptions</h4>
                    </div>

                    <div className="profile mx-4 md:mx-16 pt-8">
                        <div className="relative overflow-x-auto mt-3">
                            <table className="w-full text-lg text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                <thead className="bg-black text-sm text-white uppercase">
                                    <tr>
                                        <th scope="col" className="px-6 py-3">
                                            Subscription
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Start date
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            End date
                                        </th>
                                        
                                    </tr>
                                </thead>
                                <tbody>
                                {subscriptionInfo.map((sub, index) => (
                                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                        <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            {sub.order}
                                        </td>
                                        <td className="px-6 py-4">
                                            {sub.start_date}
                                        </td>
                                        <td className="px-6 py-4">
                                            {sub.end_date}
                                        </td>
                                        
                                    </tr>
                                ))}

                                </tbody>
                            </table>

                                {/* <div className="mt-12 mb-24 flex justify-center">
                                    <button
                                        onClick={() => setOpenManageSubscriptionModal(true)}
                                        className="text-xl px-8 py-2 items-center border border-black shadow-[4px_4px_8px_rgba(0,0,0,0.2)] hover:bg-white">
                                            Manage subscriptions
                                    </button>
                                </div> */}
                        </div>
                    </div>
                

                    <div className="my-6 mx-auto flex justify-center">
                                <Link to="/marketplace">
                                    <p className="text-xl items-center underline underline-offset-2 text-orange-700 hover:text-orange-900">
                                            Buy another subscription 
                                    </p>
                                    
                                    
                                </Link>
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
                setAddressInfo={setAddressInfo}
                id={index}
            />

            {/* <ManageSubscriptionModal
                show={openManageSubscriptionModal}
                onClose={() => setOpenManageSubscriptionModal(false)}
                subscriptionInfo={subscriptionInfo[index]}
                setSubscriptionInfo={setSubscriptionInfo}
            /> */}

            <DeleteAddress
                show={openDeleteModal}
                onClose={() => setOpenDeleteModal(false)}
                addressInfo={addressInfo[index]}
                index={index}
                setOpenDeleteModal={setOpenDeleteModal}
            />

        </>
        )
}

export default Profile