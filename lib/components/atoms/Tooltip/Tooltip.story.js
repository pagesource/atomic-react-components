import React from 'react';
import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
import defaultConfig from './Tooltip.mock';

// Import Styled Component to showcase variations
import Tooltip, { TooltipVanilla } from '.';
import { primaryButton } from '../Button/Button.mock';
import Button from '../Button';

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
          title: 'Tooltip Top',
          sectionFn: () => (
            <Tooltip {...defaultConfig}>
              <Button {...primaryButton}>Button</Button>
            </Tooltip>
          ),
        },
      ],
    },
  ],
});
