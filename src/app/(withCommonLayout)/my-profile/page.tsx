"use client";
import HeadingTitle from "@/components/shared/HeadingTitle";
import React, { useState } from "react";
import bg from "../../../assets/back.jpg";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";

import { Button, Form, Input, Upload } from "antd";
import {
  useChangePasswordMutation,
  useGetProfileQuery,
  useUpdateProfileMutation,
} from "@/redux/Api/authApi";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { imageUrl } from "@/redux/baseApi";
import { IoCameraOutline } from "react-icons/io5";
import { UploadOutlined } from "@ant-design/icons";
import type { RcFile } from "antd/es/upload/interface";

type TPassword = {
  oldPassword: string;
  newPassword: string;
  confirmPassword: string;
};

type TProfile = {
  name: string;
  email: string;
  phone_number: string;
  address: string;
};

const normFile = (e: any) => {
  if (Array.isArray(e)) {
    return e;
  }
  return e && e.fileList;
};

const MyProfilePage = () => {
  const [form] = Form.useForm();
  const router = useRouter();
  const [image, setImage] = useState<File | undefined>(undefined);
  const [selectedTab, setSelectedTab] = useState("account");
  const [licenseFrontImage, setLicenseFrontImage] = useState<RcFile | null>(
    null
  );
  const [licenseBackImage, setLicenseBackImage] = useState<RcFile | null>(null);

  // ----ALL API -----//
  const {
    data: getProfile,
    isLoading,
    isError,
  } = useGetProfileQuery(undefined);

  const [updatePassword] = useChangePasswordMutation();
  const [updateProfile] = useUpdateProfileMutation();

  if (isLoading) {
    return (
      <div className="h-screen flex justify-center items-center">
        <span className="loading loading-bars loading-lg text-[#01B4B7]"></span>
      </div>
    );
  }
  if (isError) {
      toast.success("You don't have account please login first!!")
      router.push("/login")
  }

  //------ Handle password update function ------------//
  const handleUpdatePassword = (values: TPassword) => {
    updatePassword(values)
      .unwrap()
      .then((payload) => {
        toast.success(payload?.message);
        if (payload?.success) {
          localStorage.removeItem("_token");
          router.push("/login");
        }
      })
      .catch((error) => {
        toast.error(error?.data?.message);
      });
  };

  //   -----------Handle update profile function--------//
  const handleUpdateProfile = (values: TProfile) => {
    const formData = new FormData();
    if (image) {
      formData.append("profile_image", image);
    }
    formData?.append("name", values?.name);
    formData?.append("phone_number", values?.phone_number);
    formData?.append("address", values?.address);
    if (licenseFrontImage) {
      formData?.append("licenseFrontImage", licenseFrontImage);
    }
    if (licenseBackImage) {
      formData?.append("licenseBackImage", licenseBackImage);
    }
    updateProfile(formData)
      .unwrap()
      .then((payload) => toast.success(payload?.message))
      .catch((error) => toast.error(error?.data?.message));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e?.target?.files[0];
      setImage(file);
    }
  };

  const handleTabChange = (value: string) => {
    setSelectedTab(value);
  };

  return (
    <div className="container mx-auto px-2 md:px-0">
      <div className="my-10">
        <HeadingTitle title="My Profile" />
      </div>
      <div
        className="flex items-center justify-center"
        style={{
          backgroundImage: `url(${bg.src})`,
          backgroundSize: "cover",
          height: "300px",
        }}
      >
        <div className="md:max-w-[40%] max-w-[100%] mx-auto md:flex   items-center gap-5">
          <div className="flex items-center justify-center relative ">
            <input
              type="file"
              onInput={handleImageChange}
              id="img"
              style={{ display: "none" }}
            />
            <Image
              height={200}
              width={200}
              className="h-24 w-24 rounded-full object-cover border-2 border-black"
              src={`${
                image
                  ? URL.createObjectURL(image)
                  : `${imageUrl}/${getProfile?.data?.profile_image}`
              }`}
              alt="profile"
            />
            {selectedTab === "account" && (
              <label
                htmlFor="img"
                className="
              absolute top-[70px] right-2
              bg-[#7FF8D6]
              rounded-full
              w-7 h-7
              flex items-center justify-center
              cursor-pointer
          "
              >
                <IoCameraOutline size={22} />
              </label>
            )}
          </div>
          <div>
            <p className="text-center md:text-left">Hello</p>
            <p className="font-semibold text-[24px]">
              {getProfile?.data?.name}
            </p>
          </div>
        </div>
      </div>

      <div className="md:max-w-xl w-full  mx-auto mt-10">
        <Tabs defaultValue="account" className="w-full">
          <TabsList className="grid md:w-[60%] grid-cols-2 gap-5 mb-10">
            <TabsTrigger
              value="account"
              onClick={() => handleTabChange("account")}
              className="px-20"
            >
              Edit Profile
            </TabsTrigger>
            <TabsTrigger
              onClick={() => handleTabChange("password")}
              value="password"
              className="px-20"
            >
              Change Password
            </TabsTrigger>
          </TabsList>
          <TabsContent value="account">
            <div className=" font-lora  my-10">
              <p className="text-center text-[#555555] text-[24px]">
                Edit Your Profile
              </p>
              <Form
                layout="vertical"
                form={form}
                initialValues={{
                  name: getProfile?.data?.name || "",
                  email: getProfile?.data?.email || "",
                  phone_number: getProfile?.data?.phone_number || "",
                  address: getProfile?.data?.address || "",
                }}
                onFinish={handleUpdateProfile}
              >
                <Form.Item label="User Name" name={"name"}>
                  <Input placeholder="User Name" />
                </Form.Item>
                <Form.Item label="Email" name={"email"}>
                  <Input disabled placeholder="example@gmail.com" />
                </Form.Item>
                <Form.Item label="Contact Number" name={"phone_number"}>
                  <Input placeholder="+99999000455" />
                </Form.Item>
                <Form.Item label="Address" name={"address"}>
                  <Input placeholder="68/Joker vita, gotham city" />
                </Form.Item>
                {getProfile?.data?.licenseFrontImage && (
                  <div className="flex h-[200px] gap-5 w-full">
                    <Image
                      height={100}
                      width={100}
                      alt="Front Image"
                      src={`${imageUrl}/${getProfile?.data?.licenseFrontImage}`}
                      className="w-[50%] border-2 rounded-sm p-1 border-[#0CFEE8]"
                    />
                    <Image
                      height={100}
                      width={100}
                      alt="Front Image"
                      src={`${imageUrl}/${getProfile?.data?.licenseBackImage}`}
                      className="w-[50%]  border-2 rounded-sm p-1 border-[#0CFEE8]"
                    />
                  </div>
                )}
                <div className="flex justify-between mt-5">
                  <Form.Item
                    label="Front License"
                    name="licenseFrontImage"
                    valuePropName="fileList"
                    getValueFromEvent={normFile}
                  >
                    <Upload
                      name="licenseFrontImage"
                      beforeUpload={(file: RcFile) => {
                        setLicenseFrontImage(file);
                        return false;
                      }}
                      listType="picture"
                    >
                      <Button icon={<UploadOutlined />}>
                        Upload Front License
                      </Button>
                    </Upload>
                  </Form.Item>
                  <Form.Item
                    label="Back License"
                    name="licenseBackImage"
                    valuePropName="fileList"
                    getValueFromEvent={normFile}
                  >
                    <Upload
                      name="licenseBackImage"
                      beforeUpload={(file: RcFile) => {
                        setLicenseBackImage(file);
                        return false; // Prevent automatic upload
                      }}
                      listType="picture"
                    >
                      <Button icon={<UploadOutlined />}>
                        Upload Back License
                      </Button>
                    </Upload>
                  </Form.Item>
                </div>

                <Form.Item className=" text-center">
                  <button className="bg-black  text-white px-4 py-2 rounded-sm mt-10">
                    Save Changes
                  </button>
                </Form.Item>
              </Form>
            </div>
          </TabsContent>
          <TabsContent value="password">
            <div>
              {/* <CompleteTrip/> */}
              <p className="text-center text-[#555555] text-[24px]">
                Change Password
              </p>

              <Form layout="vertical" onFinish={handleUpdatePassword}>
                <Form.Item label="Current Password" name={"oldPassword"}>
                  <Input.Password
                    placeholder="Current Password"
                    className="p-2"
                  />
                </Form.Item>
                <Form.Item label="New Password" name={"newPassword"}>
                  <Input.Password placeholder="New Password" className="p-2" />
                </Form.Item>
                <Form.Item label="Confirm Password" name={"confirmPassword"}>
                  <Input.Password
                    placeholder="Confirm Password"
                    className="p-2"
                  />
                </Form.Item>

                <Form.Item className="text-center">
                  <button className="bg-black  text-white rounded-sm px-4 py-2 font-lora">
                    Save Changes
                  </button>
                </Form.Item>
              </Form>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default MyProfilePage;
