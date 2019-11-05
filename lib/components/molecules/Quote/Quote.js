// @flow
import React from 'react';
import type { Node } from 'react';
import styled from 'styled-components';
import classnames from 'classnames';
import styles from './Quote.style';

type Props = {
  className: string,
  content: string,
  contentSrc: string,
  author?: string,
  company?: string,
};

const Quote = ({ content, contentSrc, author, company, className, ...otherProps }: Props): Node => {
  return (
    <figure {...otherProps} className={classnames('quote-wrap', className)}>
      <span className="quote__mark">&rdquo;</span>
      <blockquote className="quote__content" cite={contentSrc}>
        {content}
      </blockquote>
      <small className="quote__author">
        {typeof author !== 'undefined' ? <cite>{author}</cite> : ''}
        {typeof author !== 'undefined' && typeof company !== 'undefined' ? <span>, </span> : ''}
        {typeof company !== 'undefined' ? <cite>{company}</cite> : ''}
      </small>
    </figure>
  );
};

Quote.defaultProps = {
  author: undefined,
  company: undefined,
};

export default styled(Quote)`
  ${styles};
`;
export { Quote as QuoteVanilla };
