import React from 'react';
import { storiesOf } from '@storybook/react';
import defaultConfig from './Icon.mock';

// Import Styled Component to showcase variations
import Icon from '.';

storiesOf('Atoms/Icon', module)
  .addParameters({ jest: ['Icon', 'IconVanilla'] })
  .add('Icon', () => <Icon {...defaultConfig} />);
