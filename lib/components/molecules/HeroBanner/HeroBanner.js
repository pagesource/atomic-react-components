/**
 *
 * HeroBanner
 *
 */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import classnames from 'classnames';
import styles from './HeroBanner.style';

const HeroBanner = ({ className, children, renderMediaContent, variation }) => (
  <section className={classnames(className, variation)}>
    <header className="wrap" role="banner">
      {renderMediaContent && <div className="media-wrap">{renderMediaContent()}</div>}
      {children && <div className="hero-content">{children}</div>}
    </header>
  </section>
);

HeroBanner.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  variation: PropTypes.oneOf(['stacked', 'side-by-side', 'positioned']),
  renderMediaContent: PropTypes.func,
};

HeroBanner.defaultProps = {
  className: 'hero',
  variation: 'stacked',
  renderMediaContent: () => {},
};

const StyledHeroBanner = styled(HeroBanner)`
  ${styles};
`;

export default StyledHeroBanner;

export { HeroBanner as HeroBannerVanilla };
