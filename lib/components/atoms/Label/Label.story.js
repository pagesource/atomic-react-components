// @flow
import React from 'react';
import { storiesOf } from '@storybook/react';

// Import Vanilla Component to display markup and props
import Label from './Label';
import Input from '../Input';

storiesOf('Atoms/Label', module)
  .addParameters({ jest: ['Label', 'Input'] })
  .add('Label', () => (
    <>
      <Label htmlFor="userid">User Name </Label>
      <Input id="userid" name="userid" />
    </>
  ));
