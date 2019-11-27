// @flow
import React from 'react';
import { storiesOf } from '@storybook/react';

import { defaultAnchor } from './Anchor.mock';
import Anchor from '.';

storiesOf('Atoms', module)
  .addParameters({ jest: ['Anchor'] })
  .add('Anchor', () => <Anchor {...defaultAnchor}>Click Here</Anchor>);
