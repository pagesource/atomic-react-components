// @flow
import React from 'react';
import { storiesOf } from '@storybook/react';

import FieldError from '.';

storiesOf('Atoms', module)
  .addParameters({ jest: ['FieldError'] })
  .add('FieldError', () => <FieldError> Error message Styled </FieldError>);
