"use client";
import React, { useEffect, useState } from "react";
import HeadingTitle from "../shared/HeadingTitle";
import { Input } from "../ui/input";
import { Form, Modal, Spin, Upload, UploadFile } from "antd";
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

const customSpinner = <LoadingOutlined style={{ fontSize: 18, color: "black" }} spin />;

const CarPhoto = () => {
  const router = useRouter();
  const [userRole, setUserRole] = useState("");
  const [uploadedImages, setUploadedImages] = useState<string[]>([]);
  const [imagesFiles, setImagesFile] = useState<UploadFile[]>([]);
  const { data: getUserInfo } = useGetProfileQuery({});
  const [openConfirmModal, setOpenConfirmModal] = useState(false);

  useEffect(() => {
    setUserRole(getUserInfo?.data?.role);
  }, [getUserInfo]);

  //   All APIs
  const [addCarPhotos , {isLoading}] = useAddCarPhotosMutation();
  const [registerCar , {isLoading : registerLoad}] = useSendCarRequestMutation();

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
    // console.log(values);

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
    // href={"/host-history"}
    const getCarId = localStorage.getItem("carId");
    registerCar(getCarId)
      .unwrap()
      .then((payload) => {
        if (userRole === "HOST") {
          router.push("/host-history");
          toast.success(payload?.message);
        } else {
          setOpenConfirmModal(true)
          setTimeout(()=>{
            router.push("/");

          } , 3000)
          // toast.success("Your role is change please login again!");
          // localStorage.removeItem("_token");
        }

        localStorage.removeItem("currentStep");
      })
      .catch((error) => toast.error(error?.data?.message));
  };

  return (
    <div className="md:max-w-[60%] w-full">
      <HeadingTitle title="Car Photos" />
      <p className="mt-5">
        High-quality photos increase your earning potential by attracting more
        guests. Upload at least 6 photos, including multiple exterior angles
        with the whole car in frame, as well as interior shots. Learn more here.
      </p>
      <p>How much advance notice do you need before a trip starts?</p>

      {/* Image Slider */}
      <Carousel className="mt-10">
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
        <CarouselPrevious className="top-1/2 -left-10" />
        <CarouselNext className="top-1/2" />
      </Carousel>

      {/* Image Uploader */}
      <div className="mt-10">
        <p className="mb-2">Upload Car Photos</p>
        <Upload
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
        <Form.Item label={"Seats"} name={"seats"}>
          <Input placeholder="type here" />
        </Form.Item>
        <Form.Item label={"Bags"} name={"bags"}>
          <Input placeholder="type here" />
        </Form.Item>
        <Form.Item label={"Doors"} name={"doors"}>
          <Input placeholder="type here" />
        </Form.Item>
        <Form.Item label={"Fuel Type"} name={"fuelType"}>
          <Input placeholder="type here" />
        </Form.Item>
        <Form.Item label={"Discount Days"} name={"discountDays"}>
          <Input placeholder="type here" />
        </Form.Item>
        <Form.Item label={"Discount Amount"} name={"discountAmount"}>
          <Input placeholder="type here" />
        </Form.Item>
        <Form.Item label={"Delivery Fee"} name={"deliveryFee"}>
          <Input placeholder="type here" />
        </Form.Item>
        <button className="bg-[#0CFEE8] py-2 rounded-md  px-10 shadow-md">
        {isLoading ?  <Spin indicator={customSpinner} className="px-[65px] w-full" /> : "Upload Car Information"}
        </button>
      </Form>

      <div
        onClick={() => handleCarRegister()}
        className="bg-[#0CFEE8] shadow-md py-2 rounded-md mt-5 px-16 cursor-pointer inline-block "
      >
        {registerLoad ?  <Spin indicator={customSpinner} className="px-[19px] w-full" /> : "Send Request"}
      </div>

      <Modal centered footer={false} open={openConfirmModal} onCancel={()=> setOpenConfirmModal(false)} >
        <div>
          <h1 className="text-center mt-2 text-2xl text-[#0CFEE8] font-semibold">Congratulation!!</h1>
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
