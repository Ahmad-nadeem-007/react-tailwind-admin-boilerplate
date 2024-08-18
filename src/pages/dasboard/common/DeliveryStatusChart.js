import React, { useState } from "react";
import { PieChart } from "react-minimal-pie-chart";

const DeliveryStatusChart = () => {
  const data = [
    { title: "On delivery", value: 60, color: "#4caf50" },
    { title: "Delivered", value: 30, color: "#ff9800" },
    { title: "Canceled", value: 10, color: "#f44336" },
  ];
  const [activePeriod, setActivePeriod] = useState('Day');

  const handleClick = (period) => {
    setActivePeriod(period);
  };
  return (
    <div className="flex flex-col">
      <div className="flex justify-between items-center mb-4">
      <h5 className="text-xl font-semibold ps-4 pt-4 mb-4">Order Summary</h5>         
        <div className="flex items-center gap-2 bg-customLight_Brown rounded-full    px-6 ">
        {['Day', 'Week', 'Month'].map((period) => (
        <div key={period} className="flex items-center px-1">
       
          <p
            className={`text-sm py-2 font-medium cursor-pointer ${
              activePeriod === period ? 'text-customBrown border-b-2 border-customBrown' : 'text-black'
            }`}
            onClick={() => handleClick(period)}
          >
            {period}
          </p>
        </div>
      ))}
        </div>
      </div>
      <div className="w-full flex-1 flex items-center">
    <div className="flex gap-3 justify-center items-center w-full">
      <div className="w-1/2">
        <PieChart
          data={data}
          lineWidth={50}
          startAngle={0}
          paddingAngle={3} style={{height:"220px"}}
          // rounded
          animate
          // label={({ dataEntry }) => `${Math.round(dataEntry.percentage)} %`}
          // labelStyle={{
          //   fontSize: '5px',
          //   fontFamily: 'sans-serif',
          // }}
          // labelPosition={100}
        />
      </div>
      <div className="w-1/2">
        <div className="p-2 border rounded-lg mb-3">
            <div className="flex items-center mb-2 text-sm font-medium">
              <div
                className="inline-block w-2 h-2 rounded-full mr-2"
                style={{ backgroundColor: data[0].color }}
              ></div>
              <div className="">{data[0].value}</div>
              <div className="ml-2">On delivery</div>
            </div>
            <div className="flex items-center">
              <div className="flex-1 bg-gray-300 rounded-full h-[6px] ">
                <div
                  className="h-[6px] rounded-full"
                  style={{ width: `${data[0].value}%`, backgroundColor: data[0].color }}
                ></div>
              </div>
              <span className="ml-2 text-xs font-medium">{data[0].value}%</span>
            </div>
        </div>
        <div className="p-2 border rounded-lg mb-3">
          <div className="flex items-center mb-2 text-sm font-medium">
            <div
              className="inline-block w-2 h-2 rounded-full mr-2"
              style={{ backgroundColor: data[1].color }}
            ></div>
            <div className="">{data[1].value}</div>
            <div className="ml-2">Delivered</div>
          </div>
          <div className="flex items-center">
            <div className="flex-1 bg-gray-300 rounded-full h-[6px]">
              <div
                className=" h-[6px] rounded-full"
                style={{ width: `${data[1].value}%`, backgroundColor: data[1].color }}
                ></div>
            </div>
            <span className="ml-2 text-xs font-medium">{data[1].value}%</span>
          </div>
        </div>
        <div className="p-2 border rounded-lg">
          <div className="flex items-center mb-2 text-sm font-medium">
            <div
              className="inline-block w-2 h-2 rounded-full mr-2"
              style={{ backgroundColor: data[2].color }}
            ></div>
            <div className="">{data[2].value}</div>
            <div className="ml-2">Canceled</div>
          </div>
          <div className="flex items-center">
            <div className="flex-1 bg-gray-300 rounded-full h-[6px]">
              <div
                className="bg-red-600 h-[6px] rounded-full"
                style={{ width: `${data[2].value}%`, backgroundColor: data[2].color }}
                ></div>
            </div>
            <span className="ml-2 text-xs font-medium">{data[2].value}%</span>
          </div>
        </div>
      </div>
    </div>
      </div>
    </div>
  );
};

export default DeliveryStatusChart;
