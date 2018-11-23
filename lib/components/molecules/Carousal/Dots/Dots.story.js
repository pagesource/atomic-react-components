import React from 'react';
import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
import defaultConfig, { configWithDefaultIndex } from './Dots.mock';

// Import Styled Component to showcase variations
import Dots, { DotsVanilla } from '.';

storiesOf('Molecules/Carousal', module).addWithChapters('Dots', {
  chapters: [
    {
      sections: [
        {
          sectionFn: () => (
            <DotsVanilla
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
      title: 'Primary Dots Variations',
      sections: [
        {
          title: 'Simple Dots',
          sectionFn: () => <Dots {...configWithDefaultIndex} />,
        },
      ],
    },
  ],
});
