import React from "react";
import { PieChart } from "react-minimal-pie-chart";

const StoreStatusChart = () => {
  const data = [
    { title: "Starbucks", value: 60, color: "#AA552C" },
    { title: "Speedway", value: 30, color: "#0C0302" },
    { title: "Walgreens", value: 10, color: "#A3A3A3" },
  ];

  return (
    <div className=" bg-customLight_Brown rounded-lg pe-6 flex flex-col">
      <h5 className="text-xl font-semibold ps-4 pt-4 mb-4">Most Popular Store</h5>
      <div className="flex gap-3 justify-center items-center flex-1">
        <div className="w-1/2">
          <PieChart
            data={data}
            lineWidth={100}
            startAngle={0}
            paddingAngle={3}
            style={{ height: "200px" }}
            animate
          />
        </div>
        <div className="w-1/2">
          <div className=" mb-3">
            <div className="mb-2 text-sm font-medium">{data[0].title}</div>
            <div className="flex items-center">
              <div className="flex-1 bg-white rounded-full h-[6px] ">
                <div
                  className="h-[6px] rounded-full"
                  style={{
                    width: `${data[0].value}%`,
                    backgroundColor: data[0].color,
                  }}
                ></div>
              </div>
              <span className="ml-2 text-xs font-medium">
                {data[0].value} Order
              </span>
            </div>
          </div>
          <div className=" mb-3">
            <div className="mb-2 text-sm font-medium">{data[1].title}</div>

            <div className="flex items-center">
              <div className="flex-1 bg-white rounded-full h-[6px]">
                <div
                  className=" h-[6px] rounded-full"
                  style={{
                    width: `${data[1].value}%`,
                    backgroundColor: data[1].color,
                  }}
                ></div>
              </div>
              <span className="ml-2 text-xs font-medium">
                {data[1].value} Order
              </span>
            </div>
          </div>
          <div className="">
            <div className="mb-2 text-sm font-medium">{data[2].title}</div>

            <div className="flex items-center">
              <div className="flex-1 bg-white rounded-full h-[6px]">
                <div
                  className="bg-red-600 h-[6px] rounded-full"
                  style={{
                    width: `${data[2].value}%`,
                    backgroundColor: data[2].color,
                  }}
                ></div>
              </div>
              <span className="ml-2 text-xs font-medium">
                {data[2].value} Order
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoreStatusChart;
