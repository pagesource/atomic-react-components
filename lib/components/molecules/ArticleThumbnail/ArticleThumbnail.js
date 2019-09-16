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

const getAnchoredChild = (anchorProps, children) => <Anchor {...anchorProps}>{children}</Anchor>;

const ArticleThumbnail = ({ image, title, description, readMore }: Props): Node => {
  let thumbImage = <Image {...image} />;
  let thumbTitle = <Heading {...title}>{title.children}</Heading>;
  let thumbDescription = '';
  let readMoreLink = '';

  if (image.anchorProps) {
    thumbImage = getAnchoredChild(image.anchorProps, thumbImage);
  }
  if (title && title.anchorProps) {
    thumbTitle = getAnchoredChild(title.anchorProps, thumbTitle);
  }
  if (description && description.children) {
    thumbDescription = <Para {...description}>{description.children}</Para>;
  }
  if (readMore && readMore.children) {
    readMoreLink = getAnchoredChild(readMore.anchorProps, readMore.children);
  }
  return [thumbImage, thumbTitle, thumbDescription, readMoreLink];
};

ArticleThumbnail.defaultProps = {
  image: {},
  title: {},
};

export default styled(ArticleThumbnail)`
  ${styles};
`;

export { ArticleThumbnail as ArticleThumbnailVanilla };
