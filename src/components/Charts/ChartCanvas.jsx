// Component renders either the line chart or bar chart based on the selected options
// It is defaulted to the line chart.

import React from "react";
import { Bar, Line } from "react-chartjs-2";
import HorizontalBarChart from "./HorizontalBarChart";

import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  Tooltip,
} from "chart.js";
import { useSelector } from "react-redux";

ChartJS.register(
  BarElement,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Legend,
  Tooltip
);

const ChartCanvas = ({ data, options }) => {
  const chartType = useSelector((state) => state.globalStore.chartType);

  return (
    <div
      style={{
        position: "relative",
        width: "99%",
        height: "400px",
        marginTop: "1rem",
      }}>
      {chartType === "Bar Chart" ? (
      <Bar data={data} options={options} />
      ) : chartType === "Line Chart" ? (
      <Line data={data} options={options} /> 
      ) : (
      chartType === "Horizontal Bar Chart" ? (
      <HorizontalBarChart data={data} options={options} />
      ) : null // Add more conditions as needed
      )}
    </div>
  );
};


export default ChartCanvas;
