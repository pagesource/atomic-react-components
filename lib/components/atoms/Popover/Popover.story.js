import React from 'react';
import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
import defaultConfig from './Popover.mock';

// Import Styled Component to showcase variations
import Popover, { PopoverVanilla } from '.';

storiesOf('Atoms', module).addWithChapters('Popover', {
  chapters: [
    {
      sections: [
        {
          sectionFn: () => (
            <PopoverVanilla
              {...defaultConfig}
              className={`hide-default-sample ${defaultConfig.className}`}
            >
              Content
            </PopoverVanilla>
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
      title: 'Primary Popover Variations',
      sections: [
        {
          title: 'Default',
          sectionFn: () => (
            <Popover {...defaultConfig}>
              <button>Click to Open</button>
            </Popover>
          ),
        },
      ],
    },
  ],
});
