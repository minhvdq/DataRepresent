import React from "react";
import { Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend
} from "chart.js"

// Register the components for the Pie chart
ChartJS.register(
  ArcElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend
)

function generateColors(numColors) {
    const colors = [];
    const hueStep = 360 / numColors // Evenly space the hues
    
    for (let i = 0; i < numColors; i++) {
        const hue = Math.round(i * hueStep)
        const color = `hsl(${hue}, 70%, 60%)` // Customize saturation and lightness
        colors.push(color)
    }
    return colors;
}
  

const PieChart = ({ chartData }) => {
  console.log('leng ', chartData.labels.length)

  const colors = generateColors(chartData.labels.length)
  return (
    <div className="pie-container">
      <Pie
        data={{
          labels: chartData.labels, // Labels for the pie slices
          datasets: [
            {
              label: "Distribution in Pie Chart",
              data: chartData.data,  // Data for the pie slices
              backgroundColor: colors,
              borderColor: colors,
              borderWidth: 1
            }
          ]
        }}
        options={{
          plugins: {
            title: {
              display: true,
              text: "Distribution in Pie Chart"
            },
            legend: {
              display: true
            }
          }
        }}
      />
    </div>
  )
}

export default PieChart
