import React from 'react';
import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
import defaultConfig from './Pagination.mock';

// Import Styled Component to showcase variations
import Pagination, { PaginationVanilla } from '.';

storiesOf('Atoms/Pagination', module)
  .addParameters({ jest: ['Pagination', 'PaginationVanilla'] })
  .add('Knobs', () => <PaginationVanilla {...defaultConfig} />)
  .add('Pagination', () => <Pagination {...defaultConfig} />);
