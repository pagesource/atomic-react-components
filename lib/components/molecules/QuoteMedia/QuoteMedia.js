// @flow
/**
 *
 * QuoteMedia
 *
 */
import React from 'react';
import styled from 'styled-components';

import type { Node } from 'react';
import styles from './QuoteMedia.style';
import type { Props } from './types';

import Heading from '../../atoms/Heading/Heading';
import Blockquote from '../../atoms/Blockquote/Blockquote';

const QuoteMedia = ({
  className,
  childClassName,
  title,
  author,
  quoteContent,
  children,
}: Props): Node => (
  <div className={className}>
    <Heading HeadingType="h2" className="title">
      {title}
    </Heading>
    <Blockquote className={childClassName} author={author} quoteContent={quoteContent} />
    <div className="media">{children}</div>
  </div>
);

QuoteMedia.defaultProps = {
  author: '',
  quoteContent: '',
  children: '',
};

export default styled(QuoteMedia)`
  ${styles};
`;

export { QuoteMedia as QuoteMediaVanilla };
