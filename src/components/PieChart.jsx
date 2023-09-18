import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js";

const PieChart = () => {
  const data = {
    labels: ["boys", "others"],
    datasets: [
      {
        label: "Boys",
        data: [23, 232, 40],
        borderRadius: 2,
        backgroundColor: ["#EE8484", "#F6DC7D", "#98D89E"],
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        // position : 'right',
        align: "end",
        labels: {
          font: {
            size: 14,
          },
          usePointStyle: true,
          pointStyle: "circle",
        },
      },
    },
  };

  return (
    <div className="w-[480px] h-[256px] shadow-slate-200 shadow-lg rounded-[20px] px-[40px] py-[30px] border-2">
      <div className="flex justify-between">
        <h1 className="font-bold">Top products</h1>
        <p className="text-xs text-[#858585]">May-June 2021</p>
      </div>
      <div className="chart w-[141px] h-[141px]">
        <Doughnut data={data} options={options}/>
      </div>
    </div>
  );
};

export default PieChart;
