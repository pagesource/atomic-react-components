// @flow
import React from 'react';
import { storiesOf } from '@storybook/react';
import { textInputElementLocator, fileInput } from './Input.mock';

// Import Vanilla Component to display markup and props
import Input, { InputVanilla } from '.';

storiesOf('Atoms/Input', module)
  .addParameters({ jest: ['Input'] })
  .add('Knobs', () => <InputVanilla id="username" label="User Name" type="text" name="username" />)
  .add('File Input', () => <Input {...fileInput} />)
  .add('Input', () => <Input {...textInputElementLocator} />);
