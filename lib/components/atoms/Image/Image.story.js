// @flow
import React from 'react';
import { storiesOf } from '@storybook/react';

import defaultImage, { lazyLoadedImage } from './Image.mock';
import Image, { ImageVanilla } from '.';

// $FlowFixMe eslint-disable-next-line extra-rules/no-commented-out-code
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
          sectionFn: () => {
            console.log(defaultImage);
            return <Image {...defaultImage} />;
          },
        },
      ],
    },
    {
      title: 'Lazy loaded Image Variations',
      sections: [
        {
          title: 'Default lazy loaded',
          sectionFn: () => <Image {...lazyLoadedImage} />,
        },
      ],
    },
  ],
});
