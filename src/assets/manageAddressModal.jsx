import React, { useState } from 'react';
import { Button, Modal } from 'flowbite-react';

const AddressModal = ({ show, onClose, addressInfo, setAddressInfo, isEdit }) => {
    const [formData, setFormData] = useState(addressInfo || {
        relation_to_user: '',
        street: '',
        street_number: '',
        postal_code: '',
        city: '',
        country: '',
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSave = () => {
        setAddressInfo(formData);
        onClose();
    };

    return (
        <Modal dismissible show={show} onClose={onClose}>
            <Modal.Header>{isEdit ? 'Edit Address Information' : 'Add New Address'}</Modal.Header>
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
                <Button onClick={handleSave}>{isEdit ? 'Update Address' : 'Add Address'}</Button>
                <Button color="gray" onClick={onClose}>
                    Cancel
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default AddressModal;