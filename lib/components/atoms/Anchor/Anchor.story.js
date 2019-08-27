// @flow
import React from 'react';
import { storiesOf } from '@storybook/react';

import { defaultAnchor, secondaryAnchor, openInNewTabAnchor } from './Anchor.mock';
import Anchor, { AnchorVanilla } from '.';

// $FlowFixMe eslint-disable-next-line extra-rules/no-commented-out-code
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
          sectionFn: () => <Anchor {...defaultAnchor}>Click Here</Anchor>,
        },
        {
          title: 'Secondary Link',
          sectionFn: () => <Anchor {...secondaryAnchor}>Click Here</Anchor>,
        },
        {
          title: 'Open Link in new Tab',
          sectionFn: () => <Anchor {...openInNewTabAnchor}>Click Here</Anchor>,
        },
      ],
    },
  ],
});
