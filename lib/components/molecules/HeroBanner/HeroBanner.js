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

const HeroBanner = ({ className, children, renderMediaContent, variation }: Props): Node => (
  <section className={classnames(className, variation)}>
    <header className="wrap" role="banner">
      {renderMediaContent && <div className="media-wrap">{renderMediaContent()}</div>}
      {children && <div className="hero-content">{children}</div>}
    </header>
  </section>
);

HeroBanner.defaultProps = {
  className: 'hero',
  variation: 'stacked',
};

export default styled(HeroBanner)`
  ${styles};
`;

export { HeroBanner as HeroBannerVanilla };
