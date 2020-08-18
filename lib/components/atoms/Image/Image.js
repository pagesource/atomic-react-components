import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { getLabelFromChildren } from '../../../core/utils/elementLocator';
import styles from './Image.style';

const Image = ({
  className,
  src,
  srcset,
  sizes,
  placeholderSrc,
  alt,
  inheritedStyles,
  ref,
  elementLocator,
  loading,
  ...other
}) => (
  <img
    {...other}
    className={className}
    src={src}
    srcSet={srcset || null}
    sizes={sizes || null}
    alt={alt}
    ref={ref}
    loading={loading}
    data-locator={elementLocator || `image-${getLabelFromChildren(alt)}`}
    onError={
      placeholderSrc
        ? (event) => {
            // eslint-disable-next-line no-param-reassign
            event.target.src = placeholderSrc;
          }
        : null
    }
  />
);

Image.propTypes = {
  className: PropTypes.string,
  src: PropTypes.string.isRequired,
  srcset: PropTypes.string,
  sizes: PropTypes.string,
  placeholderSrc: PropTypes.string,
  alt: PropTypes.string.isRequired,
  elementLocator: PropTypes.string,
  inheritedStyles: PropTypes.string,
  loading: PropTypes.oneOf(['auto', 'lazy', 'eager']),
  ref: PropTypes.func.isRequired,
};

Image.defaultProps = {
  className: '',
  srcset: '',
  sizes: '',
  placeholderSrc: '',
  inheritedStyles: '',
  loading: 'auto',
  elementLocator: '',
};

const StyledImage = styled(Image)`
  ${styles};
`;

export default StyledImage;

export { Image as ImageVanilla };
