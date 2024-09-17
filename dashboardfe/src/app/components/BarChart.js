import React from "react"
import { Bar } from "react-chartjs-2"
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,  // x-axis (categories)
  LinearScale,    // y-axis (numeric)
  Title,
  Tooltip,
  Legend
} from "chart.js"

// Register the components for the Bar chart
ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend
)

const BarChart = ({ chartData }) => {
  return (
    <div className="bar-container">
      <Bar
        data={{
          labels: chartData.labels, // Labels for the x-axis
          datasets: [
            {
              label: "Distribution in Bar Chart",
              data: chartData.data,  // Data for the bars
              backgroundColor: [
                "rgba(75, 192, 192, 0.2)",
                "rgba(54, 162, 235, 0.2)",
                "rgba(255, 206, 86, 0.2)",
                "rgba(153, 102, 255, 0.2)"
              ],
            //   borderColor: [
            //     "rgba(75, 192, 192, 1)",
            //     "rgba(54, 162, 235, 1)",
            //     "rgba(255, 206, 86, 1)",
            //     "rgba(153, 102, 255, 1)"
            //   ],
              borderWidth: 1
            }
          ]
        }}
        options={{
          plugins: {
            title: {
              display: true,
              text: "Distribution in Bar Chart"
            },
            legend: {
              display: true
            }
          },
          scales: {
            x: {
              title: {
                display: true,
                text: "Months"
              }
            },
            y: {
              title: {
                display: true,
                text: "Users"
              }
            }
          }
        }}
      />
    </div>
  )
}

export default BarChart;
