"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
import { useParams, useRouter } from "next/navigation";
import {
  useGetCarDetailsQuery,
  useUpdateCarDetailsMutation,
} from "@/redux/Api/hostHistoryApi";
import { imageUrl } from "@/redux/baseApi";
import { toast } from "sonner";

const features = [
  "All-wheel drive",
  "AUX input",
  "Blind spot warning",
  "Convertible",
  "Keyless entry",
  "Snow tires",
  "USB Charger",
  "Android Auto",
  "Backup camera",
  "Bluetooth",
  "GPS",
  "Pet friendly",
  "Sunroof",
  "USB input",
  "Apple CarPlay",
  "Bike Rack",
  "Child seats",
  "Heated seats",
  "Ski rack",
  "Toll pass",
  "Wheelchair accessible",
];

type FormValuesType = {
  carId: string;
  carAddress: string;
  licensePlateNum: string;

  transmission: string;
  isElectric: boolean;
  carType: string;
  seats: string;
  bags: string;
  doors: string;
  fuelType: string;
  pricePerDay: string;
  maxTravelDistancePerDay: string;
  finePerKm: string;
  discountDays: string;
  discountAmount: string;
  description: string;
  selectedFeatures: string[];
};

const EditHostCarPage = () => {
  const [formValues, setFormValues] = useState<FormValuesType>({
    carId: "",
    carAddress: "",
    licensePlateNum: "",
    transmission: "",
    isElectric: false,
    carType: "",
    seats: "",
    bags: "",
    doors: "",
    fuelType: "",
    pricePerDay: "",
    maxTravelDistancePerDay: "",
    finePerKm: "",
    discountDays: "",
    discountAmount: "",
    description: "",
    selectedFeatures: [],
  });

  const params = useParams();
  const carId = params?.id || "";

  // Call hooks unconditionally
  const { data: getCarDetails, isLoading } = useGetCarDetailsQuery(carId);
  const [updateCarDetails] = useUpdateCarDetailsMutation();
  console.log(carId);
  console.log(getCarDetails);

  // Update form values when car details are fetched
  useEffect(() => {
    if (getCarDetails?.data) {
      const data = getCarDetails.data;

      setFormValues({
        carId: data?._id,
        carAddress: data.carAddress || "",
        licensePlateNum: data.licensePlateNum || "",
        transmission: data.transmission || "",
        isElectric: data.isElectric || false,
        carType: data.carType || "",
        seats: data.seats || "",
        bags: data.bags || "",
        doors: data.doors || "",
        fuelType: data.fuelType || "",
        pricePerDay: data.pricePerDay || "",
        maxTravelDistancePerDay: data.maxTravelDistancePerDay || "",
        finePerKm: data.finePerKm || "",
        discountDays: data.discountDays || "",
        discountAmount: data.discountAmount || "",
        description: data.description || "",
        selectedFeatures: data.features || [],
      });
    }
  }, [getCarDetails]);

  const handleCheckboxChange = (feature: string, isChecked: boolean) => {
    setFormValues((prev) => ({
      ...prev,
      selectedFeatures: isChecked
        ? [...prev.selectedFeatures, feature]
        : prev.selectedFeatures.filter((f) => f !== feature),
    }));
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };


  const router = useRouter()
  const handleUpdateCarDetails = () => {
    const data = {
      ...formValues,
      features: formValues?.selectedFeatures,
    };


    updateCarDetails(data)
      .unwrap()
      .then((payload) => {
        toast.success(payload?.message);
        router.push('/host-history')
      })
      .catch((error) => toast.error(error?.data?.message));
  };

  // Render logic
  if (!carId) {
    return <p>Invalid car ID. Please provide a valid car ID.</p>;
  }

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="container mx-auto my-10 font-lora px-2 md:px-0">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 ]">
        {getCarDetails?.data?.car_image?.slice(0,3)?.map((car: string, i: number) => (
          <Image
            key={i}
            alt="img"
            className="w-full h-full object-cover max-h-[400px]"
            height={800}
            width={800}
            src={`${imageUrl}/${car}`}
          />
        ))}
      </div>

      <div className="max-w-4xl space-y-8 mt-5">
        <div className="space-y-4">
          <h2 className="text-lg font-semibold">Where is your car located?</h2>
          <div className="grid grid-cols-2 gap-4">
            <Input
              name="carAddress"
              value={formValues.carAddress}
              onChange={handleInputChange}
              placeholder="Enter your car's location"
            />
            <Input
              name="licensePlateNum"
              value={formValues.licensePlateNum}
              onChange={handleInputChange}
              placeholder="Enter car plate number"
            />
          </div>
        </div>


        <div className="space-y-4">
          <h2 className="text-lg font-semibold">Transmission</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2">
                Transmission
              </label>
              <div className="flex items-center space-x-4">
                <Checkbox
                  id="automatic"
                  checked={formValues.transmission === "automatic"}
                  onCheckedChange={(checked) => {
                    if (checked) {
                      setFormValues((prev) => ({
                        ...prev,
                        transmission: "automatic",
                      }));
                    }
                  }}
                />
                <label htmlFor="automatic" className="text-sm">
                  Automatic
                </label>
                <Checkbox
                  id="manual"
                  checked={formValues.transmission === "manual"}
                  onCheckedChange={(checked) => {
                    if (checked) {
                      setFormValues((prev) => ({
                        ...prev,
                        transmission: "manual",
                      }));
                    }
                  }}
                />
                <label htmlFor="manual" className="text-sm">
                  Manual
                </label>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">
                Electric Vehicle
              </label>
              <div className="flex items-center space-x-4">
                <Checkbox
                  checked={formValues.isElectric === true}
                  onCheckedChange={() =>
                    setFormValues((prev) => ({ ...prev, isElectric: true }))
                  }
                  id="electric-yes"
                />
                <label htmlFor="electric-yes" className="text-sm">
                  Yes
                </label>
                <Checkbox
                  id="electric-no"
                  checked={formValues.isElectric === false}
                  onCheckedChange={() =>
                    setFormValues((prev) => ({ ...prev, isElectric: false }))
                  }
                />
                <label htmlFor="electric-no" className="text-sm">
                  No
                </label>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Car Type</label>
              <div className="flex items-center space-x-4">
                <Checkbox
                  id="luxury"
                  checked={formValues.carType === "luxury"}
                  onCheckedChange={() =>
                    setFormValues((prev) => ({ ...prev, carType: "luxury" }))
                  }
                />
                <label htmlFor="luxury" className="text-sm">
                  Luxury
                </label>
                <Checkbox
                  checked={formValues.carType === "standard"}
                  onCheckedChange={() =>
                    setFormValues((prev) => ({ ...prev, carType: "standard" }))
                  }
                  id="standard"
                />
                <label htmlFor="standard" className="text-sm">
                Standard
                </label>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2  gap-4">
            <div>
              <label className="block text-sm font-medium mb-2">
                Price per day
              </label>
              <Input
                name="pricePerDay"
                value={formValues?.pricePerDay || ""}
                onChange={handleInputChange}
                placeholder="Price per days"
              />
            </div>
          </div>
        </div>

        <div className="md:flex items-center gap-4">
          <div className="w-full">
            <label className="block text-sm font-medium mb-2">
              maximum travel distance for one day
            </label>
            <Input
              name="maxTravelDistancePerDay"
              value={formValues?.maxTravelDistancePerDay || ""}
              onChange={handleInputChange}
              placeholder="Type here"
            />
          </div>
          <div className="w-full">
            <label className="block text-sm font-medium mb-2">
              Per kilometer charge after crossing maximum distance{" "}
            </label>
            <Input
              name="finePerKm"
              value={formValues?.finePerKm || ""}
              onChange={handleInputChange}
              placeholder="Type here"
            />
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div>
            <label className="block text-sm font-medium mb-2">
              Discount days
            </label>
            <Input
              name="discountDays"
              value={formValues?.discountDays || ""}
              onChange={handleInputChange}
              placeholder="Type day"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">
              Discount amount
            </label>
            <Input
              name="discountAmount"
              value={formValues?.discountAmount || ""}
              onChange={handleInputChange}
              placeholder="Type here"
            />
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-lg font-semibold">Car Features</h2>
          <p className="text-sm text-gray-600 mb-4">
            Select all the features your car offers. These details will help
            guests better understand your cars unique offerings.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {features.map((feature, index) => (
              <label key={index} className="flex items-center space-x-2">
                <Checkbox
                  value={feature}
                  checked={formValues.selectedFeatures.includes(feature)}
                  onCheckedChange={(isChecked: boolean) =>
                    handleCheckboxChange(feature, isChecked)
                  }
                  className="h-4 w-4"
                />
                <span className="text-gray-700">{feature}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="mt-10">
          <h3 className="text-lg font-semibold">Description</h3>
          <p className="text-sm text-gray-600">
            Tell guests what makes your car unique and why they will love driving
            it.
          </p>
          <Textarea
            name="description"
            value={formValues.description}
            onChange={handleInputChange}
            placeholder="No need to include your contact info or pickup instructions. Guests will receive those once they book your car."
            className="mt-2 max-w-6xl"
            rows={5}
          />
        </div>

        {/* Seats and bags  */}

        <div className="flex items-center gap-4">
          <div className="w-full">
            <label className="block text-sm font-medium mb-2">Seats</label>
            <Input
              placeholder="Type day"
              name="seats"
              value={formValues?.seats || ""}
              onChange={handleInputChange}
            />
          </div>
          <div className="w-full">
            <label className="block text-sm font-medium mb-2">Bags</label>
            <Input
              placeholder="Type here"
              name="bags"
              value={formValues?.bags || ""}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="w-full">
            <label className="block text-sm font-medium mb-2">Door</label>
            <Input
              name="doors"
              value={formValues?.doors || ""}
              onChange={handleInputChange}
              placeholder="Type day"
            />
          </div>
          <div className="w-full">
            <label className="block text-sm font-medium mb-2">Fuel type</label>
            <Input
              name="fuelType"
              value={formValues?.fuelType || ""}
              onChange={handleInputChange}
              placeholder="Type here"
            />
          </div>
        </div>

        <Button
          // type="submit"
          onClick={() => handleUpdateCarDetails()}
          className="w-full bg-gray-800 text-white"
        >
          Update
        </Button>
      </div>
    </div>
  );
};

export default EditHostCarPage;
