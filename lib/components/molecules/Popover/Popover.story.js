import React from 'react';
import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
import {
  defaultVisiblePopover,
  hiddenPopover,
  ListPopover,
  noCloseBtnPopover,
} from './Popover.mock';

// Import Styled Component to showcase variations
import Popover, { PopoverVanilla } from '.';

storiesOf('Molecules', module).addWithChapters('Popover', {
  chapters: [
    {
      title: `Helloooooo`,
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
          title: '[isVisible=true] variation',
          sectionFn: () => (
            <Popover {...defaultVisiblePopover}>
              <button>Click to Open</button>
            </Popover>
          ),
        },
        {
          title: '[isVisible=false] variation',
          sectionFn: () => (
            <Popover {...hiddenPopover}>
              <button>Click to Open</button>
            </Popover>
          ),
        },
        {
          title: 'List(Component) variation',
          sectionFn: () => (
            <Popover {...ListPopover}>
              <button>Click to Open</button>
            </Popover>
          ),
        },
        {
          title: 'Optional close button variation',
          sectionFn: () => (
            <Popover {...noCloseBtnPopover}>
              <button>Click to Open</button>
            </Popover>
          ),
        },
      ],
    },
  ],
});
