// @flow
/**
 * Carousel
 */
import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import classnames from 'classnames';

import stylesCarousel from './Carousel.style';
import { Props } from './types';
import { ListVanilla } from '../List';
import Button from '../../atoms/Button';
import useInterval from './useInterval.hook';

const CarouselContext = React.createContext([]);

/**
 * Add unique Index to all slides.
 *
 * @param {Array} slides
 *   all slides
 *
 * @return All slides with added slideIndex key as prop.
 */
const slideWithIndexKey = slides => {
  let i = 0;
  const children = React.Children.map(slides, slide => {
    i += 1;
    return React.cloneElement(slide, {
      id: `slide_${i}`,
    });
  });

  return children;
};

/**
 * Rendering list of dots
 */
function getSliderDots() {
  const carouselContent = useContext(CarouselContext);
  const totalSlidesCount = carouselContent.slides.length;
  const currentIndex = carouselContent.slideIndex;
  const setItem = carouselContent.setSlideIndex;
  const countElements = [];

  for (let id = 1; id <= totalSlidesCount; id += 1) {
    countElements.push(
      <li key={id} className={classnames('atomic-item', { active: id === currentIndex })}>
        <Button type="button" onClick={() => setItem(id)} className="icon">
          {id}
        </Button>
      </li>
    );
  }

  return countElements;
}

/**
 * Rendering wrapper of dots
 *
 * @return HTML
 *   Wrapper with UL | OL
 */
const getList = () => {
  return <ListVanilla>{getSliderDots()}</ListVanilla>;
};

/**
 * Increase the slide count.
 *
 * @param {Number} setIndex
 *   Increase the count of slide.
 * @param {Number} currentIndex
 *   Show current active slide number.
 */
const handleNext = (setIndex, currentIndex) => {
  setIndex(currentIndex + 1);
};

/**
 * Decrease the slide count.
 *
 * @param {Number} setIndex
 *   Decrease the count of slide.
 * @param {Number} currentIndex
 *   Show current active slide number.
 */
const handlePrevious = (setIndex, currentIndex) => {
  setIndex(currentIndex - 1);
};

/**
 * Increase slide count on key press over next navigation button.
 *
 * @param {Object} e
 *   event parameter
 * @param {function} setIndex
 *   increase the slide index.
 * @param {Number} currentIndex
 *   Show current active slide number.
 */
const handleKeyNext = (e, setIndex, currentIndex) => {
  if (e.key === 'ArrowRight') {
    handleNext(setIndex, currentIndex);
  }

  return null;
};

/**
 * Decrease slide count on key press over next navigation button.
 *
 * @param {Object} e
 *   event parameter
 * @param {function} setIndex
 *   Increase the slide index.
 * @param {Number} currentIndex
 *   Show current active slide number.
 */
const handleKeyPrev = (e, setIndex, currentIndex) => {
  if (e.key === 'ArrowLeft') {
    handlePrevious(setIndex, currentIndex);
  }

  return null;
};

/**
 * Provides HTML for next navigation button.
 *
 * @param {Object} setIndex
 *   Change the slide number.
 * @param {Number} currentIndex
 *   Current slide number.
 * @param {Number} slideCount
 *   Total number of slides.
 */
const nextKey = (setIndex, currentIndex, slideCount, children) => {
  return (
    <div className="nav-action next">
      <Button
        onClick={() => handleNext(setIndex, currentIndex)}
        onKeyUp={e => handleKeyNext(e, setIndex, currentIndex)}
        disabled={currentIndex === slideCount}
      >
        {children !== null ? children : 'next'}
      </Button>
    </div>
  );
};

/**
 * Provides HTML for previous navigation button.
 *
 * @param {Object} setIndex
 *   Change the slide number.
 * @param {Number} currentIndex
 *   Current slide number.
 */
const prevKey = (setIndex, currentIndex, children) => {
  return (
    <div className="nav-action prev">
      <Button
        onClick={() => handlePrevious(setIndex, currentIndex)}
        onKeyUp={e => handleKeyPrev(e, setIndex, currentIndex)}
        disabled={currentIndex === 1}
      >
        {children !== null ? children : 'next'}
      </Button>
    </div>
  );
};

/**
 * Aria Live Update for Accessibility.
 *
 * @param {Number} currentSlide
 *   Active slide number
 * @param {Number} slideCount
 *   Total number of slides
 */
const ariaLiveUpdate = (currentSlide, slideCount) => {
  return (
    <div className="hidden" aria-live="polite" aria-atomic="true" tabIndex="-1">
      {`Item ${currentSlide} of ${slideCount}`}
    </div>
  );
};

/**
 * Carousel Main Element.
 *
 * @param {Element} children
 *   Wraps all tha carousel elements.
 *
 * @return Carousel.
 */
const Carousel = ({
  children,
  className,
  nav,
  title,
  autoplay,
  slideTransitionTime,
}: Props): Node => {
  const [slideIndex, setSlideIndex] = useState(1);
  const [slides, setSlidesContent] = useState([]);
  const [slideCount, setSlidesCount] = useState(1);
  const [navigation, setNavigation] = useState(nav);
  const [isAnimationRunning, setAnimationRunning] = useState(autoplay);

  const setData = data => setSlidesContent([...slides, ...data]);

  useInterval(
    () => {
      const currentIndex = slideIndex !== slideCount ? slideIndex : 1;
      setSlideIndex(currentIndex + 1);
    },
    isAnimationRunning ? slideTransitionTime : null
  );

  const value = {
    slides,
    setData,
    slideIndex,
    setSlideIndex,
    setSlidesCount,
    slideCount,
    setNavigation,
    setAnimationRunning,
    isAnimationRunning,
  };

  return (
    <section
      className={classnames('carousel-wrapper', className)}
      aria-labelledby="carousel-heading"
    >
      <CarouselContext.Provider value={value} aria-label={title}>
        {navigation && nextKey(setSlideIndex, slideIndex, slideCount, null)}
        {children}
        {navigation && prevKey(setSlideIndex, slideIndex, slideCount, null)}
        {ariaLiveUpdate(slideIndex, slideCount)}
      </CarouselContext.Provider>
    </section>
  );
};

/**
 * Slide Wrapper.
 *
 * @param {Array} children
 *   Wraps all the slides.
 *
 * @return All slides in single wrapper.
 */
Carousel.SlideWrapper = ({ children, className }: Props): Node => {
  const slideContent = useContext(CarouselContext);
  let currentAnimationStatus = true;

  if (slideContent.slides.length === 0) {
    const results = slideWithIndexKey(children);
    slideContent.setData(results);
    slideContent.setSlidesCount(results.length);
  }

  const handleMouseEnter = () => {
    if (slideContent.isAnimationRunning) {
      currentAnimationStatus = true;
      slideContent.setAnimationRunning(false);
    } else {
      currentAnimationStatus = false;
    }
  };

  const handleMouseLeave = () => {
    if (currentAnimationStatus) {
      currentAnimationStatus = false;
      slideContent.setAnimationRunning(true);
    }

    return null;
  };

  return (
    <div
      className={classnames('carousel-section', className)}
      aria-label="slides"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {slideContent.slides}
    </div>
  );
};

/**
 * Slide Container.
 *
 * @param {Element} children
 *   Will wraps the slide content.
 *
 * @return Single slide with wrapper.
 */
Carousel.Slide = ({ children, id, className }: Props): Node => {
  const SlideStatus = useContext(CarouselContext);

  return (
    <div
      className={classnames(
        'slide',
        { active: id === `slide_${SlideStatus.slideIndex}` },
        className
      )}
    >
      {children}
    </div>
  );
};

/**
 * Dots Navigation.
 *
 * @param {Element} children
 *   Will wraps the slide content.
 *
 * @return Single slide with wrapper.
 */
Carousel.Dots = ({ className }: Props): Node => {
  return <div className={classnames('carousel-dots', className)}>{getList()}</div>;
};

/**
 * Next Navigation.
 */
Carousel.Next = ({ children }: Nav): Node => {
  const carouselContent = useContext(CarouselContext);
  // Disable default navigation prop handling;
  carouselContent.setNavigation(false);
  const currentIndex = carouselContent.slideIndex;
  const setIndex = carouselContent.setSlideIndex;
  const { slideCount } = carouselContent;

  return nextKey(setIndex, currentIndex, slideCount, children);
};

/**
 * Previous Navigation.
 */
Carousel.Prev = ({ children }: Nav): Node => {
  const carouselContent = useContext(CarouselContext);
  // Disable default navigation prop handling;
  carouselContent.setNavigation(false);
  const currentIndex = carouselContent.slideIndex;
  const setIndex = carouselContent.setSlideIndex;

  return prevKey(setIndex, currentIndex, children);
};

/**
 * Play and Pause icon to handle slide animation.
 */
Carousel.AnimationKey = ({ className }: Props): Node => {
  const carouselContent = useContext(CarouselContext);

  const handleAnimation = () => {
    carouselContent.setAnimationRunning(!carouselContent.isAnimationRunning);
  };

  return (
    <div className={classnames('animation-panel', className)} aria-label="animation">
      <Button type="button" onClick={handleAnimation}>
        {carouselContent.isAnimationRunning ? 'pause' : 'play'}
      </Button>
    </div>
  );
};

Carousel.defaultProps = {
  nextLabel: 'next',
  prevLabel: 'prev',
  nav: true,
  autoplay: false,
  slideTransitionTime: 1000,
};

Carousel.Slide.displayName = 'Slide';
Carousel.Dots.displayName = 'Dots';

export default styled(Carousel)`
  ${stylesCarousel};
`;

export { Carousel as CarouselVanilla };
