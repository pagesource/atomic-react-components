// @flow
/**
 *
 * AtomicCarousel
 *
 */
import React, { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';

import styles from './AtomicCarousel.style';
import type { Props } from './types';
import List from '../List';
import ListItem from '../../atoms/ListItem';
import { ButtonVanilla } from '../../atoms/Button';

// Rendering all dots as button
const getSliderDots = (slidesCount, currentItem, setItem) => {
  const specificNode = useCallback(index => setItem(index));
  const countElements = [];

  for (let i = 1; i <= slidesCount; i += 1) {
    countElements.push(
      <ListItem key={i} className="atomic-item">
        <ButtonVanilla disabled={currentItem === i} onClick={() => specificNode(i)}>
          {i}
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
  const carouselClasses = [...className.split(','), 'atomic-carousel'].join(' ');
  const [currentSlide, setCurrentSlide] = useState(1);
  const [data, setData] = useState([]);

  const handlePrev = useCallback(() => {
    setCurrentSlide(currentSlide - 1);
  });

  const handleNext = useCallback(() => {
    setCurrentSlide(currentSlide + 1);
  });

  useEffect(() => {
    if (children !== undefined && !Array.isArray(children)) {
      setData([children]);
    } else {
      setData(children);
    }
  }, []);

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
      <article className={carouselClasses}>
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

export default styled(AtomicCarousel)`
  ${styles};
`;

export { AtomicCarousel as AtomicCarouselVanilla };
