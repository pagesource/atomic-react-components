// @flow
import React from 'react';
import { storiesOf } from '@storybook/react';

// Import Vanilla Component to display markup and props
import { ParaVanilla } from './Para';
// Import Styled Component to showcase variations
import Para from './index';

storiesOf('Atoms', module).addWithChapters('Para', {
  chapters: [
    {
      sections: [
        {
          sectionFn: () => <ParaVanilla className="hide-default-sample">This is plain text</ParaVanilla>,
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
      ],
    },
  ],
});
