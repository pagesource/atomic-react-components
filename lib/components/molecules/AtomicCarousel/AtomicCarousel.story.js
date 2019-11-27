import React from 'react';
import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
import defaultConfig from './AtomicCarousel.mock';
import Image from '../../atoms/Image';
import image1 from './images/1.jpg';
import image2 from './images/2.jpg';
import image3 from './images/3.jpg';
import image4 from './images/4.jpg';

// Import Styled Component to showcase variations
import AtomicCarousel, { AtomicCarouselVanilla } from '.';

storiesOf('Molecules', module)
  .addParameters({ jest: ['AtomicCarousel', 'AtomicCarouselVanilla'] })
  .add('AtomicCarouselVanilla Knobs', () => (
    <AtomicCarouselVanilla {...defaultConfig} playIcon={image4}>
      <Image src={image1} alt="1.jpg" />
      <Image src={image2} alt="2.jpg" />
      <Image src={image3} alt="3.jpg" />
      <Image src={image4} alt="4.jpg" />
    </AtomicCarouselVanilla>
  ))
  .add('AtomicCarousel', () => (
    <AtomicCarousel {...defaultConfig}>
      <Image src={image1} alt="1.jpg" />
      <Image src={image2} alt="2.jpg" />
      <Image src={image3} alt="3.jpg" />
      <Image src={image4} alt="4.jpg" />
    </AtomicCarousel>
  ));
