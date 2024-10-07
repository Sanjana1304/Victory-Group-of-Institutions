import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

// Register the components needed
ChartJS.register(ArcElement, Tooltip, Legend);

const DonutChart = ({dataa,heading,labels}) => {
    const data = {
      labels: labels,
      datasets: [
        {
          label: 'Tickets',
          data: dataa, // Data for each segment
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)',
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
          ],
          borderWidth: 1,
        },
      ],
    };
  
    const options = {
      responsive: true,
      plugins: {
        legend: {
            position: 'right', // Move legend to the right side
            labels: {
              font: {
                size: 8, // Set the font size of the legend labels
              },
              padding: 10, // Adjust padding around legend items
            },
          },
        title: {
          display: true,
          text: heading,
        },
      },
      cutout: '60%', // This creates the donut effect
    };
  
    return <Doughnut data={data} options={options} />;
  };
  
  export default DonutChart;
  