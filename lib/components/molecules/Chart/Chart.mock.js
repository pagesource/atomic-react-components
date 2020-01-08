const config = {
  data: {
    labels: [
      '01 Jan',
      '01 Jan',
      '01 Jan',
      '01 Jan',
      '01 Jan',
      '01 Jan',
      '01 Jan',
      '01 Jan',
      '01 Jan',
      '01 Jan',
      '01 Jan',
      '01 Jan',
    ],
    series: [
      [210, 80, 150, 111, 120, 220, 250, 30, 90, 100, 120, 30],
      [210, 80, 150, 110, 12, 220, 250, 30, 90, 100, 120, 30],
      [210, 80, 150, 110, 120, 220, 250, 30, 90, 100, 120, 30],
    ],
  },
  options: {
    stackBars: true,
  },
  type: 'Bar',
};
const defaultConfig = { config };

export default defaultConfig;
