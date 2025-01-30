"use client";
import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";
import background from "../../../assets/back.jpg";
import { useGetProfileQuery } from "@/redux/Api/authApi";
import { Form, Modal } from "antd";
import Image from "next/image";
import { imageUrl } from "@/redux/baseApi";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { usePaymentTripMutation } from "@/redux/Api/tripManagementApi";
import { toast } from "sonner";

const GetApprovedDriverPage = () => {
  const [openModal, setOpenModal] = useState(false);
  // const [paymentLink, setPaymentLink] = useState("")
  const router = useRouter();
  const [form] = Form.useForm();

  // ----ALL API -----//
  const { data: getProfile } = useGetProfileQuery(undefined);
  const [paymentTrip] = usePaymentTripMutation();

  useEffect(() => {
    if (getProfile) {
      form.setFieldsValue({
        address: getProfile?.data?.address || "",
        phone_number: getProfile?.data?.phone_number || "",
      });
    }
  }, [getProfile, form]);

  //   const handleCountryChange = (code: string) => {
  //     const country = europeanCountries.find((country) => country.code === code);
  //     if (country) setSelectedCountry(country);
  //   };

  const handleBookingCarInfo = () => {
    if (
      getProfile?.data?.address &&
      getProfile?.data?.phone_number &&
      getProfile?.data?.licenseFrontImage &&
      getProfile?.data?.licenseBackImage
    ) {
      const data = {
        carId: localStorage.getItem("carId"),
        amount: localStorage.getItem("amount"),
        tripId: localStorage.getItem("tripId"),
      };
      paymentTrip(data)
        .unwrap()
        .then((payload) => {
          toast.success(payload?.message);
          localStorage.removeItem("carId");
          localStorage.removeItem("amount");
          localStorage.removeItem("tripId");
          
          if (payload?.data) {
            window.open(payload.data, "_blank");
          }
          router.push("/my-trip");
        })
        .catch((error) => {
          toast.error(error?.data?.message);
        });
    } else {
      toast.success("Please update your profile!");
      router.push("/my-profile");
    }
  };

  return (
    <div
      className=""
      style={{
        backgroundImage: `url(${background.src})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-4xl mx-auto my-8 font-lora p-6">
        <p className="text-xl md:text-4xl font-semibold px-2 md:px-0">
          Get approved to drive
        </p>
        <p className="text-sm px-2 md:px-0 mt-5">
          Since this is your first trip, you ll need to provide us with some
          information before you can check out
        </p>

        <div className="mx-auto p-4 space-y-6 mt-10  bg-opacity-80 ">
          <Form layout="vertical" form={form}>
            <Form.Item name={"address"} label={"Address"}>
              <Input disabled placeholder="Enter Your Address" />
            </Form.Item>
            <Form.Item name={"phone_number"} label={"Phone Number"}>
              <Input disabled placeholder="Phone Number" />
            </Form.Item>

            <div className="flex justify-between items-center gap-10 mb-10">
              <Image
                src={`${imageUrl}/${getProfile?.data?.licenseFrontImage}`}
                height={200}
                alt="License Not found"
                width={200}
                className="h-52 w-full border border-1 "
              />
              <Image
                src={`${imageUrl}/${getProfile?.data?.licenseBackImage}`}
                height={200}
                alt="License Not found"
                className="h-52 w-full border border-1  "
                width={200}
              />
            </div>

            <Button
              onClick={() => handleBookingCarInfo()}
              className="w-full bg-[#6A6A6A] px-10 py-2 rounded-md text-white"
            >
              Continue
            </Button>
          </Form>

          {/* <Modal
            footer={false}
            open={openModal}
            onCancel={() => setOpenModal(false)} 
          >
            <p>Link : Click here</p>
          </Modal> */}
        </div>
      </div>
    </div>
  );
};

export default GetApprovedDriverPage;
