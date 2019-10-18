import React from 'react';
import { storiesOf } from '@storybook/react';
import { defaultTabs, verticalTabs } from './Tabs.mock';

// Import Styled Component to showcase variations
import Tabs, { TabsVanilla } from '.';

// $FlowFixMe eslint-disable-next-line extra-rules/no-commented-out-code
storiesOf('Molecules/Tabs', module)
  .addParameters({ jest: ['Tabs', 'TabsVanilla'] })
  .addWithChapters('Tabs', {
    chapters: [
      {
        sections: [
          {
            sectionFn: () => (
              <TabsVanilla
                {...defaultTabs}
                className={`hide-default-sample ${defaultTabs.className}`}
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
        title: 'Primary Tabs Variations',
        sections: [
          {
            title: 'Horizontal Tabs',
            sectionFn: () => <Tabs {...defaultTabs} />,
          },
          {
            title: 'Vertical Tabs',
            sectionFn: () => <Tabs {...verticalTabs} />,
          },
        ],
      },
    ],
  });
