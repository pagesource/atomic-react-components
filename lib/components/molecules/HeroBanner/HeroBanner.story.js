import React from 'react';
import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
import { defaultHeroBanner, halfImageHeroBanner, renderHeroCarousel } from './HeroBanner.mock';
import Button from '../../atoms/Button/Button';
import primaryButton from '../../atoms/Button/Button.mock';
import Para from '../../atoms/Para/Para';

// Import Styled Component to showcase variations
import HeroBanner from '.';

storiesOf('Molecules/HeroBanner', module)
  .addParameters({ jest: ['HeroBanner', 'HeroBannerVanilla'] })
  .add('HeroBanner', () => <HeroBanner {...defaultHeroBanner} />)
  .add('HeroBannerWithCTAText', () => (
    <HeroBanner {...defaultHeroBanner}>
      <Para>Content will be displayed here in the banner</Para>
      <Button {...primaryButton}>CTA</Button>
    </HeroBanner>
  ))

  .add('HeroBannerHalf', () => (
    <HeroBanner {...halfImageHeroBanner}>
      <Para>Content will be displayed here in the banner</Para>
      <Button {...primaryButton}>CTA</Button>
    </HeroBanner>
  ))
  .add('HeroCarousel', () => <HeroBanner {...renderHeroCarousel} />);
