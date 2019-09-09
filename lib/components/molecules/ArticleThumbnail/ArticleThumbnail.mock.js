const defaultImage = {
  src: '/images/dummies/320.png',
  srcset:
    '/images/dummies/1280.png 1024w, /images/dummies/640.png 640w, /images/dummies/320.png 320w',
  sizes: '(min-width: 36em) 33.3vw, 100vw',
  placeholderSrc: '/images/image-placeholder.png',
  alt: 'Dummy Image',
};

const defaultConfig = {
  image: { ...defaultImage },
  title: 'Dummy title',
  variation: 'v1',
  url: 'http://dummyarticle.com',
  target: '_blank',
  readMoreText: 'Read More',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dictum quis ipsum sed volutpat. Duis suscipit odio ac lacus efficitur, sit amet tempor lectus imperdiet. Nunc dignissim nisi gravida mi malesuada, at aliquet arcu dapibus. Aenean efficitur egestas turpis eget semper. Nulla magna orci, fringilla in varius vitae, congue nec nisl. In vitae efficitur odio, sit amet aliquet enim. Sed consectetur leo quis orci porta dapibus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Praesent vel risus vel ligula venenatis luctus.',
};

export const configV2 = {
  ...defaultConfig,
  variation: 'v2',
};

export const configV3 = {
  ...defaultConfig,
  variation: 'v3',
};

export default defaultConfig;
