/* eslint-disable no-unused-vars */
// @flow
import React from 'react';
import { storiesOf } from '@storybook/react';
import { checkbox, inputRadio } from './InputChoice.mock';
import InputChoice, { InputChoiceVanilla } from './InputChoice';

storiesOf('Molecules', module)
  .addParameters({ jest: ['InputChoice', 'InputChoiceVanilla'] })
  .add('InputChoice Knobs', () => <InputChoiceVanilla {...checkbox} />)
  .add('InputChoice Checkbox', () => <InputChoice {...checkbox} />)
  .add('InputChoice Radio', () => <InputChoice {...inputRadio} />);
