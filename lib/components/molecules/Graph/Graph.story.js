import React from 'react';
import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
import defaultConfig from './Graph.mock';

// Import Styled Component to showcase variations
import Graph, { GraphVanilla } from '.';

// $FlowFixMe eslint-disable-next-line extra-rules/no-commented-out-code
storiesOf('Molecules', module).addWithChapters('Graph', {
  chapters: [
    {
      sections: [
        {
          sectionFn: () => (
            <GraphVanilla
              {...defaultConfig}
              className={`hide-default-sample ${defaultConfig.className}`}
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
      title: 'Primary Graph Variations',
      sections: [
        {
          title: 'Variation Name',
          sectionFn: () => <Graph {...defaultConfig} />,
        },
      ],
    },
  ],
});
