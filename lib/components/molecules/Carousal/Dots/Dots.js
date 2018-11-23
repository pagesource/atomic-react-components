// @flow
/**
 *
 * Dots
 *
 */
import React from 'react';
import styled from 'styled-components';

import styles from './Dots.style';
import Button from '../../../atoms/Button';

type Props = {
  currentSlideIndex?: number,
  totalSlides: number,
  className?: string,
  onDotClick?: Function,
};

const createDotsArray = (currentSlideIndex, totalSlides) =>
  Array.from(new Array(totalSlides), (value, index) => ({
    index,
    isActive: currentSlideIndex === index,
  }));

const Dots = ({ currentSlideIndex, totalSlides, className, onDotClick }: Props): Node => {
  const dotsArray = createDotsArray(currentSlideIndex, totalSlides);
  return (
    <div className={className}>
      {dotsArray.map(dot => (
        <Button
          key={`dot_${dot.index}`}
          className="dot"
          primary={dot.isActive}
          secondary={!dot.isActive}
          onClick={() => onDotClick(dot.index)}
        />
      ))}
    </div>
  );
};

Dots.defaultProps = {
  currentSlideIndex: 0,
  className: '',
  onDotClick: () => {},
};

export default styled(Dots)`
  ${styles};
`;

export { Dots as DotsVanilla };
