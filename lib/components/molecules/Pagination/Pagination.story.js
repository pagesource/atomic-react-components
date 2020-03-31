import React from 'react';
import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
import defaultConfig from './Pagination.mock';
import List from '../List';

// Import Styled Component to showcase variations
import Pagination, { PaginationVanilla } from '.';

storiesOf('Molecules/Pagination', module)
  .addParameters({ jest: ['Pagination', 'PaginationVanilla'] })
  .add('Knobs', () => {
    return (
      <PaginationVanilla
        data={defaultConfig.items}
        pageSize={5}
        onPageChange={(pageNumber) => console.log('You are on page:', pageNumber)}
        renderPaginationComponent={({ data }) => {
          return <List>{data && data.map((item) => <li key={item.code}>{item.name}</li>)}</List>;
        }}
      />
    );
  })
  .add('Pagination', () => {
    return (
      <Pagination
        data={defaultConfig.items}
        pageSize={5}
        nextLabel="&raquo;"
        previousLabel="&laquo;"
        onPageChange={(pageNumber) => console.log('You are on page:', pageNumber)}
        renderPaginationComponent={({ data }) => {
          return <List>{data && data.map((item) => <li key={item.code}>{item.name}</li>)}</List>;
        }}
        currentPageAria="you are on page number"
        paginationAriaLabel="Pagination"
        lastButtonAria="Last Button"
        nextButtonAria="Next Button"
        previousButtonAria="Previous Button"
        gotoPageAria="Go to page number"
      />
    );
  });
