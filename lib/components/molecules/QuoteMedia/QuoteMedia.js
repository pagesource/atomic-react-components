// @flow
/**
 *
 * QuoteMedia
 *
 */
import React from 'react';
import styled from 'styled-components';

import type { Node } from 'react';
import styles from './QuoteMedia.style';
import type { Props } from './types';

import Heading from '../../atoms/Heading/Heading';

const QuoteMedia = ({
  className,
  title,
  quoteContent,
  quoteProp,
  HeadingType,
  children,
}: Props): Node => (
  <div className={className}>
    <Heading HeadingType={HeadingType} className="title">
      {title}
    </Heading>
    <div className={children && quoteProp ? 'col-1-2' : 'col-1'}>
      {quoteProp && quoteContent()}
      {children && <div className="media">{children}</div>}
    </div>
  </div>
);

QuoteMedia.defaultProps = {
  children: Node,
};

export default styled(QuoteMedia)`
  ${styles};
`;

export { QuoteMedia as QuoteMediaVanilla };
