import React from 'react'
import { Line } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Legend,
} from 'chart.js'
import { Container, Stack } from '@mui/system'
ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Legend)
function Chart() {
  const data = {
    labels: ['Jan', 'Feb', 'March', 'April', 'May', 'Jun', 'July'],
    datasets: [
      {
        label: 'line1',
        data: [-20, 70, -40, -40, 60, 40, -60],
        backgroundColor: '#ff6384',
        borderColor: '#ff6384',
        pointBorderColor: '#ff6384',
      },
      {
        label: 'line1',
        data: [-50, 20, 35, -15, -30, 25, 30],
        backgroundColor: '#4bc0c0',
        borderColor: '#4bc0c0',
        pointBorderColor: '#4bc0c0',
      },
    ],
  }
  const option = {
    plugins: {
      legend: true,
    },
    scales: {
      y: {
        min: -50,
        max: 100,
        ticks: {
          stepSize: 50
      }
      },
    },
   
  }
  return (
    <Container sx={{marginTop:'80px'}} maxWidth={'md'}>
      <Line data={data} options={option}></Line>
    </Container>
  )
}

export default Chart
