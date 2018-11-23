const defaultConfig = {
  totalSlides: 5,
};

const configWithDefaultIndex = {
  totalSlides: 5,
  currentSlideIndex: 2,
  onDotClick: index => {
    console.log('current index:', index);
  },
};

export { configWithDefaultIndex };
export default defaultConfig;
