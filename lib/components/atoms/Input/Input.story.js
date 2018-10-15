// @flow
import React from 'react';
import { storiesOf } from '@storybook/react';
import {
  textInput,
  textInputDisabled,
} from './Input.mock';

// Import Vanilla Component to display markup and props
import Input, { InputVanilla } from './Input';


storiesOf('Atoms', module).addWithChapters('Input', {
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
          sectionFn: () => <Input {...textInput} />,
        },
        {
          title: 'Disabled',
          sectionFn: () => <Input {...textInputDisabled} />,
        },
      ],
    },
  ],
});
