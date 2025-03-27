import { Modal } from "antd";
import React from "react";

interface StartOverModalProps {
  openModal: boolean;
  setOpenModal: (open: boolean) => void;
}

const StartOverModal: React.FC<StartOverModalProps> = ({
  openModal,
  setOpenModal,
}) => {

    const handleDeleteStep = ()=>{
        localStorage.setItem("currentStep", "2")
        setOpenModal(false)
        window.location.reload(); 

    }
  return (
    <Modal
      centered
      footer={false}
      onCancel={() => setOpenModal(false)}
      open={openModal}
    >
      <h1 className="font-bold  text-2xl mt-5">Start listing over</h1>
      <p className="my-5">
        Are you sure you want to delete your listing and start over?
      </p>
      <div className="flex justify-end items-end mt-5">
        <button onClick={()=> handleDeleteStep()} className="bg-red-600 text-white px-5 py-2 rounded-md shadow-lg ">
          Delete listing
        </button>
      </div>
    </Modal>
  );
};

export default StartOverModal;
