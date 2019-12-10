import React from 'react';
import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
import defaultToast from './Toast.mock';

// Import Styled Component to showcase variations
import Toast, { ToastVanilla } from '.';

storiesOf('Molecules/Toast', module)
  .addParameters({ jest: ['Toast', 'ToastVanilla'] })
  .add('Toast Info', () => (
    <Toast variation="info" {...defaultToast} placement="bottom-right">
      <img src="/images/info.svg" alt="message icon" width="40px" height="40px" />
      Wow so easy!
    </Toast>
  ))
  .add('Toast Success', () => (
    <Toast variation="success" {...defaultToast} placement="top-left">
      <img src="/images/success.svg" alt="message icon" width="30px" height="30px" />
      Wow so easy!
    </Toast>
  ))
  .add('Toast Warning', () => (
    <Toast variation="warning" {...defaultToast} placement="right-center">
      <img src="/images/warning.svg" alt="message icon" width="30px" height="30px" />
      Wow so easy!
    </Toast>
  ))
  .add('Toast Error', () => (
    <Toast variation="error" {...defaultToast} placement="center-center">
      <img src="/images/error.svg" alt="message icon" width="30px" height="30px" />
      Wow so easy!
    </Toast>
  ))
  .add('Toast Default', () => (
    <Toast variation="default" {...defaultToast} placement="top-right">
      <img src="/images/cursor.svg" alt="message icon" width="40px" height="40px" />
      Wow so easy!
    </Toast>
  ))
  .add('ToastVanilla', () => <ToastVanilla {...defaultToast}>Wow so easy!</ToastVanilla>);
