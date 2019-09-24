import React from 'react';
import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
import defaultConfig, { configV2, configV3 } from './ArticleThumbnail.mock';

// Import Styled Component to showcase variations
import ArticleThumbnail, { ArticleThumbnailVanilla } from '.';
import Para from '../../atoms/Para';
import Heading from '../../atoms/Heading';

// $FlowFixMe eslint-disable-next-line extra-rules/no-commented-out-code
storiesOf('Molecules', module).addWithChapters('ArticleThumbnail', {
  chapters: [
    {
      sections: [
        {
          sectionFn: () => (
            <ArticleThumbnailVanilla
              {...defaultConfig}
              className={`hide-default-sample ${defaultConfig.className}`}
            />
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
          sectionFn: () => <ArticleThumbnail {...defaultConfig} />,
        },
      ],
    },
    {
      title: 'Primary ArticleThumbnail Variations V2',
      sections: [
        {
          title: 'Variation Name : With Readmore, image clickable',
          sectionFn: () => (
            <ArticleThumbnail {...configV2}>
              <React.Fragment>
                <Heading>Dummy Title</Heading>
                <Para>Dummy Para</Para>
              </React.Fragment>
            </ArticleThumbnail>
          ),
        },
      ],
    },
  ],
});
