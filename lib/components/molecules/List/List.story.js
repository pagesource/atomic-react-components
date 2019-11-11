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
  .addWithChapters('List', {
    chapters: [
      {
        sections: [
          {
            sectionFn: () => (
              <ListVanilla
                {...unorderedList}
                className={`hide-default-sample ${unorderedList.className}`}
              >
                <li key={1}>This is list item</li>
                <li key={2}>This is list item</li>
                <li key={3}>This is list item</li>
              </ListVanilla>
            ),
            options: {
              showSource: true,
              allowSourceToggling: true,
              showPropTables: true,
              allowPropTablesToggling: true,
            },
          },
        ],
      },
      {
        title: 'Primary List Variations',
        sections: [
          {
            title: 'Unordered List',
            sectionFn: () => (
              <List {...unorderedList}>
                <li key={1}>This is list item</li>
                <li key={2}>This is list item</li>
                <li key={3}>This is list item</li>
              </List>
            ),
          },
          {
            title: 'Ordered List',
            sectionFn: () => (
              <List {...orderedList}>
                <li key={1}>This is ordered list item.</li>
                <li key={2}>This is ordered list item.</li>
                <li key={3}>This is ordered list item.</li>
                <li key={4}>This is ordered list item.</li>
              </List>
            ),
          },
          {
            title: 'Nested Unordered List',
            sectionFn: () => (
              <List {...nestedUnorderedList}>
                <li key={1}>This is list item</li>
                <li key={2}>
                  <List {...orderedList}>
                    <li key={3}>This is nested list item.</li>
                    <li key={4}>This is nested list item.</li>
                  </List>
                </li>
                <li key={5}>This is list item</li>
              </List>
            ),
          },
          {
            title: 'Inline Border Separated Unordered List',
            sectionFn: () => (
              <List {...inlineBorderSeparatedUnorderedList}>
                <li key={1}>This is list item</li>
                <li key={2}>This is list item</li>
                <li key={3}>This is list item</li>
              </List>
            ),
          },
        ],
      },
    ],
  });
