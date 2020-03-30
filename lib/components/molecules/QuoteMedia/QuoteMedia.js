// @flow
/**
 *
 * QuoteMedia
 *
 */
import React from 'react';
import styled from 'styled-components';
import classnames from 'classnames';

import type { Node, ComponentType } from 'react';
import styles from './QuoteMedia.style';
import type { Props } from './types';

import Heading from '../../atoms/Heading/Heading';

const QuoteMedia = ({ className, title, quoteContent, HeadingType, children }: Props): Node => (
  <div className={classnames(className)}>
    {title && (
      <Heading HeadingType={HeadingType} className="title">
        {title}
      </Heading>
    )}
    <div className="container">
      {quoteContent && quoteContent()}
      <div className="media">{children}</div>
    </div>
  </div>
);

QuoteMedia.defaultProps = {
  className: 'quoteMedia',
  title: 'Anonymous',
  variation: 'column',
  HeadingType: 'h3',
};

const StyledQuoteMedia: ComponentType<Props> = styled(QuoteMedia)`
  ${styles};
`;

export default StyledQuoteMedia;

export { QuoteMedia as QuoteMediaVanilla };
