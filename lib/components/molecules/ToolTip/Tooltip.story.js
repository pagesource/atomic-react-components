import React from 'react';
import { storiesOf } from '@storybook/react';
import { defaultConfig, noImageConfig, buttonSubmit, buttonSubmitDisabled } from './Tooltip.mock';

import Tooltip, { ToolTipGeneric } from '.';

// $FlowFixMe eslint-disable-next-line extra-rules/no-commented-out-code
storiesOf('Molecules', module).addWithChapters('Tooltip', {
  chapters: [
    {
      sections: [
        {
          sectionFn: () => <ToolTipGeneric {...defaultConfig} />,
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
      title: 'Simple tooltip for label with and without icon',
      sections: [
        {
          title: 'Tooltip for label',
          sectionFn: () => (
            <div style={{ display: 'flex' }}>
              <Tooltip {...defaultConfig} />

              <Tooltip {...noImageConfig} />
            </div>
          ),
        },
      ],
    },
    {
      title: 'Tooltip for button clickable and Disabled',
      sections: [
        {
          title: 'Tooltip for button',
          sectionFn: () => (
            <div style={{ display: 'flex' }}>
              <Tooltip {...buttonSubmit} />

              <Tooltip {...buttonSubmitDisabled} />
            </div>
          ),
        },
      ],
    },
  ],
});
