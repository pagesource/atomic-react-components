// @flow
/**
 *
 * QuoteMedia
 *
 */
import React from 'react';
import styled from 'styled-components';
import type { Node } from 'react';
import type { Props } from './types';

import Heading from '../../atoms/Heading/Heading';

import Blockquote from '../../atoms/Blockquote/Blockquote';

import styles from './QuoteMedia.style';

const QuoteMedia = ({ className, title, author, quoteContent, children }: Props): Node => {
  return (
    <div className={className}>
      <Heading HeadingType="h2" className="title">
        {title}
      </Heading>
      <Blockquote className="blockquote">
        <p className="blockquote__content">{quoteContent}</p>
        <footer className="blockquote__author">{author}</footer>
      </Blockquote>
      <div className="media">{children}</div>
    </div>
  );
};

QuoteMedia.defaultProps = {
  author: '',
  contentSrc: '',
  children: '',
};
export default styled(QuoteMedia)`
  ${styles};
`;

export { QuoteMedia as QuoteMediaVanilla };
