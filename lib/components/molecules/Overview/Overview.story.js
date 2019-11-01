import React from 'react';
import { storiesOf } from '@storybook/react';
import { defaultConfig, noImageConfig } from './Overview.mock';

import Overview, { OverviewVanilla } from '.';

// $FlowFixMe eslint-disable-next-line extra-rules/no-commented-out-code
storiesOf('Molecules', module).addWithChapters('Overview', {
  chapters: [
    {
      sections: [
        {
          sectionFn: () => <OverviewVanilla {...defaultConfig} />,
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
      title: 'Overview with image',
      sections: [
        {
          title: 'Overview with image',
          sectionFn: () => (
            <div style={{ display: 'flex' }}>
              <Overview {...defaultConfig} />
            </div>
          ),
        },
      ],
    },
    {
      title: 'Overview without image',
      sections: [
        {
          title: 'Overview without image',
          sectionFn: () => (
            <div style={{ display: 'flex' }}>
              <Overview {...noImageConfig} />
            </div>
          ),
        },
      ],
    },
  ],
});
