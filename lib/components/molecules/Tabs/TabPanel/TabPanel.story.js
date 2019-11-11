import React from 'react';
import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
import { hiddenPanelConfig, selectedPanelConfig } from './TabPanel.mock';

// Import Styled Component to showcase variations
import TabPanel, { TabPanelVanilla } from '.';

// $FlowFixMe eslint-disable-next-line extra-rules/no-commented-out-code
storiesOf('Molecules/Tabs', module)
  .addParameters({ jest: ['TabPanel', 'TabPanelVanilla'] })
  .addWithChapters('TabPanel', {
    chapters: [
      {
        sections: [
          {
            sectionFn: () => (
              <TabPanelVanilla {...hiddenPanelConfig} className="hide-default-sample">
                Tab panel content.
              </TabPanelVanilla>
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
        title: 'Primary TabPanel Variations',
        sections: [
          {
            title: 'Selected panel',
            sectionFn: () => <TabPanel {...selectedPanelConfig}>Tab panel content.</TabPanel>,
          },
        ],
      },
    ],
  });
