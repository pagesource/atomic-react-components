// @flow
import React from 'react';
import { storiesOf } from '@storybook/react';

import mainHeading from './Heading.mock';
import Heading, { HeadingVanilla } from '.';

// $FlowFixMe eslint-disable-next-line extra-rules/no-commented-out-code
storiesOf('Atoms', module).addWithChapters('Heading', {
  chapters: [
    {
      sections: [
        {
          sectionFn: () => (
            <HeadingVanilla {...mainHeading} className="hide-default-sample">
              This is Heading text
            </HeadingVanilla>
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
