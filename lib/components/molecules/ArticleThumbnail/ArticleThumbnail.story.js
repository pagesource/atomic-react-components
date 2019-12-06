import React from 'react';
import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
import defaultConfig from './ArticleThumbnail.mock';

// Import Styled Component to showcase variations
import ArticleThumbnail from '.';
import Para from '../../atoms/Para';
import Heading from '../../atoms/Heading';

storiesOf('Molecules/ArticleThumb', module)
  .addParameters({ jest: ['ArticleThumbnail', 'Para', 'Heading'] })
  .add('Knobs', () => (
    <ArticleThumbnail {...defaultConfig}>
      <Heading style={{ color: 'black' }}>Dummy Title</Heading>
    </ArticleThumbnail>
  ))
  .add('Default', () => (
    <ArticleThumbnail {...defaultConfig}>
      <>
        <Heading>Dummy Title</Heading>
        <Para>Dummy Para</Para>
      </>
    </ArticleThumbnail>
  ));
