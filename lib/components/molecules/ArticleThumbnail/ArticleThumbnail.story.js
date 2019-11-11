import React from 'react';
import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
import defaultConfig, { configV2 } from './ArticleThumbnail.mock';

// Import Styled Component to showcase variations
import ArticleThumbnail from '.';
import Para from '../../atoms/Para';
import Heading from '../../atoms/Heading';

// $FlowFixMe eslint-disable-next-line extra-rules/no-commented-out-code
storiesOf('Molecules', module)
  .addParameters({ jest: ['ArticleThumbnail', 'Para', 'Heading'] })
  .addWithChapters('ArticleThumbnail', {
    chapters: [
      {
        sections: [
          {
            sectionFn: () => (
              <div style={{ width: '200px' }}>
                <ArticleThumbnail
                  {...defaultConfig}
                  className={`hide-default-sample ${defaultConfig.className}`}
                />
              </div>
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
        title: 'Primary ArticleThumbnail Variations',
        sections: [
          {
            title: 'Variation Name : With whole thumb clickable',
            sectionFn: () => (
              <div style={{ width: '200px' }}>
                <ArticleThumbnail {...defaultConfig}>
                  <Heading style={{ color: 'black' }}>Dummy Title</Heading>
                </ArticleThumbnail>
              </div>
            ),
          },
        ],
      },
      {
        title: 'Primary ArticleThumbnail Variations V2',
        sections: [
          {
            title: 'Variation Name : With Readmore, image clickable',
            sectionFn: () => (
              <div style={{ width: '200px' }}>
                <ArticleThumbnail {...configV2}>
                  <>
                    <Heading>Dummy Title</Heading>
                    <Para>Dummy Para</Para>
                  </>
                </ArticleThumbnail>
              </div>
            ),
          },
        ],
      },
    ],
  });
