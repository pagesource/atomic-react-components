/* eslint-disable no-unused-vars */
import React from 'react';
import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
import List from '../List';
import { defaultVisiblePopover } from './Popover.mock';

// Import Styled Component to showcase variations
import Popover, { PopoverVanilla } from '.';

storiesOf('Molecules', module)
  .addParameters({ jest: ['Popover'] })
  .add('Popover Knobs', () => (
    <PopoverVanilla {...defaultVisiblePopover}>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
      labore et dolore magna aliqua.
    </PopoverVanilla>
  ))
  .add('Popover', () => (
    <Popover {...defaultVisiblePopover}>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
      labore et dolore magna aliqua.
    </Popover>
  ));
