import React from 'react';
import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
import defaultConfig, { configV2, configV3 } from './ArticleThumbnail.mock';

// Import Styled Component to showcase variations
import ArticleThumbnail, { ArticleThumbnailVanilla } from '.';

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
          title: 'Variation Name : With no clickable',
          sectionFn: () => <ArticleThumbnail {...defaultConfig} />,
        },
      ],
    },
    {
      title: 'Primary ArticleThumbnail Variations V2',
      sections: [
        {
          title: 'Variation Name : With image and title clickable',
          sectionFn: () => <ArticleThumbnail {...configV2} />,
        },
      ],
    },
    {
      title: 'Primary ArticleThumbnail Variations V3',
      sections: [
        {
          title: 'Variation Name : Readmore',
          sectionFn: () => <ArticleThumbnail {...configV3} />,
        },
      ],
    },
  ],
});
