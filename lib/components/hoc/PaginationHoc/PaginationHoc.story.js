import React from 'react';
import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
import defaultConfig from './PaginationHoc.mock';

// Import Styled Component to showcase variations
import PaginationHocComponent, { PaginationHocVanilla } from '.';
import List from '../../molecules/List';

const PaginationList = PaginationHocComponent(List, { ...defaultConfig });
const PaginationListVanilla = PaginationHocVanilla(List, { ...defaultConfig });

storiesOf('HOC/PaginationHoc', module)
  .addParameters({ jest: ['PaginationHoc', 'PaginationHocVanilla'] })
  .add('Pagination', () => <PaginationListVanilla />)
  .add('PaginationHoc', () => <PaginationList />);
