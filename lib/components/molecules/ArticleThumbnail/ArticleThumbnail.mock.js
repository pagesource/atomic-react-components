const defaultImage = {
  src: '/images/dummies/320.png',
  srcset:
    '/images/dummies/1280.png 1024w, /images/dummies/640.png 640w, /images/dummies/320.png 320w',
  sizes: '(min-width: 36em) 33.3vw, 100vw',
  placeholderSrc: '/images/image-placeholder.png',
  alt: 'Dummy Image',
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
  image: { ...defaultConfig.image, anchorProps: anchor },
  anchorProps: anchor,
  readMoreContent: 'ReadMore',
};

const configV3 = { ...defaultConfig };
configV3.readMore = anchor;
configV3.readMore.children = 'Readmore';
export { configV2, configV3 };
export default defaultConfig;
