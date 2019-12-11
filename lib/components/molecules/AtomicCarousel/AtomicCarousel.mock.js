import playImage from '../../../styles/themes/base/icons/play_sprite.svg';
import pauseImage from '../../../styles/themes/base/icons/pause_sprite.svg';
import nextImage from '../../../styles/themes/base/icons/right-arrow_sprite.svg';
import prevIcon from '../../../styles/themes/base/icons/left-arrow_sprite.svg';

const defaultConfig = {
  dots: true,
  navigation: true,
  perSlideFrame: 1,
  autoPlay: true,
  heading: 'Spotlight',
  headers: { HeadingType: 'h2' },
  playIcon: playImage,
  pauseIcon: pauseImage,
  nextIcon: nextImage,
  prevIcon,
};

export default defaultConfig;
