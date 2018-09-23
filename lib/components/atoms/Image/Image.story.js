// @flow
import React from 'react';
import { storiesOf } from '@storybook/react';
import defaultImage from './Image.mock';

// Import Vanilla Component to display markup and props
import { ImageVanilla } from './Image';
// Import Styled Component to showcase variations
import Image from './index';

storiesOf('Atoms', module).addWithChapters('Image', {
  chapters: [
    {
      sections: [
        {
          sectionFn: () => <ImageVanilla {...defaultImage} className="hide-default-sample" />,
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
      title: 'Responsive Image Variations',
      sections: [
        {
          title: 'Default',
          sectionFn: () => <Image {...defaultImage} />,
        }
      ],
    },
  ],
});
