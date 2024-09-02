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
          fetchAddresses();
    };

    

    return (
        <Modal dismissible show={show} onClose={onClose}>
            <Modal.Header>
                <h2 className="text-xl">Add new address</h2>
            </Modal.Header>
            <Modal.Body>
                <div className="space-y-1 modal-text">
                    <p className="text-base font-semibold">Label:</p>
                    <input
                        name="relation_to_user"
                        className="border px-2 py-1.5 w-[100%]"
                        style={{ width: '100%' }}
                        value={addAddress.relation_to_user || ''}
                        onChange={handleChange}
                        required
                    />
                    <p className="pt-3 text-base font-semibold">Street:</p>
                    <input
                        name="street"
                        className="border px-2 py-1.5 w-[100%]"
                        style={{ width: '100%' }}
                        value={addAddress.street || ''}
                        onChange={handleChange}
                        required
                    />
                    <p className="pt-3 text-base font-semibold">Street Number:</p>
                    <input
                        name="street_number"
                        className="border px-2 py-1.5 w-[100%]"
                        style={{ width: '100%' }}
                        value={addAddress.street_number || ''}
                        onChange={handleChange}
                        required
                    />
                    <p className="pt-3 text-base font-semibold">Postal Code:</p>
                    <input
                        name="postal_code"
                        className="border px-2 py-1.5 w-[100%]"
                        style={{ width: '100%' }}
                        value={addAddress.postal_code || ''}
                        onChange={handleChange}
                        required
                    />
                    <p className="pt-3 text-base font-semibold">City:</p>
                    <input
                        name="city"
                        className="border px-2 py-1.5 w-[100%]"
                        style={{ width: '100%' }}
                        value={addAddress.city || ''}
                        onChange={handleChange}
                        required
                    />
                    <p className="pt-3 text-base font-semibold">Country:</p>
                    <input
                        name="country"
                        className="border px-2 py-1.5 w-[100%]"
                        style={{ width: '100%' }}
                        value={addAddress.country || ''}
                        onChange={handleChange}
                        required
                    />
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button size="sm" className="px-12 py-2 bg-black text-white shadow-[4px_4px_8px_rgba(0,0,0,0.2)] rounded-none" onClick={handleAddressSave}>Add Address</Button>
                <Button color="gray" size="sm" className="px-12 py-2 border rounded-none" onClick={onClose}>
                    Cancel
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default AddressModal;