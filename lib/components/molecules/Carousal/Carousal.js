// @flow
/**
 *
 * Carousal
 *
 */
import { PureComponent, Children } from 'react';
import styled from 'styled-components';

import type { Props, State } from './types';

import Slider from './Slider';
import Button from '../../atoms/Button';
import Dots from './Dots';
import styles from './Carousal.style';

class Carousal extends PureComponent<Props, State> {
  static defaultProps = {
    className: '',
    children: '',
    defaultSlideIndex: 0,
    showDots: false,
    showArrows: true,
    showThumbnails: true,
    onChange: () => {},
  };

  constructor(props: any) {
    super(props);
    this.state = {
      current: props.defaultSlideIndex,
    };
    this.moveSlideToLeft = this.moveSlideToLeft.bind(this);
    this.moveSlideToRight = this.moveSlideToRight.bind(this);
  }

  moveSlideToLeft = (): void => {
    const { current } = this.state;
    this.updateSlideByIndex(current - 1);
  };

  moveSlideToRight = (): void => {
    const { current } = this.state;
    this.updateSlideByIndex(current + 1);
  };

  updateSlideByIndex = (index: number = 0): void => {
    const { onChange } = this.props;
    this.setState(
      {
        current: index,
      },
      () => {
        const { current } = this.state;
        onChange(current);
      }
    );
  };

  render() {
    const { children, className, showDots, showArrows, showThumbnails } = this.props;
    const { current } = this.state;
    const totalSlides = Children.count(children);
    if (totalSlides === 0) {
      return null;
    }
    return (
      <div className={className}>
        <div className="slider-container">
          {showArrows && (
            <Button onClick={this.moveSlideToLeft} disabled={current === 0} className="arrow">
              {'<'}
            </Button>
          )}
          <Slider currentSlideIndex={current} totalSlides={totalSlides}>
            {children}
          </Slider>
          {showArrows && (
            <Button
              onClick={this.moveSlideToRight}
              disabled={current === totalSlides - 1}
              className="arrow right"
            >
              {'>'}
            </Button>
          )}
        </div>
        {showDots && (
          <Dots
            currentSlideIndex={current}
            totalSlides={totalSlides}
            showThumbnails={showThumbnails}
            onDotClick={this.updateSlideByIndex}
          >
            {children}
          </Dots>
        )}
      </div>
    );
  }
}

export default styled(Carousal)`
  ${styles};
`;

export { Carousal as CarousalVanilla };
