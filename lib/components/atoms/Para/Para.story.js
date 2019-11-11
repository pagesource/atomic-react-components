// @flow
import React from 'react';
import { storiesOf } from '@storybook/react';

import Para, { ParaVanilla } from '.';

// $FlowFixMe eslint-disable-next-line extra-rules/no-commented-out-code
storiesOf('Atoms', module)
  .addParameters({ jest: ['Para', 'ParaVanilla'] })
  .addWithChapters('Para', {
    chapters: [
      {
        sections: [
          {
            sectionFn: () => (
              <ParaVanilla className="hide-default-sample">This is plain text</ParaVanilla>
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
            sectionFn: () => <Para>This is plain text.</Para>,
          },
          {
            title: 'With element locator',
            sectionFn: () => (
              <Para elementLocator="my-text">This is plain text with element locator.</Para>
            ),
          },
        ],
      },
    ],
  });
