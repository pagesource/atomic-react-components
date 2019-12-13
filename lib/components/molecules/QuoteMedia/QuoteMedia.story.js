import React from 'react';
import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
import Image from '../../atoms/Image/Image';
// Import Styled Component to showcase variations
import QuoteMedia, { QuoteMediaVanilla } from '.';
import defaultImage from '../../atoms/Image/Image.mock';
import { defaultQuoteMedia, stackedQuoteMedia } from './QuoteMedia.mock';

storiesOf('Molecules/QuoteMedia', module)
  .addParameters({
    jest: ['QuoteMedia', 'QuoteMediaVanilla'],
  })
  .add('Knobs', () => <QuoteMediaVanilla {...defaultQuoteMedia} />)
  .add('Column', () => (
    <QuoteMedia {...defaultQuoteMedia}>
      <Image {...defaultImage} />
    </QuoteMedia>
  ))
  .add('Stacked', () => (
    <QuoteMedia {...stackedQuoteMedia}>
      <Image {...defaultImage} />
    </QuoteMedia>
  ));
