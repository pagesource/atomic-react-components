/**
 *
 * ArticleThumbnail
 *
 */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import styles from './ArticleThumbnail.style';
import Image from '../../atoms/Image/Image';
import Anchor from '../../atoms/Anchor';

const getAnchoredChild = (anchorProps, children) => <Anchor {...anchorProps}>{children}</Anchor>;

const ArticleThumbnail = ({ image, readMoreContent, children, anchorProps, ...otherProps }) => {
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

ArticleThumbnail.propTypes = {
  image: PropTypes.objectOf(PropTypes.object),
  readMoreContent: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  anchorProps: PropTypes.objectOf(PropTypes.object),
};

ArticleThumbnail.defaultProps = {
  image: {},
  anchorProps: {},
};

const StyledArticleThumbnail = styled(ArticleThumbnail)`
  ${styles};
`;

export default StyledArticleThumbnail;

export { ArticleThumbnail as ArticleThumbnailVanilla };
