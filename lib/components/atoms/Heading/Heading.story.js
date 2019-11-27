// @flow
import React from 'react';
import { storiesOf } from '@storybook/react';

// eslint-disable-next-line no-unused-vars
import { mainHeading, headingWithCustomLocator } from './Heading.mock';
// eslint-disable-next-line no-unused-vars
import Heading, { HeadingVanilla } from '.';

// $FlowFixMe eslint-disable-next-line extra-rules/no-commented-out-code
storiesOf('Atoms', module)
  .addParameters({ jest: ['Heading'] })
  .add('Heading', () => <Heading {...mainHeading}>This is Heading text</Heading>);
/*   .addWithChapters('Heading', {
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
  }); */
