'use client'
import Image from "next/image"
import { useEffect, useState } from "react"
import LineChart from './components/LineChart'
import BarChart from './components/BarChart'
import PieChart from './components/PieChart'
import CandlestickChart from "./components/CandlestickChart"

const baseUrl = "http://127.0.0.1:8000/api/"

/**
 * Fetch candlestick chart data from Django backend
 * @returns the JSON fetched data
 */
async function getCandleData() {
  const res = await fetch(`${baseUrl}candlestick_data/`)
  if (!res.ok) {
    throw new Error("Failed to fetch data")
  }
  return res.json()
}

/**
 * Fetch line chart data from Django backend
 * @returns the JSON fetched data
 */
async function getLineData() {
  const res = await fetch(`${baseUrl}line_data/`)
  if (!res.ok) {
    throw new Error("Failed to fetch data")
  }
  return res.json()
}

/**
 * Fetch bar chart data from Django backend
 * @returns the JSON fetched data
 */
async function getBarData() {
  const res = await fetch(`${baseUrl}bar_data/`)
  if (!res.ok) {
    throw new Error("Failed to fetch data")
  }
  return res.json();
}

/**
 * Fetch pie chart data from Django backend
 * @returns the JSON fetched data
 */
async function getPieData() {
  const res = await fetch(`${baseUrl}pie_data/`)
  if (!res.ok) {
    throw new Error("Failed to fetch data")
  }
  return res.json();
}

function formatChartData( fetchArr ) {
  const labels = [];
  const data = [];

  for( let item of fetchArr ){
    labels.push(item["label"])
    data.push( item["data"] )
  }

  return {
    "labels": labels,
    "data": data
  }
}


export default function Home() {
  const [candleData, setCandleData] = useState([])
  const [lineData, setLineData]     = useState([])
  const [barData, setBarData]       = useState([])
  const [pieData, setPieData]       = useState([])

  useEffect(( ) => {
    getCandleData().then( data => {
      console.log('fetched ', data)
      setCandleData(data)
    })

    getLineData().then( data => {
      console.log('fetched ', data)
      setLineData(data)
    })

    getBarData().then( data => {
      console.log('fetched ', data)
      setBarData(data)
    })

    getPieData().then( data => {
      console.log('fetched ', data)
      setPieData(data)
    })
  }, [] )

  const chartData = {
      "labels": ["Jan", "Feb", "Mar", "Apr", "Aug"],
      "data": [10, 20, 30, 40, 90]

    }
    

  console.log('data ', candleData[0])

  const fCandleData = [] // Formatted Candle Data
  for( let data of candleData ){
    fCandleData.push({
      x: new Date(data["date"]),
      y: [data["open"], data["high"], data["low"], data["close"]]
    })
  }

  const fLineData = formatChartData( lineData )
  console.log('ldata', JSON.stringify(fLineData))

  const fBarData = formatChartData( barData )
  console.log('bdata', JSON.stringify(fBarData))

  const fPieData = formatChartData( pieData )
  console.log('pdata', JSON.stringify(fPieData))

  console.log('cData ', JSON.stringify(fCandleData))


  

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 p-6">
      <h1 className="text-3xl font-bold mb-6" style={{textAlign: "center"}}>Chart World</h1>
      <div className="space-y-8">
        <div className="chart-container">
          <h2 className="chart-title">Line Chart</h2>
          <LineChart chartData={fLineData} />
        </div>
        <div className="chart-container">
          <h2 className="chart-title">Bar Chart</h2>
          <BarChart chartData={fBarData} />
        </div>
        <div className="chart-container">
          <h2 className="chart-title">Pie Chart</h2>
          <PieChart chartData={fPieData} />
        </div>
        <div className="chart-container">
          <h2 className="chart-title">Candlestick Chart</h2>
          <CandlestickChart cData={fCandleData} />
        </div>
      </div>
    </div>
  )
}
