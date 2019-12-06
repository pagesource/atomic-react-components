// @flow
import React from 'react';
import { storiesOf } from '@storybook/react';

import { primaryButton } from './Button.mock';
import Button, { ButtonVanilla } from '.';

storiesOf('Atoms/Button', module)
  .addParameters({ jest: ['Button'] })
  .add('Knobs', () => <ButtonVanilla {...primaryButton}>Submit</ButtonVanilla>)
  .add('CTA', () => <Button {...primaryButton}>Submit</Button>);
