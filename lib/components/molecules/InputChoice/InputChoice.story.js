/* eslint-disable no-unused-vars */
// @flow
import React from 'react';
import { storiesOf } from '@storybook/react';

import { checkbox, inputRadio } from './InputChoice.mock';
import InputChoice, { InputChoiceVanilla } from './InputChoice';

storiesOf('Molecules/InputChoice', module)
  .addParameters({ jest: ['InputChoice', 'InputChoiceVanilla'] })
  .add('Knobs', () => <InputChoiceVanilla {...checkbox} />)
  .add('Checkbox', () => <InputChoice {...checkbox} />)
  .add('Radio', () => <InputChoice {...inputRadio} />);
