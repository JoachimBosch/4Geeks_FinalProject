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
        console.log(formData)
    };

    const handleSave = () => {
        updatePersonInfo(personInfo.id, formData);
        setPersonInfo(formData);
        console.log(formData);
        onClose();
    };

    return (
        <Modal dismissible show={show} onClose={onClose}>
            <Modal.Header>
                <h4>Edit personal information</h4>
            </Modal.Header>
            <Modal.Body>
                <div className="space-y-2 modal-text">
                    <p>Name:</p>
                    <input
                        name="first_name"
                        className="border px-2 py-2 w-[100%]"
                        value={formData.first_name || ''}
                        onChange={handleChange}
                        required
                    />
                    <p>Last name:</p>
                    <input
                        name="last_name"
                        className="border px-2 py-2 w-[100%]"
                        value={formData.last_name || ''}
                        onChange={handleChange}
                        required
                    />
                    <p>Email address:</p>
                    <input
                        name="email"
                        className="border px-2 py-2 w-[100%]"
                        value={formData.email || ''}
                        onChange={handleChange}
                        required
                    />
                    <p>Phone number:</p>
                    <input
                        name="phone"
                        className="border px-2 py-2 w-[100%]"
                        value={formData.phone || ''}
                        onChange={handleChange}
                    />
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button color="dark" style={{padding: "8px 40px", borderRadius: "0"}} onClick={handleSave}>
                    Confirm
                </Button>
                <Button color="dark" style={{padding: "8px 40px", borderRadius: "0"}} onClick={onClose}>
                    Cancel
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default UpdatePersonalInfoModal;