import Image from '../../atoms/Image/Image';

const defaultImage = {
  src: '/images/bg.jpg',
  placeholderSrc: '/images/image-placeholder.png',
  alt: 'Dummy Image',
};

const defaultHeroBanner = {
  renderHeroImage: () => <Image {...defaultImage} />,
  heroImageWidth: '100%',
};

const halfImageHeroBanner = {
  renderHeroImage: () => <Image {...defaultImage} />,
  heroImageWidth: '50%',
  childrenContainerWidth: '50%',
};

const renderExternalContent = {
  renderExternalContent: () => {},
};

export { defaultHeroBanner, halfImageHeroBanner, renderExternalContent };
