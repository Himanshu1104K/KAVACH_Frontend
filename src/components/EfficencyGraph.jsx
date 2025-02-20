import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
const EfficencyGraph = () => {
  const options = {};
  const data = {
    labels: [1, 2, 4, 5, 6, 7, 8, 9, 10],
    datasets: [
      {
        label: "Soldier Efficency Graph",
        data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };
  return (
    <div>
      <Bar options={options} data={data} className="bg-[#F8F3D9] rounded-md p-6" />
    </div>
  );
};

export default EfficencyGraph;
