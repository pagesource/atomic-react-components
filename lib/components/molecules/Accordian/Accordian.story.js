import React from 'react';
import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
import defaultConfig from './Accordian.mock';

// Import Styled Component to showcase variations
import Accordian, { AccordianVanilla } from '.';
import AccordianHeader from '.';

storiesOf('Molecules', module).addWithChapters('Accordian', {
  chapters: [
    {
      sections: [
        {
          sectionFn: () => (
            <AccordianVanilla
              className={`${{ ...AccordianHeader }.componentStyle.componentId} ${
                { ...AccordianHeader }.componentStyle.lastClassName
              }`}
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
      title: 'Primary Accordian Variations',
      sections: [
        {
          title: 'Variation Name',
          sectionFn: () => <Accordian {...defaultConfig} />,
        },
      ],
    },
  ],
});
