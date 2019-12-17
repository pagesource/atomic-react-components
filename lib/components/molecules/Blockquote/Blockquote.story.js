import React from 'react';
import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
import defaultConfig from './Blockquote.mock';

// Import Styled Component to showcase variations
import Blockquote, { BlockquoteVanilla } from '.';

// TODO: indentation is not working fine in editor. Need to check for .hbs files

storiesOf('Molecules/Blockquote', module)
  .addParameters({
    jest: ['Blockquote', 'BlockquoteVanilla'],
  })
  .add('Knobs', () => (
    <BlockquoteVanilla
      {...defaultConfig}
      className={`hide-default-sample ${defaultConfig.className}`}
    />
  ))
  .add('Default', () => <Blockquote {...defaultConfig} />);
