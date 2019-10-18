// @flow
import React from 'react';
import { storiesOf } from '@storybook/react';

import { mainHeading, headingWithCustomLocator } from './Heading.mock';
import Heading, { HeadingVanilla } from '.';

// $FlowFixMe eslint-disable-next-line extra-rules/no-commented-out-code
storiesOf('Atoms', module)
  .addParameters({ jest: ['Heading'] })
  .addWithChapters('Heading', {
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
        title: 'Headings',
        sections: [
          {
            title: 'Default',
            sectionFn: () => <Heading {...mainHeading}>This is Heading text</Heading>,
          },
          {
            title: 'Heading with custom element locator',
            sectionFn: () => (
              <Heading {...headingWithCustomLocator}>This is Heading with custom locator</Heading>
            ),
          },
        ],
      },
    ],
  });
