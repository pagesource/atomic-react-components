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
import Anchor from '../../atoms/Anchor';

const getAnchoredChild = (anchorProps, children) => (
  <Anchor key={children.length + 2} {...anchorProps}>
    {children}
  </Anchor>
);

const ArticleThumbnail = ({
  image,
  readMoreContent,
  children,
  anchorProps,
  ...otherProps
}: Props): Node => {
  let thumbImage = <Image key={children.length + 1} {...image} />;
  if (readMoreContent && anchorProps) {
    thumbImage = getAnchoredChild(anchorProps, thumbImage);
  }
  if (readMoreContent) {
    const readMoreLink = getAnchoredChild(anchorProps, readMoreContent);
    return <div className={otherProps.className}>{[thumbImage, children, readMoreLink]}</div>;
  }

  return (
    <div className={otherProps.className}>
      {getAnchoredChild(anchorProps, [thumbImage, children])}
    </div>
  );
};

ArticleThumbnail.defaultProps = {
  image: {},
};
export default styled(ArticleThumbnail)`
  ${styles};
`;

export { ArticleThumbnail as ArticleThumbnailVanilla };
