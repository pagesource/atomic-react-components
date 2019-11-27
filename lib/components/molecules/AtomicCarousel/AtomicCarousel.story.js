import React from 'react';
import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
import defaultConfig from './AtomicCarousel.mock';

// Import Styled Component to showcase variations
import AtomicCarousel, { AtomicCarouselVanilla } from '.';

// TODO: indentation is not working fine in editor. Need to check for .hbs files
// $FlowFixMe eslint-disable-next-line extra-rules/no-commented-out-code
storiesOf('Molecules', module)
  .addParameters({ jest: ['AtomicCarousel', 'AtomicCarouselVanilla'] })
  .add('CTA Knobs', () => (
    <AtomicCarouselVanilla
      {...defaultConfig}
      className={`hide-default-sample ${defaultConfig.className}`}
    >
      <div>1</div>
    </AtomicCarouselVanilla>
  ))
  .add('CTA', () => (
    <AtomicCarousel {...defaultConfig}>
      <h1>Testing 1</h1>
      <h2>Testing 2</h2>
      <h2>Testing 3</h2>
      <h2>Testing 4</h2>
      <h2>Testing 5</h2>
      <h2>Testing 6</h2>
      <h2>Testing 7</h2>
      <h2>Testing 8</h2>
    </AtomicCarousel>
  ));
