import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// Register the components needed
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BarChart = ({heading,xdata,ydata,legendVisibility,label}) => {
    const data = {
      labels: xdata,
      datasets: [
        {
          label: label,
          data: ydata,
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1,
        },
      ],
    };
  
    const options = {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
          display: legendVisibility,
        },
        title: {
          display: true,
          text: heading,
        },
      },
    };
  
    return <Bar data={data} options={options} />;
  };
  
  export default BarChart;
  