"use client";
import { useGetTermsAndConditionQuery } from "@/redux/Api/infoApi";
import React from "react";

const TermsAndConditionPage = () => {
  const { data: getTermsAndCondition } =
    useGetTermsAndConditionQuery(undefined);

  return (
    <div className="container mx-auto my-10 px-2 md:px-0">
      {getTermsAndCondition?.data?.description ? (
        <div
          className="text-md leading-7"
          dangerouslySetInnerHTML={{
            __html: getTermsAndCondition?.data?.description,
          }}
        />
      ) : (
        <p>No terms and conditions available.</p>
      )}
    </div>
  );
};

export default TermsAndConditionPage;
