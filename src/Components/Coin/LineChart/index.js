import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { convertDate } from "../../../Functions/convertDate";
import "./style.css"; // Import your CSS file
import { convertNumber } from "../../../Functions/convertNumber";

const LineChart = ({chartData, multiAxis, priceType,chartData2 }) => {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

  const options = {
    responsive: true,
    // maintainAspectRatio: false,
    plugins: {
      legend: {
        display: multiAxis ? true : false,
      },
      interaction: {
        mode: "index",
        intersect: false,
      },
    },
    scales: {
      y: {
        type: "linear",
        display: true,
        position: "left",
        ticks: {
          callback: function (value) {
            if (priceType == "total_volumes") {
              return convertNumber(value);
            } else if (priceType == "market_caps") {
              return "$" + convertNumber(value);
            } else {
              return "$" + value.toLocaleString();
            }
          },
        },
      },
      y2: multiAxis && {
        type: "linear",
        display: true,
        position: "right",
        ticks: {
          callback: function (value) {
            if (priceType == "total_volumes") {
              return convertNumber(value);
            } else if (priceType == "market_caps") {
              return "$" + convertNumber(value);
            } else {
              return "$" + value.toLocaleString();
            }
          },
        },
      },
    },
  };
{
  console.log("char2",chartData2);
}
  const data = {
    labels: chartData && chartData.map((date) => convertDate(date[0])),
    // labels:[1,2,3,4],
    datasets: [
      {
        label: "chartData1",
        data: chartData && chartData.map((price) => price[1]),
        // data:[1,2,3,4,5],
        fill: true, // Ensure fill is set to true to enable background color
        borderWidth: 2,
        tension: 0.25, // This is for line graph curve edges
        backgroundColor: "rgba(58, 128, 233, 0.1)", // Background color
        pointRadius: 0,
        borderColor: "#3a80e9", // Line graph color
      },
      {
        label: "CharData 2",
        data: chartData2 && chartData2.map((price) => price[1]),
        // data:[1,2,3,4,5],
        fill: true, // Ensure fill is set to true to enable background color
        borderWidth: 2,
        tension: 0.25, // This is for line graph curve edges
        backgroundColor: "rgba(58, 18, 233, 0.1)", // Background color
        pointRadius: 0,
        borderColor: "#3969", // Line graph color
      },
    ],
  };

  return (
    <div className="chart-container">
      <Line options={options} data={data} className="line"/>
    </div>
  );
};

export default LineChart;
