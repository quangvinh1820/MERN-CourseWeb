import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, DoughnutController, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(DoughnutController, ArcElement, Tooltip, Legend);

const ChartPie = () => {
  // Data for the chart
  const chartData = {
    labels: ["Direct", "Referral", "Social"],
    datasets: [{
      data: [55, 30, 15],
      backgroundColor: ['#4e73df', '#1cc88a', '#36b9cc'],
      hoverBackgroundColor: ['#2e59d9', '#17a673', '#2c9faf'],
      hoverBorderColor: "rgba(234, 236, 244, 1)",
    }],
  };

  // Options for the chart
  const options = {
    maintainAspectRatio: false,
    tooltips: {
      backgroundColor: "rgb(255,255,255)",
      bodyFontColor: "#858796",
      borderColor: '#dddfeb',
      borderWidth: 1,
      xPadding: 15,
      yPadding: 15,
      displayColors: false,
      caretPadding: 10,
    },
    legend: {
      display: false,
    },
    cutoutPercentage: 80,
  };

  return (
    <div className="card-body">
      <Doughnut data={chartData} options={options} />
    </div>
  );
};

export default ChartPie;
