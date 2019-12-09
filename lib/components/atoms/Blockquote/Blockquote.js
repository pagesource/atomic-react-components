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

const Blockquote = ({ className, quoteContentProp, quoteAuthorProp }: Props): Node => (
  <blockquote className={className}>
    <p className="quoteContent">{quoteContentProp}</p>
    <footer className="quoteAuthor">{quoteAuthorProp}</footer>
  </blockquote>
);

Blockquote.defaultProps = {
  quoteContentProp: '',
  author: '',
  className: '',
};

export default styled(Blockquote)`
  ${styles};
`;

export { Blockquote as BlockquoteVanilla };
