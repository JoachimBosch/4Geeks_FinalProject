import React, { useContext, useState } from 'react';
import { Button, Modal } from 'flowbite-react';
import MyContext from '../Context/context';

const UpdatePersonalInfoModal = ({ show, onClose, personInfo, setPersonInfo }) => {
    const { updatePersonInfo } = useContext(MyContext)
    const [formData, setFormData] = useState(personInfo);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSave = () => {
        updatePersonInfo(personInfo.id, formData);
        setPersonInfo(formData);
        onClose();
    };

    return (
        <Modal dismissible show={show} onClose={onClose}>
            <Modal.Header>Edit personal information</Modal.Header>
            <Modal.Body>
                <div className="space-y-2 modal-text">
                    <p>Name:</p>
                    <input
                        name="first_name"
                        className="indent-1 border"
                        style={{ width: '100%' }}
                        value={formData.first_name || ''}
                        onChange={handleChange}
                        required
                    />
                    <p>Last name:</p>
                    <input
                        name="last_name"
                        className="indent-1 border"
                        style={{ width: '100%' }}
                        value={formData.last_name || ''}
                        onChange={handleChange}
                        required
                    />
                    <p>Email address:</p>
                    <input
                        name="email"
                        className="indent-1 border"
                        style={{ width: '100%' }}
                        value={formData.email || ''}
                        onChange={handleChange}
                        required
                    />
                    <p>Phone number:</p>
                    <input
                        name="phone"
                        className="indent-1 border"
                        style={{ width: '100%' }}
                        value={formData.phone || ''}
                        onChange={handleChange}
                    />
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={handleSave}>Confirm</Button>
                <Button color="gray" onClick={onClose}>
                    Cancel
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default UpdatePersonalInfoModal;