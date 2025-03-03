"use client";
import { Step2Props } from "@/type";
import { DatePicker, Form, Input, Spin } from "antd";
import HeadingTitle from "../shared/HeadingTitle";
import { useCreatePaymentInfoMutation } from "@/redux/Api/registerCarApi";
import { toast } from "sonner";

import { LoadingOutlined } from "@ant-design/icons";

const customSpinner = (
  <LoadingOutlined style={{ fontSize: 18, color: "black" }} spin />
);

const AddPaymentInfo: React.FC<Step2Props> = ({ handleNext }) => {
  const [form] = Form.useForm();
  const [addPaymentDetails, { isLoading }] = useCreatePaymentInfoMutation();

  const handlePaymentInfo = (values: Record<string, any>) => {
    const formData = new FormData();

    const data = {
      ...values,
      dateOfBirth: values.dateOfBirth?.format("MM/DD/YYYY"),
    };

    // Append each key-value pair to formData
    Object.entries(data).forEach(([key, value]) => {
      formData.append(key, value);
    });

    addPaymentDetails(formData)
      .unwrap()
      .then((payload) => {
        toast.success(payload?.message);
        handleNext();
      })
      .catch((error) => toast.error(error?.data?.message));
  };

  return (
    <div className="md:max-w-[60%] w-full">
      <HeadingTitle title="Payment Info" />
      <div className="mt-10">
        <Form layout="vertical" form={form} onFinish={handlePaymentInfo}>
          <div className="flex items-center gap-2">
            <Form.Item label="First Name" name="first_name" className="w-full">
              <Input placeholder="Type here..." />
            </Form.Item>
            <Form.Item label="Last Name" name="last_name" className="w-full">
              <Input placeholder="Type here..." />
            </Form.Item>
          </div>

          <div className="flex gap-2">
            <Form.Item label="Phone" name="phone" className="w-full">
              <Input placeholder="Type here..." />
            </Form.Item>
            <Form.Item
              label="Select Date Of Birth"
              name="dateOfBirth"
              className="w-full"
              rules={[{ required: true, message: "Please select a date!" }]}
            >
              <DatePicker format="MM/DD/YYYY" className="w-full" />
            </Form.Item>
          </div>
          <Form.Item
            label="Routing Number"
            name="routing_no"
            className="w-full"
          >
            <Input placeholder="Enter Routing Number..." />
          </Form.Item>
          <div className="flex items-center gap-2">
            <Form.Item
              label="Bank account no."
              name="bank_account_no"
              className="w-full"
            >
              <Input placeholder="Type here..." />
            </Form.Item>
            <Form.Item label="Line 1" name="line1" className="w-full">
              <Input placeholder="Type here..." />
            </Form.Item>
          </div>

          <div className="flex  items-center gap-2">
            <Form.Item label="City" name="city" className="w-full">
              <Input placeholder="Type here..." />
            </Form.Item>
            <Form.Item
              label="Postal Code"
              name="postal_code"
              className="w-full"
            >
              <Input placeholder="Type here..." />
            </Form.Item>
          </div>

          <button
            // htmlType="submit"
            className="bg-[#0CFEE8] hover:bg-[#0CFEE8] text-black px-10 mt-5 py-2 rounded-sm"
          >
            {isLoading ? (
              <Spin indicator={customSpinner} className="px-[19px]" />
            ) : (
              "Continue"
            )}
          </button>
        </Form>
      </div>
    </div>
  );
};

export default AddPaymentInfo;
