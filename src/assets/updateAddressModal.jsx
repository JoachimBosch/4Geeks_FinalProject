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
            user_id: personInfo.id || 1,
        };

        await updateAddress(addressInfo.id, updatedAddressInfo);
        onClose();
        fetchAddresses(personInfo.id)
    };
    console.log(formData)
    

    return (
        <Modal dismissible show={show} onClose={onClose}>
            <Modal.Header>Edit Address Information</Modal.Header>
            <Modal.Body>
                <div className="space-y-2 modal-text">
                    <p>Label:</p>
                    <input
                        name="relation_to_user"
                        className="indent-1 border"
                        style={{ width: '100%' }}
                        value={formData.relation_to_user || ''}
                        onChange={handleChange}
                        required
                    />
                    <p>Street:</p>
                    <input
                        name="street"
                        className="indent-1 border"
                        style={{ width: '100%' }}
                        value={formData.street || ''}
                        onChange={handleChange}
                        required
                    />
                    <p>Street Number:</p>
                    <input
                        name="street_number"
                        className="indent-1 border"
                        style={{ width: '100%' }}
                        value={formData.street_number || ''}
                        onChange={handleChange}
                        required
                    />
                    <p>Postal Code:</p>
                    <input
                        name="postal_code"
                        className="indent-1 border"
                        style={{ width: '100%' }}
                        value={formData.postal_code || ''}
                        onChange={handleChange}
                        required
                    />
                    <p>City:</p>
                    <input
                        name="city"
                        className="indent-1 border"
                        style={{ width: '100%' }}
                        value={formData.city || ''}
                        onChange={handleChange}
                        required
                    />
                    <p>Country:</p>
                    <input
                        name="country"
                        className="indent-1 border"
                        style={{ width: '100%' }}
                        value={formData.country || ''}
                        onChange={handleChange}
                        required
                    />
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={handleAddressSave}>Update Address</Button>
                <Button color="gray" onClick={onClose}>
                    Cancel
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default UpdateAddressModal;