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

const Blockquote = ({ className, quoteContent, quoteAuthor }: Props): Node => (
  <blockquote className={className}>
    <p className="quoteContent">{quoteContent}</p>
    <footer className="quoteAuthor">{quoteAuthor}</footer>
  </blockquote>
);

Blockquote.defaultProps = {
  quoteAuthor: 'Anonymous',
  className: 'blockquote',
};

export default styled(Blockquote)`
  ${styles};
`;

export { Blockquote as BlockquoteVanilla };
