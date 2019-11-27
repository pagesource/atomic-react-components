// @flow
import React from 'react';
import { storiesOf } from '@storybook/react';
import { primaryButton } from './Button.mock';
import Button, { ButtonVanilla } from '.';

// $FlowFixMe eslint-disable-next-line extra-rules/no-commented-out-code
storiesOf('Atoms', module)
  .addParameters({ jest: ['Button'] })
  .add('CTA Knobs', () => (
    <ButtonVanilla {...primaryButton} className={primaryButton.className}>
      Submit
    </ButtonVanilla>
  ))
  .add('CTA', () => <Button {...primaryButton}>Submit</Button>);
