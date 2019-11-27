/* eslint-disable no-unused-vars */
import React from 'react';
import { storiesOf } from '@storybook/react';
import {
  unorderedList,
  orderedList,
  nestedUnorderedList,
  inlineBorderSeparatedUnorderedList,
} from './List.mock';

// Import Styled Component to showcase variations
import List, { ListVanilla } from '.';

// $FlowFixMe eslint-disable-next-line extra-rules/no-commented-out-code
storiesOf('Molecules', module)
  .addParameters({ jest: ['List', 'ListVanilla'] })
  .add('CTA Knobs', () => (
    <List {...unorderedList}>
      <li key={1}>This is list item</li>
      <li key={2}>This is list item</li>
      <li key={3}>This is list item</li>
    </List>
  ));
