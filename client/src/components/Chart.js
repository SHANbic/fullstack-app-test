import React from 'react';
import { Bar } from 'react-chartjs-2';

const Chart = ({ type, history }) => {
  const backgroundColor = () => {
    switch (type) {
      case 'PS4':
        return 'rgba(0, 55, 145, .6)';
      case 'Xbox One':
        return 'rgba(16, 124, 15, .6)';
      case 'Nintendo Switch':
        return 'rgba(228, 4, 21, .6)';
    }
  };
  const borderColor = () => {
    switch (type) {
      case 'PS4':
        return 'rgb(0, 55, 145)';
      case 'Xbox One':
        return 'rgb(16, 124, 15)';
      case 'Nintendo Switch':
        return 'rgb(228, 4, 21)';
    }
  };
  const charData = {
    labels: history.reverse().map(data => data.month),
    datasets: [
      {
        label: `stock for ${type}`,
        data: history.reverse().map(data => data.stock),
        backgroundColor,
        borderColor,
        borderWidth: 1
      }
    ],
    options: {
      legend: {
        labels: {
          fontColor: borderColor(),
          fontSize: 18
        }
      },
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true
            }
          }
        ]
      }
    }
  };

  return (
    <div className="chart">
      <Bar data={charData} options={charData.options} />
    </div>
  );
};

export default Chart;
