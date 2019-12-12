import React from 'react';
import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
import defaultToast from './Toast.mock';
import { ParaVanilla as Para } from '../../atoms/Para';
// Import Styled Component to showcase variations
import Toast, { ToastVanilla } from '.';

storiesOf('Molecules/Toast', module)
  .addParameters({ jest: ['Toast', 'ToastVanilla'] })
  .add('Toast Info', () => (
    <Toast variation="info" {...defaultToast}>
      <img src="/images/info.svg" alt="Information icon" />
      <Para>Wow so easy !</Para>
    </Toast>
  ))
  .add('Toast Success', () => (
    <Toast variation="success" {...defaultToast}>
      <img src="/images/success.svg" alt="Success icon" />
      <Para>Wow so easy !</Para>
    </Toast>
  ))
  .add('Toast Warning', () => (
    <Toast variation="warning" {...defaultToast}>
      <img src="/images/warning.svg" alt="Warning icon" />
      <Para>Wow so easy !</Para>
    </Toast>
  ))
  .add('Toast Error', () => (
    <Toast variation="error" {...defaultToast}>
      <img src="/images/error.svg" alt="Error icon" />
      <Para>Wow so easy !</Para>
    </Toast>
  ))
  .add('ToastVanilla', () => <ToastVanilla {...defaultToast}>Wow so easy!</ToastVanilla>);
