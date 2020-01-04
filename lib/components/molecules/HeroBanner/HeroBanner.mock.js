import Image from '../../atoms/Image/Image';

const defaultImage = {
  src: '/images/bg.jpg',
  placeholderSrc: '/images/image-placeholder.png',
  alt: 'Dummy Image',
};

const stackedHeroBanner = {
  renderMediaContent: () => <Image {...defaultImage} />,
};

const sideBySideHeroBanner = {
  renderMediaContent: () => <Image {...defaultImage} />,
  variation: 'side-by-side',
};

const positionedExternalContent = {
  renderMediaContent: () => <Image {...defaultImage} />,
  variation: 'positioned',
};

export { stackedHeroBanner, sideBySideHeroBanner, positionedExternalContent };
