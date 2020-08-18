import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { getLabelFromChildren } from '../../../core/utils/elementLocator';
import styles from './Heading.style';

const Heading = ({
  children,
  className,
  HeadingType = 'h1',
  inheritedStyles,
  elementLocator,
  ...others
}) => (
  <HeadingType
    {...others}
    className={className}
    data-locator={elementLocator || `heading-${HeadingType}-${getLabelFromChildren(children)}`}
  >
    {children}
  </HeadingType>
);

Heading.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string.isRequired,
  HeadingType: PropTypes.string,
  inheritedStyles: PropTypes.string,
  elementLocator: PropTypes.string,
};

Heading.defaultProps = {
  inheritedStyles: '',
  HeadingType: 'h1',
  elementLocator: '',
};

const StyledHeading = styled(Heading)`
  ${styles};
`;
export default StyledHeading;
export { Heading as HeadingVanilla };
