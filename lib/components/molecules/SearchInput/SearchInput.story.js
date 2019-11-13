import React from 'react';
import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
import defaultConfig, { stylesConfig } from './SearchInput.mock';

// Import Styled Component to showcase variations
import SearchInput, { SearchInputVanilla } from '.';

// $FlowFixMe eslint-disable-next-line extra-rules/no-commented-out-code
storiesOf('Molecules', module).addWithChapters('SearchInput', {
  chapters: [
    {
      sections: [
        {
          sectionFn: () => (
            <SearchInputVanilla
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
      title: 'Primary SearchInput Variations',
      sections: [
        {
          title: 'Default View',
          sectionFn: () => <SearchInput {...defaultConfig} />,
        },
      ],
    },
    {
      title: 'SearchInput with Custom Styles',
      sections: [
        {
          title: 'Input with Custom Styles',
          sectionFn: () => <SearchInput {...stylesConfig} />,
        },
      ],
    },
  ],
});
