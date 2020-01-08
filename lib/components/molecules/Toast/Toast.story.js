import React from 'react';
import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
import defaultToast from './Toast.mock';
import { ParaVanilla as Para } from '../../atoms/Para';
// Import Styled Component to showcase variations
import Toast, { ToastVanilla } from '.';
import Icon from '../../atoms/Icon';

storiesOf('Molecules/Toast', module)
  .addParameters({ jest: ['Toast', 'ToastVanilla'] })
  .add('Toast Info', () => (
    <Toast variation="info" {...defaultToast}>
      <Icon id="info" title="information icon" />
      <Para>Wow so easy !</Para>
    </Toast>
  ))
  .add('Toast Success', () => (
    <Toast variation="success" {...defaultToast}>
      <Icon id="success" title="success icon" />
      <Para>Wow so easy !</Para>
    </Toast>
  ))
  .add('Toast Warning', () => (
    <Toast variation="warning" {...defaultToast}>
      <Icon id="warning" title="warning icon" />
      <Para>Wow so easy !</Para>
    </Toast>
  ))
  .add('Toast Error', () => (
    <Toast variation="error" {...defaultToast}>
      <Icon id="error" title="error icon" />
      <Para>Wow so easy !</Para>
    </Toast>
  ))
  .add('ToastVanilla', () => <ToastVanilla {...defaultToast}>Wow so easy!</ToastVanilla>);
