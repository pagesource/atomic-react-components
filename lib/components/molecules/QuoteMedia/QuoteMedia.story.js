import React from 'react';
import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
import defaultConfig from './QuoteMedia.mock';
import Image from '../../atoms/Image/Image';
// Import Styled Component to showcase variations
import QuoteMedia, { QuoteMediaVanilla } from '.';

// TODO: indentation is not working fine in editor. Need to check for .hbs files

storiesOf('Molecules/QuoteMedia', module)
  .addParameters({
    jest: ['QuoteMedia', 'QuoteMediaVanilla'],
  })
  .add('Knobs', () => (
    <QuoteMediaVanilla
      {...defaultConfig}
      className={`hide-default-sample ${defaultConfig.className}`}
    />
  ))
  .add('Default', () => (
    <QuoteMedia {...defaultConfig}>
      <Image />
    </QuoteMedia>
  ));
