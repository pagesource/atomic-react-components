import React from 'react';
import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
import defaultConfig from './Carousel.mock';
import Image from '../../atoms/Image';
import image1 from './images/1.jpg';
import image2 from './images/2.jpg';
import image3 from './images/3.jpg';
import image4 from './images/4.jpg';

// Import Styled Component to showcase variations
import Carousel, { CarouselVanilla } from '.';

storiesOf('Molecules/Carousel', module)
  .addParameters({ jest: ['Carousel', 'CarouselVanilla'] })
  .add('Carousel Vanilla', () => (
    <CarouselVanilla {...defaultConfig}>
      <CarouselVanilla.SlideWrapper>
        <CarouselVanilla.Slide>
          <Image src={image1} alt="1.jpg" />
        </CarouselVanilla.Slide>
        <CarouselVanilla.Slide>
          <Image src={image2} alt="2.jpg" />
        </CarouselVanilla.Slide>
        <CarouselVanilla.Slide>
          <Image src={image3} alt="3.jpg" />
        </CarouselVanilla.Slide>
        <CarouselVanilla.Slide>
          <Image src={image4} alt="4.jpg" />
        </CarouselVanilla.Slide>
      </CarouselVanilla.SlideWrapper>
      <CarouselVanilla.Dots />
    </CarouselVanilla>
  ))
  .add('Carousel', () => (
    <Carousel {...defaultConfig}>
      <Carousel.SlideWrapper>
        <Carousel.Slide>
          <Image src={image1} alt="1.jpg" />
        </Carousel.Slide>
        <Carousel.Slide>
          <Image src={image2} alt="2.jpg" />
        </Carousel.Slide>
        <Carousel.Slide>
          <Image src={image3} alt="3.jpg" />
        </Carousel.Slide>
        <Carousel.Slide>
          <Image src={image4} alt="4.jpg" />
        </Carousel.Slide>
      </Carousel.SlideWrapper>
      <Carousel.Dots />
      <Carousel.AnimationKey />
      <Carousel.Next>Next Button</Carousel.Next>
    </Carousel>
  ));
