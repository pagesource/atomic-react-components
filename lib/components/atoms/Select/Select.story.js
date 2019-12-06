// @flow
import React from 'react';
import { storiesOf } from '@storybook/react';
import { selectElementLocator } from './Select.mock';

// Import Vanilla Component to display markup and props
import Select, { SelectVanilla } from '.';

storiesOf('Atoms/Select', module)
  .addParameters({ jest: ['Select', 'SelectVanilla'] })
  .add('Knobs', () => (
    <SelectVanilla id="userType" name="username" options={['Option 1', 'Option 2']} />
  ))
  .add('Default', () => <Select {...selectElementLocator} />);
