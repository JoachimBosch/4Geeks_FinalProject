import React, { useContext, useState } from 'react';
import MyContext from '../Context/context';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencil, faTrashCan, faPerson, faAddressCard , faBox} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import UpdatePersonalInfoModal from './personalInfoModal';
import AddressModal from './manageAddressModal';
import ManageSubscriptionModal from './manageSubscriptionModal';
import UpdateAddressModal from './updateAddressModal';

const Profile = () => {
    const { personInfo, setPersonInfo, addressInfo, setAddressInfo, subscriptionInfo, setSubscriptionInfo, deleteAddress, setFormData, setSubData, index, setIndex } = useContext(MyContext);
    const [openPersonalModal, setOpenPersonalModal] = useState(false);
    const [openAddressModal, setOpenAddressModal] = useState(false);
    const [openUpdateAddressModal, setOpenUpdateAddressModal] = useState(false);
    const [openManageSubscriptionModal, setOpenManageSubscriptionModal] = useState(false);
    


    const handleDeleteClick = (addressId) => {
        if (window.confirm("Are you sure you want to delete this address?")) {
          deleteAddress(addressId);
        }
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

                <h2 className="text-center py-24 pb-16">Profile</h2>

                {/* Profile section */}

                    <div className="mx-16 py-6 border-t border-b border-gray-800 flex items-center gap-3">
                        <FontAwesomeIcon icon={ faPerson }></FontAwesomeIcon>
                        <h4>
                        Personal information
                        </h4>
                    </div>

                    <div className="">
                        
                        <div className="mx-20 pt-8 ">
                            <h3 className="text-lg font-semibold">Name:</h3>
                            <p className="border-b border-gray-300 mb-6">{personInfo.first_name ? personInfo.first_name : "Add your first name"}</p>
                            <h3 className="text-lg font-semibold">Last name:</h3>
                            <p className="border-b border-gray-300 mb-6">{personInfo.last_name ? personInfo.last_name : "Add your last name"}</p>
                            <h3 className="text-lg font-semibold">Email address:</h3>
                            <p className="border-b border-gray-300 mb-6">{personInfo.email ? personInfo.email : "Add your email address"}</p>
                            <h3 className="text-lg font-semibold">Phone number:</h3>
                            <p className="border-b border-gray-300 mb-6">{personInfo.phone ? personInfo.phone : "Add your phone number"}</p>
                        </div>
                        <div className="mt-12 mb-24 gap-2 flex justify-center">
                            <Link to="/change-password">
                                <button className="text-xl border border-black px-8 py-2 items-center shadow-[4px_4px_8px_rgba(0,0,0,0.2)] hover:bg-white">Change password</button>
                            </Link>
                            
                            <button onClick={() => setOpenPersonalModal(true)} className="text-xl px-8 py-2 items-center border border-black shadow-[4px_4px_8px_rgba(0,0,0,0.2)] hover:bg-white">
                            Update profile information
                            </button>
                            
                        </div>
                    </div>


                {/* Address section */}
                
                    <div className="mx-16 py-6 border-t border-b border-gray-800 flex items-center gap-3">
                        <FontAwesomeIcon icon={ faAddressCard }></FontAwesomeIcon>
                        <h4>Address information</h4>
                    </div>

                    <div className="mx-20 pt-8">
                        <div class="relative overflow-x-auto ">
                            <table class="w-full text-lg text-left rtl:text-right text-gray-500">
                                <thead class="bg-black text-sm text-white uppercase" >
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

                    
                    <div className="mx-16 py-6 border-t border-b border-gray-800 flex items-center gap-3">
                        <FontAwesomeIcon icon={ faBox }></FontAwesomeIcon>
                        <h4>Active subscriptions</h4>
                    </div>

                    <div className="profile mx-20 pt-8">
                        <div className="relative overflow-x-auto mt-3">
                            <table className="w-full text-lg text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                <thead className="bg-black text-sm text-white uppercase">
                                    <tr>
                                        <th scope="col" className="px-6 py-3">
                                            Address label
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Subscription
                                        </th>
                                        <th scope="col" classname="px-6 py-3">
                                            End date
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                           Manage
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                {subscriptionInfo.map((sub, index) => (
                                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                        <td scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            {sub.address_label}
                                        </td>
                                        <td class="px-6 py-4">
                                            {sub.order}
                                        </td>
                                        <td class="px-6 py-4">
                                            {sub.end_date}
                                        </td>
                                        <td class="px-6 py-4">
                                            <Link to="">
                                                <button className="px-2 py-1 bg-inherit" onClick={() => {
                                                    /* setIndex(index); */
                                                    setOpenManageSubscriptionModal(true);
                                                    }}>
                                                    <FontAwesomeIcon icon={faPencil} />
                                                </button>
                                            </Link>
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
                                    <button className="text-xl px-8 py-2 items-center border border-black shadow-[4px_4px_8px_rgba(0,0,0,0.2)] hover:bg-white">
                                            Buy another subscription
                                    </button>
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
        </>
        )
}

export default Profile