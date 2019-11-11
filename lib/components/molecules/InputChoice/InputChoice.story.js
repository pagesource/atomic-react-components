// @flow
import React from 'react';
import { storiesOf } from '@storybook/react';
import {
  checkbox,
  defaultCheckedCheckbox,
  disabledCheckbox,
  checkboxWithLabelBeforeInput,
  inputRadio,
  defaultCheckedInputRadio,
  disabledInputRadio,
  inputRadioWithLabelBeforeInput,
} from './InputChoice.mock';
import InputChoice, { InputChoiceVanilla } from './InputChoice';

// $FlowFixMe eslint-disable-next-line extra-rules/no-commented-out-code
storiesOf('Molecules', module)
  .addParameters({ jest: ['InputChoice', 'InputChoiceVanilla'] })
  .addWithChapters('InputChoice', {
    chapters: [
      {
        sections: [
          {
            sectionFn: () => (
              <InputChoiceVanilla
                {...checkbox}
                id="test"
                name="test"
                className="hide-default-sample"
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
        title: 'Checkbox Variations',
        sections: [
          {
            title: 'Default',
            sectionFn: () => <InputChoice {...checkbox} />,
          },
          {
            title: 'Default Checked',
            sectionFn: () => <InputChoice {...defaultCheckedCheckbox} />,
          },
          {
            title: 'Disabled',
            sectionFn: () => <InputChoice {...disabledCheckbox} />,
          },
          {
            title: 'Checkbox with showLabelBeforeInput prop',
            sectionFn: () => <InputChoice {...checkboxWithLabelBeforeInput} />,
          },
        ],
      },
      {
        title: 'InputRadio Variations',
        sections: [
          {
            title: 'Default',
            sectionFn: () => <InputChoice {...inputRadio} />,
          },
          {
            title: 'Default Checked',
            sectionFn: () => <InputChoice {...defaultCheckedInputRadio} />,
          },
          {
            title: 'Disabled',
            sectionFn: () => <InputChoice {...disabledInputRadio} />,
          },
          {
            title: 'Checkbox with showLabelBeforeInput prop',
            sectionFn: () => <InputChoice {...inputRadioWithLabelBeforeInput} />,
          },
        ],
      },
    ],
  });
