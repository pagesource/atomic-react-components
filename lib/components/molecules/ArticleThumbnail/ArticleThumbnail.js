// @flow
/**
 *
 * ArticleThumbnail
 *
 */
import React from 'react';
import styled from 'styled-components';

import styles from './ArticleThumbnail.style';
import type { Props } from './types';
import Image from '../../atoms/Image/Image';
import Heading from '../../atoms/Heading/Heading';
import Anchor from '../../atoms/Anchor';
import Para from '../../atoms/Para';

const getAnchoredChild = (url, children) => <Anchor to={url}>{children}</Anchor>;

const getBaseVariation = (image, title, url, description, variation, readMoreText) => (
  <React.Fragment>
    {variation === 'v3' ? getAnchoredChild(url, <Image {...image} />) : <Image {...image} />}
    {variation === 'v3' ? (
      getAnchoredChild(url, <Heading>{title}</Heading>)
    ) : (
      <Heading>{title}</Heading>
    )}

    <Para>{description}</Para>
    {variation === 'v2' ? getAnchoredChild(url, readMoreText) : ''}
  </React.Fragment>
);

const ArticleThumbnail = ({
  variation = 'v1',
  image,
  title,
  url,
  description,
  readMoreText,
}: Props): Node => {
  const baseVariant = getBaseVariation(image, title, url, description, variation, readMoreText);
  return (
    <div className={styles.default}>
      {variation === 'v1' ? getAnchoredChild(url, baseVariant) : baseVariant}
    </div>
  );
};

ArticleThumbnail.defaultProps = {};

export default styled(ArticleThumbnail)`
  ${styles};
`;

export { ArticleThumbnail as ArticleThumbnailVanilla };
