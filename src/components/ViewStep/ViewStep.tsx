"use client"
import React, { useState } from 'react'
import { Button } from '../ui/button'
import { Modal } from 'antd'

const ViewStep = () => {
    const [openModal, setOpenModal] =  useState(false)
  return (
    <div>
        <Button onClick={()=> setOpenModal(true)}  variant="outline">View all Steps</Button>
        <Modal centered footer={false}  open={openModal} onCancel={()=> setOpenModal(false)}  >
            <div className='ml-10 mt-5 font-lora text-2xl space-y-2'>
                <p>1. Location</p>
                <p>2. License Plate</p>
                <p>3. Make and Model</p>
                <p>4. Transmission</p>
                <p>5. Add Payment Information</p>
                <p>6. Driving License</p>
                <p>7. Car Details</p>
                <p>8. Car Photos</p>
            </div>
        </Modal>
    </div>
  )
}

export default ViewStep