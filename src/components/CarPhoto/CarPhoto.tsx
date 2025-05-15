"use client";
import React, { useEffect, useState } from "react";
import HeadingTitle from "../shared/HeadingTitle";
import { Input } from "../ui/input";
import { Form, Modal, Select, Spin, Upload, UploadFile } from "antd";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import {
  useAddCarPhotosMutation,
  useSendCarRequestMutation,
} from "@/redux/Api/registerCarApi";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { useGetProfileQuery } from "@/redux/Api/authApi";

interface TCarInfo {
  seats: string;
  bags: string;
  doors: string;
  fuelType: string;
  discountDays: string;
  discountAmount: string;
  deliveryFee: string;
}

import { LoadingOutlined } from "@ant-design/icons";

const customSpinner = (
  <LoadingOutlined style={{ fontSize: 18, color: "black" }} spin />
);

const CarPhoto = () => {
  const [uploadKey, setUploadKey] = useState(0);
  const router = useRouter();
  const [userRole, setUserRole] = useState("");
  const [uploadedImages, setUploadedImages] = useState<string[]>([]);
  const [imagesFiles, setImagesFile] = useState<UploadFile[]>([]);
  const { data: getUserInfo } = useGetProfileQuery({});
  const [openConfirmModal, setOpenConfirmModal] = useState(false);

  // console.log(uploadedImages);

  useEffect(() => {
    setUserRole(getUserInfo?.data?.role);
  }, [getUserInfo]);

  //   All APIs
  const [addCarPhotos, { isLoading }] = useAddCarPhotosMutation();
  const [registerCar, { isLoading: registerLoad }] =
    useSendCarRequestMutation();

  //   Image file upload function
  const handleImageSelection = ({ fileList }: { fileList: UploadFile[] }) => {
    if (fileList) {
      setImagesFile(fileList);
    }
    const imageUrls = fileList
      .map((file) =>
        file.originFileObj ? URL.createObjectURL(file.originFileObj) : file.url
      )
      .filter((url): url is string => !!url);
    setUploadedImages(imageUrls.slice(0, 15));
  };

  //   Handle upload car images and information
  const handleUploadCarPhotos = (values: TCarInfo) => {
    const formData = new FormData();
    const carId = localStorage.getItem("carId") || "";
    formData.append("carId", carId);
    formData.append("seats", values?.seats);
    formData.append("bags", values?.bags);
    formData.append("doors", values?.doors);
    formData.append("fuelType", values?.fuelType);
    formData.append("discountDays", values?.discountDays);
    formData.append("discountAmount", values?.discountAmount);
    formData.append("deliveryFee", values?.deliveryFee);

    // Convert all images into formData
    imagesFiles?.forEach((file) => {
      if (file?.originFileObj) {
        formData.append("car_image", file?.originFileObj);
      }
    });
    addCarPhotos(formData)
      .unwrap()
      .then((payload) => {
        toast.success(payload?.message);
      })
      .catch((error) => toast.error(error?.data?.message));
  };

  //   Car register function
  const handleCarRegister = () => {
    const getCarId = localStorage.getItem("carId");
    registerCar(getCarId)
      .unwrap()
      .then((payload) => {
        if (userRole === "HOST") {
          router.push("/host-history");
          toast.success(payload?.message);
        } else {
          setOpenConfirmModal(true);
          setTimeout(() => {
            router.push("/");
          }, 3000);
        }

        localStorage.removeItem("currentStep");
      })
      .catch((error) => toast.error(error?.data?.message));
  };

  // Clear all images
  const clearImages = () => {
    setUploadedImages([]);
    setImagesFile([]);
    setUploadKey((prevKey) => prevKey + 1);
  };

  return (
    <div className="md:max-w-[60%] w-full">
      <HeadingTitle title="Car Photos" />
      <p className="mt-5">
        High-quality photos increase your earning potential by attracting more
        guests. Upload at least 6 photos, including multiple exterior angles
        with the whole car in frame, as well as interior shots.
      </p>

      {/* Image Slider */}
      {uploadedImages?.length > 0 && (
        <button
          className="flex text-sm   justify-end w-full mt-10"
          onClick={clearImages}
        >
          <p
            onClick={clearImages}
            className="bg-[#0CFEE8] p-1 rounded-sm shadow-lg"
          >
            Clear All
          </p>
        </button>
      )}

      <Carousel className="">
        <CarouselContent>
          {uploadedImages.map((imageUrl, index) => (
            <CarouselItem key={index} className="md:basis-1/4 basis-1/2">
              <div className="hover:text-[#528AAE] bg-[#F9F9F9] text-center hover:shadow-lg">
                <Image
                  src={imageUrl}
                  alt={`Uploaded image ${index + 1}`}
                  height={500}
                  width={500}
                  className="rounded-t-md h-52 object-cover"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        {uploadedImages?.length > 0 && (
          <>
            <CarouselPrevious className="top-1/2 -left-10 " />
            <CarouselNext className="top-1/2" />
          </>
        )}
      </Carousel>

      <p className="text-xs mt-5 text-gray-700">
        Note: Only JPEG, PNG, JPG, and WEBP image formats are supported.
      </p>
      {/* Image Uploader */}
      <div className="mt-5">
        <p className="mb-2">Upload Car Photos</p>
        <Upload
          key={uploadKey}
          listType="picture-card"
          multiple
          onChange={handleImageSelection}
          beforeUpload={() => false}
          showUploadList={false}
          className="upload-car "
        >
          {uploadedImages.length < 15 && (
            <div className="test">
              <div style={{ marginTop: 8 }}>Upload Car Photos</div>
            </div>
          )}
        </Upload>
        <p className="text-gray-500 mt-2">
          You can upload up to 15 images. Drag and drop files to rearrange.
        </p>
      </div>

      <Form layout="vertical" onFinish={handleUploadCarPhotos}>
        <Form.Item label={"Seats"} name={"seats"}
         rules={[
              {
                required: true,
                message: "Please enter the seats!",
              },
              {
                pattern: /^\d+$/,
                message: "Only numbers are allowed",
              },
            ]}
        >
          <Input placeholder="type here" />
        </Form.Item>
        <Form.Item label={"Bags"} name={"bags"}
         rules={[
              {
                required: true,
                message: "Please enter bags!",
              },
              {
                pattern: /^\d+$/,
                message: "Only numbers are allowed",
              },
            ]}
        >
          <Input placeholder="type here" />
        </Form.Item>
        <Form.Item label={"Doors"} name={"doors"} 
        rules={[
              {
                required: true,
                message: "Please enter total doors!",
              },
              {
                pattern: /^\d+$/,
                message: "Only numbers are allowed",
              },
            ]}
        >
          <Input placeholder="type here" />
        </Form.Item>
        <Form.Item label={"Fuel Type"} name={"fuelType"}>
          <Select placeholder="Select fuel type">
            <Select.Option value="diesel">Diesel</Select.Option>
            <Select.Option value="petrol">Petrol</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label={"Discount Days"} name={"discountDays"}
           rules={[
              {
                required: true,
                message: "Please enter discount days!",
              },
              {
                pattern: /^\d+$/,
                message: "Only numbers are allowed",
              },
            ]}
        >
          <Input placeholder="type here" />
        </Form.Item>
        <Form.Item label={"Discount Amount"} name={"discountAmount"}
           rules={[
              {
                required: true,
                message: "Please enter discount amount!",
              },
              {
                pattern: /^\d+$/,
                message: "Only numbers are allowed",
              },
            ]}
        >
          <Input placeholder="type here" />
        </Form.Item>
        <Form.Item label={"Delivery Fee"} name={"deliveryFee"}
           rules={[
              {
                required: true,
                message: "Please enter delivery fee!",
              },
              {
                pattern: /^\d+$/,
                message: "Only numbers are allowed",
              },
            ]}
        >
          <Input placeholder="type here" />
        </Form.Item>
        <button className="bg-[#0CFEE8] py-2 rounded-md  px-10 shadow-md">
          {isLoading ? (
            <Spin indicator={customSpinner} className="px-[65px] w-full" />
          ) : (
            "Upload Car Information"
          )}
        </button>
      </Form>

      <div
        onClick={() => handleCarRegister()}
        className="bg-[#0CFEE8] shadow-md py-2 rounded-md mt-5 px-16 cursor-pointer inline-block "
      >
        {registerLoad ? (
          <Spin indicator={customSpinner} className="px-[19px] w-full" />
        ) : (
          "Send Request"
        )}
      </div>

      <Modal
        centered
        footer={false}
        open={openConfirmModal}
        onCancel={() => setOpenConfirmModal(false)}
      >
        <div>
          <h1 className="text-center mt-2 text-2xl text-[#0CFEE8] font-semibold">
            Congratulation!!
          </h1>
          <p className="text-center mt-2">
            Your car registration request has been submitted successfully. You
            will receive an email once the admin approves your request
          </p>
        </div>
      </Modal>
    </div>
  );
};

export default CarPhoto;
