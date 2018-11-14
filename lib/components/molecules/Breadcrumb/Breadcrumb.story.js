import React from 'react';
import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
import defaultConfig from './Breadcrumb.mock';

// Import Styled Component to showcase variations
import Breadcrumb, { BreadcrumbVanilla } from '.';

storiesOf('Molecules', module).addWithChapters('Breadcrumb', {
  chapters: [
    {
      sections: [
        {
          sectionFn: () => (
            <BreadcrumbVanilla
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
      title: 'Primary Breadcrumb Variations',
      sections: [
        {
          title: 'Variation Name',
          sectionFn: () => <Breadcrumb {...defaultConfig} />,
        },
      ],
    },
  ],
});
