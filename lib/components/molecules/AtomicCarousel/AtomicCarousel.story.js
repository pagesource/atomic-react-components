import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, number, text } from '@storybook/addon-knobs';
// import { action } from '@storybook/addon-actions';

import defaultConfig from './AtomicCarousel.mock';
import Image from '../../atoms/Image';
import image1 from './images/1.jpg';
import image2 from './images/2.jpg';
import image3 from './images/3.jpg';
import image4 from './images/4.jpg';

// Import Styled Component to showcase variations
import AtomicCarousel, { AtomicCarouselVanilla } from '.';

storiesOf('Molecules/AtomicCarousel', module)
  .addParameters({ jest: ['AtomicCarousel', 'AtomicCarouselVanilla'] })
  .add('AtomicCarouselVanilla Knobs', () => (
    <AtomicCarouselVanilla
      {...defaultConfig}
      dots={boolean('Dots', true)}
      navigation={boolean('Navigation', true)}
      perSlideFrame={number('No. of slides per frame', 2)}
      prevLabel={text('Previous text', 'Prev')}
      nextLabel={text('Next text', 'Next')}
      heading={text('Heading Text', 'Spotlight')}
      displayHeader={boolean('Display Header', true)}
      slideTransitionTime={number('Transition Time in ms', 1500)}
      autoPlay={boolean('Auto Play', true)}
      playLabel={text('Play Label', 'Play')}
      stopLabel={text('Pause Label', 'Stop')}
    >
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
