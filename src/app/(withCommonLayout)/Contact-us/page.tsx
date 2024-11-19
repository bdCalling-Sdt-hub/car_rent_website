"use client";
import React from "react";
import { Form } from "antd";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { CiMail } from "react-icons/ci";
import { FiPhone } from "react-icons/fi";


const ContactUsPage = () => {
    return (
        <div className='container mx-auto'>
            <div className="flex flex-col items-center py-10 px-4 max-w-lg mx-auto text-center">
                {/* Header Section */}
                <div className="md:flex justify-between w-full mb-6 text-gray-700 py-10">
                    <div className="text-sm flex items-center gap-2 mb-2 md:mb-0">
                        <CiMail />
                        <span>Email: <a href="mailto:youremail@gmail.com">youremail@gmail.com</a></span>
                    </div>
                    <div className="text-sm flex items-center gap-2">
                        <FiPhone />
                        <span>Phone: +1 888 750-6866</span>
                    </div>
                </div>

                {/* Title */}
                <h2 className="text-2xl font-semibold mb-2 font-lora text-[#555555] text-[40px]">Get in Touch</h2>
                <p className=" mb-6 text-[#272121] font-lora">Contact with us</p>

                {/* Contact Form */}
                <Form className="w-full space-y-4" layout="vertical">
                    <Form.Item label="Subject">
                        <Input placeholder="" />
                    </Form.Item>
                    <Form.Item label="Opinions">
                        <Textarea placeholder="Type your message here." />
                    </Form.Item>
                    <button className="bg-[#6A6A6A] w-full rounded-sm text-white py-2">Send</button>
                </Form>
            </div>
        </div>
    )
}

export default ContactUsPage