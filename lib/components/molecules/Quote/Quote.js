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
    <div {...otherProps} className={classnames('quote-wrap', className)}>
      <div className="quote__mark">&rdquo;</div>
      <blockquote className="quote__content" cite={contentSrc}>
        <p>{content}</p>
        <footer className="quote__author">
          {typeof author !== 'undefined' ? <cite>{author}</cite> : ''}
          {typeof author !== 'undefined' && typeof company !== 'undefined' ? <span>, </span> : ''}
          {typeof company !== 'undefined' ? <cite>{company}</cite> : ''}
        </footer>
      </blockquote>
    </div>
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
