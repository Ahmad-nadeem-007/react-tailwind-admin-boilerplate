import React, { useState } from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  Cell,
} from 'recharts';

const OrderBarChart = () => {
  const data = [
    { name: '4', uv: 380 },
    { name: '8', uv: 430 },
    { name: '12', uv: 480 },
    { name: '16', uv: 510 },
    { name: '20', uv: 530 },
    { name: '24', uv: 510 },
    { name: '28', uv: 530 },
    { name: '32', uv: 510 },
    { name: '36', uv: 530 },
    { name: '40', uv: 550 },
  ];

//   const [hoveredIndex, setHoveredIndex] = useState(null);
const [activePeriod, setActivePeriod] = useState('Day');

const handleClick = (period) => {
  setActivePeriod(period);
};
  return (
    <div className="lg:border-l-[1.5px] border-dashed border-gray-400">
  <div className="flex justify-between items-center mb-4">
  <h5 className="text-xl font-semibold ps-4 pt-4 mb-4">Revenue</h5>         
        <div className="flex items-center gap-2 bg-customLight_Brown rounded-full    px-6 ">
        {['Day', 'Week', 'Month'].map((period) => (
        <div key={period} className="flex items-center mx-1">
       
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
      <div className="">
        <ResponsiveContainer width="100%" height={300}>
          <BarChart
            data={data}
            barSize={8}
            // onMouseLeave={() => setHoveredIndex(null)}
          >
            <CartesianGrid strokeDasharray="7 7" horizontal vertical={false} />
            <XAxis
              dataKey="name"
              axisLine={{ stroke: '#bdbdbd' }}
              tickLine={false} fontSize={12}
              tick={{ transform: 'translate(0, 5)' }}
            />
            <YAxis axisLine={false} tickFormatter={value => `${value}k`} fontSize={12}/>
            <Tooltip cursor={{ fill: 'transparent' }} />
            <Bar
              dataKey="uv"
              fill="#001d3d"
              radius={[4, 4, 5, 5]}
              isAnimationActive={false}
            //   onMouseOver={(data, index) => setHoveredIndex(index)}
            //   onMouseOut={() => setHoveredIndex(null)}
            //   fillOpacity={0.8}
            >
              {/* {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={hoveredIndex === index ? '#2A7BE4' : '#D8E2EE'}
                />
              ))} */}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default OrderBarChart;
