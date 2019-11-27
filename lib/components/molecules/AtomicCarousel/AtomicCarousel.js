// @flow
/**
 *
 * AtomicCarousel
 *
 */
import React, { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import classnames from 'classnames';

import styles from './AtomicCarousel.style';
import type { Props } from './types';
import { ListVanilla } from '../List';
import { ButtonVanilla } from '../../atoms/Button';
import { HeadingVanilla } from '../../atoms/Heading';
import useInterval from './useInterval.hook';

const AtomicCarousel = ({
  dots,
  navigation,
  children,
  className,
  perSlideFrame,
  prevLabel,
  nextLabel,
  headers,
  heading,
  displayHeader,
  slideTransitionTime,
  autoPlay,
  playLabel,
  stopLabel,
  fade,
  animationIcon,
  navigationIcons,
}: Props): Node => {
  const [currentSlide, setCurrentSlide] = useState(1);
  const [data, setData] = useState([]);
  const [slideCount, setSlideCount] = useState(0);
  const [isAnimationRunning, setAnimation] = useState(false);
  const [mouseStatus, setMouseStatus] = useState(false);

  const specificNode = useCallback((index, callback) => callback(index));
  const handlePrev = useCallback(() => {
    setCurrentSlide(currentSlide - 1);
  });
  const handleNext = useCallback(() => {
    setCurrentSlide(currentSlide + 1);
  });
  const handleAnimation = useCallback(() => {
    setAnimation(!isAnimationRunning);
    setMouseStatus(!isAnimationRunning);
  });

  useEffect(() => {
    if (children !== undefined) {
      let i = 0;
      let slideItems = [];
      if (children !== undefined && !Array.isArray(children)) {
        slideItems = [{ ...children, id: i }];
      } else {
        slideItems = children.map(item => {
          i += 1;
          return { ...item, id: i };
        });
      }

      setData(slideItems);
      setSlideCount(Math.ceil(slideItems.length / perSlideFrame));
      if (autoPlay) {
        setAnimation(true);
        setMouseStatus(true);
      }
    }
  }, []);

  function handlePreviousKey(event) {
    if (event.key === 'ArrowLeft') {
      handlePrev();
    }
  }

  useInterval(
    () => {
      const currentIndex = currentSlide !== slideCount ? currentSlide : 0;
      setCurrentSlide(currentIndex + 1);
    },
    isAnimationRunning ? slideTransitionTime : null
  );

  /**
   * Rendering list of dots
   *
   * @param {Object()} setItem
   *   Using to set the slide number.
   * @param {number} currentItem
   *   Show current slide number.
   */
  function getSliderDots(currentItem, setItem) {
    const countElements = [];

    for (let id = 1; id <= slideCount; id += 1) {
      countElements.push(
        <li key={id} className={classnames('atomic-item', { active: id === currentItem })}>
          <ButtonVanilla onClick={() => specificNode(id, setItem)} onKeyUp={handlePreviousKey}>
            {id}
          </ButtonVanilla>
        </li>
      );
    }

    return countElements;
  }

  /**
   * Rendering wrapper of dots
   *
   * @param {Object()} setItem
   *   Using to set the slide number.
   * @param {number} currentItem
   *   Show current slide number.
   *
   * @return HTML
   *   Wrapper with UL | OL
   */
  const getList = (setItem, currentItem) => {
    return (
      <div className="atomic-dots">
        <ListVanilla>{getSliderDots(currentItem, setItem)}</ListVanilla>
      </div>
    );
  };

  /**
   * Wrapper of slide.
   *
   * @param {Object} slide
   *   the slide content that need to be wrapped.
   */
  const slideWrapper = slide => <div className="slide-item">{slide}</div>;

  /**
   * Show required number of items on single slide.
   *
   * @param {Array} content
   *   Its the children data.
   * @param {Number} perFrame
   *   No. of item needs to show in single slide.
   * @param {Number} currentScreen
   *   Its the current slide number.
   *
   * @return Array
   *   Number of slides per frame.
   */
  const getPerFrameItems = (content, perFrame, currentScreen) => {
    const itemsArray = [];
    const start = currentScreen === 1 ? 0 : perFrame * (currentScreen - 1);

    if (perSlideFrame > 1) {
      for (let i = start; i <= currentScreen * perFrame - 1; i += 1) {
        itemsArray.push(slideWrapper(content[i]));
      }
    } else {
      itemsArray.push(slideWrapper(content[currentScreen - 1]));
    }

    return itemsArray;
  };

  /**
   * Handling next key event.
   *
   * @param {Object} event
   *   keyup Object
   */
  const handleNextKey = event => {
    if (event.key === 'ArrowRight') {
      handleNext();
    }
  };

  /**
   * Handling Mouse Enter event.
   *
   * @param {Object} event
   *   keyup Object
   */
  const handleMouseEnter = () => {
    if (mouseStatus) {
      setAnimation(false);
    }
  };

  /**
   * Handling Mouse Leave event.
   *
   * @param {Object} event
   *   keyup Object
   */
  const handleMouseLeave = () => {
    if (mouseStatus) {
      setAnimation(true);
    }
  };

  /**
   * Slider Section.
   */
  const getSliderSection = () => {
    return (
      <div className="carousel-container">
        {data.length !== 0 && (
          <>
            {navigation && (
              <ButtonVanilla
                data-action="prev"
                className={classnames('previous', {
                  'navigation-image prev-icon': navigationIcons,
                })}
                onClick={handlePrev}
                disabled={currentSlide === 1}
                onKeyUp={handlePreviousKey}
                title={prevLabel}
              >
                {prevLabel}
              </ButtonVanilla>
            )}
            <div
              className={classnames('carousel-slides', {
                fadeIn: fade && isAnimationRunning,
              })}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              {getPerFrameItems(data, perSlideFrame, currentSlide)}
            </div>
            {navigation && (
              <ButtonVanilla
                className={classnames('next', { 'navigation-image next-icon': navigationIcons })}
                data-action="next"
                title={nextLabel}
                onClick={handleNext}
                disabled={slideCount === currentSlide}
                onKeyUp={handleNextKey}
              >
                {nextLabel}
              </ButtonVanilla>
            )}
          </>
        )}
      </div>
    );
  };

  const getHeader = () => {
    return (
      <header id="carousel">
        <HeadingVanilla {...headers} className="carousel-heading">
          {heading}
        </HeadingVanilla>
      </header>
    );
  };

  const ariaLiveUpdate = () => {
    return (
      <div className="hidden" aria-live="polite" aria-atomic="true" tabIndex="-1">
        {`Item ${currentSlide} of ${slideCount}`}
      </div>
    );
  };

  const getAnimationPanel = () => {
    return (
      <div className="animation-panel" aria-label="animation">
        <ButtonVanilla
          onClick={handleAnimation}
          className={classnames(
            { 'animation-btn-icon': animationIcon },
            { play: !isAnimationRunning },
            { stop: isAnimationRunning }
          )}
        >
          {isAnimationRunning ? stopLabel : playLabel}
        </ButtonVanilla>
      </div>
    );
  };

  return (
    <>
      <section className={classnames('carousel', className)} aria-labelledby="carousel">
        {displayHeader && getHeader()}
        {getSliderSection()}
        {dots && getList(setCurrentSlide, currentSlide)}
        {getAnimationPanel()}
        {ariaLiveUpdate()}
      </section>
    </>
  );
};

AtomicCarousel.defaultProps = {
  dots: true,
  navigation: true,
  classNames: '',
  perSlideFrame: 1,
  nextLabel: 'next',
  prevLabel: 'prev',
  heading: 'Carousel',
  displayHeader: true,
  slideTransitionTime: 1500,
  autoPlay: true,
  playLabel: 'play',
  stopLabel: 'stop',
  fade: true,
  animationIcon: true,
  navigationIcons: true,
};

export default styled(AtomicCarousel)`
  ${styles};
`;

export { AtomicCarousel as AtomicCarouselVanilla };
