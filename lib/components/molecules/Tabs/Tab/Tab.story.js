import React from 'react';
import { storiesOf } from '@storybook/react';

import { defaultActiveTab, defaultNonActiveTab } from './Tab.mock';
import { inlineUnorderedList } from '../../List/List.mock';

// Import Styled Component to showcase variations
import Tab, { TabVanilla } from '.';
// To be used as wrapper Tab component as it returns plain <li></li>
import List from '../../List';

// $FlowFixMe eslint-disable-next-line extra-rules/no-commented-out-code
storiesOf('Molecules/Tabs', module)
  .addParameters({ jest: ['Tab', 'TabVanilla', 'List'] })
  .addWithChapters('Tab', {
    chapters: [
      {
        sections: [
          {
            sectionFn: () => <TabVanilla {...defaultActiveTab} className="hide-default-sample" />,
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
        title: 'Primary Tab Variations',
        sections: [
          {
            title: 'Default Tabs',
            sectionFn: () => (
              <List {...inlineUnorderedList}>
                <Tab {...defaultActiveTab}>Tab 1</Tab>
                <Tab {...defaultNonActiveTab}>Tab 2</Tab>
              </List>
            ),
          },
        ],
      },
    ],
  });
