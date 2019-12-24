// @flow
/**
 *
 * HeroBanner
 *
 */
import React from 'react';
import styled from 'styled-components';
import classnames from 'classnames';
import styles from './HeroBanner.style';
import type { Props } from './types';

const HeroBanner = ({
  className,
  children,
  heroImageWidth,
  childrenContainerWidth,
  renderHeroImage,
  renderHeroCarousel,
}: Props): Node => {
  return (
    <div className={classnames(className)}>
      <section>
        <header role="banner">
          {renderHeroImage && (
            <div className="hero-image" heroImageWidth={heroImageWidth}>
              {renderHeroImage()}
            </div>
          )}
          {renderHeroCarousel && <div className="hero-carousel">{renderHeroCarousel()}</div>}
          {children && (
            <div className="hero-children" childrenContainerWidth={childrenContainerWidth}>
              {children}
            </div>
          )}
        </header>
      </section>
    </div>
  );
};

HeroBanner.defaultProps = {
  className: 'hero-container',
  heroImageWidth: '50%',
  childrenContainerWidth: '50%',
};

export default styled(HeroBanner)`
  ${styles};
`;

export { HeroBanner as HeroBannerVanilla };
