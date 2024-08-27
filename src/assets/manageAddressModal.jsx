import React, { useState, useContext } from 'react';
import MyContext from "../Context/context";
import { Button, Modal } from 'flowbite-react';

const AddressModal = ({ show, onClose, addressInfo, setAddressInfo, isEdit }) => {
    const {formData, setFormData, storeAddress, personInfo, fetchAddresses} = useContext(MyContext)
    const [addAddress, setAddAddress] = useState({user_id: personInfo.id,
        relation_to_user: '',
        street: '',
        street_number: '',
        postal_code: '',
        city: '',
        country: '',});
    
    const handleChange = (e) => {
        setAddAddress({
            ...addAddress,
            [e.target.name]: e.target.value,
        });
        console.log(addAddress)
    };

    const handleAddressSave = async () => {
        await storeAddress(addAddress);
        console.log(addAddress);
        onClose();
        setAddAddress({
            user_id: personInfo.id,
            relation_to_user: '',
            street: '',
            street_number: '',
            postal_code: '',
            city: '',
            country: '',
          });
    };

    

    return (
        <Modal dismissible show={show} onClose={onClose}>
            <Modal.Header>Add New Address</Modal.Header>
            <Modal.Body>
                <div className="space-y-2 modal-text">
                    <p>Label:</p>
                    <input
                        name="relation_to_user"
                        className="indent-1 border"
                        style={{ width: '100%' }}
                        value={addAddress.relation_to_user || ''}
                        onChange={handleChange}
                        required
                    />
                    <p>Street:</p>
                    <input
                        name="street"
                        className="indent-1 border"
                        style={{ width: '100%' }}
                        value={addAddress.street || ''}
                        onChange={handleChange}
                        required
                    />
                    <p>Street Number:</p>
                    <input
                        name="street_number"
                        className="indent-1 border"
                        style={{ width: '100%' }}
                        value={addAddress.street_number || ''}
                        onChange={handleChange}
                        required
                    />
                    <p>Postal Code:</p>
                    <input
                        name="postal_code"
                        className="indent-1 border"
                        style={{ width: '100%' }}
                        value={addAddress.postal_code || ''}
                        onChange={handleChange}
                        required
                    />
                    <p>City:</p>
                    <input
                        name="city"
                        className="indent-1 border"
                        style={{ width: '100%' }}
                        value={addAddress.city || ''}
                        onChange={handleChange}
                        required
                    />
                    <p>Country:</p>
                    <input
                        name="country"
                        className="indent-1 border"
                        style={{ width: '100%' }}
                        value={addAddress.country || ''}
                        onChange={handleChange}
                        required
                    />
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button color="dark" style={{padding: "8px 40px", borderRadius: "0"}} onClick={handleAddressSave}>Add Address</Button>
                <Button color="dark" style={{padding: "8px 40px", borderRadius: "0"}} onClick={onClose}>
                    Cancel
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default AddressModal;