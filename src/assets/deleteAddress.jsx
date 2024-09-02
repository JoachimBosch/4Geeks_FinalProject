import { useContext, useEffect } from "react";
import MyContext from "../Context/context";
import { Button, Modal } from 'flowbite-react';

const DeleteAddress = ({ addressInfo, index, show, onClose, setOpenDeleteModal }) => {
    const {deleteAddress} = useContext(MyContext)

    const handleDelete = async () => {
        if (addressInfo && addressInfo.id) {
            deleteAddress(addressInfo.id);
            setOpenDeleteModal(false);
        }
    };

return (
            <Modal dismissible show={show} onClose={onClose}>
                <Modal.Header />
                <Modal.Body>
                    <div className="text-center">
                        
                        <h3 className="mb-5 text-2xl font-normal text-black">
                        Do you really want to delete this address?
                        </h3>
                        <div className="flex justify-center gap-4">
                        <Button color="dark" style={{padding: "6px 30px", borderRadius: "0"}} 
                                onClick={handleDelete}>
                            <p className="xl">Yes</p>
                        </Button>
                        <Button style={{padding: "6px 20px", borderRadius: "0", backgroundColor: "white", border: "1px solid black", color: "black"}} 
                                onClick={() => setOpenDeleteModal(false)}>
                            <p className="xl">Cancel</p>
                        </Button>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
)
};

export default DeleteAddress