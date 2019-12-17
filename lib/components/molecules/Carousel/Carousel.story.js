import React from 'react';
import { storiesOf } from '@storybook/react';

import defaultConfig, {
  responsiveConfig,
  vanillaConfig,
  centerModeConfig,
  thumbnailConfig,
} from './Carousel.mock';
import Image from '../../atoms/Image';
import Icon from '../../atoms/Icon';

// Import Styled Component to showcase variations
import Carousel, { CarouselVanilla } from '.';

storiesOf('Molecules/Carousel', module)
  .addParameters({ jest: ['Carousel', 'CarouselVanilla'] })
  .add('Carousel Vanilla', () => (
    <CarouselVanilla {...vanillaConfig}>
      <CarouselVanilla.SlideWrapper>
        <CarouselVanilla.Slide>
          <Image src="/images/dummies/1280.png" alt="1.jpg" />
        </CarouselVanilla.Slide>
        <CarouselVanilla.Slide>
          <Image src="/images/dummies/960.png" alt="2.jpg" />
        </CarouselVanilla.Slide>
        <CarouselVanilla.Slide>
          <Image src="/images/dummies/640.png" alt="3.jpg" />
        </CarouselVanilla.Slide>
        <CarouselVanilla.Slide>
          <Image src="/images/dummies/320.png" alt="4.jpg" />
        </CarouselVanilla.Slide>
      </CarouselVanilla.SlideWrapper>
    </CarouselVanilla>
  ))
  .add('Legacy Carousel', () => (
    <Carousel {...defaultConfig}>
      <Carousel.Prev>
        <Icon id="leftArrow" />
      </Carousel.Prev>
      <Carousel.SlideWrapper>
        <Carousel.Slide>
          <Image src="/images/dummies/1280.png" alt="1280 x 1280" />
        </Carousel.Slide>
        <Carousel.Slide>
          <Image src="/images/dummies/960.png" alt="960 x 960" />
        </Carousel.Slide>
        <Carousel.Slide>
          <Image src="/images/dummies/640.png" alt="640 x 640" />
        </Carousel.Slide>
        <Carousel.Slide>
          <Image src="/images/dummies/320.png" alt="320 x 320" />
        </Carousel.Slide>
      </Carousel.SlideWrapper>
      <Carousel.Next>
        <Icon id="rightArrow" />
      </Carousel.Next>
    </Carousel>
  ))
  .add('Responsive Carousel', () => (
    <Carousel {...responsiveConfig} dots={false}>
      <Carousel.Prev>
        <Icon id="leftArrow" />
      </Carousel.Prev>
      <Carousel.SlideWrapper>
        <Carousel.Slide>
          <Image src="/images/dummies/1280.png" alt="1280 x 1280" />
        </Carousel.Slide>
        <Carousel.Slide>
          <Image src="/images/dummies/960.png" alt="960 x 960" />
        </Carousel.Slide>
        <Carousel.Slide>
          <Image src="/images/dummies/640.png" alt="640 x 640" />
        </Carousel.Slide>
        <Carousel.Slide>
          <Image src="/images/dummies/320.png" alt="320 x 320" />
        </Carousel.Slide>
      </Carousel.SlideWrapper>
      <Carousel.Next>
        <Icon id="rightArrow" />
      </Carousel.Next>
      <Carousel.Dots btnStyle="dots" />
    </Carousel>
  ))
  .add('Center Mode Carousel', () => (
    <Carousel {...centerModeConfig} dots={false} centerMode>
      <Carousel.Prev>
        <Icon id="leftArrow" />
      </Carousel.Prev>
      <Carousel.SlideWrapper>
        <Carousel.Slide>
          <Image src="/images/dummies/1280.png" alt="1280 x 1280" />
        </Carousel.Slide>
        <Carousel.Slide>
          <Image src="/images/dummies/960.png" alt="960 x 960" />
        </Carousel.Slide>
        <Carousel.Slide>
          <Image src="/images/dummies/640.png" alt="640 x 640" />
        </Carousel.Slide>
        <Carousel.Slide>
          <Image src="/images/dummies/320.png" alt="320 x 320" />
        </Carousel.Slide>
      </Carousel.SlideWrapper>
      <Carousel.Next>
        <Icon id="rightArrow" />
      </Carousel.Next>
    </Carousel>
  ))
  .add('Thumbnail Carousel', () => (
    <Carousel {...thumbnailConfig}>
      <Carousel.Prev>
        <Icon id="leftArrow" />
      </Carousel.Prev>
      <Carousel.SlideWrapper>
        <Carousel.Slide>
          <Image src="/images/dummies/1280.png" alt="1280 x 1280" />
        </Carousel.Slide>
        <Carousel.Slide>
          <Image src="/images/dummies/960.png" alt="960 x 960" />
        </Carousel.Slide>
        <Carousel.Slide>
          <Image src="/images/dummies/640.png" alt="640 x 640" />
        </Carousel.Slide>
        <Carousel.Slide>
          <Image src="/images/dummies/320.png" alt="320 x 320" />
        </Carousel.Slide>
      </Carousel.SlideWrapper>
      <Carousel.Next>
        <Icon id="rightArrow" />
      </Carousel.Next>
    </Carousel>
  ));
