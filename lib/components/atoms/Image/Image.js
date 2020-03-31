// @flow
import React from 'react';
import type { Node } from 'react';
import styled from 'styled-components';

import { getLabelFromChildren } from '../../../core/utils/elementLocator';
import styles from './Image.style';

type Props = {
  className: string,
  src: string,
  srcset?: string,
  sizes?: string,
  placeholderSrc?: string,
  alt: string,
  elementLocator?: string,
  inheritedStyles?: string,
  loading?: 'auto' | 'lazy' | 'eager',
  ref: () => void,
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
  elementLocator,
  loading,
  ...other
}: Props): Node => (
  <img
    className={className}
    src={src}
    srcSet={srcset || null}
    sizes={sizes || null}
    alt={alt}
    ref={ref}
    loading={loading}
    data-locator={elementLocator || `image-${getLabelFromChildren(alt)}`}
    {...other}
    onError={
      placeholderSrc
        ? event => {
            // eslint-disable-next-line no-param-reassign
            event.target.src = placeholderSrc;
          }
        : null
    }
  />
);

Image.defaultProps = {
  srcset: '',
  sizes: '',
  placeholderSrc: '',
  inheritedStyles: '',
  loading: 'auto',
  elementLocator: '',
};

export default styled(Image)`
  ${styles};
`;
export { Image as ImageVanilla };

export type { Props as ImageProps };
