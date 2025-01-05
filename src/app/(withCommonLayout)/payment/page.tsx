"use client";

import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements, CardElement } from "@stripe/react-stripe-js";

import { AlertCircle, Lock } from "lucide-react";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import background from "../../../assets/back.jpg";

// Stripe Promise (Use your publishable key)
const stripePromise = loadStripe("your-publishable-key-here");

const PaymentForm: React.FC = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // You can handle form validations or additional actions here
    alert("Payment form submitted!");
  };

  return (
    <div className=''
    style={{
        backgroundImage: `url(${background.src})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
    }}>
    <div className="max-w-4xl mx-auto p-6 space-y-8 font-lora">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-2xl font-bold">Get approved to drive</h1>
        <p className="text-gray-600">
          Since this is your first trip, you ll need to provide us with some
          information before you can check out.
        </p>
      </div>

      {/* Sections */}
      <div className="border-b pb-4 space-y-4">
        <div className="flex justify-between items-center">
          <span>Verify your email</span>
          <span className="text-green-600">✔</span>
        </div>
        <div className="flex justify-between items-center">
          <span>Mobile Number</span>
          <span className="text-green-600">✔</span>
        </div>
        <div className="flex justify-between items-center">
          <span>Driving licence</span>
          <span className="text-green-600">✔</span>
        </div>
      </div>

      {/* Payment Method */}
      <div className="space-y-4">
        <h2 className="text-lg font-semibold">Payment method</h2>
        <div className="flex items-center space-x-2 text-gray-600">
          <AlertCircle size={16} />
          <p className="text-sm">You won’t be charged until you book</p>
        </div>
      </div>

      {/* Card Information */}
      <div className="space-y-4">
        <h2 className="text-lg font-semibold">Card information</h2>
        <div className="flex items-center space-x-2 text-gray-600">
          <Lock size={16} />
          <p className="text-sm">Your information will be stored securely</p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
            {/* Card Input */}
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-2">
                Card Number
              </label>
              <div className="border p-2 rounded">
                <CardElement options={{ hidePostalCode: true }} />
              </div>
            </div>

            {/* Expiration Date & CVC */}
            <div className="grid grid-cols-2 gap-4 pb-8">
              <Input placeholder="" className="w-full" />
              <Input placeholder="CVC" className="w-full" />
            </div>

            {/* Save and Continue */}
            <Link href={"my-trip"} type="submit" className="w-full px-8 py-2 rounded-sm bg-[#6A6A6A] text-white">
              Save and continue
            </Link>
          </div>
        </form>
      </div>

      {/* Address Section */}
      {/* <div>
        <h2 className="text-lg font-semibold">Address</h2>
        <Input placeholder="Enter your address" className="mt-2" />
      </div> */}
    </div>
    </div>
  );
};

const PaymentPage: React.FC = () => (
  <Elements stripe={stripePromise}>
    <PaymentForm />
  </Elements>
);

export default PaymentPage;
