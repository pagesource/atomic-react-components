// @flow
import React from 'react';
import { storiesOf } from '@storybook/react';
// Import Vanilla Component to display markup and props
import Modal, { ModalVanilla } from './Modal';

storiesOf('Molecules', module)
  .addParameters({ jest: ['Modal'] })
  .add('Modal Knobs', () => (
    <ModalVanilla isOpen>
      <h2>Hello World</h2>
    </ModalVanilla>
  ))
  .add('Modal', () => (
    <Modal isOpen>
      <h2>Hello World</h2>
    </Modal>
  ));
