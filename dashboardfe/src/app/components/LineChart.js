import React from "react"
import { Line } from "react-chartjs-2"
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,  // x-axis
  LinearScale,    // y-axis
  PointElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js'

// Register the components with ChartJS
ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  Legend
)

function LineChart({ chartData }) {
  return (
    <div className="line-container">
      <Line
        data={{
          labels: chartData.labels,
          datasets: [
            {
              label: "Users Gained",
              data: chartData.data,
              borderColor: "rgba(75,192,192,1)",
              backgroundColor: "rgba(75,192,192,0.2)",
              borderWidth: 2,
              fill: true,
              tension: 0.4 // Smoothens the lines
            }
          ]
        }}
        options={{
          plugins: {
            title: {
              display: true,
              text: "Distribution in Line Chart"
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

export default LineChart
