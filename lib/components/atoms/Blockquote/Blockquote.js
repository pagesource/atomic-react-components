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

const Blockquote = ({ className, quoteProp, quoteAuthorProp }: Props): Node => (
  <blockquote className={className}>
    <p className="quoteContent">{quoteProp}</p>
    <footer className="quoteAuthor">{quoteAuthorProp}</footer>
  </blockquote>
);

Blockquote.defaultProps = {
  quoteProp: '',
  author: '',
  className: '',
};

export default styled(Blockquote)`
  ${styles};
`;

export { Blockquote as BlockquoteVanilla };
