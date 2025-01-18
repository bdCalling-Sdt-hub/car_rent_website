"use client";
import { CiLocationOn } from "react-icons/ci";
import * as React from "react";
import { format } from "date-fns";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { IoIosArrowDown } from "react-icons/io";
import { Input } from "../ui/input";
import type { TimePickerProps } from "antd";
import { TimePicker } from "antd";
import { RiSearch2Line } from "react-icons/ri";
import { useRouter } from "next/navigation";

const TakenDateTime = () => {
    const router = useRouter()
    // All APIs
    // const {data :  get}
  const [pickupDate, setPickupDate] = React.useState<Date | undefined>(
    undefined
  );
  const [returnDate, setReturnDate] = React.useState<Date | undefined>(
    undefined
  );

  const [pickupTime, setPickupTime] = React.useState<string | undefined>(
    undefined
  );
  const [returnTime, setReturnTime] = React.useState<string | undefined>(
    undefined
  );

  const [location, setLocation] = React.useState("");


  const handlePickupDateSelect = (selectedDate: Date | undefined) => {
    setPickupDate(selectedDate);
    if (selectedDate) {
      console.log("Pickup Date:", format(selectedDate, "MM/dd/yyyy"));
    }
  };

  const handleReturnDateSelect = (selectedDate: Date | undefined) => {
    setReturnDate(selectedDate);
    if (selectedDate) {
      console.log("Return Date:", format(selectedDate, "MM/dd/yyyy"));
    }
  };

  const handlePickupTimeChange: TimePickerProps["onChange"] = (_, timeString) => {
    if (typeof timeString === "string") {
      setPickupTime(timeString); 
    }
  };

  const handleReturnTimeChange: TimePickerProps["onChange"] = (_, timeString) => {
    if (typeof timeString === "string") {
      setReturnTime(timeString); 
    }
  };


//   handle search params
const handleSearchClick = ()=>{
    if (!router) {
        console.error("Router is not available.");
        return;
      }
  
      const queryParams = new URLSearchParams({
        location: location || "", 
        pickupDate: pickupDate ? format(pickupDate, "MM/dd/yyyy") : "",
        returnDate: returnDate ? format(returnDate, "MM/dd/yyyy") : "",
        pickupTime: pickupTime || "",
        returnTime: returnTime || "",
      });
    

      router.push(`/all-cars?${queryParams.toString()}`);
  

}

  return (
    <div className="py-10 hidden md:block container mx-auto font-lora">
      <div className="flex items-center justify-between bg-[#EBEBEB] rounded-full px-8 py-2 max-w-4xl mx-auto">
        <div>
          <p className="flex items-center gap-1">
            <CiLocationOn /> Location
          </p>
          <Input
            onChange={(e) => setLocation(e.target.value)}
            className="bg-[#EBEBEB] border-none"
            placeholder="City , address"
          />
        </div>
        <div className="flex flex-col">
          <p>Pick up date & time</p>
          <div className="flex gap-2 items-center">
            <Popover>
              <PopoverTrigger asChild className="px-0 hover:bg-[#EBEBEB]">
                <Button
                  variant={"outline"}
                  className="w-[120px] justify-start text-left font-normal text-muted-foreground bg-[#EBEBEB] border-none"
                >
                  {pickupDate ? (
                    format(pickupDate, "MM/dd/yyyy")
                  ) : (
                    <span className="flex items-center gap-2">Pick a date</span>
                  )}
                  <IoIosArrowDown />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="flex w-auto flex-col space-y-2 p-2">
                <div className="rounded-md border">
                  <Calendar
                    mode="single"
                    selected={pickupDate}
                    onSelect={handlePickupDateSelect}
                  />
                </div>
              </PopoverContent>
            </Popover>
            <TimePicker
              className="bg-[#EBEBEB] hover:bg-[#EBEBEB] border-none"
              use12Hours
              format="h:mm a"
              onChange={handlePickupTimeChange}
            />
          </div>
        </div>
        <div className="flex flex-col">
          <p>Return date & time</p>
          <div className="flex gap-2 items-center">
            <Popover>
              <PopoverTrigger asChild className="px-0 hover:bg-[#EBEBEB]">
                <Button
                  variant={"outline"}
                  className={cn(
                    "w-[120px] justify-start text-left font-normal text-muted-foreground bg-[#EBEBEB] border-none"
                  )}
                >
                  {returnDate ? (
                    format(returnDate, "MM/dd/yyyy")
                  ) : (
                    <span className="flex items-center gap-2">Pick a date</span>
                  )}
                  <IoIosArrowDown />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="flex w-auto flex-col space-y-2 p-2">
                <div className="rounded-md border">
                  <Calendar
                    mode="single"
                    selected={returnDate}
                    onSelect={handleReturnDateSelect}
                  />
                </div>
              </PopoverContent>
            </Popover>
            <TimePicker
              className="bg-[#EBEBEB] hover:bg-[#EBEBEB] border-none"
              use12Hours
              format="h:mm a"
              onChange={handleReturnTimeChange}
            />
          </div>
        </div>
        <button
          className="bg-[#0CFEE8] p-2 rounded-full cursor-pointer"
          onClick={handleSearchClick}
        >
          <RiSearch2Line size={22} />
        </button>
      </div>
    </div>
  );
};

export default TakenDateTime;
