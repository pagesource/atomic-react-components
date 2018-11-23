import React from 'react';
import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
import defaultConfig from './Slide.mock';

// Import Styled Component to showcase variations
import Slide, { SlideVanilla } from '.';

storiesOf('Molecules/Carousal', module).addWithChapters('Slide', {
  chapters: [
    {
      sections: [
        {
          sectionFn: () => (
            <SlideVanilla className={`hide-default-sample ${defaultConfig.className}`} />
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
      title: 'Primary Slide Variations',
      sections: [
        {
          title: 'Slide',
          sectionFn: () => (
            <Slide>
              <p>This is primary text</p>
            </Slide>
          ),
        },
      ],
    },
  ],
});
