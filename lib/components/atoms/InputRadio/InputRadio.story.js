// @flow
import React from 'react';
import { storiesOf } from '@storybook/react';
import {
  inputRadio,
  defaultCheckedInputRadio,
  disabledInputRadio,
  inputRadioWithLabelBeforeInput,
} from './InputRadio.mock';
import InputRadio, { InputRadioVanilla } from './InputRadio';

storiesOf('Atoms', module).addWithChapters('InputRadio', {
  chapters: [
    {
      sections: [
        {
          sectionFn: () => <InputRadioVanilla {...inputRadio} id="test" name="test" />,
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
      title: 'InputRadio Variations',
      sections: [
        {
          title: 'Default',
          sectionFn: () => <InputRadio {...inputRadio} />,
        },
        {
          title: 'Default Checked',
          sectionFn: () => <InputRadio {...defaultCheckedInputRadio} />,
        },
        {
          title: 'Disabled',
          sectionFn: () => <InputRadio {...disabledInputRadio} />,
        },
        {
          title: 'Checkbox with showLabelBeforeInput prop',
          sectionFn: () => <InputRadio {...inputRadioWithLabelBeforeInput} />,
        },
      ],
    },
  ],
});
