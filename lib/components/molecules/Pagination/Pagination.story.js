import React from 'react';
import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
import defaultConfig from './Pagination.mock';

// Import Styled Component to showcase variations
import Pagination, { PaginationVanilla } from '.';

// TODO: indentation is not working fine in editor. Need to check for .hbs files
// $FlowFixMe eslint-disable-next-line extra-rules/no-commented-out-code
storiesOf('Molecules', module)
  .addParameters({ jest: ['Pagination', 'PaginationVanilla'] })
  .add('Pagination Knobs', () => (
    <PaginationVanilla
      {...defaultConfig}
      className={`hide-default-sample ${defaultConfig.className}`}
    />
  ))
  .add('Pagination', () => <Pagination {...defaultConfig} />);
