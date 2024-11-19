"use client";

import React from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger } from "../ui/select";
import { GoLocation } from "react-icons/go";

const FilterBar = () => {
    return (
        <div className="md:flex flex-wrap items-center space-x-2  rounded-lg ">
            {/* Location Input */}
            <div className="md:flex  gap-10 items-center mb-4">
                <div className="flex items-center space-x-2  border-b">
                    <GoLocation />
                    <Input placeholder="Location" className="w-56 border-none" />
                </div>

                {/* Date and Time Filters */}
                <div className="flex items-center  space-x-2 border-b">
                    <p>From</p>
                    <Input type="date" placeholder="From" className="w-[36] text-xs md:text-sm  border-none" />
                    <Input type="time" placeholder="Add time" className="w-28 text-xs md:text-sm  border-none" />

                </div>
                <div className="flex items-center  space-x-2 border-b">
                    <p>Until</p>
                    <Input type="date" placeholder="Until" className="w-36 text-xs md:text-sm  border-none" />
                    <Input type="time" placeholder="Add time" className="w-28 text-xs md:text-sm  border-none" />
                </div>
            </div>

            <div className="grid grid-cols-2 justify-center md:grid-cols-8 gap-2    w-full  my-2">
                <Select>
                    <SelectTrigger className="">Daily Price</SelectTrigger>
                    <SelectContent>
                        <SelectItem value="low">Low</SelectItem>
                        <SelectItem value="high">High</SelectItem>
                    </SelectContent>
                </Select>
                <Select>
                    <SelectTrigger className="">Vehicle Type</SelectTrigger>
                    <SelectContent>
                        <SelectItem value="car">Car</SelectItem>
                        <SelectItem value="bike">Bike</SelectItem>
                    </SelectContent>
                </Select>
                <Select>
                    <SelectTrigger className="">Make</SelectTrigger>
                    <SelectContent>
                        <SelectItem value="toyota">Toyota</SelectItem>
                        <SelectItem value="bmw">BMW</SelectItem>
                    </SelectContent>
                </Select>
                <Select>
                    <SelectTrigger className="">Year</SelectTrigger>
                    <SelectContent>
                        <SelectItem value="2022">2022</SelectItem>
                        <SelectItem value="2021">2021</SelectItem>
                    </SelectContent>
                </Select>
                <Select>
                    <SelectTrigger className=" ">Model</SelectTrigger>
                    <SelectContent className="absolute z-50 bg-white">
                        <SelectItem value="sedan" >Sedan</SelectItem>
                        <SelectItem value="suv">SUV</SelectItem>
                    </SelectContent>
                </Select>
                <Select>
                    <SelectTrigger className="">Seats</SelectTrigger>
                    <SelectContent>
                        <SelectItem value="2">2</SelectItem>
                        <SelectItem value="5">5</SelectItem>
                    </SelectContent>
                </Select>
                <Button variant="outline">Electric</Button>
                <Button className="flex items-center  bg-gray-200 hover:bg-gray-200 text-gray-800">
                    <span className="text-sm">All Filters (3)</span>
                </Button>
            </div>


        </div>
    )
}

export default FilterBar