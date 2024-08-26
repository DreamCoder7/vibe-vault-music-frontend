import React, { useEffect } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";
import { useDispatch, useSelector } from "react-redux";

import { RootState } from "../../../redux/store";
import { fetchStatisticsRequest } from "../../../redux/slice/stats/statisticsSlice";
import { StatisticsContainer } from "../page.styles";

// Register necessary Chart.js components
ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
);

const Statistics: React.FC = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector(
    (state: RootState) => state.stats
  );

  useEffect(() => {
    dispatch(fetchStatisticsRequest());
  }, [dispatch]);

  // Handle loading and error states
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  // Chart Data
  const chartData = {
    labels: ["Total Songs", "Total Artists", "Total Albums", "Total Genres"],
    datasets: [
      {
        label: "Counts",
        data: [
          data?.totalSongs || 0,
          data?.totalArtists || 0,
          data?.totalAlbums || 0,
          data?.totalGenres || 0,
        ],
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      tooltip: {
        callbacks: {
          label: (context: any) => {
            const label = context.dataset.label || "";
            return `${label}: ${context.raw}`;
          },
        },
      },
    },
    scales: {
      x: {
        beginAtZero: true,
      },
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <StatisticsContainer>
      <h2>Statistics</h2>
      <div style={{ width: "100%", height: "400px" }}>
        <Bar data={chartData} options={options} />
      </div>
    </StatisticsContainer>
  );
};

export default Statistics;
