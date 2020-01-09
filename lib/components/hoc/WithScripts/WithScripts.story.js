import React from 'react';
import { storiesOf } from '@storybook/react';
import { defaultConfig, defaultConfig1 } from './WithScripts.mock';

// Import Styled Component to showcase variations
import withScripts from './WithScripts';

const comp1 = () => (
  <div>Hoc will consume the wrapper Component A and injected respective script details</div>
);
const comp2 = () => (
  <div>Hoc will consume the wrapper Component B and injected respective script details</div>
);

const ComponentA = withScripts(comp1, defaultConfig);

const ComponentB = withScripts(comp2, defaultConfig1);

// $FlowFixMe eslint-disable-next-line extra-rules/no-commented-out-code
storiesOf('remove duplicate script injection', module)
  .addParameters({ jest: ['ScriptInjection', 'ScriptInjectionVanilla'] })
  .addWithChapters('ScriptInjection', {
    chapters: [
      {
        sections: [
          {
            sectionFn: () => <ComponentA {...defaultConfig} />,
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
        title: 'Primary ScriptInjection Variations',
        sections: [
          {
            title: 'Variation Name',
            sectionFn: () => <ComponentB {...defaultConfig1} />,
          },
        ],
      },
    ],
  });
