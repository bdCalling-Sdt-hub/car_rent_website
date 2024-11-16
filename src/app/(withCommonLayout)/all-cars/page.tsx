"use client"
import Map from "@/components/Map/Map";
import React from "react";


const AllCarsPage = () => {
  return (
    <div className="container mx-auto">
      <div className="p-4 bg-white shadow-sm flex flex-wrap items-center space-x-4 rounded-lg">
     
      <Map center={[51.5074, -0.1278]} zoom={2} />
      </div>
    </div>
  )
}

export default AllCarsPage