import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { getLabelFromChildren } from '../../../core/utils/elementLocator';
import styles from './Button.style';

const Button = ({
  className,
  children,
  inheritedStyles,
  type,
  primary,
  secondary,
  tertiary,
  variation,
  disabled,
  transparent,
  ariaLabel,
  elementLocator,
  ...others
}) => (
  <button
    {...others}
    aria-label={ariaLabel || null}
    className={className}
    disabled={disabled}
    type={type}
    data-locator={
      elementLocator || (type ? `button-${type}-${getLabelFromChildren(children)}` : '')
    }
    variation={variation}
  >
    {children}
  </button>
);

Button.defaultProps = {
  inheritedStyles: '',
  type: 'button',
  primary: false,
  secondary: false,
  tertiary: false,
  disabled: false,
  variation: '',
  transparent: false,
  ariaLabel: '',
  className: '',
  elementLocator: '',
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  inheritedStyles: PropTypes.string,
  type: PropTypes.string,
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  tertiary: PropTypes.bool,
  disabled: PropTypes.bool,
  variation: PropTypes.string,
  transparent: PropTypes.bool,
  ariaLabel: PropTypes.string,
  elementLocator: PropTypes.string,
};

const StyledButton = styled(Button)`
  ${styles};
`;
export default StyledButton;

export { Button as ButtonVanilla };
