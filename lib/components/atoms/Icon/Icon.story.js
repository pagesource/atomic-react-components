import React from 'react';
import { storiesOf } from '@storybook/react';
import { ReactComponent as IconClose } from '../../../static/images/close.svg';
// Import Styled Component to showcase variations
import Icon from './Icon';

storiesOf('Atoms/Icon', module)
  .addParameters({ jest: ['Icon', 'IconVanilla'] })
  .add('Knobs', () => (
    <Icon title="close icon" width="30px" height="30px">
      <IconClose />
    </Icon>
  ));
