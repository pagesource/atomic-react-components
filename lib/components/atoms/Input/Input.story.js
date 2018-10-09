// @flow
import React from 'react';
import { storiesOf } from '@storybook/react';
import {
  textInput,
  textInputDisabled,
} from './Input.mock';

// Import Vanilla Component to display markup and props
import { InputVanilla } from './Input';
// Import Styled Component to showcase variations

storiesOf('Molecules', module).addWithChapters('Input', {
  chapters: [
    {
      sections: [
        {
          sectionFn: () => (
            <InputVanilla id="username" label="User Name" type="text" name="username" />
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
      title: 'Text Input',
      sections: [
        {
          title: 'Default',
          sectionFn: () => <InputVanilla {...textInput} />,
        },
        {
          title: 'Disabled',
          sectionFn: () => <InputVanilla {...textInputDisabled} />,
        },
      ],
    },
  ],
});
