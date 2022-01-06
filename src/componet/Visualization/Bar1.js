import React from 'react';
import {Doughnut, Bar} from 'react-chartjs-2';
import {
    Chart,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    ArcElement
  } from "chart.js";
  Chart.register(CategoryScale, ArcElement,LinearScale, PointElement, LineElement, Title, Tooltip, Legend)

function Bar1() {
  return (
    <div style={{height: '300px', width: '300px'}} >
        <Doughnut
        
    data={{
      labels: [
        "Apple_Watch",
        "Ipad",
        "Iphone",
        "Macbook"
      ],
      datasets: [
        {
          label: "Population (millions)",
          backgroundColor: [
            "#3e95cd",
            "#8e5ea2",
            "#3cba9f",
            "#e8c3b9"
          ],
          data: [268, 398, 683, 83]
        }
      ]
    }}
    options={{
      legend: { display: false },
      title: {
        display: true,
        text: "Predicted world population (millions) in 2050"
      }
    }}
  />
  <br/>
  <br/>
  <br/>
    </div>
  );
}
export default Bar1;