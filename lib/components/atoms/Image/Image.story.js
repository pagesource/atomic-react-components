// @flow
import React from 'react';
import { storiesOf } from '@storybook/react';

import defaultImage, { lazyLoadedImage, customImageLocator } from './Image.mock';
import Image, { ImageVanilla } from '.';

// $FlowFixMe eslint-disable-next-line extra-rules/no-commented-out-code
storiesOf('Atoms', module)
  .addParameters({ jest: ['Image'] })
  .addWithChapters('Image', {
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
              return <Image {...defaultImage} />;
            },
          },
          {
            title: 'Image with custom element locator',
            sectionFn: () => {
              return <Image {...customImageLocator} />;
            },
          },
        ],
      },
      {
        title: 'Lazy loaded Image Variations',
        sections: [
          {
            title: 'Default lazy loaded',
            sectionFn: () => (
              <p style={{ height: '500px', color: 'blue' }}>Scroll Down to lazy load image</p>
            ),
          },
          {
            title: 'This image will lazy load, check in network tab of chrome dev tools',
            info:
              'Note: this only works in Chrome so far, check for updates here https://caniuse.com/#search=loading',
            sectionFn: () => <Image {...lazyLoadedImage} />,
          },
        ],
      },
    ],
  });
