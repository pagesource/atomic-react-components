import React from 'react';
import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
import {
  stackedHeroBanner,
  sideBySideHeroBanner,
  positionedExternalContent,
} from './HeroBanner.mock';
import Button from '../../atoms/Button/Button';
import primaryButton from '../../atoms/Button/Button.mock';
import Para from '../../atoms/Para/Para';

// Import Styled Component to showcase variations
import HeroBanner from '.';

storiesOf('Molecules/HeroBanner', module)
  .addParameters({ jest: ['HeroBanner', 'HeroBannerVanilla'] })
  .add('HeroBanner', () => (
    <HeroBanner {...stackedHeroBanner}>
      <Para>Content will be displayed here in the banner</Para>
    </HeroBanner>
  ))
  .add('Stacked', () => (
    <HeroBanner {...stackedHeroBanner}>
      <Para>Content will be displayed here in the banner</Para>
      <Button {...primaryButton}>CTA</Button>
    </HeroBanner>
  ))
  .add('Side By Side', () => (
    <HeroBanner {...sideBySideHeroBanner}>
      <Para>Content will be displayed here in the banner</Para>
      <Button {...primaryButton}>CTA</Button>
    </HeroBanner>
  ))
  .add('Positioned Content', () => (
    <HeroBanner {...positionedExternalContent}>
      <Para>Content will be displayed here in the banner</Para>
      <Button {...primaryButton}>CTA</Button>
    </HeroBanner>
  ));
