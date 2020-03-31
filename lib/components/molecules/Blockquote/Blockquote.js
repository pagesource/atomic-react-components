// @flow
/**
 *
 * Blockquote
 *
 */
import React from 'react';
import styled from 'styled-components';
import classnames from 'classnames';
import type { Node, ComponentType } from 'react';

import styles from './Blockquote.style';
import type { Props } from './types';
import Para from '../../atoms/Para';

const Blockquote = ({ className, quoteContent, quoteAuthor }: Props): Node => (
  <blockquote className={classnames(className)}>
    <Para className="content">{quoteContent}</Para>
    <footer className="author">{quoteAuthor}</footer>
  </blockquote>
);

Blockquote.defaultProps = {
  quoteAuthor: 'Anonymous',
  className: 'blockquote',
};

const StyledBlockquote: ComponentType<Props> = styled(Blockquote)`
  ${styles};
`;

export default StyledBlockquote;

export { Blockquote as BlockquoteVanilla };
