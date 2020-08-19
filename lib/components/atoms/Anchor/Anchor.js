import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { buildUrl } from '../../../core/utils/url';
import { getLabelFromChildren } from '../../../core/utils/elementLocator';
import styles from './Anchor.style';

const Anchor = ({
  children,
  to,
  as,
  className,
  elementLocator,
  inheritedStyles,
  handleLinkClick,
  shallow,
  scroll,
  forceClick,
  target,
  ...others
}) => (
  <a
    {...others}
    href={buildUrl(to)}
    className={className}
    onClick={handleLinkClick}
    target={target}
    data-locator={elementLocator || `link-${getLabelFromChildren(children)}`}
  >
    {children}
  </a>
);

Anchor.propTypes = {
  to: PropTypes.string.isRequired,
  as: PropTypes.string,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  elementLocator: PropTypes.string,
  inheritedStyles: PropTypes.string,
  handleLinkClick: PropTypes.func,
  shallow: PropTypes.bool,
  scroll: PropTypes.bool,
  target: PropTypes.oneOf(['', '_self', '_blank', '_parent', '_top']),
  forceClick: PropTypes.bool,
};

Anchor.defaultProps = {
  as: '',
  inheritedStyles: '',
  shallow: false,
  scroll: false,
  forceClick: false,
  className: '',
  elementLocator: '',
  target: '',
  handleLinkClick: () => {},
};

const StyledAnchor = styled(Anchor)`
  ${styles};
`;
export default StyledAnchor;

export { Anchor as AnchorVanilla };
