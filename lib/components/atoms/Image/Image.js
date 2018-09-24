// @flow
import React from 'react';
import type { Node } from 'react';
import styled from 'styled-components';

import styles from './Image.style';

type Props = {
  className: string,
  src: string,
  srcset?: string,
  sizes?: string,
  placeholderSrc?: string,
  alt: string,
  inheritedStyles?: string,
  ref: () => void
};

const Image = ({
  className,
  src,
  srcset,
  sizes,
  placeholderSrc,
  alt,
  inheritedStyles,
  ref,
  ...other
}: Props): Node => (
  <img
    className={className}
    src={src}
    srcSet={srcset || null}
    sizes={sizes || null}
    alt={alt}
    ref={ref}
    {...other}
    onError={placeholderSrc ? (event) => {
      // eslint-disable-next-line no-param-reassign
      event.target.src = placeholderSrc;
    } : null}
  />
);

Image.defaultProps = {
  srcset: '',
  sizes: '',
  placeholderSrc: '',
  inheritedStyles: '',
};

export default styled(Image)`
  ${styles};
`;
export { Image as ImageVanilla };
