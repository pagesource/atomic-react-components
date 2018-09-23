// @flow
import React from 'react';
import { storiesOf } from '@storybook/react';
import { defaultAnchor, secondaryAnchor } from './Anchor.mock';
// Import Vanilla Component to display markup and props
import { AnchorVanilla } from './Anchor';
// Import Styled Component to showcase variations
import Anchor from '.';

storiesOf('Atoms', module).addWithChapters('Anchor', {
  chapters: [
    {
      sections: [
        {
          sectionFn: () => <AnchorVanilla {...defaultAnchor} className={`hide-default-sample ${defaultAnchor.className}`}>Home</AnchorVanilla>,
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
      ],
    },
  ],
});
