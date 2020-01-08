import React from 'react';
import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
import defaultConfig from './Chart.mock';

// Import Styled Component to showcase variations
import Chart, { ChartVanilla } from '.';

storiesOf('Molecules/Chart', module)
  .addParameters({ jest: ['Chart', 'ChartVanilla'] })
  .add('Knobs', () => <ChartVanilla {...defaultConfig} />)
  .add('Chart', () => <Chart {...defaultConfig} />);
