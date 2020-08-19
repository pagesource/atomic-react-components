/**
 *
 * Blockquote
 *
 */
import React from 'react';
import styled from 'styled-components';
import classnames from 'classnames';
import PropTypes from 'prop-types';

import styles from './Blockquote.style';
import Para from '../../atoms/Para';

const Blockquote = ({ className, quoteContent, quoteAuthor }) => (
  <blockquote className={classnames(className)}>
    <Para className="content">{quoteContent}</Para>
    <footer className="author">{quoteAuthor}</footer>
  </blockquote>
);

Blockquote.propTypes = {
  quoteContent: PropTypes.string.isRequired,
  quoteAuthor: PropTypes.string,
  className: PropTypes.string,
};

Blockquote.defaultProps = {
  quoteAuthor: 'Anonymous',
  className: 'blockquote',
};

const StyledBlockquote = styled(Blockquote)`
  ${styles};
`;

export default StyledBlockquote;

export { Blockquote as BlockquoteVanilla };
