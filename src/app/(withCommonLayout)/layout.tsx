import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import ReduxProvider from "@/provider/ReduxProvider";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className=" mx-auto">
      <ReduxProvider>
        <Navbar />
        {children}
        <Footer />
      </ReduxProvider>
    </div>
  );
};

export default layout;
