"use client";
import { TimePicker } from "antd";
import React from "react";
import type { TimePickerProps } from "antd";
type DateTimePickerProps = {
  onChange: (data: {
    startDate?: string;
    startTime?: string;
    endDate?: string;
    endTime?: string;
  }) => void;
};

const TripStartDataAndEndTime: React.FC<DateTimePickerProps> = ({
  onChange,
}) => {
  const handleStartDateChange = (value: string) => {
    onChange({ startDate: value });
  };

  const handleStartTimeChange: TimePickerProps["onChange"] = (time) => {
    if (time) {
      const time24Format = time.format("HH:mm"); 
      onChange({ startTime: time24Format});
    }
  };

  const handleEndDateChange = (value: string) => {
    onChange({ endDate: value });
  };

  const handleEndTimeChange: TimePickerProps["onChange"] = (time) => {
    if (time) {
      const time24Format = time.format("HH:mm"); 
      onChange({ endTime: time24Format});
    }
  };

  return (
    <div className="space-y-6">
      {/* Trip Start */}
      <div className="space-y-4">
        <h2 className="font-medium text-lg">Trip Start</h2>
        <div className="flex space-x-4">
          <input
            type="date"
            onChange={(e) => handleStartDateChange(e.target.value)}
            className="w-full border p-2 rounded"
          />
          {/* <input
            type="time"
            onChange={(e) => handleStartTimeChange(e.target.value)}
            className="w-1/2 border p-2 rounded"
          /> */}
          <TimePicker
            className=" bg-white w-full"
            use12Hours
            format="h:mm A"
            minuteStep={30}
            onChange={handleStartTimeChange}
            // value={pickupTime ? dayjs(pickupTime, "h:mm A") : null}
          />
        </div>
      </div>

      {/* Trip End */}
      <div className="space-y-4">
        <h2 className="font-medium text-lg">Trip End</h2>
        <div className="flex space-x-4">
          <input
            type="date"
            onChange={(e) => handleEndDateChange(e.target.value)}
            className="w-full border p-2 rounded"
          />
          {/* <input
            type="time"
            onChange={(e) => handleEndTimeChange(e.target.value)}
            className="w-1/2 border p-2 rounded"
          /> */}

          <TimePicker
            className=" bg-white w-full"
            use12Hours
            format="h:mm A"
            minuteStep={30}
            onChange={handleEndTimeChange}
            // value={pickupTime ? dayjs(pickupTime, "h:mm A") : null}
          />
        </div>
      </div>
    </div>
  );
};

export default TripStartDataAndEndTime;
