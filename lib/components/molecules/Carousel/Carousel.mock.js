import { boolean } from '@storybook/addon-knobs';
import Image from '../../atoms/Image';

const vanillaConfig = {
  title: 'Spotlight',
  slideTransitionTime: 2000,
  slideAnimationTime: 1000,
  dots: boolean('Dots', true),
  controls: boolean('Controls', true),
};

const defaultConfig = {
  ...vanillaConfig,
  dots: true,
  legacy: true,
  controls: false,
  dotsStyle: { variation: 'bullets' },
  navBtnStyle: { variation: 'icon-only' },
};

const responsiveConfig = {
  ...defaultConfig,
  responsive: [
    { breakpoint: '360', settings: { itemsPerSlide: '1' } },
    { breakpoint: '480', settings: { itemsPerSlide: '2' } },
    { breakpoint: '720', settings: { itemsPerSlide: '3' } },
    { breakpoint: '1280', settings: { itemsPerSlide: '4' } },
  ],
};

const centerModeConfig = {
  ...defaultConfig,
};

const thumbnailConfig = {
  ...defaultConfig,
  dotsStyle: { inheritedStyles: `padding: 0; margin: 0 0.5rem` },
  renderSlideThumb: [
    <Image src="/images/dummies/960.png" alt="1280.jpg" />,
    <Image src="/images/dummies/960.png" alt="960.jpg" />,
    <Image src="/images/dummies/960.png" alt="640.jpg" />,
    <Image src="/images/dummies/960.png" alt="320.jpg" />,
  ],
};

export { responsiveConfig, vanillaConfig, centerModeConfig, thumbnailConfig };
export default defaultConfig;
