import React from 'react';
import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
import defaultAccordian  from './Accordian.mock';

// Import Styled Component to showcase variations
import Accordian, { AccordianVanilla } from '.';

storiesOf('Molecules', module).addWithChapters('Accordian', {
  chapters: [
    {
      sections: [
        {
          sectionFn: () => (
            <AccordianVanilla
              {...defaultAccordian}
              className={`hide-default-sample ${defaultAccordian.className}`}
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
          sectionFn: () => <Accordian {...defaultAccordian} />,
        },
      ],
    },
  ],
});
