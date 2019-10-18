import React from 'react';
import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
import defaultConfig from './Breadcrumb.mock';

// Import Styled Component to showcase variations
import Breadcrumb, { BreadcrumbVanilla } from '.';

// $FlowFixMe eslint-disable-next-line extra-rules/no-commented-out-code
storiesOf('Molecules', module)
  .addParameters({ jest: ['Breadcrumb', 'BreadcrumbVanilla'] })
  .addWithChapters('Breadcrumb', {
    chapters: [
      {
        sections: [
          {
            sectionFn: () => (
              <BreadcrumbVanilla {...defaultConfig} className="hide-default-sample" />
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
