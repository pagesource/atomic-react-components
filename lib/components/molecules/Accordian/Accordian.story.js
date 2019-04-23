import React from 'react';
import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
import defaultAccordian from './Accordian.mock';

// Import Styled Component to showcase variations
import Accordian, { AccordianVanilla } from '.';

storiesOf('Molecules', module).addWithChapters('Accordian', {
  chapters: [
    {
      sections: [
        {
          sectionFn: () => (
            <AccordianVanilla {...defaultAccordian}>
              <Accordian.Header label={'accordian1'}>
                <Accordian.Body />
              </Accordian.Header>
              <Accordian.Header label={'accordian2'}>
                <Accordian.Body />
              </Accordian.Header>
            </AccordianVanilla>
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
      title: 'Popover Variations',
      sections: [
        {
          title: 'By default Visible variation',
          sectionFn: () => (
            <Accordian {...defaultAccordian}>
              <Accordian.Header label={'accordian1'}>
                <Accordian.Body />
              </Accordian.Header>
              <Accordian.Header label={'accordian2'}>
                <Accordian.Body />
              </Accordian.Header>
            </Accordian>
          ),
        },
      ],
    },
  ],
});
