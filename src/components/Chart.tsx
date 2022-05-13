import { color } from '@mui/system';
import React from 'react';
import { PieChart, Pie, Tooltip } from 'recharts';
import "./Chart.css";

const Chart = (data:any) => {
    const chartData=data.data;
    return (
    <div className='chart'>
        <PieChart width={400} height={400}>
        <Pie
          dataKey="value"
          isAnimationActive={true}
          data={chartData}
          cx="50%"
          cy="50%"
          outerRadius={100}
          fill="#24344d"
          label
        />
        <Tooltip />
      </PieChart>
    </div>
    );
};

export default Chart;