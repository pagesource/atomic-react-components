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
  renderExternalContent,
}: Props): Node => {
  return (
    <section className={classnames(className)}>
      <header role="banner">
        {renderHeroImage && (
          <div className="image" heroImageWidth={heroImageWidth}>
            {renderHeroImage()}
          </div>
        )}
        {renderExternalContent && <div className="externalContent">{renderExternalContent()}</div>}
        {children && (
          <div className="children" childrenContainerWidth={childrenContainerWidth}>
            {children}
          </div>
        )}
      </header>
    </section>
  );
};

HeroBanner.defaultProps = {
  className: 'hero',
  heroImageWidth: '50%',
  childrenContainerWidth: '50%',
};

export default styled(HeroBanner)`
  ${styles};
`;

export { HeroBanner as HeroBannerVanilla };
