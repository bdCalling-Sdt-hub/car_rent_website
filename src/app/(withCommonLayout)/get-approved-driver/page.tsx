"use client";
import { Input } from "@/components/ui/input";
import { useEffect } from "react";
import background from "../../../assets/back.jpg";
import { useGetProfileQuery } from "@/redux/Api/authApi";
import { Form } from "antd";
import Image from "next/image";
import { imageUrl } from "@/redux/baseApi";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { usePaymentTripMutation } from "@/redux/Api/tripManagementApi";
import { toast } from "sonner";



const GetApprovedDriverPage = () => {
  const router = useRouter();
  const [form] = Form.useForm();

  // ----ALL API -----//
  const {
    data: getProfile,
  } = useGetProfileQuery(undefined);
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
      };
      paymentTrip(data)
        .unwrap()
        .then((payload) => {
          toast.success(payload?.message);
          localStorage.removeItem("carId");
          localStorage.removeItem("amount");
          router.push("/my-trip");
        })
        .catch((error) => {
          toast.error(error?.data?.message);
        });
    }else{
      toast.success("Please update your profile!")
      router.push("/my-profile")
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
              <Input placeholder="Enter Your Address" />
            </Form.Item>
            <Form.Item name={"phone_number"} label={"Phone Number"}>
              <Input placeholder="Phone Number" />
            </Form.Item>

            <div className="flex justify-between items-center gap-10 mb-10">
              <Image
                src={`${imageUrl}/${getProfile?.data?.licenseFrontImage}`}
                height={200}
                alt="license"
                width={200}
                className="h-52 w-full "
              />
              <Image
                src={`${imageUrl}/${getProfile?.data?.licenseBackImage}`}
                height={200}
                alt="license"
                className="h-52 w-full "
                width={200}
              />
            </div>

            {/* <div className="flex justify-between items-center mt-5">
              <Form.Item label="Upload License Front Images">
                <Upload
                  listType="picture-card"
                  fileList={fileList}
                  onChange={handleUploadChange}
                  onRemove={handleRemove}
                  beforeUpload={() => false}
                  //   multiple
                >
                  {fileList.length == 1 ? null : (
                    <div className="flex items-center gap-2">
                      <PlusOutlined />
                      <div>Add License Front Image</div>
                    </div>
                  )}
                </Upload>
              </Form.Item>
              <Form.Item label="Upload License Back Images">
                <Upload
                  listType="picture-card"
                  fileList={fileBackImageList}
                  onChange={handleUploadBackImageChange}
                  onRemove={handleRemoveBackImage}
                  beforeUpload={() => false}
                  //   multiple
                >
                  {fileBackImageList.length == 1 ? null : (
                    <div className="flex w-full items-center gap-2">
                      <PlusOutlined />
                      <div>Add License Front Image</div>
                    </div>
                  )}
                </Upload>
              </Form.Item>
            </div> */}
            <Button
              onClick={() => handleBookingCarInfo()}
              className="w-full bg-[#6A6A6A] px-10 py-2 rounded-md text-white"
            >
              Continue
            </Button>
          </Form>

          {/* Email Verification */}
          {/* <div className="flex justify-between items-center border-y py-2">
                    <span className="font-medium text-lg">Verify your email</span>
                    <span className="text-green-600 text-lg">✔</span>
                </div> */}

          {/* Mobile Number Section */}
          {/* <div className="space-y-4">
                    <h2 className="font-medium text-lg">Mobile Number</h2>
                    <div>
                        <label className="block text-sm font-medium text-gray-600 mb-1">
                            Country Code
                        </label>
                        <Select onValueChange={handleCountryChange} defaultValue={selectedCountry.code}>
                            <SelectTrigger className="w-full bg-[#ffffff00]">{selectedCountry.name}</SelectTrigger>
                            <SelectContent>
                                {europeanCountries.map((country) => (
                                    <SelectItem key={country.code} value={country.code}>
                                        {country.name}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="pb-8">
                        <label className="block text-sm font-medium text-gray-600 mb-1">
                            Phone Number
                        </label>
                        <div className="flex space-x-2">
                            <Input
                                value={selectedCountry.dial_code}
                                readOnly
                                className="w-1/4 bg-[#ffffff00] "
                            />
                            <Input placeholder="Phone Number " className="w-3/4 bg-[#ffffff00] " />
                        </div>
                    </div>
                    <Link href={'/license-verification'} className="w-full bg-[#6A6A6A] px-10 py-2 rounded-md text-white">Continue</Link>
                </div> */}

          {/* Driver's License */}
          {/* <div className="border-t pt-5">
                    <h2 className="font-medium text-lg">Drivers License</h2>
                </div> */}

          {/* Payment Method */}
          {/* <div className="border-t pt-4">
                    <h2 className="font-medium text-lg">Payment Method</h2>
                </div> */}
        </div>
      </div>
    </div>
  );
};

export default GetApprovedDriverPage;
