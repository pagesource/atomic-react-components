// @flow
/**
 *
 * Dots
 *
 */
import * as React from 'react';
import type { Node } from 'react';
import styled from 'styled-components';
import Slide from '../Slide';
import List from '../../List';
import styles from './Dots.style';
import Button from '../../../atoms/Button';

type Props = {
  currentSlideIndex?: number,
  totalSlides: number,
  children: React.ChildrenArray<React.Element<typeof Slide>>,
  showThumbnails: boolean,
  className?: string,
  onDotClick: Function,
};

const createDotsArray = (currentSlideIndex, totalSlides) =>
  Array.from(new Array(totalSlides), (value, index) => ({
    index,
    isActive: currentSlideIndex === index,
  }));

const Dots = ({
  currentSlideIndex,
  totalSlides,
  children,
  showThumbnails,
  className,
  onDotClick,
}: Props): Node => {
  const dotsArray = createDotsArray(currentSlideIndex, totalSlides);
  return (
    <div className={className}>
      {showThumbnails ? (
        <List className="thumbnail" noDefaultView>
          {React.Children.map(children, (current, index) => (
            <Slide
              key={`slide_${index}`}
              isActive={currentSlideIndex === index}
              onThumbnailClick={() => onDotClick(index)}
            >
              {current}
            </Slide>
          ))}
        </List>
      ) : (
        dotsArray.map(dot => (
          <Button
            key={`dot_${dot.index}`}
            className="dot"
            primary={dot.isActive}
            secondary={!dot.isActive}
            onClick={() => onDotClick(dot.index)}
          />
        ))
      )}
    </div>
  );
};

Dots.defaultProps = {
  currentSlideIndex: 0,
  className: '',
};

export default styled(Dots)`
  ${styles};
`;

export { Dots as DotsVanilla };
