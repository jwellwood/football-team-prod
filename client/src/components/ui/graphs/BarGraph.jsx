import React from 'react';
import { Bar } from 'react-chartjs-2';
import { defaults } from 'react-chartjs-2';
// Internal
import { theme } from 'assets/theme';

defaults.global.defaultFontFamily = 'Jost';
defaults.global.defaultFontColor = theme.palette.secondary.light;
defaults.global.elements.rectangle.backgroundColor = theme.palette.primary.main;
const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    datalabels: {
      color: '#fff',
      backgroundColor: 'rgba(0,0,0,0.8)',
      align: 'center',
      anchor: 'center',
      borderRadius: 5,
    },
  },
  scales: {
    xAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
        gridLines: {
          display: false,
          drawBorder: false,
        },
      },
    ],
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
          display: false,
        },
        gridLines: {},
      },
    ],
  },
};

const BarGraph = ({ data }) => {
  return (
    <Bar
      // plugins={[ChartDataLabels]}
      legend={{ display: false }}
      data={data}
      height={200}
      options={options}
    />
  );
};

export default BarGraph;
