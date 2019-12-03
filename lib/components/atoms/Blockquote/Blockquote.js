// @flow
/**
 *
 * Blockquote
 *
 */
import React from 'react';
import styled from 'styled-components';

import styles from './Blockquote.style';
import type { Props } from './types';

const Blockquote = ({ className, quoteContent, author }: Props): Node => (
  <blockquote className={className}>
    <p className="content">{quoteContent}</p>
    <footer className="author">{author}</footer>
  </blockquote>
);

Blockquote.defaultProps = {
  quoteContent: '',
  author: '',
  className: '',
};

export default styled(Blockquote)`
  ${styles};
`;

export { Blockquote as BlockquoteVanilla };
