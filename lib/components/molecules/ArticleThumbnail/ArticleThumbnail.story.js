import React from 'react';
import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
import defaultConfig, { configV2 } from './ArticleThumbnail.mock';

// Import Styled Component to showcase variations
import ArticleThumbnail from '.';
import Para from '../../atoms/Para';
import Heading from '../../atoms/Heading';

storiesOf('Molecules', module)
  .addParameters({ jest: ['ArticleThumbnail', 'Para', 'Heading'] })
  .add('Article Thumb Knobs', () => (
    <ArticleThumbnail {...defaultConfig}>
      <Heading style={{ color: 'black' }}>Dummy Title</Heading>
    </ArticleThumbnail>
  ))
  .add('Article Thumb', () => (
    <ArticleThumbnail {...defaultConfig}>
      <>
        <Heading>Dummy Title</Heading>
      </>
    </ArticleThumbnail>
  ))
  .add('Article Thumb Primary', () => (
    <ArticleThumbnail {...configV2}>
      <>
        <Heading>Dummy Title</Heading>
        <Para>Dummy Para</Para>
      </>
    </ArticleThumbnail>
  ));
