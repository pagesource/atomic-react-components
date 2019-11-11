import React from 'react';
import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
import List from '../List';
import {
  defaultVisiblePopover,
  hiddenPopover,
  ListPopover,
  noCloseBtnPopover,
} from './Popover.mock';

// Import Styled Component to showcase variations
import Popover, { PopoverVanilla } from '.';

storiesOf('Molecules', module)
  .addParameters({ jest: ['Popover', 'PopoverVanilla'] })
  .addWithChapters('Popover', {
    chapters: [
      {
        sections: [
          {
            sectionFn: () => (
              <PopoverVanilla
                {...hiddenPopover}
                className={`hide-default-sample ${hiddenPopover.className}`}
              />
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
        title: 'Popover Variations',
        sections: [
          {
            title: 'By default Visible variation',
            sectionFn: () => (
              <Popover {...defaultVisiblePopover}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua.
              </Popover>
            ),
          },
          {
            title: 'By default Invisible variation',
            sectionFn: () => (
              <Popover {...hiddenPopover}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua.
              </Popover>
            ),
          },
          {
            title: 'List Component as child variation',
            sectionFn: () => (
              <Popover {...ListPopover}>
                <div>
                  <p>This text is a random text</p>
                  <List ListType="ol">
                    <li>This is ordered list item, content of tab 1.</li>
                    <li>This is ordered list item, content of tab 1.</li>
                  </List>
                  <p>This is another random text</p>
                </div>
              </Popover>
            ),
          },
          {
            title: 'Optional close button variation',
            sectionFn: () => (
              <Popover {...noCloseBtnPopover}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua.
              </Popover>
            ),
          },
        ],
      },
    ],
  });
