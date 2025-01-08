"use client";
import { useGetHostingGuideQuery } from "@/redux/Api/infoApi";
import React from "react";

const ListingVehiclePage = () => {
  const { data: getHostingGuide } = useGetHostingGuideQuery(undefined);
  return (
    <div className="container mx-auto">
      <div className=" p-6 space-y-6">
        {getHostingGuide?.data?.description ? (
          <div
            className="text-md leading-7"
            dangerouslySetInnerHTML={{
              __html: getHostingGuide?.data?.description,
            }}
          />
        ) : (
          "No Hosting guide Available"
        )}
      </div>
    </div>
  );
};

export default ListingVehiclePage;
