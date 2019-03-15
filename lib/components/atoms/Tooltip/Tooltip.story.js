import React from 'react';
import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
import defaultConfig from './Tooltip.mock';

// Import Styled Component to showcase variations
import Tooltip, { TooltipVanilla } from '.';

storiesOf('Atoms', module).addWithChapters('Tooltip', {
  chapters: [
    {
      sections: [
        {
          sectionFn: () => (
            <TooltipVanilla className={`hide-default-sample ${defaultConfig.className}`} />
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
      title: 'Primary Tooltip Variations',
      sections: [
        {
          title: 'Variation Name',
          sectionFn: () => (
            <p>
              <span>Here is a </span>
              <Tooltip {...defaultConfig}>tooltip</Tooltip>
              <span> on top.</span>
            </p>
          ),
        },
      ],
    },
  ],
});
