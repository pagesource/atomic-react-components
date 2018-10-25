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

storiesOf('Molecules', module).addWithChapters('List', {
  chapters: [
    {
      sections: [
        {
          sectionFn: () => (
            <ListVanilla
              {...unorderedList}
              className={`hide-default-sample ${unorderedList.className}`}
            >
              <li>This is list item</li>
              <li>This is list item</li>
              <li>This is list item</li>
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
              <li>This is list item</li>
              <li>This is list item</li>
              <li>This is list item</li>
            </List>
          ),
        },
        {
          title: 'Ordered List',
          sectionFn: () => (
            <List {...orderedList}>
              <li>This is ordered list item.</li>
              <li>This is ordered list item.</li>
              <li>This is ordered list item.</li>
              <li>This is ordered list item.</li>
            </List>
          ),
        },
        {
          title: 'Nested Unordered List',
          sectionFn: () => (
            <List {...nestedUnorderedList}>
              <li>This is list item</li>
              <li>
                <List {...orderedList}>
                  <li>This is nested list item.</li>
                  <li>This is nested list item.</li>
                </List>
              </li>
              <li>This is list item</li>
            </List>
          ),
        },
        {
          title: 'Inline Border Separated Unordered List',
          sectionFn: () => (
            <List {...inlineBorderSeparatedUnorderedList}>
              <li>This is list item</li>
              <li>This is list item</li>
              <li>This is list item</li>
            </List>
          ),
        },
      ],
    },
  ],
});
