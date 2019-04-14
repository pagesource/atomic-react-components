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
              <div label="Header is here">
                <p>Body panel is here</p>
              </div>
              <div label="Variant is here">
                <p>Variant panel is here</p>
              </div>
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
      title: 'Primary Accordian Variations',
      sections: [
        {
          title: 'Variation Name',
          sectionFn: () => (
            <Accordian>
              <div label="Header is here">
                <p>Body panel is here</p>
              </div>
              <div label="Variant is here">
                <p>Variant panel is here</p>
              </div>
            </Accordian>
          ),
        },
      ],
    },
  ],
});
