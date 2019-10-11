const defaultImage = {
  src: '/images/dummies/320.png',
  srcset:
    '/images/dummies/1280.png 1024w, /images/dummies/640.png 640w, /images/dummies/320.png 320w',
  sizes: '(min-width: 36em) 33.3vw, 100vw',
  placeholderSrc: '/images/image-placeholder.png',
  alt: 'Dummy Image',
};

export const customImageLocator = {
  src: '/images/dummies/320.png',
  srcset:
    '/images/dummies/1280.png 1024w, /images/dummies/640.png 640w, /images/dummies/320.png 320w',
  sizes: '(min-width: 36em) 33.3vw, 100vw',
  placeholderSrc: '/images/image-placeholder.png',
  alt: 'Dummy Locator Image',
};

export const lazyLoadedImage = {
  ...defaultImage,
  src: 'https://dummyimage.com/600x400/000/fff',
  srcset: '',
  loading: 'lazy',
};

export default defaultImage;
