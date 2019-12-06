import React from 'react';
import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
import defaultConfig from './Toast.mock';

// Import Styled Component to showcase variations
import Toast, { ToastVanilla } from '.';

storiesOf('Molecules/Toast', module).addParameters({ jest: ['Toast', 'ToastVanilla']
})
.add('Knobs', () => (
<ToastVanilla {...defaultConfig} />
))
.add('Toast', () =>
<Toast {...defaultConfig} />);
