// @flow
import React from 'react';
import { storiesOf } from '@storybook/react';
import fileInput from './FileInput.mock';

// Import Vanilla Component to display markup and props
import { FileInput } from '.';

// $FlowFixMe eslint-disable-next-line extra-rules/no-commented-out-code
storiesOf('Atoms', module)
  .addParameters({ jest: ['FileInput'] })
  .add('File Input', () => <FileInput {...fileInput} />);
