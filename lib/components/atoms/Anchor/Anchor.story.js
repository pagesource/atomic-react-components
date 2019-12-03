// @flow
import React from 'react';
import { storiesOf } from '@storybook/react';

import { defaultAnchor } from './Anchor.mock';
import Anchor, { AnchorVanilla } from '.';

storiesOf('Atoms', module)
  .addParameters({ jest: ['Anchor'] })
  .add('Anchor Knobs', () => (
    <AnchorVanilla {...defaultAnchor} className={defaultAnchor.className}>
      Click Me
    </AnchorVanilla>
  ))
  .add('Anchor', () => <Anchor {...defaultAnchor}>Click Me</Anchor>);
