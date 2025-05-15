"use client";
import React, { useState } from "react";
import HeadingTitle from "../shared/HeadingTitle";
import { Input } from "../ui/input";
import { Form, Spin, Upload } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import type { UploadFile, UploadChangeParam } from "antd/es/upload/interface";
import { Step2Props } from "@/type";
import { Button } from "../ui/button";
import { useAddHostLicenseMutation } from "@/redux/Api/registerCarApi";
import { toast } from "sonner";

import { LoadingOutlined } from "@ant-design/icons";

const customSpinner = (
  <LoadingOutlined style={{ fontSize: 18, color: "black" }} spin />
);

interface TLicense {
  pricePerDay: string;
  maxTravelDistancePerDay: string;
  finePerKm: string;
  youngDriverFee: string;
  cleaningFee: string;
}

const DriverLicense: React.FC<Step2Props> = ({ handleNext }) => {
  const [fileList, setFileList] = useState<UploadFile[]>([]);
  const [backFileList, setBackFileList] = useState<UploadFile[]>([]);

  //  Update driving license api
  const [updateDrivingLicense, { isLoading }] = useAddHostLicenseMutation();

  //   License front image upload
  const handleUploadChange = ({
    fileList: newFileList,
  }: UploadChangeParam<UploadFile>) => {
    setFileList(newFileList);
  };
  //   License back image upload
  const handleBackImageUploadChange = ({
    fileList: newFileList,
  }: UploadChangeParam<UploadFile>) => {
    setBackFileList(newFileList);
  };

  //   Handle upload driver license details function
  const handleUpdateDrivingLicense = (values: TLicense) => {
    const formData = new FormData();
    const carId = localStorage.getItem("carId") || "";
    formData.append("carId", carId);
    formData.append("pricePerDay", values?.pricePerDay);
    formData.append("maxTravelDistancePerDay", values?.maxTravelDistancePerDay);
    formData.append("finePerKm", values?.finePerKm);
    // formData.append("youngDriverFee", values?.youngDriverFee);
    // formData.append("cleaningFee", values?.cleaningFee);

    if (fileList.length > 0) {
      const file = fileList[0].originFileObj;
      if (file) {
        formData.append("hostLicenseFrontImage", file);
      }
    }
    if (backFileList.length > 0) {
      const file = backFileList[0].originFileObj;
      if (file) {
        formData.append("hostLicenseBackImage", file);
      }
    }
    updateDrivingLicense(formData)
      .unwrap()
      .then((payload) => {
        toast.success(payload?.message);
        handleNext();
      })
      .catch((error) => toast.error(error?.data?.message));
  };
  return (
    <div className="md:max-w-[60%] w-full">
      <HeadingTitle title="Driver Licence" />
      <p className="my-10">
        Enter your info exactly as it appears on your license so Nardo can
        verify your eligibility to drive
      </p>

      <Form layout={"vertical"} onFinish={handleUpdateDrivingLicense}>
        <div className="flex gap-5 items-center">
          <Form.Item
            label={"Price per day"}
            name={"pricePerDay"}
            className="w-full"
            rules={[
              {
                required: true,
                message: "Price per day is required",
              },
              {
                pattern: /^\d+$/,
                message: "Only numbers are allowed",
              },
            ]}
          >
            <Input placeholder="Type here..." />
          </Form.Item>
          <Form.Item
            label={"Maximum travel distance for one day (Miles) "}
            name={"maxTravelDistancePerDay"}
            className="w-full"
            rules={[
              {
                required: true,
                message: "Please enter travel distance!",
              },
              {
                pattern: /^\d+$/,
                message: "Only numbers are allowed",
              },
            ]}
          >
            <Input placeholder="Type here..." />
          </Form.Item>
        </div>

        <Form.Item
          label={"Per Miles charge after crossing maximum distance"}
          className="w-full"
          name={"finePerKm"}
          rules={[
            {
              required: true,
              message: "Please enter maximum distance charge!",
            },
            {
              pattern: /^\d+$/,
              message: "Only numbers are allowed",
            },
          ]}
        >
          <Input placeholder="Type here..." />
        </Form.Item>

        <div className="flex gap-5">
          <Form.Item
            label="Licence Front Image"
            className="w-full"
            style={{
              width: "100%",
            }}
          >
            <Upload
              listType="picture-card"
              fileList={fileList}
              onChange={handleUploadChange}
              beforeUpload={() => false}
              multiple={false}
              className="upload-full-width w-full"
              maxCount={1}
            >
              {fileList.length >= 1 ? null : (
                <div className="flex items-center gap-2">
                  <PlusOutlined />
                  <div>Add Image</div>
                </div>
              )}
            </Upload>
          </Form.Item>
          <Form.Item
            label="Licence Back Image"
            className="w-full"
            style={{
              width: "100%",
            }}
          >
            <Upload
              listType="picture-card"
              fileList={backFileList}
              onChange={handleBackImageUploadChange}
              beforeUpload={() => false}
              multiple={false}
              className="upload-full-width w-full"
              maxCount={1}
            >
              {backFileList.length >= 1 ? null : (
                <div className="flex items-center gap-2">
                  <PlusOutlined />
                  <div>Add Image</div>
                </div>
              )}
            </Upload>
          </Form.Item>
        </div>
        <Button className="bg-[#0CFEE8] hover:bg-[#0CFEE8] text-black px-10 mt-5">
          {isLoading ? (
            <Spin indicator={customSpinner} className="px-[19px]" />
          ) : (
            "Continue"
          )}
        </Button>
      </Form>

      {/* Upload license font image */}
      <div style={{ width: "100%" }}></div>
    </div>
  );
};

export default DriverLicense;
