import React from 'react'
import ReactApexChart from 'react-apexcharts'

function CandlestickChart({cData}) {
  const state = {
    series: [
      {
        data: cData
      },
    ],
    options: {
      chart: {
        type: 'candlestick',
        height: 350,
      },
      title: {
        text: 'Candlestick Chart',
        align: 'left',
      },
      xaxis: {
        type: 'datetime',
      },
      yaxis: {
        tooltip: {
          enabled: true,
        },
      },
    },
  }

  return (
    <div className='candle-container'>
      <ReactApexChart
        options={state.options}
        series={state.series}
        type="candlestick"
        height={350}
      />
    </div>
  )
}

export default CandlestickChart
