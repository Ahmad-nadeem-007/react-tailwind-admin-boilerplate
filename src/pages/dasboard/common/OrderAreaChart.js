import React from "react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const OrderAreaChart = () => {
  const data = [
    { name: "4", uv: 1, amt: 1 },
    { name: "8", uv: 2, amt: 2 },
    { name: "12", uv: 1.5, amt: 1.5 },
    { name: "16", uv: 1, amt: 1 },
    { name: "20", uv: 1.2, amt: 1.2 },
    { name: "24", uv: 1.3, amt: 1.3 },
    { name: "28", uv: 1.5, amt: 1.5 },
    { name: "32", uv: 1.4, amt: 1.4 },
    { name: "36", uv: 2, amt: 2 },
  ];

  return (
    <div className="bg-customLight_Brown p-3 rounded-lg">
      <h5 className="text-xl font-semibold ps-1 pt-1 mb-4">
        Most Busy Time of the Day
      </h5>

      <ResponsiveContainer width="100%" height={250}>
        <AreaChart
          width={200}
          height={60}
          data={data}
          margin={{
            top: 5,
            right: 0,
            left: 0,
            bottom: 5,
          }}
        >
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop
                offset="0%"
                stopColor="rgba(0, 29, 61, 0.5)"
                stopOpacity={1}
              />
              <stop
                offset="100%"
                stopColor="rgba(0, 29, 61, 0)"
                stopOpacity={0}
              />
            </linearGradient>
          </defs>
          <CartesianGrid
            strokeDasharray="7 7"
            horizontal={true}
            vertical={false}
          />
          <XAxis
            dataKey="name"
            axisLine={{ stroke: "#bdbdbd" }}
            tickLine={false}
            fontSize={12}
            tick={{ transform: "translate(0, 5)" }}
          />
          <YAxis
            axisLine={false}
            fontSize={12}
            tickFormatter={(value) => {
              const hours = Math.floor(value * 6); // 6 hours per 0.5 unit
              const period = hours < 12 ? "AM" : "PM";
              const displayHours = hours % 12 || 12;
              return `${displayHours}:00${period}`;
            }}
          />
          <Tooltip />
          <Area
            type="natural"
            dataKey="uv"
            stroke="#001d3d"
            fill="url(#colorUv)"
            strokeWidth={2}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default OrderAreaChart;
