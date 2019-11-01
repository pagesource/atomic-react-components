import { ButtonVanilla } from '../../atoms/Button';

const defaultImage = {
  src: 'https://placekitten.com/g/600/300',
  srcset:
    'https://placekitten.com/g/600/300 1024w, https://placekitten.com/g/400/300 640w, https://placekitten.com/g/300/300 320w',
  sizes: '(min-width: 36em) 33.3vw, 100vw',
  placeholderSrc: 'https://placekitten.com/g/600/300',
  alt: 'Dummy Image',
};

const defaultConfig = {
  className: 'example',
  textContent: `This is a overview textThis is a overview text This is a overview text This is a overview text`,
  trigger: <ButtonVanilla>Click to Open</ButtonVanilla>,
  image: defaultImage,
  maxWidth: 200,
  maxHeight: 200,
  inheritedStyles: {},
};

const noImageConfig = {
  className: 'example',
  textContent: `This is a overview textThis is a overview text This is a overview text This is a overview text`,
  trigger: <ButtonVanilla>Click to Open</ButtonVanilla>,
  maxWidth: 200,
  maxHeight: 200,
  inheritedStyles: {},
};

export { defaultConfig, noImageConfig };
