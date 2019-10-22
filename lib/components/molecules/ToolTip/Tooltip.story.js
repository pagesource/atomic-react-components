import React from 'react';
import { storiesOf } from '@storybook/react';
import { defaultConfig, anchorConfig } from './Tooltip.mock';

import Tooltip, { TooltipVanilla } from '.';

// $FlowFixMe eslint-disable-next-line extra-rules/no-commented-out-code
storiesOf('Molecules', module).addWithChapters('Tooltip', {
  chapters: [
    {
      sections: [
        {
          sectionFn: () => <TooltipVanilla {...defaultConfig} />,
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
      title: 'Simple tooltip for label',
      sections: [
        {
          title: 'Tooltip for label',
          sectionFn: () => (
            <div style={{ display: 'flex' }}>
              <Tooltip {...defaultConfig} />
            </div>
          ),
        },
      ],
    },
    {
      title: 'Tooltip anchor element',
      sections: [
        {
          title: 'Tooltip for anchor',
          sectionFn: () => (
            <div style={{ display: 'flex' }}>
              <Tooltip {...anchorConfig} />
            </div>
          ),
        },
      ],
    },
  ],
});
