const defaultImage = {
  src: 'https://placekitten.com/g/600/300',
  srcset:
    'https://placekitten.com/g/600/300 1024w, https://placekitten.com/g/400/300 640w, https://placekitten.com/g/300/300 320w',
  sizes: '(min-width: 36em) 33.3vw, 100vw',
  placeholderSrc: 'https://placekitten.com/g/600/300',
  alt: 'Dummy Image',
};

const v2Image = {
  src: 'https://placekitten.com/g/601/300',
  srcset:
    'https://placekitten.com/g/601/300 1024w, https://placekitten.com/g/401/300 640w, https://placekitten.com/g/301/300 320w',
  sizes: '(min-width: 36em) 33.3vw, 100vw',
  placeholderSrc: 'https://placekitten.com/g/601/300',
  alt: 'Dummy Image',
  loading: 'lazy',
};

const anchor = {
  to: '#',
  className: 'AnchorClass',
  target: '_blank',
};

const defaultConfig = {
  image: { ...defaultImage },
  anchorProps: anchor,
};

const configV2 = {
  ...defaultConfig,
  image: { ...v2Image },
  anchorProps: anchor,
  readMoreContent: 'ReadMore',
};

export { configV2 };
export default defaultConfig;
