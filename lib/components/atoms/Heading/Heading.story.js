// @flow
import React from 'react';
import { storiesOf } from '@storybook/react';

import mainHeading from './Heading.mock';
// Import Vanilla Component to display markup and props
import { HeadingVanilla } from './Heading';
// Import Styled Component to showcase variations
import Heading from './index';

storiesOf('Atoms', module).addWithChapters('Heading', {
  chapters: [
    {
      sections: [
        {
          sectionFn: () => <HeadingVanilla {...mainHeading} className="hide-default-sample">This is Heading text</HeadingVanilla>,
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
      title: 'Input Field Error Message',
      sections: [
        {
          title: 'Default',
          sectionFn: () => <Heading {...mainHeading}>This is Heading text</Heading>,
        },
      ],
    },
  ],
});
