import React from 'react';
import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
import defaultConfig from './PaginationHoc.mock';

// Import Styled Component to showcase variations
import PaginationHocComponent, { PaginationHocVanilla } from '.';
import List from '../../molecules/List';

// component with render prop

const PaginationWithRenderProp = paginationContent => (
  <List>
    {paginationContent => (
      <div>
        <h1>Vishwesh</h1>
      </div>
    )}
  </List>
);

const PaginationList = PaginationHocComponent(<PaginationWithRenderProp />, { ...defaultConfig });
const PaginationListVanilla = PaginationHocVanilla(List, { ...defaultConfig });

storiesOf('HOC/PaginationHoc', module)
  .addParameters({ jest: ['PaginationHoc', 'PaginationHocVanilla'] })
  .add('Pagination', () => <PaginationListVanilla />)
  .add('PaginationHoc', () => <PaginationList />);
