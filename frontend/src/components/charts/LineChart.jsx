import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

// Register the components needed
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const LineChart = ({heading,xdata}) => {
    const data = {
      labels: xdata,
      datasets: [
        {
          data: [50, 60, 70, 180, 190, 210],
          borderColor: 'rgba(75, 192, 192, 1)',
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          fill: true,  // To fill the area under the line
          tension: 0.4, // Smoothness of the line
          pointBackgroundColor: 'rgba(75, 192, 192, 1)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(75, 192, 192, 1)',
        },
      ],
    };
  
    const options = {
      responsive: true,
      plugins: {
        legend: {
            display: false, // Di
        },
        title: {
            display: true,
            text: heading,
          },
      },
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    };
  
    return <Line data={data} options={options} />;
  };
  
  export default LineChart;
  