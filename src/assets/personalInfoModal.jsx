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
                <h2 className="text-xl">Edit personal information</h2>
            </Modal.Header>
            <Modal.Body>
                <div className="space-y-1 modal-text">
                    <p className="text-lg font-semibold">Name:</p>
                    <input
                        name="first_name"
                        className="border px-2 py-2 w-[100%]"
                        value={formData.first_name || ''}
                        onChange={handleChange}
                        required
                    />
                    <p className="pt-3 text-lg font-semibold">Last name:</p>
                    <input
                        name="last_name"
                        className="border px-2 py-2 w-[100%]"
                        value={formData.last_name || ''}
                        onChange={handleChange}
                        required
                    />
                    <p className="text-lg font-semibold pt-3">Email address:</p>
                    <input
                        name="email"
                        className="border px-2 py-2 w-[100%]"
                        value={formData.email || ''}
                        onChange={handleChange}
                        required
                    />
                    <p className="text-lg pt-3 font-semibold">Phone number:</p>
                    <input
                        name="phone"
                        className="border px-2 py-2 w-[100%]"
                        value={formData.phone || ''}
                        onChange={handleChange}
                    />
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button size="sm" className="px-12 py-2 bg-black text-white shadow-[4px_4px_8px_rgba(0,0,0,0.2)] rounded-none" onClick={handleSave}>
                    Confirm
                </Button>
                <Button color="gray" size="sm" className="px-12 py-2 border rounded-none" onClick={onClose}>
                    Cancel
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default UpdatePersonalInfoModal;