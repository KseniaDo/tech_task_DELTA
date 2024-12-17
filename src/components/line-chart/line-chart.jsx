import React from "react";
import { Line } from 'react-chartjs-2'

export function LineChart({ chartData }) {
    const data = {
        labels: chartData.dates,
        datasets: [
            {
                data: chartData.info.map(Number)
            }
        ],
    }
    const options = {
        plugins: {
            legend: {
                display: false
            },
        },
    }
    return (<Line data={data} options={options} />)
}