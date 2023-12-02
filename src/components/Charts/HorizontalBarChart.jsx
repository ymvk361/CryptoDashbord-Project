import React from "react";
import { Bar } from "react-chartjs-2";
import { useSelector } from "react-redux";

import {
  BarElement,
  LinearScale,
  PointElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  Tooltip,
} from "chart.js";

ChartJS.register(
  BarElement,
  LinearScale,
  PointElement,
  CategoryScale,
  Legend,
  Tooltip
);

const HorizontalBarChart = ({ data, options }) => {
    const chartType = useSelector((state) => state.globalStore.chartType);
  
    return (
      <div
        style={{
          position: "relative",
          width: "99%",
          height: "400px",
          marginTop: "1rem",
        }}>
        {chartType === "Horizontal Bar Chart" ? (
          <Bar data={data} options={options} />
        ) : null}
      </div>
    );
  };

export default HorizontalBarChart;
