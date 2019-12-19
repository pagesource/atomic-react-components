/* eslint-disable no-unused-vars */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { unorderedList, orderedList, inlineBorderSeparatedUnorderedList } from './List.mock';

// Import Styled Component to showcase variations
import List, { ListVanilla } from '.';

storiesOf('Molecules/List', module)
  .addParameters({ jest: ['List'] })
  .add('Knobs', () => (
    <ListVanilla {...unorderedList}>
      <li key={1}>This is list item</li>
      <li key={2}>This is list item</li>
      <li key={3}>This is list item</li>
    </ListVanilla>
  ))
  .add('Default', () => (
    <List {...unorderedList}>
      <li key={1}>This is list item</li>
      <li key={2}>This is list item</li>
      <li key={3}>This is list item</li>
    </List>
  ))
  .add('Ordered List', () => (
    <List {...orderedList}>
      <li key={1}>This is ordered List item</li>
      <li key={2}>This is ordered List item</li>
      <li key={3}>This is ordered List item</li>
    </List>
  ))
  .add('Inline List', () => (
    <List {...inlineBorderSeparatedUnorderedList}>
      <li key={1}>Inline Border Separated Unordered List Item</li>
      <li key={2}>Inline Border Separated Unordered List Item</li>
      <li key={3}>Inline Border Separated Unordered List Item</li>
    </List>
  ));
