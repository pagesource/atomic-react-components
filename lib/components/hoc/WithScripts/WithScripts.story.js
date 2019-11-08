import React from 'react';
import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
import defaultConfig from './WithScripts.mock';

// Import Styled Component to showcase variations
import withScripts from './WithScripts';
import Label from '../../atoms/Label';

const ScriptsLoader = withScripts(Label, defaultConfig);

// $FlowFixMe eslint-disable-next-line extra-rules/no-commented-out-code
storiesOf('HOC', module).addWithChapters('WithScripts', {
  chapters: [
    {
      sections: [
        {
          sectionFn: () => <ScriptsLoader />,
          options: {
            showSource: true,
            allowSourceToggling: true,
            showPropTables: true,
            allowPropTablesToggling: true,
          },
        },
      ],
    },
  ],
});
