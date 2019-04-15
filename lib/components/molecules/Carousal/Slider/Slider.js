// @flow
/**
 *
 * Slider
 *
 */
import * as React from 'react';
import type { Node } from 'react';
import styled from 'styled-components';
import Slide from '../Slide';
import List from '../../List';
import styles from './Slider.style';

type Props = {
  children: React.ChildrenArray<React.Element<typeof Slide>>,
  className?: string,
  currentSlideIndex?: number,
};

const Slider = ({ children, className, currentSlideIndex }: Props): Node => (
  <List className={className} noDefaultView>
    {React.Children.map(children, (current, index) => (
      <Slide key={`slide_${index}`} isActive={currentSlideIndex === index}>
        {current}
      </Slide>
    ))}
  </List>
);

Slider.defaultProps = {
  className: '',
  currentSlideIndex: 0,
};

export default styled(Slider)`
  ${styles};
`;

export { Slider as SliderVanilla };
