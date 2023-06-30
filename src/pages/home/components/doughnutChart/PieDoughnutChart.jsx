import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
ChartJS.register(ArcElement, Tooltip, Legend);
function PieDoughnutChart() {

const data = {
    // labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [
      {
        label: "# of Votes",
        data: [15, 54, 31],
        rotation: "135",
        cutout: 52,
        backgroundColor: [
          "rgba(0, 0, 0)",//black
          "rgb(154,235,235)",//sky
          "rgb(228,229,145)", //brown
        ],
      },
    ],
  };
  const options= {
    cutout: 25,
    plugins: {
      legend: {
        display: false
      },
      tooltip: {
        enabled: false
      }
    },
    interaction: {
      mode: 'index',
      intersect: false,
    },
  };
  return (
<>
<Doughnut data={data} options={options} />
</>
  )
}

export default PieDoughnutChart