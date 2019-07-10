// @flow
import React from 'react';
import { storiesOf } from '@storybook/react';

import { defaultAnchor, secondaryAnchor, newWindowAnchor } from './Anchor.mock';
import Anchor, { AnchorVanilla } from '.';

storiesOf('Atoms', module).addWithChapters('Anchor', {
  chapters: [
    {
      sections: [
        {
          sectionFn: () => (
            <AnchorVanilla
              {...defaultAnchor}
              className={`hide-default-sample ${defaultAnchor.className}`}
            >
              Home
            </AnchorVanilla>
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
      title: 'Primary Anchor Variations',
      sections: [
        {
          title: 'Default Link',
          sectionFn: () => <Anchor {...defaultAnchor}>Submit</Anchor>,
        },
        {
          title: 'Secondary Link',
          sectionFn: () => <Anchor {...secondaryAnchor}>Submit</Anchor>,
        },
        {
          title: 'New Window Link',
          sectionFn: () => <Anchor {...newWindowAnchor}>Submit</Anchor>,
        },
      ],
    },
  ],
});
