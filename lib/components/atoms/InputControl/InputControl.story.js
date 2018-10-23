// @flow
import React from 'react';
import { storiesOf } from '@storybook/react';

// Import Styled Component to showcase variations
import InputControl from './index';
import {
  checkedInputControl,
  disabledInputControl,
  checkedDisabledInputControl,
} from './InputControl.mock';

storiesOf('Atoms', module).addWithChapters('InputControl', {
  chapters: [
    {
      sections: [
        {
          sectionFn: () => <InputControl type="radio" />,
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
      title: 'InputControl - Radio button Variations',
      sections: [
        {
          title: 'Default',
          sectionFn: () => <InputControl type="radio" />,
        },
        {
          title: 'Default Checked',
          sectionFn: () => <InputControl type="radio" {...checkedInputControl} />,
        },
        {
          title: 'Disabled',
          sectionFn: () => <InputControl type="radio" {...disabledInputControl} />,
        },
        {
          title: 'checked and disabled',
          sectionFn: () => <InputControl type="radio" {...checkedDisabledInputControl} />,
        },
      ],
    },
    {
      title: 'InputControl - Checkbox button Variations',
      sections: [
        {
          title: 'Default',
          sectionFn: () => <InputControl type="checkbox" />,
        },
        {
          title: 'Default Checked',
          sectionFn: () => <InputControl type="checkbox" {...checkedInputControl} />,
        },
        {
          title: 'Disabled',
          sectionFn: () => <InputControl type="checkbox" {...disabledInputControl} />,
        },
        {
          title: 'checked and disabled',
          sectionFn: () => <InputControl type="checkbox" {...checkedDisabledInputControl} />,
        },
      ],
    },
  ],
});
