// @flow
import React from 'react';
import { storiesOf } from '@storybook/react';
import {
  checkbox,
  defaultCheckedCheckbox,
  disabledCheckbox,
  checkboxWithLabelBeforeInput,
} from './Checkbox.mock';
import Checkbox, { CheckboxVanilla } from './Checkbox';

storiesOf('Atoms', module).addWithChapters('Checkbox', {
  chapters: [
    {
      sections: [
        {
          sectionFn: () => <CheckboxVanilla {...checkbox} id="test" name="test" />,
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
      title: 'Checkbox Variations',
      sections: [
        {
          title: 'Default',
          sectionFn: () => <Checkbox {...checkbox} />,
        },
        {
          title: 'Default Checked',
          sectionFn: () => <Checkbox {...defaultCheckedCheckbox} />,
        },
        {
          title: 'Disabled',
          sectionFn: () => <Checkbox {...disabledCheckbox} />,
        },
        {
          title: 'Checkbox with showLabelBeforeInput prop',
          sectionFn: () => <Checkbox {...checkboxWithLabelBeforeInput} />,
        },
      ],
    },
  ],
});
