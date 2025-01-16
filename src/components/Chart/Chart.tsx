"use client";
import { useGetHostRevenueChartQuery } from "@/redux/Api/hostHistoryApi";
import { Select } from "antd";
import React, { useState } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";


const Chart = () => {
  const [year, setYear] = useState("2025");
  const {data : getHostRevenueChart} = useGetHostRevenueChartQuery(year);
 


  const data = [
    {
      name: "Jan",
      uv: getHostRevenueChart?.data?.monthlyRevenue?.January,
    },
    {
      name: "Feb",
      uv: getHostRevenueChart?.data?.monthlyRevenue?.February,
     
    },
    {
      name: "Mar",
      uv: getHostRevenueChart?.data?.monthlyRevenue?.March,
    },
    {
      name: "Apr",
      uv: getHostRevenueChart?.data?.monthlyRevenue?.April,
    },
    {
      name: "May",
      uv: getHostRevenueChart?.data?.monthlyRevenue?.May,
    },
    {
      name: "Jun",
      uv: getHostRevenueChart?.data?.monthlyRevenue?.June,
    },
    {
      name: "Jul",
      uv: getHostRevenueChart?.data?.monthlyRevenue?.July,
    },
    {
      name: "Aug",
      uv: getHostRevenueChart?.data?.monthlyRevenue?.August,
    },
    {
      name: "Sep",
      uv: getHostRevenueChart?.data?.monthlyRevenue?.September,
    },
    {
      name: "Oct",
      uv: getHostRevenueChart?.data?.monthlyRevenue?.October,
    },
    {
      name: "Nov",
      uv: getHostRevenueChart?.data?.monthlyRevenue?.November,
    
    },
    {
      name: "Dec",
      uv: getHostRevenueChart?.data?.monthlyRevenue?.December,
    },
  ];

  const items = [
    {
      label: 2024,
      key: "2024",
      value: "2024",
    },
    {
      label: 2025,
      key: "2025",
      value: "2025",
    },
    {
      label: 2026,
      key: "2026",
      value: "2026",
    },
    {
      label: 2027,
      key: "2027",
      value: "2027",
    },
  ];

  const handleChange = (value: string) => {
    setYear(value);
  };

  return (
    <div className="bg-[#F9F9F9] p-4 rounded-md shadow-md">
      <div className=" flex justify-end">
        <Select
          defaultValue={year}
          style={{ width: 120 }}
          onChange={handleChange}
          options={items}
        />
      </div>
      <div style={{ width: "100%", height: 400 }}>
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            width={500}
            height={400}
            data={data}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="uv"
              stroke="#B0B0B0"
              fill="#0CFEE8"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Chart;
