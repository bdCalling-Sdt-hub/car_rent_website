"use client"
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger } from '@/components/ui/select'
import React, { useState } from 'react'

const LicenseVerificationPage = () => {
    const [expirationDate, setExpirationDate] = useState({
        month: "Month",
        day: "Day",
        year: "Year",
      });
    
      // State for date of birth
      const [dob, setDob] = useState({
        month: "Month",
        day: "Day",
        year: "Year",
      });
    
      // Array of month names
      const monthNames = Array.from({ length: 12 }, (_, i) =>
        new Date(0, i).toLocaleString("default", { month: "long" })
      );
  return (
    <div className="max-w-xl mx-auto p-6 space-y-8">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-2xl font-bold">Get approved to drive</h1>
        <p className="text-gray-600">
          Since this is your first trip, you’ll need to provide us with some
          information before you can check out.
        </p>
      </div>

      {/* Verify Email */}
      <div className="flex justify-between items-center border-b pb-2">
        <span className="font-medium text-lg">Verify your email</span>
        <span className="text-green-600 text-lg">✔</span>
      </div>

      {/* Driver's License Number */}
      <div>
        <label className="block text-sm font-medium text-gray-600 mb-2">
          Driver's license number
        </label>
        <Input placeholder="Type here" />
      </div>

      {/* First Name and Last Name */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-2">
            First name
          </label>
          <Input placeholder="Type here" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-2">
            Last name
          </label>
          <Input placeholder="Type here" />
        </div>
      </div>

      {/* License Expiration Date */}
      <div>
        <label className="block text-sm font-medium text-gray-600 mb-2">
          License Expiration Date
        </label>
        <div className="grid grid-cols-3 gap-4">
          <Select
            onValueChange={(value) =>
              setExpirationDate((prev) => ({ ...prev, month: value }))
            }
          >
            <SelectTrigger className="w-full">{expirationDate.month}</SelectTrigger>
            <SelectContent>
              {monthNames.map((month, i) => (
                <SelectItem key={i} value={month}>
                  {month}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select
            onValueChange={(value) =>
              setExpirationDate((prev) => ({ ...prev, day: value }))
            }
          >
            <SelectTrigger className="w-full">{expirationDate.day}</SelectTrigger>
            <SelectContent>
              {Array.from({ length: 31 }, (_, i) => (
                <SelectItem key={i + 1} value={String(i + 1)}>
                  {i + 1}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select
            onValueChange={(value) =>
              setExpirationDate((prev) => ({ ...prev, year: value }))
            }
          >
            <SelectTrigger className="w-full">{expirationDate.year}</SelectTrigger>
            <SelectContent>
              {Array.from({ length: 20 }, (_, i) => (
                <SelectItem key={2024 - i} value={String(2024 - i)}>
                  {2024 - i}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* License Date of Birth */}
      <div>
        <label className="block text-sm font-medium text-gray-600 mb-2">
          License Date of Birth
        </label>
        <div className="grid grid-cols-3 gap-4">
          <Select
            onValueChange={(value) => setDob((prev) => ({ ...prev, month: value }))}
          >
            <SelectTrigger className="w-full">{dob.month}</SelectTrigger>
            <SelectContent>
              {monthNames.map((month, i) => (
                <SelectItem key={i} value={month}>
                  {month}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select
            onValueChange={(value) => setDob((prev) => ({ ...prev, day: value }))}
          >
            <SelectTrigger className="w-full">{dob.day}</SelectTrigger>
            <SelectContent>
              {Array.from({ length: 31 }, (_, i) => (
                <SelectItem key={i + 1} value={String(i + 1)}>
                  {i + 1}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select
            onValueChange={(value) => setDob((prev) => ({ ...prev, year: value }))}
          >
            <SelectTrigger className="w-full">{dob.year}</SelectTrigger>
            <SelectContent>
              {Array.from({ length: 100 }, (_, i) => (
                <SelectItem key={2024 - i} value={String(2024 - i)}>
                  {2024 - i}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Continue Button */}
      <Button className="w-full bg-gray-800 text-white">Continue</Button>
    </div>
  )
}

export default LicenseVerificationPage