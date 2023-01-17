import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

export default function TableChart({ chartPrices }) {
  const labels = chartPrices.map((price, index) => index);

  const borderColor = (chartPrices) => {
    let color;
    if (chartPrices[0] > chartPrices[chartPrices.length - 1]) {
      color = "rgb(254, 16, 64)";
    } else {
      color = "rgb(0, 252, 42)";
    }
    return color;
  };

  return (
    <div style={{ width: 120, height: 60 }}>
      <Line
        data={{
          labels: labels,
          datasets: [
            {
              data: chartPrices,
              borderColor: borderColor(chartPrices),
              tension: 0.5,
              fill: false,
            },
          ],
        }}
        options={{
          plugins: {
            legend: {
              display: false,
            },
          },
          elements: {
            line: {
              tension: 0.5,
            },
            point: {
              radius: 0,
            },
          },
          scales: {
            x: {
              grid: {
                display: false,
                drawborder: false,
                drawOnChartArea: false,
              },
              ticks: {
                display: false,
                beginAtZero: true,
                maxTicksLimit: 5,
              },
            },

            y: {
              grid: {
                display: false,
                drawBorder: false,
                drawOnChartArea: false,
              },
              ticks: {
                display: false,
                beginAtZero: true,
                maxTicksLimit: 5,
              },
            },
          },
        }}
      />
    </div>
  );
}
