import React from 'react';
import { storiesOf } from '@storybook/react';
import defaultConfig from './Popover.mock';

// Import Styled Component to showcase variations
import PopoverWrapper from '.';

storiesOf('Molecules', module).addWithChapters('Popover', {
  chapters: [
    {
      sections: [
        {
          sectionFn: () => <PopoverWrapper {...defaultConfig}>Click</PopoverWrapper>,
          options: {
            showSource: true,
            allowSourceToggling: true,
            showPropTables: true,
            allowPropTablesToggling: true,
          },
        },
      ],
    },
  ],
});
