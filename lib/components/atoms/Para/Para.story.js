// @flow
import React from 'react';
import { storiesOf } from '@storybook/react';

import Para, { ParaVanilla } from '.';

storiesOf('Atoms/Para', module)
  .addParameters({ jest: ['Para', 'ParaVanilla'] })
  .add('Knobs', () => <ParaVanilla>This is plain text</ParaVanilla>)
  .add('Default', () => (
    <Para elementLocator="my-text">This is plain text with element locator.</Para>
  ));
