"use client";
import { useGetTrustAndSafetyQuery } from "@/redux/Api/infoApi";
import React from "react";

const TrustAndSafetyPage = () => {
  const { data: getTrustAndSafety } = useGetTrustAndSafetyQuery(undefined);
  return (
    <div className="container mx-auto md:px-0 px-2">
      <div className=" space-y-8 my-10">
        {getTrustAndSafety?.data?.description ? (
          <div
            className="leading-7 "
            dangerouslySetInnerHTML={{
              __html: getTrustAndSafety?.data?.description,
            }}
          />
        ) : (
          "No Tips and trick available"
        )}
      </div>
    </div>
  );
};

export default TrustAndSafetyPage;
