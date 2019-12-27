import React from 'react';
import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
import defaultConfig from './Pagination.mock';

// Import Styled Component to showcase variations
import Pagination, { PaginationVanilla } from '.';

storiesOf('Atoms', module).addWithChapters('Pagination', {
  chapters: [
    {
      sections: [
        {
          sectionFn: () => (
            <PaginationVanilla
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
      title: 'Primary Pagination Variations',
      sections: [
        {
          title: 'Variation Name',
          sectionFn: () => <Pagination {...defaultConfig} />,
        },
      ],
    },
  ],
});
