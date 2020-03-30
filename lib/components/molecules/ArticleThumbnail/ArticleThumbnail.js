// @flow
/**
 *
 * ArticleThumbnail
 *
 */
import React from 'react';
import type { Node, ComponentType } from 'react';
import styled from 'styled-components';

import styles from './ArticleThumbnail.style';
import type { Props } from './types';
import Image from '../../atoms/Image/Image';
import Anchor from '../../atoms/Anchor';

const getAnchoredChild = (anchorProps, children) => <Anchor {...anchorProps}>{children}</Anchor>;

const ArticleThumbnail = ({
  image,
  readMoreContent,
  children,
  anchorProps,
  ...otherProps
}: Props): Node => {
  let thumbImage = <Image {...image} />;
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

const StyledArticleThumbnail: ComponentType<Props> = styled(ArticleThumbnail)`
  ${styles};
`;

export default StyledArticleThumbnail;

export { ArticleThumbnail as ArticleThumbnailVanilla };
