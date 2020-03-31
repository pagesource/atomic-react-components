import React from 'react';
import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
import defaultToast from './Toast.mock';
import { ParaVanilla as Para } from '../../atoms/Para';
// Import Styled Component to showcase variations
import Toast, { ToastVanilla } from '.';
import Icon from '../../atoms/Icon';
import { ReactComponent as IconInfo } from '../../../styles/themes/base/icons/info.svg';
import { ReactComponent as IconSuccess } from '../../../styles/themes/base/icons/success.svg';
import { ReactComponent as IconWarn } from '../../../styles/themes/base/icons/warning.svg';
import { ReactComponent as IconError } from '../../../styles/themes/base/icons/error.svg';

storiesOf('Molecules/Toast', module)
  .addParameters({ jest: ['Toast', 'ToastVanilla'] })
  .add('Toast Info', () => (
    <Toast variation="info" {...defaultToast}>
      <Icon title="information icon" fill="#fff">
        <IconInfo />
      </Icon>
      <Para>Wow so easy !</Para>
    </Toast>
  ))
  .add('Toast Success', () => (
    <Toast variation="success" {...defaultToast}>
      <Icon title="success icon" fill="#fff">
        <IconSuccess />
      </Icon>
      <Para>Wow so easy !</Para>
    </Toast>
  ))
  .add('Toast Warning', () => (
    <Toast variation="warning" {...defaultToast}>
      <Icon title="warning icon" fill="#fff">
        <IconWarn />
      </Icon>
      <Para>Wow so easy !</Para>
    </Toast>
  ))
  .add('Toast Error', () => (
    <Toast variation="error" {...defaultToast}>
      <Icon title="error icon" fill="#fff">
        <IconError />
      </Icon>
      <Para>Wow so easy !</Para>
    </Toast>
  ))
  .add('ToastVanilla', () => <ToastVanilla {...defaultToast}>Wow so easy!</ToastVanilla>);
