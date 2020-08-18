/**
 *
 * QuoteMedia
 *
 */
import React from 'react';
import styled from 'styled-components';
import classnames from 'classnames';

import PropTypes from 'prop-types';
import styles from './QuoteMedia.style';

import Heading from '../../atoms/Heading/Heading';

const QuoteMedia = ({ className, title, quoteContent, HeadingType, children }) => (
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

QuoteMedia.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
  quoteContent: PropTypes.func,
  HeadingType: PropTypes.string,
};

QuoteMedia.defaultProps = {
  className: 'quoteMedia',
  title: 'Anonymous',
  HeadingType: 'h3',
  quoteContent: () => {},
};

const StyledQuoteMedia = styled(QuoteMedia)`
  ${styles};
`;

export default StyledQuoteMedia;

export { QuoteMedia as QuoteMediaVanilla };
