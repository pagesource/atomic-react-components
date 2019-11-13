// @flow
import React from 'react';
import type { Node } from 'react';
import styled from 'styled-components';
import classnames from 'classnames';
import styles from './Quote.style';

type Props = {
  className: string,
  children: string | Node,
  contentSrc: string,
  author?: string,
  company?: string,
  authorSeparator?: string,
  quoteIndicator?: String,
};

const Quote = ({
  children,
  contentSrc,
  author,
  company,
  className,
  authorSeparator,
  quoteIndicator,
  ...otherProps
}: Props): Node => {
  return (
    <blockquote {...otherProps} cite={contentSrc} className={classnames('quote-wrap', className)}>
      <div className={classnames('quote__mark', className)}>{quoteIndicator}</div>
      <div className={classnames('quote__content', className)}>{children}</div>
      <footer className={classnames('quote__author', className)}>
        {company !== '' ? <cite>{company}</cite> : ''}
        {author !== '' && company !== '' ? (
          <span>
            {authorSeparator}
            &nbsp;
          </span>
        ) : (
          ''
        )}
        {author !== '' ? <cite>{author}</cite> : ''}
      </footer>
    </blockquote>
  );
};

Quote.defaultProps = {
  author: '',
  company: '',
  authorSeparator: ',',
  quoteIndicator: '"',
};

export default styled(Quote)`
  ${styles};
`;
export { Quote as QuoteVanilla };
