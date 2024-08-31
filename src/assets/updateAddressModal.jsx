import React, { useState, useContext, useEffect } from 'react';
import MyContext from "../Context/context";
import { Button, Modal } from 'flowbite-react';

const UpdateAddressModal = ({ show, onClose, addressInfo, setAddressInfo, id }) => {
    const {formData, setFormData, updateAddress, personInfo, fetchAddresses} = useContext(MyContext)

    useEffect(() => {
        if (addressInfo) {
            setFormData({
                ...formData,
                relation_to_user: addressInfo.relation_to_user || '',
                street: addressInfo.street || '',
                street_number: addressInfo.street_number || '',
                postal_code: addressInfo.postal_code || '',
                city: addressInfo.city || '',
                country: addressInfo.country || '',
            });
        }
    }, [addressInfo]);
    
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleAddressSave = async () => {
        const updatedAddressInfo = {
            ...formData,
            user_id: personInfo.id,
        };

        await updateAddress(addressInfo.id, updatedAddressInfo);
        onClose();
        fetchAddresses(personInfo.id)
    };
    

    return (
        <Modal dismissible show={show} onClose={onClose}>
            <Modal.Header>
            <h2 className="text-xl">Edit address information</h2>
            </Modal.Header>
            <Modal.Body>
                <div className="space-y-1 modal-text">
                    <p className="text-base font-semibold">Label:</p>
                    <input
                        name="relation_to_user"
                        className="border px-2 py-1.5 w-[100%]"
                        style={{ width: '100%' }}
                        value={formData.relation_to_user || ''}
                        onChange={handleChange}
                        required
                    />
                    <p className="pt-3 text-base font-semibold">Street:</p>
                    <input
                        name="street"
                        className="border px-2 py-1.5 w-[100%]"
                        style={{ width: '100%' }}
                        value={formData.street || ''}
                        onChange={handleChange}
                        required
                    />
                    <p className="pt-3 text-base font-semibold">Street Number:</p>
                    <input
                        name="street_number"
                        className="border px-2 py-1.5 w-[100%]"
                        style={{ width: '100%' }}
                        value={formData.street_number || ''}
                        onChange={handleChange}
                        required
                    />
                    <p className="pt-3 text-base font-semibold">Postal Code:</p>
                    <input
                        name="postal_code"
                        className="border px-2 py-1.5 w-[100%]"
                        style={{ width: '100%' }}
                        value={formData.postal_code || ''}
                        onChange={handleChange}
                        required
                    />
                    <p className="pt-3 text-base font-semibold">City:</p>
                    <input
                        name="city"
                        className="border px-2 py-1.5 w-[100%]"
                        style={{ width: '100%' }}
                        value={formData.city || ''}
                        onChange={handleChange}
                        required
                    />
                    <p className="pt-3 text-base font-semibold">Country:</p>
                    <input
                        name="country"
                        className="border px-2 py-1.5 w-[100%]"
                        style={{ width: '100%' }}
                        value={formData.country || ''}
                        onChange={handleChange}
                        required
                    />
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button size="sm" className="px-12 py-2 bg-black text-white shadow-[4px_4px_8px_rgba(0,0,0,0.2)] rounded-none" onClick={handleAddressSave}>Update Address</Button>
                <Button color="gray" size="sm" className="px-12 py-2 border rounded-none" onClick={onClose}>
                    Cancel
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default UpdateAddressModal;