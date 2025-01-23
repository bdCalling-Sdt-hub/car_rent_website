'use client';

import React from 'react';

type DateTimePickerProps = {
  onChange: (data: {
    startDate?: string;
    startTime?: string;
    endDate?: string;
    endTime?: string;
  }) => void;
};

const TripStartDataAndEndTime: React.FC<DateTimePickerProps> = ({ onChange }) => {
  const handleStartDateChange = (value: string) => {
    onChange({ startDate: value });
  };

  const handleStartTimeChange = (value: string) => {
    onChange({ startTime: value });
  };

  const handleEndDateChange = (value: string) => {
    onChange({ endDate: value });
  };

  const handleEndTimeChange = (value: string) => {
    onChange({ endTime: value });
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
            className="w-1/2 border p-2 rounded"
          />
          <input
            type="time"
            onChange={(e) => handleStartTimeChange(e.target.value)}
            className="w-1/2 border p-2 rounded"
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
            className="w-1/2 border p-2 rounded"
          />
          <input
            type="time"
            onChange={(e) => handleEndTimeChange(e.target.value)}
            className="w-1/2 border p-2 rounded"
          />
        </div>
      </div>
    </div>
  );
};

export default TripStartDataAndEndTime;
