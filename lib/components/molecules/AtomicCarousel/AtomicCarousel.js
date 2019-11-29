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
import List from '../List';
import ListItem from '../../atoms/ListItem';
import { ButtonVanilla } from '../../atoms/Button';

// Rendering all dots as button
const getSliderDots = (slidesCount, currentItem, setItem) => {
  const specificNode = useCallback(index => setItem(index));
  const countElements = [];

  for (let id = 1; id <= slidesCount; id += 1) {
    countElements.push(
      <ListItem key={id} className="atomic-item">
        <ButtonVanilla disabled={currentItem === id} onClick={() => specificNode(id)}>
          {id}
        </ButtonVanilla>
      </ListItem>
    );
  }

  return countElements;
};

// Calculating required number of dots
const getList = (items, setItem, currentItem, perSlideFrame) => {
  const slidesCount = Math.ceil(items.length / perSlideFrame);

  return (
    <div className="atomic-dots">
      <List>{getSliderDots(slidesCount, currentItem, setItem)}</List>
    </div>
  );
};

// Main Component
const AtomicCarousel = ({
  dots,
  navigation,
  children,
  className,
  perSlideFrame,
  prevLabel,
  nextLabel,
}: Props): Node => {
  const [currentSlide, setCurrentSlide] = useState(1);
  const [data, setData] = useState([]);

  const handlePrev = useCallback(() => {
    setCurrentSlide(currentSlide - 1);
  });

  const handleNext = useCallback(() => {
    setCurrentSlide(currentSlide + 1);
  });

  useEffect(() => {
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
  }, []);

  /**
   * Show required number of items on single slide.
   *
   * @param {Array} content
   *   Its the children data.
   * @param {Number} perFrame
   *   No. of item needs to show in single slide.
   * @param {Number} currentScreen
   *   Its the current slide number.
   */
  const getPerFrameItems = (content, perFrame, currentScreen) => {
    const itemsArray = [];
    const start = currentScreen === 1 ? 0 : perFrame * (currentScreen - 1);

    if (perSlideFrame > 1) {
      for (let i = start; i <= currentScreen * perFrame - 1; i += 1) {
        itemsArray.push(content[i]);
      }
    } else {
      itemsArray.push(content[currentScreen - 1]);
    }

    return itemsArray;
  };

  return (
    <>
      <article className={classnames('atomic-carousel', className)}>
        {navigation && (
          <ButtonVanilla className="previous" onClick={handlePrev} disabled={currentSlide === 1}>
            {prevLabel}
          </ButtonVanilla>
        )}
        {data.length !== 0 && getPerFrameItems(data, perSlideFrame, currentSlide)}
        {navigation && (
          <ButtonVanilla
            className="next"
            onClick={handleNext}
            disabled={Math.ceil(data.length / perSlideFrame) === currentSlide}
          >
            {nextLabel}
          </ButtonVanilla>
        )}
      </article>
      {dots && getList(data, setCurrentSlide, currentSlide, perSlideFrame)}
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
};

AtomicCarousel.propTypes = Props;

export default styled(AtomicCarousel)`
  ${styles};
`;

export { AtomicCarousel as AtomicCarouselVanilla };
