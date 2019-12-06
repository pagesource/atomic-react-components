// @flow
import React from 'react';
import { storiesOf } from '@storybook/react';

import { defaultAnchor } from './Anchor.mock';
import Anchor, { AnchorVanilla } from '.';

storiesOf('Atoms/Anchor', module)
  .addParameters({ jest: ['Anchor'] })
  .add('Knobs', () => <AnchorVanilla {...defaultAnchor}>Click Me</AnchorVanilla>)
  .add('Link', () => <Anchor {...defaultAnchor}>Click Me</Anchor>);
