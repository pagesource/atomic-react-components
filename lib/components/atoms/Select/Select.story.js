// @flow
import React from 'react';
import { storiesOf } from '@storybook/react';
import { selectDefault } from './Select.mock';

// Import Vanilla Component to display markup and props
import Select, { SelectVanilla } from '.';

// $FlowFixMe eslint-disable-next-line extra-rules/no-commented-out-code
storiesOf('Atoms', module)
  .addParameters({ jest: ['Select', 'SelectVanilla'] })
  .add('Select Knobs', () => (
    <SelectVanilla id="userType" name="username" options={['Option 1', 'Option 2']} />
  ))
  .add('Select', () => <Select {...selectDefault} />);

// eslint-disable-next-line prettier/prettier
/* .addWithChapters('Select', {
    chapters: [
      {
        sections: [
          {
            sectionFn: () => (
              <SelectVanilla id="userType" name="username" options={['Option 1', 'Option 2']} />
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
        title: 'Select Input',
        sections: [
          {
            title: 'Default',
            sectionFn: () => <Select {...selectDefault} />,
          },
          {
            title: 'Disabled',
            sectionFn: () => <Select {...selectDisabled} />,
          },
          {
            title: 'With custom element locator',
            sectionFn: () => <Select {...selectElementLocator} />,
          },
        ],
      },
    ],
  });
 */
