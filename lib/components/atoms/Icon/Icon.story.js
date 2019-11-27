import React from 'react';
import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
import defaultConfig from './Icon.mock';

// Import Styled Component to showcase variations
import Icon, { IconVanilla } from '.';

storiesOf('Atoms/Icon', module)
  .addParameters({ jest: ['Icon', 'IconVanilla'] })
  .add('Knobs', () => <IconVanilla {...defaultConfig} />)
  .add('Icon', () => <Icon {...defaultConfig} />);
