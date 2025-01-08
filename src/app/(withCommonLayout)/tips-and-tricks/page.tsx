"use client";
import { useGetTipsAndTricksQuery } from "@/redux/Api/infoApi";
import React from "react";

const TipsAndTricksPage = () => {
  const { data: getTipsTricks } = useGetTipsAndTricksQuery(undefined);

  return (
    <div className="container mx-auto  my-5 md:my-10 md:px-0 px-2 ">
      <div className=" space-y-8">
        {/* Title Section */}
        {
          getTipsTricks?.data?.description ? <div className="leading-7 "  dangerouslySetInnerHTML={{
            __html : getTipsTricks?.data?.description
          }} /> :"No Tips and trick available"
        }


     
        
      </div>
    </div>
  );
};

export default TipsAndTricksPage;
