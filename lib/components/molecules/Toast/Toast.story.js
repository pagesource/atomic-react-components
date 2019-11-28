import React from 'react';
import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
import defaultConfig from './Toast.mock';

// Import Styled Component to showcase variations
import Toast, { ToastVanilla } from '.';

// TODO: indentation is not working fine in editor. Need to check for .hbs files
// $FlowFixMe eslint-disable-next-line extra-rules/no-commented-out-code
storiesOf('Molecules', module)
  .addParameters({ jest: ['Toast', 'ToastVanilla'] })
  .add('Toast', () => (
    <Toast isVisible={true} variation="">
      <img src="/images/warning.png" alt="message icon" width="25px" height="25px" />
      Wow so easy!
    </Toast>
  ))
  .add('Toast Info', () => (
    <Toast isVisible={true} variation="info">
      <img src="/images/warning.png" alt="message icon" width="25px" height="25px" />
      Wow so easy!
    </Toast>
  ))
  .add('CTA Knobs', () => (
    <ToastVanilla {...defaultConfig} className={`hide-default-sample ${defaultConfig.className}`} />
  ));
